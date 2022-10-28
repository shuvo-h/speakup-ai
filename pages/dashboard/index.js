import NavLink from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import MainLayout from '../../clientSide/components/common/MainLayout';
import AudioPlayer from '../../clientSide/components/dashboard/AudioPlayer';
import ConvertCard from '../../clientSide/components/dashboard/ConvertCard';
import LoaderDownload from '../../clientSide/components/Loaders/LoaderDownload/LoaderDownload';
import LoaderWeather from '../../clientSide/components/Loaders/LoaderWeather/LoaderWeather';
import PrivateComponent from '../../clientSide/components/ProtectedComponents/PrivateComponent';
import useAuthFromCookie from '../../clientSide/hooks/useAuthFromCookie';
import { downloadBlobToAudio } from '../../clientSide/utils/fileSystem/downloadFile';
import { gttActiveLanguages } from '../../server_side/utils/activeLanguageGttUnOfficial';
import { envInfo } from '../../server_side/utils/envInitializer';
import dashST from "../../styles/dashboard.module.css";

const DashboardHome = () => {
    const {user,isUserLoading} = useAuthFromCookie();

    // states
    const [convertCard,setConvertCard] = useState({});
    const [convertCardErrLoad,setConvertCardErrLoad] = useState({isLoading:true,msg:""});
    const [languageCode,setLanguageCode] = useState("");
    const [audioFileType,setAudioFileType] = useState({});
    const [audioFile,setAudioFile] = useState("");
    const [audioConverting,setAudioConverting] = useState(false);
    const [audioConvertErr,setAudioConvertErr] = useState("");

    // references
    const textAreaRef = useRef();

    // load user convert card info
    useEffect(()=>{
        const abortHandler = new AbortController();
        if (user._id) {
            setConvertCardErrLoad(pre=>{
                return {...pre,isLoading:true,msg:""}
            });
            fetch(`${envInfo.BACKEND_BASE_URI}/api/v1/convert_card/${user._id}`)
            .then(res=>res.json())
            .then(resData =>{
                console.log(resData.data.package_id);
                if (resData?.data?._id) {
                    // setting languages with code and public name
                    resData.data.package_id.languages =  gttActiveLanguages.filter(storeLang => resData.data.package_id.languages.includes(storeLang.code))
                    console.log(resData.data.package_id.languages);
                    setConvertCard(resData.data);
                    setLanguageCode(resData.data.package_id.languages[0]?.code);
                    setAudioFileType(resData.data.package_id.fileTypes[0])
                }else{
                    // error
                    setConvertCardErrLoad(pre=>{
                        return {...pre,msg:resData.message??"Error occured in sesrver to find status"}
                    });
                }
            })
            .catch(err =>{
                console.log(err);
                setConvertCardErrLoad(pre=>{
                    return {...pre,msg:err.message??"Error occured to fetch card status"}
                });
            })
            .finally(()=>{
                setConvertCardErrLoad(pre=>{
                    return {...pre,isLoading:false}
                });
            })
        }

        return () => abortHandler.abort()
    },[user._id])

    // convert the audio
    const handleAudioConvert = () =>{
        // check everything with card to get direct blob response
        // is card active
        if (convertCard.card_status !== 'active') {
            setAudioConvertErr(`Your card status is ${convertCard.card_status}`);
            return;
        }
        // is request limit exceed for today
        const isToday = new Date(convertCard.req_per_day_reamining?.today).toISOString().split("T")[0] === new Date().toISOString().split("T")[0];
        if ( isToday && convertCard.req_per_day_reamining.req_reamining <= 0) {
            setAudioConvertErr(`You have reached the maximum convet request for today. Please wait for next day!`);
            return;
        }

        // check for character limit for this request
        const textForAudio = textAreaRef.current.value;
        if (convertCard.character_limit_per_req < textForAudio.length) {
            setAudioConvertErr(`Convert is limited upto ${convertCard.character_limit_per_req} characters`);
            return;
        }
        // check for character limit remaining
        if (convertCard.character_limit_reamining < textForAudio.length) {
            setAudioConvertErr(`Your package limit has finished. Please purchase a new package or if you are a yearly subscriber, please wait until next month to renew your package.`);
            return;
        }

        // check for language code and text to convert available
        
        if (!textForAudio || !languageCode) {
            setAudioConverting(false);
            setAudioConvertErr("Text and Language are required!");
            return;
        }
        if (!user.token || !convertCard._id) {
            setAudioConvertErr("Authentication and Card id are required!");
            return;
        }


        // clear all the states
        setAudioFile("");
        setAudioConverting(true);
        setAudioConvertErr("");

        // everything lookg like okay! now go for convert
        fetch(`${envInfo.BACKEND_BASE_URI}/api/v1/audio/convert?convertCard_id=${convertCard._id}`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
                "authorization":`Bearer ${user.token}`
            },
            body:JSON.stringify({text:textForAudio,lang:languageCode})
        })
        .then(res=>{
            if (res.status<300) {
                return res.blob()
            }else{
                return res.json()
            }
        })
        .then(data=>{
            // console.log(data);
            if (data.error) {
                // it is an error, show the message
                setAudioConvertErr(data.message??"Failed to convert the audio.")
            }else{
                // const file = new File([data],'testAudio.mp3',{type:"audio/mpeg"})
                const file = new File([data],`testAudio`,{type:audioFileType.mime,created:"SpeakUP-AI"})
                // console.log(file);
                const reader = new FileReader();
                reader.onload = function(e){
                    const audUrl = e.target.result;
                    setAudioFile(audUrl);
                };
                reader.readAsDataURL(file);
                // update the card status limit
                setConvertCard(pre=>{
                    const temp = {...pre}
                    const reaminingReq = temp.req_per_day_reamining.req_reamining > 0 ? temp.req_per_day_reamining.req_reamining - 1 : 0;
                    temp.req_per_day_reamining = {...temp.req_per_day_reamining,req_reamining:reaminingReq}
                    temp.file_count = temp.file_count + 1;
                    temp.size = temp.size + file.size/(1024*1024);
                    temp.character_limit_reamining = temp.character_limit_reamining - textForAudio.length;
                    return temp;
                })
            }
            setAudioConverting(false);
        }).catch(err=>{
            console.log(err);
            setAudioConverting(false);
            setAudioConvertErr(err.message??"Error occured to convert the audio")
        })
        
    }

    // chear the fields to prepare for another new convert process
    const anotherConverthandler = () =>{
        setAudioFile("");
        textAreaRef.current.value = "";
    }
    // resize the textarea height automatically
    function auto_grow() {
        textAreaRef.current.style.height = "0px";
        const scrollHeight = textAreaRef.current.scrollHeight;
        textAreaRef.current.style.height = scrollHeight + "px";
    }
    const [charCount,setCharCount] = useState(0);
console.log(convertCard);
    return (
        <MainLayout>
            <PrivateComponent>
                
                <section className={`d-flex justifyBetween ${dashST.card_fileInfo_container}`}>
                    <div className={`p-7 ${dashST.textInputArea}`}>
                        <h3 className={`text-center`}>Convert Your Text into Audio</h3>
                        <textarea className={`p-6`} onInput={auto_grow} ref={textAreaRef} onChange={(e)=> setCharCount(e.target.value.length)} name="" id="" placeholder='Write or paste your text here'></textarea>
                        <p style={{textAlign:"right",color:convertCard.character_limit_per_req < charCount ? "red" : "#fff"}}>{charCount}/{convertCard.character_limit_per_req} characters</p>
                        <div>
                            {
                                audioFile && <AudioPlayer audioFileDataURl={audioFile}></AudioPlayer>
                            }
                        </div>
                        
                        {/* loading or not -> audio has or not */}

                        {
                            audioConverting && <div style={{width:"fit-content",margin:"auto"}}><LoaderWeather></LoaderWeather></div>
                        }
                        {/* show error message during converting  */}
                        {audioConvertErr && <p style={{color:"red", textAlign:"center"}}>{audioConvertErr}</p>}
                        {
                            !audioConverting && !audioFile && audioFileType?.extension && <button onClick={handleAudioConvert}>Convert to .{audioFileType?.extension}</button>
                        }
                        {
                            // audioFile && <button onClick={()=>downloadBlobToAudio(audioFile,`SpeakUP-AI_${Date.now()}`)}>Download .{audioFileType.extension}</button>
                            audioFile && <button onClick={()=>downloadBlobToAudio(audioFile,`SpeakUP-AI_${Date.now()}`)}> <LoaderDownload /> </button>
                        }
                        {
                            audioFile &&  <button onClick={anotherConverthandler}>Convert Another Text</button>
                        }
                    </div>
                    <aside>
                        {/* show convert card based on loading, error and successfull data available */}
                        <div className={`p-7 ${dashST.user_status_card}`}>
                            {convertCardErrLoad.isLoading && <p>Loading <span style={{fontSize:"1.5rem", color:"peru"}}>{user.name}</span>&apos;s Card.....</p>}
                            {
                                convertCard._id && !convertCardErrLoad.isLoading 
                                    ? <ConvertCard convertCard={convertCard} user={user}></ConvertCard>
                                    : <div className={`d-flex justifyCenter alignCenter ${dashST.convert_card_buy_btn} ${dashST.convert_card_buy_btn_flip}`}>
                                            <NavLink href={'/pricing'} passHref={true}><a className='p-4'>Buy a package now</a></NavLink>
                                        </div>
                            }
                        </div>
                        <div>
                            <div className={`${dashST.side_part} ${dashST.language_list}`}>
                                <h4 className={`m-4`}>Choose Languages</h4>
                                <select name="" id="" onChange={(e)=>setLanguageCode(e.target.value)}>
                                    {
                                        convertCard.package_id?.languages?.map(language => <option 
                                            value={language.code} 
                                            key={language.code}
                                        >{language.lang}</option>)
                                    }
                                </select>
                            </div>
                            <div className={`${dashST.side_part} ${dashST.file_types}`}>
                                <h4 className={`m-4`}>Choose File Type</h4>
                                {
                                    convertCard.package_id?.fileTypes.map(audType => <button 
                                        
                                        style={{backgroundColor: audioFileType.extension === audType.extension ? "var(--active-fileType_bg)":"var(--inActive-fileType_bg)"}} 
                                        // style={{backgroundColor: audioFileType.extension === audType.extension ? "green":"skyblue"}} 
                                        onClick={()=>setAudioFileType(audType)} 
                                        key={audType.extension}
                                    >{audType.extension}</button>)
                                }
                            </div>
                        </div>
                    </aside>
                </section>
            </PrivateComponent>
        </MainLayout>
    );
};

export default DashboardHome;

/*
    1. account status: available char limit, req limit
    2. total convert file, size
*/