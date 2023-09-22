import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import gsap from 'gsap';

import { contactsLinks } from './contactsLinks';

export default function ContactsList() {
   const ref = useRef([]);
   useEffect(() => {
      gsap.fromTo(
         ref.current,
         { y: -25 },
         {
            y: 0,
            duration: 0.35,
            stagger: 0.15,
            ease: 'back.out',
         }
      );
   }, []);

   const items = contactsLinks.map(({ link, label }) => (
      <li
         key={label}
         ref={(item) => ref.current.push(item)}
      >
         <Link href={link}>{label}</Link>
      </li>
   ));
   return <ul>{items}</ul>;
}
