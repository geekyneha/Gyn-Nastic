import React from 'react'
import {TRAINERS} from '../../../utils/mock'
import style from './trainers.module.css'
const Trainers = () => {
  return (
    <>
   <div className={style["about-team"]}><h1>Meet Our Team</h1>
   <p>We are a team of experienced people, nutrition, sports and fitness passionate experts with talent
and knowledge unsurpassed in the industry. Get to know us.</p>
   </div>
   
    <div className={style["All-trainers"]}>
      {
        TRAINERS.map(details=>(<div key={details.id} className={style.card}><h3 className={style.name}>{details.name}</h3> <img className={style.image} src={details.image_url} width={300} />
        <div className={style.about}>{details.about}</div></div>))
      }
    </div>
    </>
  )
}

export default Trainers