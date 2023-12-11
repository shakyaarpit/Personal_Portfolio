import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <>
        <h1 style={{textAlign:"center", color:"white", paddingTop: "20px"}}>CONTACT ME</h1>
    <div className='contactSection'>
      <div className="contactImg">
        <img src="./contact.jpg" alt="" className='animated img'/>
      </div>
      <div className="contactDetails">
        <div className="conNav">
        <NavLink to="https://www.linkedin.com/in/arpitshakya/" className="contactNav" target='blank'>  <FaLinkedin />  Linkedin</NavLink> <br /> <br />
        <NavLink to="https://www.instagram.com/_its_arpit_0711/?hl=en" className="contactNav" target='blank'> <FaInstagram />  Instagram</NavLink> <br /> <br />
        <NavLink to="https://github.com/shakyaarpit" className="contactNav" target='blank'><FaGithub />   Github</NavLink> <br /> <br />
        </div>
        <div className="emailCon">
        <p> <TiMessages />  arpitshakya9956@gmail.com </p> <br />
        <p> <IoCallOutline /> / <FaWhatsapp /> : +91 9956596429</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
