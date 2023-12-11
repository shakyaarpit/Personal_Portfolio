import React from 'react'
import { NavLink } from 'react-router-dom'
import ProData from '../Data/ProjectData'

const Project = () => {
  
  return (
    <>
    <h1 style={{textAlign:"center", color:"white", paddingTop: "20px"}}>PROJECTS</h1>
    <div className='projectSection' >

       {
        ProData.map((value, index)=>{
          const {proImg, proTitle, ProDesc, language, demo, sorce} = value;
          return <div className="projectCard" key={index} >
          <img src={proImg} alt="" />
          <h2>{proTitle}</h2>
          <p>{ProDesc}</p>
          <span>{language}</span>
          <div className="projectNav">
          <NavLink to={demo} className="ProNav">Demo</NavLink>
          <NavLink to={sorce} className="ProNav">Sorce</NavLink>
          </div>
        </div>
       
        })
       }
       
       </div>

   
    </>
  )
}

export default Project
