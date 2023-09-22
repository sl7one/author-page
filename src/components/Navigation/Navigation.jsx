import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import gsap from 'gsap';
import useMedia from 'hooks/useMedia';
import { routes } from 'routes/routes';
import { NavigationBox } from 'styles/styled';

export default function Navigation() {
   const refItem = useRef([]);
   const { isDesktop } = useMedia();

   useEffect(() => {
      if (isDesktop) {
         gsap.fromTo(
            refItem.current,
            { y: -50, rotate: -25 },
            { y: 0, duration: 0.65, stagger: 0.2, ease: 'back.out' }
         );
         return;
      }

      gsap.to(refItem.current[0], { x: 80, rotate: -25 });
      gsap.to(refItem.current[1], { x: 20, rotate: -25 });
      gsap.to(refItem.current[2], { x: 20, rotate: -25 });
      gsap.to(refItem.current[3], { x: 80, rotate: -25 });
   }, [isDesktop]);

   const items = routes.slice(1).map(({ path, title }) => (
      <li
         key={title}
         ref={(el) => refItem.current.push(el)}
      >
         <NavLink to={path}>{title}</NavLink>
      </li>
   ));

   return (
      <NavigationBox isDesktop={isDesktop}>
         <ul>{items}</ul>
      </NavigationBox>
   );
}
