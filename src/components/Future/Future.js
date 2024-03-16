import React from 'react';
import Container from 'react-bootstrap/Container';
import FutureImg from "../assets/FutureImg.png";
import './Future.css';
import AffiliateImg from '../assets/home-banner-bg.png';



import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';
import spot from "../../components/Iconaasets/Spot-bg.png"
import futur from "../../components/Iconaasets/Future.png"
import servicebot from "../../components/Iconaasets/servicebot.png"

import { BsChatSquareTextFill } from "react-icons/bs"
import { BiSolidPhoneCall, BiMoneyWithdraw } from "react-icons/bi"
import { IoIosContacts } from "react-icons/io"
import { FaHeadphones } from "react-icons/fa"
// import {IoLocationSharp} from "react-icons/io"
import { MdLocationOn } from "react-icons/md"

const Future = () => {
  return (
    <>
      <Helmet>
        <title>Sky Commodity  | Future</title>
      </Helmet>
      <section id='future' className='future' style={{ backgroundImage: `url(${AffiliateImg})` }}>
        <Container>
          <div className='row'>
            <div className='col-lg-6'>
              <h1>Trade In Crypto Future Today</h1>
              <p>Maximise your trading potential with leverage up to 15X with crypto futures</p>
              <div>
                <Link to={"/sign-in"}> <button className="main-btn">Sign In</button></Link>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src={FutureImg} alt='phone' className='img-fluid '></img>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" class="services pb-4" style={{ backgroundColor: "#e4dddd" }}>
        <div class="container">

          <div class="section-title text-center">
            <h2 style={{ paddingTop: "46px", color: "#059473", fontSize: "45px", fontWeight: "500" }}>Services</h2>
            <p style={{ paddingBottom: "30px" }}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div class="row">

            <div class="col-lg-4 col-md-6">
              <div class="icon-box">
                <div class="icon" style={{ color: "#ff689b" }}><MdLocationOn /></div>
                <h4 class="title"><a >points of attention</a></h4>
                <p class="description"> Plan your visit to our offices in advance.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="icon-box">
                <div class="icon" style={{ color: "#e9bf06" }}><BsChatSquareTextFill /></div>
                <h4 class="title"><a >online chat</a></h4>
                <p class="description">Our all clients can get advice and find responses to questions in real-time.</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" data-wow-delay="0.1s">
              <div class="icon-box">
                <div class="icon" style={{ color: "#3fcdc7" }}><FaHeadphones /></div>
                <h4 class="title"><a >call us</a></h4>
                <p class="description">We provide all trading information to our clients via calls.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-wow-delay="0.1s">
              <div class="icon-box">
                <div class="icon" style={{ color: "#41cf2e" }}><BiSolidPhoneCall /></div>
                <h4 class="title"><a >We Call You</a></h4>
                <p class="description">We are available for you 24*7 in a week. Schedule a time to call.</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" data-wow-delay="0.2s">
              <div class="icon-box">
                <div class="icon" style={{ color: "#d6ff22" }}><IoIosContacts /></div>
                <h4 class="title"><a > Executive Support</a></h4>
                <p class="description">We have high-level experienced trading executives for client support always.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-wow-delay="0.2s">
              <div class="icon-box">
                <div class="icon" style={{ color: "#4680ff" }}><BiMoneyWithdraw /></div>
                <h4 class="title"><a >PayIn PayOut</a></h4>
                <p class="description">Payin and Payouts are the days when brokers and exchanges make payment or delivery of the securities.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* <section id='leverage' className='leverage  bg-[#cdd3e1] pt-[30px]'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 order-lg-1 order-2 mt-5 '>
              <img src={spot} alt='phone' className='h-fit'></img>
            </div>
            <div className='col-lg-6 future-levrage mt-5 mb-5 order-lg-2 order-1'>
              <h2>Spot market</h2>
              <p>
                The spot market, also known as the cash market or physical market, is a financial market where financial instruments, commodities, or assets are bought and sold for immediate delivery and settlement. In the spot market, transactions are settled "on the spot," which means that the exchange of the asset and the payment for it occur almost immediately, A spot market is where financial instruments are exchanged for immediate delivery, such as commodities, currencies, and securities.              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className=''>
        <div class=" leverage bg-[#f8f8f8] ">
          <div class="container">
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-8 '>
              <div className='  p-2.5   flex justify-center items-center '>
                <div className='image-container'>
                  <img class="object-cover  w-full md:w-[400px] md:h-[270px]" src={spot} alt="Who We Are Image" />
                </div>
              </div>
              
              <div className='flex flex-col  '>
                <h2 class=" ">Spot Market</h2>
                <p class="  ">
                  The spot market, also known as the cash market or physical market, is a financial market where financial instruments, commodities, or assets are bought and sold for immediate delivery and settlement. In the spot market, transactions are settled "on the spot," which means that the exchange of the asset and the payment for it occur almost immediately, A spot market is where financial instruments are exchanged for immediate delivery, such as commodities, currencies, and securities.
                </p>
              </div>
            </div>
          </div>

        </div>
        <div class=" flexibility bg-[#e4dddd]  ">
          <div class="container">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8  '>
              <div className='flex flex-col  justify-center ' >
                <h2 class="">Futures Market</h2>
                <p class="">
                  The futures market is a financial market where participants can buy and sell standardized contracts to buy or sell a specific quantity of an underlying asset at a predetermined price on a future date. These contracts are known as "futures contracts" or simply "futures." Futures contracts are used for various purposes, including hedging against price fluctuations, speculating on price movements, and managing risk.              </p>
              </div>
              <div className='  p-2.5  flex justify-center items-center'>
                <div className='image-container'>
                  <img class="object-cover w-[350px] h-[250px] " src={futur} alt="Who We Are Image" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* <section id='flexibility' className='flexibility  bg-[#cdd3e1] pt-[30px] '>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 future-levrage mt-5 mb-5'>
              <h2>Futures Market</h2>
              <p>
                The futures market is a financial market where participants can buy and sell standardized contracts to buy or sell a specific quantity of an underlying asset at a predetermined price on a future date. These contracts are known as "futures contracts" or simply "futures." Futures contracts are used for various purposes, including hedging against price fluctuations, speculating on price movements, and managing risk.
              </p>
            </div>
            <div className='col-lg-6 h-fit  w-[85%] '>
              <img class="  md:ml-5 w-full"
                src={futur}
                alt="Who We Are Image"

              />
            </div>
          </div>
        </div>
      </section> */}
      {/* <section id='currency' className='leverage  bg-[#cdd3e1] pt-[30px]'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 order-lg-1 order-2'>
              <img src={currency} alt='phone' className='img-fluid icons_img'></img>
            </div>
            <div className='col-lg-6  future-levrage mt-5 mb-5 order-lg-2 order-1'>
              <h2>Trade a range of currency pairs</h2>
              <p>Gain exposure to a variety of pairs using your multi-collateral futures wallet with 10 different collateral options.
                The most versatile cryptocurrency pairs to trade are usually BTC and ETH, as they're offered by most exchanges. Many crypto exchanges offer pairings for cryptocurrencies and fiat currencies like the U.S. dollar (USD), while some do not.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section id="features-future" class="features-future bg-[#f8f8f8] py-5" >
        <div class="container aos-init aos-animate" data-aos="fade-up">


          <div class="row">
            <div class="image col-lg-6 aos-init aos-animate img-fluid"  data-aos="fade-right">
              <img src={servicebot} alt="service-bottom"/> 
            </div>
            <div class="col-lg-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
              <div class="icon-box box-soft shadow-md  mt-2 mt-lg-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
               
                <h4>Hard Commodities</h4>
                <p> Hard commodities are natural resources that are typically mined or extracted from the Earth.</p>
              </div>
              <div class="icon-box box-soft shadow-md mt-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
             
                <h4>Soft Commodities</h4>
                <p> Soft commodities, also known as agricultural commodities, are typically grown rather than mined. </p>
              </div>
              <div class="icon-box box-soft shadow-md  mt-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
               
                <h4>Financial Commodities</h4>
                <p> In addition to hard and soft commodities, there is a category of financial commodities. These are not physical commodities but are financial instruments or derivatives based on the value of commodities.</p>
              </div>
              <div class="icon-box box-soft shadow-md mt-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
              
                <h4>Exchange-Traded Funds (ETFs)</h4>
                <p> ETFs that track commodities or invest in commodity futures are used by investors to gain exposure to commodity markets.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default Future
