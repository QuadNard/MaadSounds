'use client';


// @ts-ignore
import  useSound  from 'use-sound';
import { Pause, Play, VolumeIcon } from 'lucide-react';
import React, { Suspense, useEffect, useRef, useState } from 'react'
import {HiSpeakerXMark, HiSpeakerWave} from 'react-icons/hi2'
import { FaPlay,  FaPause } from "react-icons/fa";
import usePlayer from '@/hooks/use-player';
import Slider from './Slider';
import { Track } from '@/payload-types';







interface PlayerTrackProps {
  track: string[];
}

const PlayerTrack = ({track}: PlayerTrackProps) => {
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);




    const Icon = isPlaying ?  FaPause:  FaPlay;

    const [play, { pause, sound }] = useSound(
    track[0],
    { 
      volume: volume,
      onplay: () => setIsPlaying(true),
      onend: () => {
        setIsPlaying(false);
      },
      onpause: () => setIsPlaying(false),
      format: ['mp3']
    }
  );

  useEffect(() => {

    sound?.play();

    return () => {
      sound?.unload();
    };
  }, [sound]);


  const handlePlay = () => {
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  };

  const toggleMute = ()=>{
        if(volume === 0){
            setVolume(1)
        }else {
            setVolume(0)
        }
  }
  

  
    return (
 <>
    <div className='flex flex-col mt-3 gap-1 items-center'>
     
    </div>
      <div className='flex w-full items-center justify-center'>
                  <div 
            onClick={handlePlay} 
            className="
            z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-unit-2 rounded-full px-unit-0 !gap-unit-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent text-default-foreground data-[hover=true]:bg-default/40 min-w-unit-10 w-full h-auto data-[hover]:bg-foreground/10
            "
          >
            <Icon size={30} className="text-white" />
          </div>
      </div>
              <div className="hidden md:flex w-full justify-end pr-2">
            <div className="flex items-center gap-x-2 w-[120px]">
                <VolumeIcon onClick={toggleMute} className="cursor-pointer" size={30} />
                <Slider   value={volume} onChange={(value)=> setVolume(value)}  />
            </div>
        </div>
 </>
  )

}

export default PlayerTrack;
