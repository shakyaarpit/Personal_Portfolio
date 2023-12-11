import React, {useState} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { RiMenu4Fill } from "react-icons/ri";


const Navbar = () => {
const [menu, setMenu] = useState(false);

const upDown = () => {
    setMenu(!menu);
    
}
  return (
    <nav>
        <NavLink to="/" className='title'>༄ᶦᶰ᭄✿ᴀʀᴘɪᴛ࿐</NavLink>
        <ul className={menu ? "active" : ""} >
            <li>
                <NavLink to="/" className="navLink">HOME</NavLink>
            </li>
            <li>
                <NavLink to="/about" className="navLink">ABOUT</NavLink>
            </li>
           
            <li>
                <NavLink to="/exprience" className="navLink">EXPRIENCE</NavLink>
            </li>
            <li>
                <NavLink to="/project" className="navLink">PROJECT</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="navLink">CONTACT</NavLink>
            </li>
        </ul>
        <div className="barger">
            <span className='icone' onClick={upDown}><RiMenu4Fill/></span>
        </div>
    </nav>
  )
}

export default Navbar
