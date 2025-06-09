import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App({children}) {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <div>{children}</div>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
