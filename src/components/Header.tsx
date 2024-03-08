import React from 'react'
import "./component.css"
import { IoIosMenu } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import logmd from "./images/logmd.jpg"
import shimul from "./images/shimul.jpg"










const Header = () => {
  
  return (
    <div className='app-body'>
      <div className="app-container">
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
        <div className="Hero-container">
        <nav className='sidebar'>
          <div className="mdprofile">
            <div className="innermd">
            <img className='shimul' src={shimul}  alt="" />
            <h6 className='hoss'>Md Shinul Hossain</h6>
            <p className='email'>mdshinuluiux11@gmail.com</p>
            </div>
          </div>
          <ul>
           <li><a href="">Home</a></li>
           <li><a href="">Project</a></li>
           <li><a href="">Taks</a></li>
           <li><a href="">Members</a></li>
           <li><a href="">Invoice</a></li>
           <li><a href="">Calender</a></li>
           <li><a href="">Timesheet</a></li>
           <li><a href="">Messages</a></li>
           <li><a href="">Settings</a></li>
          </ul>

        </nav>
      </div>
      </div>
      
      </div>
      
    </div>
  )
}

export default Header
