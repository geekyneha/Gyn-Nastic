import React,{useState} from 'react'
import {MdNotes} from 'react-icons/md'
import {GrClose} from 'react-icons/gr'
import {IoIosCloseCircle} from 'react-icons/io'
import style from './header.module.css'
import {Outlet, useNavigate} from 'react-router-dom'
import { Link } from 'react-scroll'

const Header = () => {
  const [isMenuClicked,setIsMenuClicked]=useState(false);
  const [aboutActive,setAboutActive]=useState(false)
  const navigate=useNavigate();
  
  const showMenu=()=>{
    setIsMenuClicked(!isMenuClicked)
  }

  const handleAbout=()=>{
    navigate("/about")
    setAboutActive(true);
  }
  const goHome = () => {
    if (aboutActive) {
      navigate("/", { state: { scrollTarget: "program" } });
    } else {
      navigate("/");
    }
  };
  
  return (
    <>
   
    <div className={style.header}>
        <div className={style.logo} >
          
            <span className={style.logoName}  onClick={()=>navigate("/")}>GYM</span>

        </div>
        <div className={isMenuClicked ? style.navMenu: style.navBar  }>
           
        <IoIosCloseCircle className={style.closeMenu} size={50} onClick={()=>setIsMenuClicked(!isMenuClicked)}/>
           <li className={style.navItem}  ><Link to='hero' spy={true} smooth={true} offset={50} duration={500} onClick={()=>navigate("/")}>Home</Link></li>
           <li className={style.navItem} onClick={handleAbout}>About</li>
           <li className={style.navItem} onClick={aboutActive? goHome:""}><Link  to='program' spy={true} smooth={true} offset={50} duration={500}>Program</Link></li>
           <li className={style.navItem}><Link to='training' spy={true} smooth={true} offset={50} duration={500}>Training</Link></li>
           <li className={style.navItem}  ><Link to='pricing' spy={true} smooth={true} offset={50} duration={500} >Pricing</Link></li>
        </div>
        
       <button className={style.joinUsBtn} onClick={()=>navigate("/login")}>Join Us</button>
      <MdNotes className={style.Menu} size={50} onClick={showMenu}/>
   
    </div>
  <div><Outlet /></div>

    </>
  )
}

export default Header