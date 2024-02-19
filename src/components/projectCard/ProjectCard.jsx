import React from 'react'
import './projectcard.scss'
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {

  const maxLength = 80;

  const description = project.description

  const [ref, inView] = useInView();

  return (
    <div ref={ref} className={`project_card ${inView ? 'animation' : ''}`}>
      <div className="image_container">
        <img src={project.img[0]} alt="" />

      </div>
      <div className="text_container">
        <p className='title poppins-bold'>{project.name}</p>
        <p className='description poppins-regular'>{description.length > maxLength ? description.slice(0, maxLength) + "..." : description}</p>
        <p className='link poppins-bold'>Link: {project.link ? (<a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>) : ('undefined')}</p>
      </div>
      <Link to={`/project/${project.id}`}>
          <button>Read More</button>
        </Link>
    </div>
  )
}

export default ProjectCard
