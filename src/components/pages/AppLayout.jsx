import React,{useRef} from 'react'
import Header from '../sections/header/Header'
import Hero from '../sections/Hero/hero'
import Pricing from '../sections/pricing/PricingSec'
import {Outlet} from 'react-router-dom'
import Program from '../sections/Program/Program'
import Team from '../sections/Team/Team'

import style from './applayout.module.css'
import Footer from '../sections/footer/Footer'
const AppLayout = () => {
  return (
    
    <>

   
   <div className={style["Hero"]}>
   <Hero />
   </div>
    
   <div className={style["program"]}>
   <Program />
   </div>
   
    <div className={style["Pricing"]}>
    <Pricing /></div>

    <div className={style["Team"]}>
    <Team /></div>

    <div className={style["footer"]}>
    <Footer />
    </div>
    </>
    
  )
}

export default AppLayout