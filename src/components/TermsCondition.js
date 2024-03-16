import React, { useState } from 'react'


const FAQ = () => {

  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const questions = [
    { question: 'Our Basic T&C',                            answer: 'My name is Khan' },
    { question: 'Activation And Termination ',              answer: 'My name is Khan' },
    { question: 'No Warranties',                             answer: 'My name is Khan' },
    { question: 'Links To Third Party Sites',                  answer: 'My name is Khan' },
    { question: 'Modification Of Terms Of Use',               answer: 'My name is Khan' },
    { question: 'Payment Gateway',                               answer: 'My name is Khan' },
    { question: 'Use Of Password',                                answer: 'My name is Khan' },
    { question: 'Terms Of Service For Sending Communications',      answer: 'My name is Khan' },
    { question: 'Governing Law And Dispute Resolution',              answer: 'My name is Khan' },
    { question: 'Miscellaneous',                                   answer: 'My name is Khan' },

  ];









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





  return (
    <>

      <section className=' py-[50px] sm:py-[62px]'>
        <div className=' mx-auto sm:px-0 px-5'>

          <h2 className=' text-[28px] sm:text-[32px] font-bold text-center font-spectral  sm:px-0 sm:mb-16'>Terms & Condition</h2>
          <div className='grid grid-col-1 sm:grid-cols-[auto_70%] gap-3'>
            <div className=' bg-[#059473]  h-fit'>
              <ul className='text-white p-0' >

                {questions.map((q, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedQuestion(index)}
                    className={`${selectedQuestion === index ? 'bg-[#ff5e14] text-white' : ''
                      }  hover:bg-[#ff5e14] pl-[16px] py-1.5 cursor-pointer font-normal  font-spectral text-[18px]`}
                  >
                    {q.question}
                  </li>
                ))}



              </ul>

            </div>

            <div className='sm:ml-5'>
              <h2 className='text-[30px] font-semibold text-green-500 mb-[10px]'>Trading Rulebook</h2>
              {selectedQuestion !== null && (
                <p className='pl-1 leading-[24px]  font-spectral text-[18px]'>{questions[selectedQuestion].answer}</p>
              )}

            </div>
          </div>
        </div>


      </section>
    </>

  )
}

export default FAQ