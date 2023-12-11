import React from 'react'

const About = () => {
  return (
    <>
    <h1 style={{textAlign:"center", color:"white", padding: "20px 0px"}}>ABOUT ME</h1>
    <div className="mainAboutSection">
      
      </div>
      <div className="aboutSection displayFlex ">
        <div className="aboutName">
          
          <p>
            I am Self taught Frontend Developer. I have intermediate level of <br/>
            skill in <span>Html5</span>  || <span>Css3</span> || <span>Javascript</span> || <span>React Js</span>  || <span>Bootstrap</span>  || <br/><span>Tailwind</span> ||

              <span> Version Control. </span>  I also have beginner level skill in <br/> <span> React-Router </span> 
            and <span> Redux. </span> I am collaborative, team player, and <br/> proficient in
            working with interdisciplinary teams and executing <br/> goal-oriented
            projects. Strongly interested in obtaining a <br/> Frontend Developer
            position to enhancing my skills and knowledge.
          </p>
        </div>
        <div className="aboutImg">
          <img src="./arpit1.jpg" className='animated img' />
        </div>
      </div>
      </>
  )
}

export default About
