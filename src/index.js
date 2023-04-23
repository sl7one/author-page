import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ErrorPage } from 'Pages/ErrorPage';
import { routes } from 'assets/routes/routes';

import { App } from './components/App/App';
import './styles/index.css';
import './styles/reset.css';

const publicRouter = createBrowserRouter([
   {
      path: '/author-page',
      element: <App />,
      errorElement: <ErrorPage />,
      children: routes,
   },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   //  <React.StrictMode>
   <RouterProvider router={publicRouter} />
   //  </React.StrictMode>
);
