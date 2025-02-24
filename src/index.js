import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Contexts/UserContext';
import { CartProvider } from './Contexts/CartContext';
import { CategoriesProvider } from './Contexts/CategoriesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider>
  <BrowserRouter>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </BrowserRouter>
  // </Provider>
);
