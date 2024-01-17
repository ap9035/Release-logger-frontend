import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import TwoReleases from "./pages/TwoReleases";
import AppReleases from "./pages/AppReleases";
import './App.css'; // 引入 CSS

const router = createBrowserRouter([
        {
            path: '/',
            element: <TwoReleases></TwoReleases>
        },
        {
            path: '/app/:appName',
            element: <AppReleases ></AppReleases>
        }
])

function App() {
    let title = 'Release Logger - ' + process.env.REACT_APP_ENV;
    document.title = title;

    return (
      <>
          <h1>
              <a href={'/'}>{title}</a>
          </h1>
          <RouterProvider router={router}/>
      </>
  );
}

export default App;
