import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { NotFound } from './pages/NotFound';
import { AuthContextProvider } from './context';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route path='home' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='tmp' element={<div>hello world</div>} />
          </Route>
        </Routes>
      </AuthContextProvider>  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
