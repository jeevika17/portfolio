import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/portfolio">
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
