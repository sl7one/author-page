import Audio from 'components/Audio/Audio';
import LampButton from 'components/LampButton/LampButton';
import Navigation from 'components/Navigation/Navigation';
import { Container, HeaderBox } from 'styles/styled';

export const Header = ({ themeSwitcher, flag }) => {
   return (
      <HeaderBox>
         <Container>
            <LampButton
               themeSwitcher={themeSwitcher}
               flag={flag}
            />
            <Navigation />
            <Audio />
         </Container>
      </HeaderBox>
   );
};
