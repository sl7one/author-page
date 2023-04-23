import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

export const GSAPWrapper = ({ children }) => {
   const ref = useRef();
   useEffect(() => {
      gsap.to(ref.current, { y: 100, opacity: 1, ease: 'back.out', duration: 0.65 });
   }, []);
   return <div ref={ref}>{children}</div>;
};
