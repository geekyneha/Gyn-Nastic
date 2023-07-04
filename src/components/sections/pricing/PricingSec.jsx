import React from 'react'
import style from './pricing.module.css'
import {BsArrowRight} from 'react-icons/bs'
import {GoCheckCircle} from 'react-icons/go'

const Pricing = () => {
  
  return (
    <div className={style.pricingSection} id='pricing'>
    <div className={style.pricingContainer}>
        <div className={style.card1} >
        <h3>Day Pass</h3>
        <span>$</span>
        <h5>20</h5>
        <div className={style.getPass}>/pass</div>
        <div className={style.getAccess}>
            <span><GoCheckCircle size={20} className={style.check}/></span><p>1 Day Pass</p>
            <span><GoCheckCircle size={20} className={style.check}/></span><p>Free Gym Access</p>
            <span><GoCheckCircle size={20} className={style.check}/></span><p>24 Hour Acesss</p>
        </div>
        <button className={style.getStartedButton1}>Get Started</button>

        </div>
        <div className={style.card2} >
        <h3>Month to Month</h3>
        <span>$</span>
        <h5>99</h5>
        <div className={style.getPass}>/month</div>
        <div className={style.getAccess2}>
            <span><GoCheckCircle className={style.greenCheck}/></span><p>$99 Joining Fee</p>
            <span><GoCheckCircle className={style.greenCheck}/></span><p>No Contract</p>
            <span><GoCheckCircle className={style.greenCheck}/></span><p>Free Gym Access</p>
            <span><GoCheckCircle className={style.greenCheck}/></span><p>1 Group Class Included</p>
            <span><GoCheckCircle className={style.greenCheck}/></span><p>24 Hour Acesss</p>
        </div>
        <button className={style.getStartedButton2} >Get Started</button>
            
        </div>
        <div className={style.membership} >
            <h3>Membership</h3>
            <h2>From Punch Pass to Monthly or Annual</h2>
            <p>
            At Gym Base, we offer a wide range of membership with options to suit every budget. Everything from One Day Pass, Punch Pass to monthly or annual prepaid memberships. What's more, we won't tie you in to a long term contract, giving you greater flexibility.
            </p>
            <h4>Each plan included</h4>
            <p><span><BsArrowRight size={20} /></span>The best equipment global brands</p>
            <p><span><BsArrowRight size={20}/></span>The gym is open 24 hours a day, 7 days a week</p>
            <p><span><BsArrowRight size={20} /></span>Two safe payment methods</p>
            <p><span><BsArrowRight size={20} /></span>Group fitness classes in the price of the subscription</p>
            <p><span><BsArrowRight size={20} /></span>No long-term contract, period</p>
        </div>

    </div>
    </div>
  )
}

export default Pricing