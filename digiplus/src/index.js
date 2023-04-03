import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import {ChakraProvider} from "@chakra-ui/react";
import { Theme } from './Theme/Theme';
import LoginContextProvider from './Context/LoginContext';
import RegisterContextProvider from './Context/RegisterContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={Theme}>
  <BrowserRouter>
    <LoginContextProvider>
      <RegisterContextProvider>
    <App />
      </RegisterContextProvider>
  </LoginContextProvider>
  </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();