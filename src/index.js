import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Contexts/UserContext';
import { ProductProvider } from './Contexts/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider>
  <BrowserRouter>
    <UserProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </UserProvider>
  </BrowserRouter>
  // </Provider>
);
