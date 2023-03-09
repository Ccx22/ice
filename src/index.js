import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import './utils/reset.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {routes.map((route) => (
        <Route{...route} key={route.path} />
      ))}
    </Routes>
  </BrowserRouter>
);
