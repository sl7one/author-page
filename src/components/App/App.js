import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { BackgroundVideo } from 'components/BackgroundVideo/BackgroundVideo';
import { Header } from 'components/Header/Header';
import store from 'store';
import { ThemeProvider } from 'styled-components';
import { AppBox, BackgroundImage, InfoArticle, MainBox } from 'styles/styled';
import { themeDark, themeLight } from 'styles/theme';

import photo7 from '../../assets/img/photo7.png';

const init = () => {
   if (store.get('theme') === 'light') return { theme: themeLight, flag: false };
   return { theme: themeDark, flag: true };
};

export const App = () => {
   const [theme, setTheme] = useState(init().theme);
   const [flag, setFlag] = useState(init().flag);
   const { pathname } = useLocation();

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

   const photoSwitcher = (pathname) => {
      switch (pathname) {
         case '/about':
            return photo7;
         // case '/skills':
         //    return photo8;
         // case '/contacts':
         //    return photo9;
         default:
            return photo7;
      }
   };

   return (
      <ThemeProvider theme={theme}>
         <BackgroundVideo flag={flag} />

         <AppBox>
            <Header
               themeSwitcher={themeSwitcher}
               flag={flag}
            />
            <MainBox>
               <BackgroundImage pathname={pathname}>
                  <img
                     src={photoSwitcher(pathname)}
                     alt="author"
                  />
               </BackgroundImage>
               <InfoArticle pathname={pathname}>
                  <div id="detail">
                     <Outlet />
                  </div>
               </InfoArticle>
            </MainBox>
         </AppBox>
      </ThemeProvider>
   );
};
