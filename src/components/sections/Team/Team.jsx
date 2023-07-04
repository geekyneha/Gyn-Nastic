import React, { useState,useRef } from 'react'
import style from './team.module.css'
import {TRAINERS} from '../../../utils/mock'
import {FiArrowLeftCircle,FiArrowRightCircle} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
const Team = () => {

  const [scrollPosition,setScrollPosition]=useState(0);
  const [totalteam,setTotalteam]=useState(TRAINERS.length);
  const teamContainerRef=useRef(null);
  const navigate=useNavigate();

  const scrollLeft=()=>{
    teamContainerRef.current.scrollBy({
      left:400,
      behavior:'smooth'
    })

  }
  const scrollRight=()=>{
    teamContainerRef.current.scrollBy({
      left:-400,
      behavior:'smooth'
    })

  }
  return (
    <>
      <div className={style["team-container"]}>
      <div className={style["training-team-heading"]}>Our Professional Trainers</div>
     <div className={style["training-team"]} ref={teamContainerRef}>
    
     

   <div  className={style["all-team"]} id='training'>

   
    {
     TRAINERS.map((detalis)=>(<div className={style["team-image"]} key={detalis.id}><img src={detalis.image_url} alt="teams" className={style.images} /></div>))
    }

    </div>
   
   
    </div>
    
    <div className={style["view-all-container"]}>  <span className={style["scroll-right"]}><FiArrowLeftCircle size={40}  onClick={scrollRight}/></span> <spna className={style["view-all"]} onClick={()=>{navigate("/view-team")}}>View all</spna> <span  className={style["scroll-right"]}><FiArrowRightCircle  size={40}  onClick={scrollLeft}/></span></div>
   
    </div>
    </>
   
  )
}

export default Team