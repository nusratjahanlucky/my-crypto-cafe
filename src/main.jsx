import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Coins from './Components/Coins/Coins.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';
import CoinDetails from './Components/CoinDetails/CoinDetails.jsx';
import BdAddress from './Components/Contact/BdAddress.jsx';
import UsAddress from './Components/Contact/UsAddress.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:'/coins',
        loader:()=>fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'),
        element:<Coins></Coins>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/coinDetails/:coinId',
        loader:({params}) =>fetch(`https://api.coingecko.com/api/v3/coins/${params.coinId}`),
        element:<CoinDetails></CoinDetails>
      },
      {
        path:'/bdAddress',
        element:<BdAddress></BdAddress>
      },
      {
        path:'/usAddress',
        element:<UsAddress></UsAddress>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
