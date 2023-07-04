import React,{useState} from 'react'
import {MdNotes} from 'react-icons/md'
import style from './header.module.css'
import {Outlet, useNavigate} from 'react-router-dom'
import Pricing from '../pricing/PricingSec'
import Hero from '../Hero/hero'
import { Link } from 'react-scroll'
const Header = () => {
  const [isMenuClicked,setIsMenuClicked]=useState(false);
  const navigate=useNavigate();
  
  const showMenu=()=>{
    setIsMenuClicked(!isMenuClicked)
  }

  
  return (
    <>
   
    <div className={style.header}>
        <div className={style.logo} >
          
            <span className={style.logoName}  onClick={()=>navigate("/")}>GYM</span>

        </div>
        <div className={isMenuClicked ? style.navMenu: style.navBar  }>
           <li className={style.navItem}  ><Link to='hero' spy={true} smooth={true} offset={50} duration={500} onClick={()=>navigate("/")}>Home</Link></li>
           <li className={style.navItem} onClick={()=>navigate("/about")}>About</li>
           <li className={style.navItem}><Link  to='program' spy={true} smooth={true} offset={50} duration={500}>Program</Link></li>
           <li className={style.navItem}><Link to='training' spy={true} smooth={true} offset={50} duration={500}>Training</Link></li>
           <li className={style.navItem}  ><Link to='pricing' spy={true} smooth={true} offset={50} duration={500} >Pricing</Link></li>
        </div>
        
       <button className={style.joinUsBtn} onClick={()=>navigate("/login")}>Join Us</button>
      <MdNotes className={style.Menu} size={25} onClick={showMenu}/>
        
    </div>
  <div><Outlet /></div>

    </>
  )
}

export default Header