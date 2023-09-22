import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import sound from '../../assets/sounds/flores.mp3';

export default function Audio() {
   const refAudio = useRef();
   const { pathname } = useLocation();

   useEffect(() => {
      if (pathname === '/') return;
      const sound = refAudio.current;
      sound.currentTime = 0;
      sound.play();
      return () => sound.pause();
   }, [pathname]);

   return (
      <audio
         src={sound}
         ref={refAudio}
      ></audio>
   );
}
