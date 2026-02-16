import React from 'react'
import '../styles/homestyles.css';
import image1 from '../assets/image1.jpg';

const Home = () => {
  return (
    <div>
      <section id='home'>
    <div className='home-content'>
      <div>
      <p>Hi, this is  <span className='home-span'>Jeevika S</span> </p>
      <p className='typingtext'>I'm a <span className='home-span'>Software Developer</span></p>
      </div>
{/*
  <div className='home-img'>
    <img src={image1} alt='profile' />
  </div>
*/}

    </div>
    </section>

    </div>
  )
}

export default Home;
