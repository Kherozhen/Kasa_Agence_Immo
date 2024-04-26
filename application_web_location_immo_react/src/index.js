import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Logement from './Pages/Home/Logement';
import ErrorPage from './Pages/Error/ErrorPage';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/locationCard/:id" element={<Logement />} />
        <Route path="/errorPage" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
