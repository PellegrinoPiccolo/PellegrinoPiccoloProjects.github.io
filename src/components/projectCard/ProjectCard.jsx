import React from 'react'
import './projectcard.scss'

const ProjectCard = ({project}) => {
  return (
    <div className='project_card'>
      <div className="left">
        <img src={project.img} alt="" />
      </div>
      <div className="right">
        <p className='title'>{project.name}</p>
        <p className='description'>{project.description}</p>
        <p>Link: {project.link ? (<a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>) : ('undefined')}</p>
        <button>Read More</button>
      </div>
    </div>
  )
}

export default ProjectCard
