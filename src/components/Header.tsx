import React from 'react'
import "./component.css"
import { IoIosHome } from "react-icons/io";
import { MdMedicalServices } from "react-icons/md";
import { FaTasks } from "react-icons/fa";






const Header = () => {
  
  return (
    <div className='app-container'>
      <nav>
        <menu>
          <ul>
            <li><span className='icons'>< IoIosHome size={20} color='darkgrey'/></span><span className='names'>Home</span></li>
            <li><span className='icons'><MdMedicalServices size={20} color='darkgrey'/></span><span className='names'>Services</span></li>
            <li><span className='icons'>< FaTasks size={20} color='darkgrey'/></span><span className='names'>Tasks</span></li>
            
            
          </ul>
        </menu>
      </nav>
    </div>
  )
}

export default Header
