import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/reset.css';
import { App } from './components/App/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { AboutPage } from 'Pages/AboutPage';
import { ErrorPage } from 'Pages/ErrorPage';
import { SkillsPage } from 'Pages/SkillsPage';
import { ProjectsPage } from 'Pages/ProjectsPage';
import { ContactsPage } from 'Pages/ContactsPage';

const publicRouter = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: 'about',
            element: <AboutPage />,
         },
         {
            path: 'skills',
            element: <SkillsPage />,
         },
         {
            path: 'projects',
            element: <ProjectsPage />,
         },
         {
            path: 'contacts',
            element: <ContactsPage />,
         },
      ],
   },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   //  <React.StrictMode>
   <ThemeProvider theme={theme}>
      <RouterProvider router={publicRouter} />
   </ThemeProvider>
   //  </React.StrictMode>
);
