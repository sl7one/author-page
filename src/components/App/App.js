import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import store from 'store';
import { ThemeProvider } from 'styled-components';
import { AppBox, BackgroundImage, Container, InfoArticle, MainBox } from 'styles/styled';
import { themeDark, themeLight } from 'styles/theme';

const init = () => {
   if (store.get('theme') === 'light') return { theme: themeLight, flag: false };
   return { theme: themeDark, flag: true };
};

export const App = () => {
   const [theme, setTheme] = useState(init().theme);
   const [flag, setFlag] = useState(init().flag);

   const themeSwitcher = () => {
      setFlag((prev) => !prev);
      if (flag) {
         setTheme(themeLight);
         store.set('theme', 'light');
      } else {
         setTheme(themeDark);
         store.set('theme', 'dark');
      }
   };

   return (
      <ThemeProvider theme={theme}>
         <AppBox>
            <Header
               themeSwitcher={themeSwitcher}
               flag={flag}
            />
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
      </ThemeProvider>
   );
};
