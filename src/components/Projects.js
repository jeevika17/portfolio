import React from 'react';
import '../styles/projectstyles.css';
import todoimage from '../assets/todo.png';
import cadimage from '../assets/cad.png';
import pishguardAIimage from '../assets/pishguardAI.png';


const ProjectCard = ({title,description,image,link}) => {
  return (
    <div className='project-card'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target='_blank' rel='noopener noreferrer'>View Project</a>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {title: 'To Do List' , description: 'This is a simple web page which manages the task' , image: todoimage , link: 'https://jeevika17.github.io/To-DoList/'},
    {title: 'CAD' , description: 'A computer aided ML model which detects the abnormality in the scan images of kidney' , image: cadimage , link: 'https://github.com/jeevika17/MedicalImageDiagnosis_kidney'},
    {title: 'PishGuardAI' , description: 'Predicts the possibility of phishing attack of a webpage by its url' , image: pishguardAIimage , link: 'https://github.com/jeevika17/PishGuardAI-sample'}
  ];

  return(
    <div>
      <h2 className='ptitle'>projects</h2>
   
    <section id='project' className='project'>
      
      {projectData.map((project,index) => (
          <ProjectCard key={index} {...project} />
      )
      )}
    </section>
    </div>
  );

};

export default Projects;
