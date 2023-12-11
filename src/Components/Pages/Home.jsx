import React from 'react'
import './Style.css';
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <div className="homeSection displayFlex">
      <div className="homeText">
        <h1> Hi I Am Arpit</h1> <span>Front-End Developer</span>
        <p>
          This Is My Official PortFolio Website To Show All <br/> Details And Work
          Experience Web Development
        </p>
        <NavLink to="/contact"><button className="btn">Here ME</button></NavLink>
        
      </div>
      <div className="homeImg">
        <img src="./arpit1.jpg" className='animated img' />
      </div>
    </div>
  )
}

export default Home
