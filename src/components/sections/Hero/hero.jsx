import React from 'react'
import style from './hero.module.css';
import gymImage from '../../../Images/gymImage.png'
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate=useNavigate();
  return (
    
    <>
    <div className={style.hero} id='hero'>
        <div className={style.leftSection}>
            <div>
                <div className={style.headLine}>
                    <h1><strong>"Take care of your <span className={style.redText}>body.</span  >It's the only place you have to  <span className={style.redText}>live</span>"</strong></h1>
                </div>
                <div className={style.joinWithUSBtnContainer}><button className={style.joinWithUSBtn} onClick={()=>navigate("/login")}>Join With Us</button></div>
            </div>
        </div>
      <div className={style.rightSection}>
        <img src={gymImage} alt="GymBoy" width={700}/>
      </div>
    </div>
    </>
  )
}

export default Hero