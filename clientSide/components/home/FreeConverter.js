import React, { useEffect, useRef, useState } from 'react';
import homeST from "../../../styles/Home.module.css";
import { gttActiveLanguages } from '../../../server_side/utils/activeLanguageGttUnOfficial';
import { freeCharacterLimit } from '../../staticData/audioConvertData';
import { envInfo } from '../../../server_side/utils/envInitializer';
import { downloadBlobToAudio } from '../../utils/fileSystem/downloadFile';
import LoaderRotateBall from '../Loaders/LoaderRotateBall/LoaderRotateBall';

const FreeConverter = () => {
    const [freeAudio,setFreeAudio] = useState(null);
    const [convertErr,setConvertErr] = useState("");
    const [isConvertLoading,setIsConvertLoading] = useState(false);
    const [languageCode,setLanguageCode] = useState(gttActiveLanguages.find(gtt=>gtt.code === 'en-us')?.code);
    const [ipInfo,setIpInfo] = useState({});
    const [commonErr,setCommonErr] = useState("");
    // const [IpInfoErr,setIpInfoErr] = useState("");
    const textAreaRef = useRef();

    const convertHandler = () =>{
        const text = textAreaRef.current.value;
        if (!text) {
            return setConvertErr("Text is required!")
        }
        if (ipInfo?.characters_used && ipInfo?.characters_used > freeCharacterLimit) {
            return setConvertErr("You have reached your character for today!")
        }

        // clear the states
        setIsConvertLoading(true);
        setConvertErr("");
        setFreeAudio(null);
        
        // convert the audio
        fetch(`${envInfo.BACKEND_BASE_URI}/api/v1/audio/free_convert`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify({text,lang:languageCode})
        })
        .then(res =>{
            
            if (res.status === 200) {
                return res.blob();
            }else{
                return res.json();
            }
        })
        .then(data=>{
            console.log(data);
            if (data.error) {
                setConvertErr(data.message);
            }else{
                // read and set the audio file to state
                const audFile = new File([data],"speakup_AI",{type:"audio/mpeg"});
                // console.log(audFile);
                const fileReader = new FileReader();
                fileReader.onload = function(e){
                    const audFileUrl = e.target.result;
                    setFreeAudio(audFileUrl);
                    setIpInfo(pre=>{
                        pre.characters_used = pre?.characters_used ?? 0;
                        return {...pre,characters_used:pre.characters_used+text.length}
                    })
                }
                fileReader.readAsDataURL(audFile);
                // update the character limit per day by IP
            }
            setIsConvertLoading(false);
        })
        .catch(err=>{
            console.log(err);
            setConvertErr(err.message);
            setIsConvertLoading(false);
        })
    }

    useEffect(()=>{
        const abortController = new AbortController();
        fetch(`${envInfo.BACKEND_BASE_URI}/api/v1/free`,{signal:abortController.signal})
        .then(res=>res.json())
        .then(data=>{
            if (!data.error) {
                setIpInfo(data.data ?? {})
            }else{
                setCommonErr(data.message);
            }
            console.log(data);
        }).catch(err=>{
            console.log(err);
        })
        return ()=>abortController.abort()
    },[])

    const clearForNewConvert = () =>{
        // clear error, textarea, audio
        setConvertErr("");
        setFreeAudio("");
        textAreaRef.current.value = "";
    }
    
    return (
        <div className={homeST.freeConvertContainer}>
            <textarea ref={textAreaRef} name="" id="" ></textarea>
            <div className={homeST.textareStatusMsg}>
                <p className={`m-0 color-danger`}>{commonErr ? commonErr : convertErr} </p>
                <p className={`m-0`}>{ipInfo?.characters_used ?? 0} of {freeCharacterLimit} characters used</p>
            </div>
            <div className={`d-flex alignCenter ${homeST.convertControl}`}>
                <div>
                    <select onChange={(e)=>setLanguageCode(e.target.value)} name="" id="" defaultValue={languageCode}>
                        {
                            gttActiveLanguages.map(lang=><option value={lang.code} key={lang.code}>{lang.lang}</option>)
                        }
                    </select>
                </div>
                <div>
                    <audio src={freeAudio} controls></audio>
                </div>
                {
                    isConvertLoading 
                    ? <div > <LoaderRotateBall></LoaderRotateBall> </div>
                    : <div className={homeST.freeControlBtns}>
                        {
                            freeAudio
                            ? <button  onClick={clearForNewConvert}>Convert New Text</button>
                            : <button onClick={convertHandler}>Convert</button>
                        }
                        {freeAudio && <button  onClick={()=>downloadBlobToAudio(freeAudio,`SpeakUP-AI_${Date.now()}`)}>Download</button>}
                    </div>
                }
                

            </div>
            
            
        </div>
    );
};

export default FreeConverter;