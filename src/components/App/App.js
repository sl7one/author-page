import { Header } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { AppBox, BackgroundImage, Container, InfoArticle, MainBox } from 'styles/styled';

export const App = () => {
   return (
      <AppBox>
         <Header />
         <Container>
            <MainBox>
               <BackgroundImage></BackgroundImage>
               <InfoArticle>
                  <div id="detail">
                     <Outlet />
                  </div>
               </InfoArticle>
            </MainBox>
         </Container>
      </AppBox>
   );
};
