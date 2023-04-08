import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,   createBrowserRouter, RouterProvider} from 'react-router-dom';
import Verify from '/Users/macbook/lonenft/src/Pages/Verify.js';
import Mint from '/Users/macbook/lonenft/src/Pages/Mint.js';
import  GetAddress from "/Users/macbook/lonenft/src/Components/Connect.js"

   if(GetAddress){
    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
      },
      {
      path: "/Verify",
      element: <Verify />
        }
    
      ])
   }else{
    <div>
      COnnect To your wallet
    </div>
   }
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
  path: "/Verify",
  element: <Verify />
    },
    {
      path: "/Mint",
      element: <Mint/>
        }

  ])

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <RouterProvider router={router} />
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
