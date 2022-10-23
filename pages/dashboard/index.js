import React, { useEffect, useRef, useState } from 'react';
import MainLayout from '../../client_side/components/common/MainLayout';
import ConvertCard from '../../client_side/components/dashboard/ConvertCard';
import PrivateComponent from '../../client_side/components/ProtectedComponents/PrivateComponent';
import useAuthFromCookie from '../../client_side/hooks/useAuthFromCookie';
import dashST from "../../styles/dashboard.module.css";
import NavLink from 'next/link'
import { gttActiveLanguages } from '../../server_side/utils/activeLanguageGttUnOfficial';

const DashboardHome = () => {
    const {user,isUserLoading} = useAuthFromCookie();

    // states
    const [convertCard,setConvertCard] = useState({});
    const [convertCardErrLoad,setConvertCardErrLoad] = useState({isLoading:true,msg:""});
    const [languageCode,setLanguageCode] = useState("");
    const [audioFileType,setAudioFileType] = useState({})

    // references
    const textAreaRef = useRef();

    console.log(convertCard,convertCardErrLoad);
    // load user convert card info
    useEffect(()=>{
        const abortHandler = new AbortController();
        if (user._id) {
            setConvertCardErrLoad(pre=>{
                return {...pre,isLoading:true,msg:""}
            });
            fetch(`/api/v1/convert_card/${user._id}`)
            .then(res=>res.json())
            .then(resData =>{
                if (resData?.data?._id) {
                    // setting languages with code and public name
                    resData.data.package_id.languages =  gttActiveLanguages.filter(storeLang => resData.data.package_id.languages.includes(storeLang.code))
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

    // resize the textarea height automatically
    function auto_grow() {
        textAreaRef.current.style.height = "0px";
        const scrollHeight = textAreaRef.current.scrollHeight;
        textAreaRef.current.style.height = scrollHeight + "px";
    }
    return (
        <MainLayout>
            <PrivateComponent>
                <section className={`d-flex justifyBetween ${dashST.card_fileInfo_container}`}>
                    <div className={`p-7 ${dashST.textInputArea}`}>
                        <h3>Convert your text into audio</h3>
                        <textarea className={`p-6`} onInput={auto_grow} ref={textAreaRef} name="" id="" placeholder='Write or paste your text here'></textarea>
                        <h2>Audio Player Here</h2>
                        <button >Convert to .{audioFileType.extension}</button>:<button >Download .{audioFileType.extension}</button>
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