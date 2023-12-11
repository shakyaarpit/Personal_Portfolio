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

          return <div className="projectCard" key={index} >
          <img src={value.proImg} alt="" />
          <h2>{value.proTitle}</h2>
          <p>{value.ProDesc}</p>
          <span>{value.language}</span>
          <div className="projectNav">
          <NavLink to="#" className="ProNav">Demo</NavLink>
          <NavLink to="#" className="ProNav">Sorce</NavLink>
          </div>
        </div>
       
        })
       }
       
       </div>

   
    </>
  )
}

export default Project
