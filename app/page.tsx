import React from 'react';
import ThreeBackground from '@/components/starCanvas';
import XBio from '@/components/xBio';
import HeaderMenu from '@/components/headerMenu';

export default function Home() {
  return (
    <div className="relative w-full min-h-dvh">
      <div className="absolute w-full h-full left-0 z-0 -mt-24 sm:-mt-0">
        <ThreeBackground />
      </div>
      <div className="relative w-full flex flex-col items-center pt-10 pb-10">
        <div className="w-full max-w-80 xs:max-w-lg sm:max-w-xl md:max-w-2xl">
          <HeaderMenu /> 
        </div>
        <div className="top-div-spacer" />
        <div className="relative z-10 max-w-80 xs:max-w-lg sm:max-w-xl md:max-w-2xl">
          <XBio />
        </div>
        <div className="relative mt-10 lg:max-w-3xl sm:max-w-xl max-w-sm w-11/12 md:w-full">
          <p className="text-fore text-2xl">
            <span className="font-bold">Welcome to my website! </span>
            I use this space to write and share about my research, personal projects, and related quests.
          </p>
        </div>
        <div className="relative mt-10 lg:max-w-3xl sm:max-w-xl max-w-sm w-11/12 md:w-full flex flex-col">
          <p className="text-fore font-bold text-2xl">Currently</p>
          <ul className="list-disc list-inside">
            <li className="text-fore text-xl">Wrapping up my first project in the HaptiX lab</li>
            <li className="text-fore text-xl">Teaching a class on experimental unmanned aerial systems (UAS)</li>
            <li className="text-fore text-xl">Building AWS and TypeScript savvy</li>
            <li className="text-fore text-xl">Working on my amateur rocket organization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
