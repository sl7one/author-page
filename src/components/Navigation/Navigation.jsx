import { NavLink } from 'react-router-dom';
import { Container, HeaderBox } from 'styles/styled';

export const Header = () => {
   return (
      <HeaderBox>
         <Container>
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
               </ul>
            </nav>
         </Container>
      </HeaderBox>
   );
};
