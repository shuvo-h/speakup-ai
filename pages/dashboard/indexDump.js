import NavLink from "next/link";
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import DashboardLayout from '../../clientSide/components/common/DashboardLayout';
import AudioPlayer from '../../clientSide/components/dashboard/AudioPlayer';
import useAuthFromCookie from '../../clientSide/hooks/useAuthFromCookie';
import { gttActiveLanguages } from '../../server_side/utils/activeLanguageGttUnOfficial';

const dashboard_MetaInfo = {
    title: "Dashboard/SpeakUp-AI",
    description: "Convert your text to audio file using SpeakUp-AI",
}

const audioTypes = [
    {extension:"mp3",mime:"audio/mpeg"},
    {extension:"ogg",mime:"audio/ogg"},
    {extension:"wav",mime:"audio/x-wav"},
    {extension:"m4a",mime:"audio/mp4"},
]
const Order = () => {
    const router = useRouter();
    const {user,isUserLoading} = useAuthFromCookie();
    const [audioFile,setAudioFile] = useState("")
    const [audioFileType,setAudioFileType] = useState(audioTypes[0])
    const [textForAudio,setTextForAudio] = useState("");
    const [languageCode,setLanguageCode] = useState("en-us");

    const handleConvert = () =>{
        if (!textForAudio) {
            alert("Text is required!")
            return;
        }
        fetch(`${envInfo.BACKEND_BASE_URI}/api/v1/audio/convert`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({text:textForAudio,lang:languageCode})
        })
        .then(res=>res.blob())
        .then(data=>{
            console.log(data);
            // const file = new File([data],'testAudio.mp3',{type:"audio/mpeg"})
            // const file = new File([data],`testAudio.${audioFileType.extension}`,{type:audioFileType.mime})
            const file = new File([data],`testAudio`,{type:audioFileType.mime,created:"ABC production"})
            console.log(file);
            const reader = new FileReader();
            reader.onload = function(e){
                const audUrl = e.target.result;
                setAudioFile(audUrl);
                // console.log(audUrl);
            };
            reader.readAsDataURL(file)
        })
    }

    if (true) {
        return <NavLink href={"/dashboard"} passHref={true}><a>Go toDahsboard</a></NavLink>
    }
    if (isUserLoading) {return <div><h2>Loading..........</h2></div>}
    if (!user?.token) {router.push({pathname:"/login"});}
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


                <section style={{border:"1px solid", padding:"1rem", margin:"auto 10%"}}>
                    <AudioPlayer></AudioPlayer>
                </section>


                <div>
                    {/* language should come from user packages, not all from static file */}
                    {
                        gttActiveLanguages.map(language => <button style={{backgroundColor: languageCode === language.code ? "green":"skyblue"}} onClick={()=>setLanguageCode(language.code)} key={language.code}>{language.lang}</button>)
                    }
                </div>
                <div>
                    {
                        audioTypes.map(audType => <button style={{backgroundColor: audioFileType.extension === audType.extension ? "green":"skyblue"}} onClick={()=>setAudioFileType(audType)} key={audType.extension}>{audType.extension}</button>)
                    }
                </div>
            </div>

            <button onClick={handleConvert}>Convert</button>
            
        </DashboardLayout>
    );
};

export default Order;