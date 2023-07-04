import React, { useState,useRef } from 'react'
import style from './program.module.css'
import {PROGRAMS} from '../../../utils/mock'
import {FiArrowLeftCircle,FiArrowRightCircle} from 'react-icons/fi'
const Program = () => {

  const [scrollPosition,setScrollPosition]=useState(0);
  const [totalProgram,setTotalProgram]=useState(PROGRAMS.length);
  const programContainerRef=useRef(null);

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
      <div className={style["program-container"]} id='program'>
      <div className={style["training-program-heading"]}>Training Programs</div>
     <div className={style["training-program"]} ref={programContainerRef}>
    
     <div className={style["all-program-name"]}> 
    {
      PROGRAMS.map((detalis)=>(<div className={style["Program-name"]} key={detalis.id}><div div className={style["name"]}  >{detalis.name}</div></div>))
    }

    </div>

   <div  className={style["all-program"]} >

   
    {
      PROGRAMS.map((detalis)=>(<div className={style["Program-image"]} key={detalis.id}><img src={detalis.url} alt="Programs" width={250} height={250}/></div>))
    }

    </div>
   
    </div>
    <div className={style["view-all-container"]}>  <span className={style["scroll-right"]}><FiArrowLeftCircle size={40}  onClick={scrollRight}/></span> <spna className={style["view-all"]}>View all</spna> <span  className={style["scroll-right"]}><FiArrowRightCircle  size={40}  onClick={scrollLeft}/></span></div>
   
    </div>
    </>
   
  )
}

export default Program