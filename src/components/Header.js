import React from 'react';
import {Link,Routes,Route} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import '../styles/headerstyles.css';

const Header = () => {
    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</nav>

  );
};

export default Header;
