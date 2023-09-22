import React, { useEffect, useRef, useState } from 'react';

import Navigation from 'components/Navigation/Navigation';
import gsap from 'gsap';
import { BurgerBtn, BurgerCircle, BurgerLine } from 'styles/styled';

export default function BurgerMenu() {
   const [isOpen, setIsOpen] = useState(false);
   const refLines = useRef([]);
   const refCircle = useRef(null);

   useEffect(() => {
      if (isOpen) {
         gsap.to(refLines.current[0], { rotate: 45, x: '0', y: 9.5 });
         gsap.to(refLines.current[1], { opacity: 0 });
         gsap.to(refLines.current[2], { rotate: -45, x: '0', y: -9.5 });
         gsap.to(refCircle.current, { opacity: 1, scale: 1, rotate: 0 });
      } else {
         gsap.to(refLines.current[0], { rotate: 0, x: 0, y: 0 });
         gsap.to(refLines.current[1], { opacity: 1 });
         gsap.to(refLines.current[2], { rotate: 0, x: 0, y: 0 });
         gsap.to(refCircle.current, {
            opacity: 0,
            scale: 0,
            rotate: 180,
         });
      }
   }, [isOpen]);

   const onClick = () => {
      setIsOpen((prev) => !prev);
   };
   return (
      <>
         <BurgerBtn>
            <button
               type="button"
               id="menu-bar"
               onClick={onClick}
            >
               <BurgerLine ref={(el) => refLines.current.push(el)}></BurgerLine>
               <BurgerLine ref={(el) => refLines.current.push(el)}></BurgerLine>
               <BurgerLine ref={(el) => refLines.current.push(el)}></BurgerLine>
            </button>

            <BurgerCircle ref={refCircle}>
               <Navigation />
            </BurgerCircle>
         </BurgerBtn>
      </>
   );
}
