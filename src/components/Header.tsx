import React from 'react'
import "./component.css"
import { IoIosMenu } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { MdOutlineArrowDropDown } from "react-icons/md";








const Header = () => {
  
  return (
    <div className='app-container'>
      <div className="dashboard">
        <header>
          <menu>
             <div className="first-menu">
              <div className="menu">
                <LuMenu  size={20} color='darkgrey'/>
              </div>
              <div className="name">Logo Hare</div>
          
            <div className="search">
            <span>< CiSearch size={20} fontWeight={500}/></span>
              
              <select >
                <option value="default" >Search from Message</option>
              </select>
             
            </div>
            </div>
            
          </menu>
        
        </header>
      </div>
     
      
    </div>
  )
}

export default Header
