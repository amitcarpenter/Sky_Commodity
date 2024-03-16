import React, { useState } from 'react'
import './commodity.css'
import { GiGoldNuggets } from 'react-icons/gi';
import { BsArrowUpSquare } from 'react-icons/bs';

const Market = ({ coins }) => {


  const sortedCoins = coins.sort((coin1, coin2) => coin2.price - coin1.price);
  // console.log(sortedCoins, "_______--coii")



  return (
    <div>
      <section id='market' className='market'>
        <div className='container'>
          <div className='row'>
            <h3>India Market</h3>


            {
              sortedCoins.slice(0, 4).map((coin) => (
                <div className='col-lg-5 coin-data' key={coin.id}>
                  <div className='d-flex'>
                    <GiGoldNuggets />
                    <h6>{coin.trade_name}</h6>
                  </div>
                  <div className='d-flex'>
                    <BsArrowUpSquare />
                    <h6>{coin.price}</h6>
                  </div>
                  <div className='text-center'>
                    <p style={{ color: "green", paddingTop: "10px" }}>CHG (%){" "} {coin.percent_chg}</p>
                  </div>
                  <div className='text-center'>
                    <p style={{ color: "black", fontWeight: "bold" }}> Price {" "} {coin.high}</p>
                    {/* <p style={{ color: "black", fontWeight: "bold" }}>11:02 AM</p>   */}
                  </div>
                </div>
              ))
            }





          </div>

        </div>
      </section>
    </div>
  )
}

export default Market