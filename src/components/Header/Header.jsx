import { useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { gsap } from 'gsap';
import { routes } from 'routes/routes';
import { Container, HeaderBox, LampButton } from 'styles/styled';

import icons from '../../assets/icons/lamp.svg';
import soundOnClick from '../../assets/sounds/flores.mp3';

export const Header = ({ themeSwitcher, flag }) => {
   const refAudio = useRef();
   const refItem = useRef([]);
   const { pathname } = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      gsap.fromTo(
         refItem.current,
         { y: -50, rotate: -25 },
         { y: 0, duration: 0.65, stagger: 0.2, ease: 'back.out' }
      );
   }, []);

   useEffect(() => {
      if (pathname === '/') navigate('/about');
   }, [navigate, pathname]);

   const onClick = () => {
      refAudio.current.play();
   };

   const items = routes.slice(1).map(({ path, title }) => (
      <li
         key={title}
         ref={(el) => refItem.current.push(el)}
      >
         <NavLink
            onClick={onClick}
            to={path}
         >
            {title}
         </NavLink>
      </li>
   ));

   return (
      <HeaderBox>
         <Container>
            <LampButton
               type="click"
               onClick={themeSwitcher}
               flag={flag}
            >
               <svg
                  flag={flag.toString()}
                  width={80}
                  height={80}
               >
                  <use href={icons + '#icon-lamp'}></use>
               </svg>
            </LampButton>

            <nav>
               <ul>{items}</ul>
            </nav>
            <audio
               src={soundOnClick}
               ref={refAudio}
            ></audio>
         </Container>
      </HeaderBox>
   );
};
