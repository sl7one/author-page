import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { BackgroundVideo } from 'components/BackgroundVideo/BackgroundVideo';
import { Header } from 'components/Header/Header';
import Main from 'components/Main/Main';
import MessageForm from 'components/MessageForm/MessageForm';
import store from 'store';
import { ThemeProvider } from 'styled-components';
import { AppBox, GlobalStyle } from 'styles/styled';
import { themeDark, themeLight } from 'styles/theme';

const init = () => {
   if (store.get('theme') === 'light') return { theme: themeLight, flag: false };
   return { theme: themeDark, flag: true };
};

export const App = () => {
   const [theme, setTheme] = useState(init().theme);
   const [flag, setFlag] = useState(init().flag);
   const { pathname } = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      if (pathname === '/') {
         navigate('/about');
         return;
      }
   }, [navigate, pathname]);

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
         <BackgroundVideo flag={flag} />

         <AppBox>
            <Header
               themeSwitcher={themeSwitcher}
               flag={flag}
            />
            <Main />
         </AppBox>

         <MessageForm />

         <GlobalStyle />
      </ThemeProvider>
   );
};
