import React from 'react'
import './project.scss'
import { useParams } from 'react-router-dom';
import { projects } from '../../project';
import Slider from '../../components/slider/Slider';

const Project = () => {

    const { id } = useParams()

    const filterData = projects.filter(item => item.id === id)
    const project = filterData[0]

  return (
    <div className='project'>
      <Slider images={project.img} name={project.name} />
    </div>
  )
}

export default Project
