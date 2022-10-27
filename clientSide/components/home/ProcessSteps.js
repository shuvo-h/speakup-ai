import React from 'react';
import { DownloadIcon, MicrophoneIcon, TextWriteIcon, } from '../../utils/Icons/IconRightMark';
import homeST from "../../../styles/Home.module.css";


const processSteps = [
    {
      step: 1, 
      title: "INPUT TEXT-TO-SPEECH",
      description:"Customize your speech with pitch and voice speed controls. Make your speech faster or slower, take control of voice volume.",
      icon: <MicrophoneIcon width={70} height={70}></MicrophoneIcon>,
    },
    {
      step: 2, 
      title: "SELECT LANGUAGE & VOICE",
      description:"Select the language and the reader you need to convert text to mp3. Adjust volume, voice speed, your way.",
      icon: <TextWriteIcon width={70} height={70}></TextWriteIcon>,
    },
    {
      step: 3, 
      title: "CONVERT & LISTEN",
      description:"Press the convert button and and listening by playing the converted speech after completing the convert process.",
      icon: <TextWriteIcon width={70} height={70}></TextWriteIcon>,
    },
    {
      step: 4, 
      title: "DOWNLOAD FILE",
      description:"The text-to-speech conversion process is very quick, the result will be mp3 format. You can start downloading for your work.",
      icon: <DownloadIcon width={70} height={70}></DownloadIcon>,
    },
  ]
  

const ProcessSteps = () => {
    return (
        <div className={homeST.stepCardContainer}>
            <h1 className={homeST.subTitle}>How to works with SpeakUP-AI?</h1>
            
            <div className={homeST.stepCards}>
                {
                    processSteps.map(stepInfo => <div className={`text-center ${homeST.stepCard}`} key={stepInfo.step}>
                        <h2>Step {stepInfo.step}</h2>
                        <div>{stepInfo.icon}</div>
                        <h2>{stepInfo.title}</h2>
                        <p>{stepInfo.description}</p>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default ProcessSteps;