import React, { useEffect, useRef, useState } from 'react';
import audioST from "./audioplayer.module.css";

const AudioPlayer = () => {
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
    }

    // stop the player when audio ended
    useEffect(() => {
        if (currentTime == duration) {
          togglePlayPause();
          timeTravel(0);
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
        audioProgressbarRef.current.value = audioRef.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlayingFn);
    }
    
    const changePlayerCurrentTime = () =>{
        audioProgressbarRef.current.style.setProperty('--seek-before-width',`${audioProgressbarRef.current.value/duration *100}%`);
        setCurrentTime(audioProgressbarRef.current.value);
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
    }
    const audioSpeedHandler = (speedX) =>{
        audioRef.current.playbackRate = parseFloat(speedX);
    }

    return (
        <div>
            <h1>Cusom My Audio Player</h1>
            <div className={audioST.audioPlayer}>
                <audio 
                    ref={audioRef}
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
                    // controls
                    preload="metadata"
                    onLoadedMetadata={onLoadMetaDataHandler}
                ></audio>
                <button className={audioST.forwardBackward} onClick={backThirtySec}>&lt; 30</button>
                <button className={audioST.playPause} onClick={togglePlayPause}>{isPlaying? "play":"pause"}</button>
                <button className={audioST.forwardBackward} onClick={forwardThirtySec}>&gt; 30</button>

                {/* current time  */}
                <div className={audioST.currentTime}>{calculateAudioTime(currentTime)}</div>

                {/* progress bar  */}
                <div className={audioST.progressbar_wrapper}>
                    <input className={audioST.progressBar} onChange={changeRange} ref={audioProgressbarRef} type="range" defaultValue={'0'}/>
                </div>

                {/* Duration  */}
                <div className={audioST.duration}>{duration && !isNaN(duration) && calculateAudioTime(duration)}</div>

                <div>
                    <input ref={volumeRef} type="range" onChange={audioVolumeHandler} min={0} max={1} step={0.01}/>
                </div>

                <div>
                    {
                        [0.25,0.50,0.75,1,1.25,1.50,1.75,2].map(playSpeed =><p style={{margin:0}} onClick={()=>audioSpeedHandler(playSpeed)} key={playSpeed}>{playSpeed}x</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;