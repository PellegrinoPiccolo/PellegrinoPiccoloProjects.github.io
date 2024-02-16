import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className='project_card'>
      <div className="left">
        <img src={project.img} alt="" />
      </div>
      <div className="right">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p>Link: {project.link ? (project.link) : ('undefined')}</p>
      </div>
    </div>
  )
}

export default ProjectCard
