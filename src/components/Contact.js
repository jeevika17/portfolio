import React from 'react'
import '../styles/contactstyles.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
const Contact = () => {
  return (
    <div className='contact'>
      <h1 className='ctitle'>Contact for any queries</h1>
      <div className='query'>
      <p>Email address:  <span> jeevika1704ss@gmail.com</span></p>
      <p>Phone Number :  <span> xxxx</span></p>
      <hr/>
      </div>
      <h1 className='ctitle'>Social accounts</h1>
      <div className='social'>
        <a href='https://www.linkedin.com/in/jeevika-s-87185923a/' target='_blank' rel='noopener noreferrer'>
        <FaLinkedin className='icon' />
        Linkedin
        </a>
        <a href='https://github.com/jeevika17' target='_blank' rel='noopener noreferrer'>
        <FaGithub className='icon' />
        Github
        </a>
      </div>
    </div>
  )
}

export default Contact;
