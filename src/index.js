import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
       <App />
    </BrowserRouter>
  </React.StrictMode>
);
