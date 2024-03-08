import React from 'react'
import "./component.css"
import { IoIosMenu } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import logmd from "./images/logmd.jpg"










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
            <span>< CiSearch size={20} fontWeight={500} color='darkgrey'/></span>
              
              <select >
                <option value="default" >Search from Message</option>
              </select>
             
            </div>
            </div>
            
          </menu>
          <div className="notification">
          
            <div className="notice">
              <span>< IoMdNotificationsOutline color='darkgrey' /></span>
              <span className='red'><GoDotFill size={10} color='red'/></span>
            </div>
            <div className="mdlogo">
              <img className='md' src={logmd} alt="" />
              <div className="ui">
                <h6>Md Shimul Hoss</h6>
                <p className='design'>UI/UX Designer</p>
              </div>
            </div>
            
          </div>
        </header>
      </div>
     
      
    </div>
  )
}

export default Header
