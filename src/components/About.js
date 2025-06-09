import React from 'react'
import '../styles/aboutstyles.css';
const About = () => {
  return (
    <div>
      <section id='about'>
        <div>
          <div>
      <h3 className='atitle'>Education :</h3>
      <p className='askills'>I'm currently pursuing a B.Tech in Information Technology, with a GPA of 8.00/10.00, set to graduate in May 2026.
        </p>
        </div>
        <div>
      <h3 className='atitle'>Expertise :</h3>
      <ul className='alist'>
        <li>Full stack development</li>
        <li>AI and Machine Learning</li>
        <li>Cloud and Devops</li>
      </ul>
      </div>
      <h3 className='atitle'>Activities :</h3>
        <div className='activity'>
         
          <div className='container'><p className='ahcontent'>Coding club student coordinator</p>
            <p className='acontent'>organized events - codeX</p>
          </div>
          <div className='container'><p className='ahcontent'>Hackathons</p>
            <p className='acontent'> Participated in Devday '24, a 24-hour open-source hackathon, and contributed to open-source projects in Girlscript Summer of Code Extd'24 and Hacktoberfest '24.
              SIH thiruvizha'24 , PyExpo'23
            </p>
          </div>
          <div className='container'><p className='ahcontent'>AWS Deepracer</p>
            <p className='acontent'>Reached the semi-finals in an autonomous vehicle racing competition, showcasing my skills in AI and machine learning.</p>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default About;
