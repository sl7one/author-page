import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

export const GSAPWrapper = ({ children }) => {
   const ref = useRef();
   useEffect(() => {
      gsap.from(ref.current, { y: -100, opacity: 0, ease: 'back.out', duration: 0.65 });
   }, []);
   return (
      <div
         style={{ height: '100%' }}
         ref={ref}
      >
         {children}
      </div>
   );
};
