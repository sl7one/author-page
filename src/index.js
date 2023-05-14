import React from 'react';
import ReactDOM from 'react-dom/client';
import { Triangle } from 'react-loader-spinner';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ErrorPage } from 'Pages/ErrorPage';
import { routes } from 'routes/routes';

import { App } from './components/App/App';
import './styles/index.css';
import './styles/reset.css';

const publicRouter = createBrowserRouter(
   [
      {
         path: '/',
         element: <App />,
         errorElement: <ErrorPage />,
         children: routes,
      },
   ],
   { basename: '/author-page' }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   //  <React.StrictMode>
   <RouterProvider
      router={publicRouter}
      fallbackElement={
         <Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            visible={true}
         />
      }
   />

   //  </React.StrictMode>
);
