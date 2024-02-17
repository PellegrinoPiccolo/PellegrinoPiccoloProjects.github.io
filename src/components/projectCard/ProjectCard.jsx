import React from 'react'
import './projectcard.scss'

const ProjectCard = ({project}) => {

  const maxLength = 80;

  const description = project.description

  return (
    <div className='project_card'>
      <div className="image_container">
        <img src={project.img} alt="" />

      </div>
      <div className="text_container">
        <p className='title poppins-bold'>{project.name}</p>
        <p className='description poppins-regular'>{description.length > maxLength ? description.slice(0, maxLength) + "..." : description}</p>
        <p className='link poppins-bold'>Link: {project.link ? (<a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>) : ('undefined')}</p>
        <button>Read More</button>
      </div>
    </div>
  )
}

export default ProjectCard
