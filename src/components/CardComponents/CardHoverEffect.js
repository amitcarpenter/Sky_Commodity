import React from 'react'
import './TradingInfoCard.css'
import Ganesh from '../../components/assets/Ganesh.png'

const CardHoverEffect = () => {
  return (
 <>
    <div class="card-Effect">
        <div class="imgbox">

            <img src={Ganesh} alt="ganesh"/>
            <div class="content">
                <h2> Shree Ganesh </h2>
                <p>वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥ </p>
            </div>
        </div>
    </div>
 
 
 
 </>
  )
}

export default CardHoverEffect
