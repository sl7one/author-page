import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AboutPage } from 'Pages/AboutPage';
import { ContactsPage } from 'Pages/ContactsPage';
import { ErrorPage } from 'Pages/ErrorPage';
// import { NewsPage } from 'Pages/NewsPage';
import { ProjectsPage } from 'Pages/ProjectsPage';
import { SkillsPage } from 'Pages/SkillsPage';

import { App } from './components/App/App';
import './styles/index.css';
import './styles/reset.css';

const publicRouter = createBrowserRouter([
   {
      path: '/author-page',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
         { index: true, element: <AboutPage /> },
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
         // {
         //    path: 'news',
         //    element: <NewsPage />,
         // },
      ],
   },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   //  <React.StrictMode>
   <RouterProvider router={publicRouter} />
   //  </React.StrictMode>
);
