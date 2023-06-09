import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

//Para las rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cats, { CatsComponent } from './componentsCats/CatsComponent';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// import { CatsComponent } from './componentsCats/CatsComponent';

root.render(
  <StrictMode>
    <BrowserRouter>
      <ColorModeScript />
      {/* <App /> */}


      <Routes>
        <Route path='' Component={App} />

        <Route path='/cats' Component={CatsComponent} />

      </Routes>


    </BrowserRouter>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
