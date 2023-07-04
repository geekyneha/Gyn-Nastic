import React, { useState,useRef } from 'react'
import style from './team.module.css'
import {TRAINERS} from '../../../utils/mock'
import {FiArrowLeftCircle,FiArrowRightCircle} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
const Team = () => {

  const [scrollPosition,setScrollPosition]=useState(0);
  const [totalProgram,setTotalProgram]=useState(TRAINERS.length);
  const programContainerRef=useRef(null);
  const navigate=useNavigate();

  const scrollLeft=()=>{
    programContainerRef.current.scrollBy({
      left:400,
      behavior:'smooth'
    })

  }
  const scrollRight=()=>{
    programContainerRef.current.scrollBy({
      left:-400,
      behavior:'smooth'
    })

  }
  return (
    <>
      <div className={style["program-container"]}>
      <div className={style["training-program-heading"]}>Our Professional Trainers</div>
     <div className={style["training-program"]} ref={programContainerRef}>
    
     

   <div  className={style["all-program"]} id='training'>

   
    {
     TRAINERS.map((detalis)=>(<div className={style["Program-image"]} key={detalis.id}><img src={detalis.image_url} alt="Programs" width={250} height={250}/></div>))
    }

    </div>
   
   
    </div>
    
    <div className={style["view-all-container"]}>  <span className={style["scroll-right"]}><FiArrowLeftCircle size={40}  onClick={scrollRight}/></span> <spna className={style["view-all"]} onClick={()=>{navigate("/view-team")}}>View all</spna> <span  className={style["scroll-right"]}><FiArrowRightCircle  size={40}  onClick={scrollLeft}/></span></div>
   
    </div>
    </>
   
  )
}

export default Team