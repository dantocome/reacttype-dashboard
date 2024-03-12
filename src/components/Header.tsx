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
import { IoMdHome } from "react-icons/io";
import { GiFilmProjector } from "react-icons/gi";
import { FaTasks } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdAccessAlarm } from "react-icons/md";
import { BiMessageRoundedDots } from "react-icons/bi";
import { RiSettings3Line } from "react-icons/ri";
import { BiSolidCoinStack } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { HiOutlineOfficeBuilding } from "react-icons/hi";



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
                <option value="default" >Search from Messages</option>
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
        <div className='sidebar'>
          <div className="mdprofile">
            <div className="innermd">
            <img className='shimul' src={shimul}  alt="" />
            <p className='pro'>Md Shimul Hossain</p>
            <p className='email'>mdshinuluiux11@gmail.com</p>
            <div className="coin">
              <  BiSolidCoinStack  className='log' size={20} color='violet'/><p className='over'>My Overview</p>
            </div>
            </div>
            <div className="official">
              <IoPerson  color='darkgrey'/>
              < HiOutlineOfficeBuilding color='darkgrey'/>

            </div>
          </div>
          
          <ul className='icons'>
          <div className="hmcolor"><li ><a href=""><  IoMdHome className='hom'/> <span className='hms'>Home</span></a></li></div>
           <li><a href=""><GiFilmProjector/>Project</a></li>
           <li><a href="">< FaTasks/>Tasks</a></li>
           <li><a href="">< MdGroups/>Members</a></li>
           <li><a href=""><FaFileInvoiceDollar/>Invoice</a></li>
           <li><a href=""><SlCalender/>Calender</a></li>
           <li><a href="">< MdAccessAlarm />Timesheet</a></li>
           <li><a href="">< BiMessageRoundedDots/>Messages</a></li>
           <li><a href=""><RiSettings3Line/>Settings</a></li>
          </ul>
         
        </div>
        <div className="sections">
          <div className="board">
          <h1 className='dash'>Dashboard</h1>
          <div className="rap">
          <div className="rating">
            <div className="rating-1">
              <div className="rank-one">
              <p className='total'>Total Projects</p>
              <h3>3</h3>
              </div>
              <div className="percent">
              <div className="stroke">
                <h2>46%</h2>
                </div>
                
              </div>

            </div>
          </div>
          <div className="rating">
            <div className="rating-2">
              <div className="rank-one">
              <p className='total'>Total Tasks</p>
              <h3>18</h3>
              </div>
              <div className="percent">
              <div className="stroke">
                <h2>74%</h2>
                </div>
                
              </div>

            </div>
          </div>
          <div className="rating">
            <div className="rating-3">
              <div className="rank-one">
              <p className='total'>Total Expenses</p>
              <h3>5</h3>
              </div>
              <div className="percent">
              <div className="stroke">
                <h2>14%</h2>
                </div>
                
              </div>

            </div>
          </div>
          <div className="rating">
            <div className="rating-4">
              <div className="rank-one">
              <p className='total'>Total Users</p>
              <h3>5</h3>
              </div>
              <div className="percent">
              <div className="stroke">
                <h2>14%</h2>
                </div>
                
              </div>

            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
      
      </div>
      
    </div>
  )
}

export default Header
