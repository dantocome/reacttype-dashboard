import React from 'react'
import "./component.css"
import { IoIosMenu } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";








const Header = () => {
  
  return (
    <div className='app-container'>
      <div className="dashboard">
        <header>
          <menu>
            <nav>
              <div className="menu">
                <LuMenu  size={20}/>
              </div>
              <div className="name">Logo Hare</div>
            </nav>
            <div className="search">
              
              <span>< CiSearch size={20}/></span>
              <select >
                <option value="default" >search from Message</option>
              </select>
             
            </div>
          </menu>
        </header>
      </div>
      
    </div>
  )
}

export default Header
