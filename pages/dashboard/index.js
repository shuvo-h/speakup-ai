import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getUserFromCookie } from '../../client_side/utils/userUtils';
import DashboardLayout from '../../client_side/components/common/DashboardLayout';
import { addInStateObj } from '../../client_side/utils/reactUtils/stateSetter';
import { gttActiveLanguages } from '../../client_side/utils/activeLanguageGttUnOfficial';

const dashboard_MetaInfo = {
    title: "Dashboard/SpeakUp-AI",
    description: "Convert your text to audio file using SpeakUp-AI",
}

const Order = () => {
    const router = useRouter();
    const user = getUserFromCookie();
    const [audioFile,setAudioFile] = useState("")
    const [textForAudio,setTextForAudio] = useState("");
    const [languageCode,setLanguageCode] = useState("en-us");

    if (typeof window !== 'undefined' && !user?.token) {
        router.push({pathname:"/login"});
    }
    
    useEffect(()=>{
        if (!user?.token) {
            return <div><h2>Loading.</h2></div>
        }
    },[])

    const handleConvert = () =>{
        if (!textForAudio) {
            alert("Text is required!")
            return;
        }
        fetch('/api/v1/audio/convert',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({text:textForAudio,lang:languageCode})
        })
        .then(res=>res.blob())
        .then(data=>{
            console.log(data);
            
            const file = new File([data],'testAudio.mp3',{type:"audio/mpeg"})
            
            const reader = new FileReader();
            reader.onload = function(e){
                const audUrl = e.target.result;
                setAudioFile(audUrl);
                // console.log(audUrl);
            };
            reader.readAsDataURL(file)
        })
    }

    return (
        <DashboardLayout metaInfo={dashboard_MetaInfo}>
            <nav>Dashboard Nav</nav>
            <div>
                <div>
                    <textarea onChange={e=>setTextForAudio(e.target.value)} name="" id="" cols="100" rows="10" required></textarea>
                </div>
                <audio controls src={audioFile}>
                    Your browser does not support the audio element.
                </audio>
                <div>
                    {
                        gttActiveLanguages.map(language => <button style={{backgroundColor: languageCode === language.code ? "green":"skyblue"}} onClick={()=>setLanguageCode(language.code)} key={language.code}>{language.lang}</button>)
                    }
                </div>
            </div>

            <button onClick={handleConvert}>Convert</button>
        </DashboardLayout>
    );
};

export default Order;