import { NavLink } from 'react-router-dom';

import { Container, HeaderBox, LampButton } from 'styles/styled';

import icons from '../../assets/icons/lamp.svg';

export const Header = ({ themeSwitcher, flag }) => {
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
               <ul>
                  <li>
                     <NavLink to="about">About me</NavLink>
                  </li>
                  <li>
                     <NavLink to="skills">Skills</NavLink>
                  </li>
                  <li>
                     <NavLink to="projects">Projects</NavLink>
                  </li>
                  <li>
                     <NavLink to="contacts">Contacts</NavLink>
                  </li>
                  {/* <li>
                     <NavLink to="news">NEWS</NavLink>
                  </li> */}
               </ul>
            </nav>
         </Container>
      </HeaderBox>
   );
};
