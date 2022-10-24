import React, { useEffect, useRef, useState } from 'react';
import audioST from "./audioplayer.module.css";
import { BackwardIcon, ForwardIcon, PauseIcon, PlayIcon } from './playerIcons';

const AudioPlayer = ({audioFileDataURl}) => {
    // states 
    const [isPlaying,setIsPlaying] = useState(false);
    const [duration,setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    // references 
    const audioRef = useRef();
    const audioProgressbarRef = useRef();
    const animationRef = useRef();
    const volumeRef = useRef();


    useEffect(()=>{
        // const seconds = Math.floor(audioRef.current.duration);
        // setDuration(seconds);
        // audioProgressbarRef.current.max = seconds;
    },[audioRef.current?.loadedmetadata, audioRef.current?.readyState])
    // using onLoadMetaData function to call and set the max duration of the audio file
    const onLoadMetaDataHandler = () =>{
        const seconds = Math.floor(audioRef.current.duration);
        setDuration(seconds);
        audioProgressbarRef.current.max = seconds;
        // set the volume as middle
        audioRef.current.volume = 0.5;
        volumeRef.current.value = 0.5;
    }

    // stop the player when audio ended
    useEffect(() => {
        console.log(typeof Number(currentTime) , typeof Number(duration));
        if (Number(currentTime) === Number(duration)) {
            // wait 1 sec to stop the player and set the current duration at start point as 0
            setTimeout(()=>{
                togglePlayPause();
                timeTravel(0);
            },700)
        }
    }, [currentTime]);

    
    const calculateAudioTime = (durationInSeconds) =>{
        const minutes = Math.floor(durationInSeconds / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(durationInSeconds % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`
    }
    const changeRange = () =>{
        audioRef.current.currentTime = audioProgressbarRef.current.value;
        changePlayerCurrentTime();
    }

    const togglePlayPause = () =>{
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioRef.current?.play();
            audioRef.current.playbackRate = 1.0; // 0 to 10; 0.25x to 2x
            animationRef.current = requestAnimationFrame(whilePlayingFn);
        }else{
            audioRef.current.pause();
            cancelAnimationFrame(whilePlayingFn)
        }
    }
    const whilePlayingFn = () =>{
        if (audioProgressbarRef.current) {
            audioProgressbarRef.current.value = audioRef.current?.currentTime;
        }
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlayingFn);
    }
    
    const changePlayerCurrentTime = () =>{
        if (audioProgressbarRef.current) {
            audioProgressbarRef.current.style.setProperty('--seek-before-width',`${audioProgressbarRef.current.value/duration *100}%`);
            setCurrentTime(audioProgressbarRef.current.value);
        }
    }

    const backThirtySec = () =>{
        timeTravel(Number(audioProgressbarRef.current.value) - 30);
    }
    const forwardThirtySec = () =>{
        timeTravel(Number(audioProgressbarRef.current.value) + 30);

    }

    const timeTravel = (newTime) => {
        audioProgressbarRef.current.value = newTime;
        changeRange();
    }

    const audioVolumeHandler = () =>{
        audioRef.current.volume = volumeRef.current.value;
        console.log(volumeRef.current.value);
    }
    const audioSpeedHandler = (speedX) =>{
        audioRef.current.playbackRate = parseFloat(speedX);
    }

    return (
        <div>
            {/* <h1>Cusom My Audio Player</h1> */}
            <div className={audioST.audioPlayer} style={{backgroundImage: audioRef.current?.paused ? "" :"var(--playing_bg)"}}>
                <audio 
                    ref={audioRef}
                    // src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
                    src={audioFileDataURl??""}
                    // controls
                    preload="metadata"
                    onLoadedMetadata={onLoadMetaDataHandler}
                ></audio>
                <button className={audioST.forwardBackward} onClick={backThirtySec}> <BackwardIcon width={35}  height={35} /> </button>
                <button className={audioST.playPause} onClick={togglePlayPause}>{isPlaying? <PlayIcon width={35} height={35} /> : <PauseIcon width={40} height={40} /> }</button>
                <button className={audioST.forwardBackward} onClick={forwardThirtySec}> <ForwardIcon width={35}  height={35} /></button>

                {/* current time  */}
                <div className={audioST.currentTime}>{calculateAudioTime(currentTime)}</div>

                {/* progress bar  */}
                <div className={audioST.progressbar_wrapper}>
                    <input className={audioST.progressBar} onChange={changeRange} ref={audioProgressbarRef} type="range" defaultValue={'0'}/>
                </div>

                {/* Duration  */}
                <div className={audioST.duration}>{duration && !isNaN(duration) && calculateAudioTime(duration)}</div>
                
                {/* volume control  */}
                <div>
                    {/* <input className={audioST.volume} ref={volumeRef} type="range" onChange={audioVolumeHandler} min={0} max={1} step={0.01}/> */}
                    <input className={audioST.volume} ref={volumeRef} type="range" onChange={audioVolumeHandler} min={0} max={1} step={0.01}/>
                </div>

                {/* play speed control  */}
                <div>
                    {
                        // [0.25,0.50,0.75,1,1.25,1.50,1.75,2].map(playSpeed =><p style={{margin:0}} onClick={()=>audioSpeedHandler(playSpeed)} key={playSpeed}>{playSpeed}x</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;