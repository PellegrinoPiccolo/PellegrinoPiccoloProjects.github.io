import React from 'react'
import './project.scss'
import { Link, useParams } from 'react-router-dom';
import { projects } from '../../project';
import Slider from '../../components/slider/Slider';
import { RxGithubLogo } from "react-icons/rx";
import { BiSolidLeftArrow } from "react-icons/bi";

const Project = () => {

    const { id } = useParams()

    const filterData = projects.filter(item => item.id === id)
    const project = filterData[0]

  return (
    <div className='project'>
      <Link to="/">
        <div className="arrow_container">
          <BiSolidLeftArrow title='Back to home'/>
        </div>
      </Link>
      <Slider images={project.img} name={project.name} />
      <div className="content_container">
        <h1 className='project_name'>{project.name}</h1>
        <p className="project_description">{project.description}</p>
        <p className="link">Link: {project.link ? (<a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>) : ('undefined')}</p>
        <p className="link"><RxGithubLogo style={{fontSize: '18px'}}/> Github Repository: {project.github_repository ? (<a href={project.github_repository} target="_blank" rel="noopener noreferrer">{project.github_repository}</a>) : ('undefined')}</p>
      </div>
    </div>
  )
}

export default Project
