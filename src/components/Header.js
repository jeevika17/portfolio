import React from 'react';
import {Link,Routes,Route} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import '../styles/headerstyles.css';

const Header = () => {
  return (
    <div>
      <nav>
         <Link to = "/" className='fas'>Home</Link> 
            <Link to = "/aboutpg" className='fas'>About</Link> 
            <Link to = "/projectspg" className='fas'>Projects</Link> 
           <Link to = "/contactpg" className='fas'>Contact</Link> 
        
      </nav>
      <Routes>
        <Route path = "/" element= {<> <Home/> <About/><Projects /><Contact/></>} />
        <Route path = "/aboutpg" element= {<><About/><Projects /><Contact/></>} />
        <Route path = "/projectspg" element= {<><Projects/><Contact/></>} />
        <Route path = "/contactpg" element= {<><Contact/></>} />
      </Routes>
      

    </div>
  )
}

export default Header;
