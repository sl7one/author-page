import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import gsap from 'gsap';
import { routes } from 'routes/routes';

export default function Navigation() {
   const refItem = useRef([]);

   useEffect(() => {
      gsap.fromTo(
         refItem.current,
         { y: -50, rotate: -25 },
         { y: 0, duration: 0.65, stagger: 0.2, ease: 'back.out' }
      );
   }, []);

   const items = routes.slice(1).map(({ path, title }) => (
      <li
         key={title}
         ref={(el) => refItem.current.push(el)}
      >
         <NavLink to={path}>{title}</NavLink>
      </li>
   ));
   return (
      <nav>
         <ul>{items}</ul>
      </nav>
   );
}
