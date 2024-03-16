import React, { useState } from 'react'

import { NavLink } from "react-router-dom";

const SuppoetQuestion = () => {

  const [question, setqutions] = useState(0)
  const [red, setred] = useState(true)

  const Trading = () => {
    return (
      <>
        <div>
          <h2 className='text-[30px] font-semibold text-green-500 mb-[10px]'>Trading Rulebook</h2>

          <div>
            <p className=''>Last updated 30 November, 2022</p>
            <p className='text-base font-[300] '>Ekonnet (including the entities owning and operating the platform at and on Ekonnet.com, and the platform at and on Ekonnet.com itself, collectively, the “Exchange”) is committed to offering a free and fair market for users of the Ekonnet.com platform (the “Platform”), where the prices of digital tokens are determined by an open market and consumers through supply and demand. To help users find the best market prices for tokens, the Exchange’s trade surveillance program is introducing this Trading Rule Book to set out the compliance procedures that the Exchange will use to perform market</p>
            <p className='text-base leading-[25px] font-[300] '>Ekonnet (including the entities owning and operating the platform at and on Ekonnet.com, and the platform at and on Ekonnet.com itself, collectively, the “Exchange”) is committed to offering a free and fair market for users of the Ekonnet.com platform (the “Platform”), where the prices of digital tokens are determined by an open market and consumers through supply and demand. To help users find the best market prices for tokens, the Exchange’s trade surveillance program is introducing this Trading Rule Book to set out the compliance procedures that the Exchange will use to perform market</p>

          </div>
        </div>
      </>
    )
  }

  const Trading1 = () => {
    return (
      <>
        <div>
          <h3 className='text-[28px] font-spectral font-semibold text-green-500 mb-[10px]'>Trading Rulebook2</h3>

          <div>
            <p className=''>Last updated 30 November, 2022</p>
            <p className='pl-1 leading-[24px]  font-spectral text-[17px]'>Ekonnet (including the entities owning and operating the platform at and on Ekonnet.com, and the platform at and on Ekonnet.com itself, collectively, the “Exchange”) is committed to offering a free and fair market for users of the Ekonnet.com platform (the “Platform”), where the prices of digital tokens are determined by an open market and consumers through supply and demand. To help users find the best market prices for tokens, the Exchange’s trade surveillance program is introducing this Trading Rule Book to set out the compliance procedures that the Exchange will use to perform market</p>
            <p className='pl-1 leading-[24px] font-spectral text-[17px] '>Ekonnet (including the entities owning and operating the platform at and on Ekonnet.com, and the platform at and on Ekonnet.com itself, collectively, the “Exchange”) is committed to offering a free and fair market for users of the Ekonnet.com platform (the “Platform”), where the prices of digital tokens are determined by an open market and consumers through supply and demand. To help users find the best market prices for tokens, the Exchange’s trade surveillance program is introducing this Trading Rule Book to set out the compliance procedures that the Exchange will use to perform market</p>

          </div>
        </div>
      </>
    )
  }


  const Trading2 = () => {
    return (
      <>
        <div>
          <h2 className='text-center text-xl'>Trading Rulebook2</h2>
        </div>
      </>
    )
  }

  const Trading3 = () => {
    return (
      <>
        <div>
          <h2 className='text-center text-xl'>Trading Rulebook2</h2>
        </div>
      </>
    )
  }

  const Trading4 = () => {
    return (
      <>
        <div>
          <h2 className='text-center text-xl'>Trading Rulebook2</h2>
        </div>
      </>
    )
  }

  const Trading5 = () => {
    return (
      <>
        <div>
          <h2 className='text-center text-xl'>Trading Rulebook2</h2>
        </div>
      </>
    )
  }



  return (
    <>

      <section className=' py-[50px] sm:py-[62px]'>
        <div className=' mx-auto sm:px-0 px-5'>

          <h2 className=' text-[28px] sm:text-[32px] font-bold text-center font-spectral  sm:px-0 sm:mb-16'>Help & Support
          </h2>
          <div className='grid grid-col-1 sm:grid-cols-[auto_70%] gap-3'>
            <div className=' bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900  h-fit'>
              <ul className='text-white p-0' >
                <li className={` ${question === 0 ? "bg-[#ff5e14] " : ""}  hover:bg-[#ff5e14] pl-[16px] py-2  cursor-pointer font-normal  font-spectral text-[18px]`} onClick={() => { setqutions(0) }} >How to place a simple order?</li>
                <li className={`  ${question === 1 ? "bg-[#ff5e14] " : ""} pl-[16px] py-2 cursor-pointer  font-normal  hover:bg-[#ff5e14] font-spectral text-[18px]`} onClick={() => setqutions(1)} >    How can I check my Order Status?</li>
                <li className={` ${question === 2 ? "bg-[#ff5e14] " : ""}  hover:bg-[#ff5e14] pl-[16px] py-2   cursor-pointer  font-spectral text-[18px]`} onClick={() => { setqutions(2) }} >           Why is my Order pending?</li>
                <li className={` ${question === 3 ? "bg-[#ff5e14] " : ""}  hover:bg-[#ff5e14] pl-[16px] py-2  cursor-pointer  font-spectral text-[18px]`} onClick={() => setqutions(3)} >                Where can I check today's positions?</li>
                <li className={` ${question === 4 ? "bg-[#ff5e14] " : ""}  hover:bg-[#ff5e14] pl-[16px] py-2  cursor-pointer  font-spectral text-[18px]`} onClick={() => setqutions(4)} >                How can I change/reset my trading password?</li>
                <li className={` ${question === 5 ? "bg-[#ff5e14] " : ""}  hover:bg-[#ff5e14] pl-[16px] py-2  cursor-pointer  font-spectral text-[18px]`} onClick={() => setqutions(5)} >                How can I unblock my account?</li>
                <li className={` ${question === 6 ? "bg-[#ff5e14] " : ""}  hover:bg-[#ff5e14] pl-[16px] py-2  cursor-pointer  font-spectral text-[18px]`} onClick={() => setqutions(6)} >                How do I activate the Commodities account?
                </li>
                <li className={` ${question === 7 ? "bg-[#ff5e14] " : ""}  hover:bg-[#ff5e14] pl-[16px] py-2  cursor-pointer  font-spectral text-[18px]`} onClick={() => setqutions(7)} >                How can I withdraw funds from my account?</li>
                <li className={` ${question === 8 ? "bg-[#ff5e14] " : ""}  hover:bg-[#ff5e14] pl-[16px] py-2  cursor-pointer  font-spectral text-[18px]`} onClick={() => setqutions(8)} >                What maintenance charges for trading?</li>
                <li className={` ${question === 9 ? "bg-[#ff5e14] " : ""}  hover:bg-[#ff5e14] pl-[16px] py-2  cursor-pointer  font-spectral text-[18px]`} onClick={() => setqutions(9)} >                Can I use a debit/credit card to add money?</li>

              </ul>

            </div>

            {/* accordion */}

            <div className='sm:ml-5'>

              {
                question == 0 ? (<Trading />) : question == 1 ? (<Trading1 />) : null
              }

            </div>


          </div>
        </div>


      </section>
    </>

  )
}

export default SuppoetQuestion