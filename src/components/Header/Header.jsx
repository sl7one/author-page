import Audio from 'components/Audio/Audio';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import LampButton from 'components/LampButton/LampButton';
import Navigation from 'components/Navigation/Navigation';
import useMedia from 'hooks/useMedia';
import { Container, HeaderBox } from 'styles/styled';

export const Header = ({ themeSwitcher, flag }) => {
   const { isDesktop } = useMedia();
   return (
      <HeaderBox>
         <Container isDesktop={isDesktop}>
            <LampButton
               themeSwitcher={themeSwitcher}
               flag={flag}
            />
            {isDesktop ? <Navigation /> : <BurgerMenu />}
            <Audio />
         </Container>
      </HeaderBox>
   );
};
