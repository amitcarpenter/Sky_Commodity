import React, { useState } from 'react'
import { Helmet } from 'react-helmet';

const FAQ = () => {

  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const questions = [
    {
      question: ' What is a commodity',
      answer: {
        hedging: "A commodity market is a financial market where raw materials or primary agricultural products are bought and sold. These raw materials, often referred to as commodities, can include items like gold, oil, agricultural products (such as wheat or corn), and metals. The trading of commodities can take place on physical exchanges, where the actual goods are bought and sold, or on derivative exchanges, where financial instruments representing the value of the commodities are traded.",
        tittle: "",
        subtitle: "",
        describe: "",
        location: "",
        trade: "",
        tradeSub: "",
        retu: "",
        serve: "",
      }

    },

    {
      question: 'How safe is commodity trading ',
      answer: {
        hedging: " Trading in commodities is always safe compared to other instruments. Commodity trading, like any form of financial trading, involves risks. The safety of commodity trading depends on various factors, including your knowledge, risk tolerance, and the strategies you employ. ",
        tittle: "",
        subtitle: "",
        describe: "",
        location: "",
        trade: "",
        tradeSub: "",
        retu: "",
        serve: "",
      }
    },

    {
      question: ' Benefits of Commodity Market', answer: {
        hedging: "Commodity trading could be the perfect option if you intend to hedge your stock and bond investments. This is because historically commodities and stocks or bonds move in opposite directions. ",
        tittle: "Liquidity",
        subtitle: "Like stocks, commodity investments are pretty liquid investments since you can sell them at your will, compared to static investments like fixed deposits or real estate.",
        describe: "Profitable Returns",
        location: "Commodities become riskier in the form of investments if the liquidy is high. This means that companies can experience both huge profits and heavy losses. ",
        trade: "Trading on Lower Margin",
        tradeSub: "Traders can deposit 5 to 10% of the total contract value as a margin with the broker. This is less in comparison with other asset classes. Low margins allow individuals to invest and take larger positions at lesser capitals.",
        retu: "Potential Returns",
        serve: "Several factors affect the prices of individual commodities such as supply and demand, inflation and economy. Due to massive global infrastructure projects, demand has increased in the global infrastructure projects that impact commodity prices. A positive impact on the company stocks affects commodity prices."
      }
    },
    {
      question: 'Where To Invest In Commodities', answer: {
        hedging: "Investors trade commodities like crude oil, natural gas, silver, cotton, etc. in the commodity market The commodity market can be a physical or virtual marketplace. If it’s a physical marketplace, investors will usually own the commodity and trade it for cash or cash equivalent commodities. A virtual commodity market, however, generally includes commodity exchanges.",
        tittle: "",
        subtitle: "",
        describe: "",
        location: "",
        trade: "",
        tradeSub: "",
        retu: "",
        serve: "",
      }
    },
    {
      question: 'What is a commodity market', answer: {
        hedging: "A commodity market is a financial market where raw or primary products are exchanged. These products are standardized and interchangeable with other goods of the same type. The commodities traded on these markets can be broadly categorized into two main types:",
        tittle: "Hard Commodities",
        subtitle: "These are natural resources that are mined or extracted from the earth. Examples include gold, silver, oil, natural gas, coal, and agricultural products like wheat, corn, and soybeans.",
        describe: "Soft Commodities",
        location: "These are typically agricultural products that are grown rather than mined. Examples include coffee, cocoa, cotton, sugar, and livestock.",
        trade: "",
        tradeSub: "",
        retu: "",
        serve: "",
      }
    },
    {
      question: 'How Does a Commodity Market Work', answer: {
        hedging: "Here's an overview of how a commodity market typically works",
        tittle: "Producers: These are individuals or companies involved in the production of commodities. For example, farmers producing grains, miners extracting metals, or oil companies extracting crude oil.",
        subtitle: "Consumers: These are entities that use commodities in their production process. For example, a company manufacturing goods might need to purchase raw materials such as steel or energy resources like oil.",
        describe: "Traders and Investors: These individuals or institutions participate in the market to speculate on price movements or to hedge against future price changes. Traders can be speculators looking for profit from price changes, while investors may be looking for long-term returns or diversification.",
        location: "",
        trade: "",
        tradeSub: "",
        retu: "",
        serve: "",
      }
    },
    {
      question: 'What are the types of commodities', answer: {
        hedging: "Commodities are raw materials or primary agricultural products that can be bought and sold, such as gold, oil, coffee, or wheat. They are typically standardized and interchangeable with other goods of the same type. Commodities can be broadly categorized into two main types",
        tittle: "Hard Commodities",
        subtitle: "Metals: This category includes precious metals like gold, silver, platinum, and industrial metals like copper, aluminum, and iron ore.Energy: Crude oil, natural gas, and other energy-related products fall into this category.",
        describe: "Soft Commodities",
        location: "Agricultural Products: This includes products like wheat, corn, soybeans, rice, cotton, and others. Livestock and Meat: Cattle, pork, and other meat products fall under this category.Softs: This includes commodities like coffee, cocoa, sugar, and orange juice.",
        trade: "",
        tradeSub: "",
        retu: "",
        serve: "",
      }
    },
    {
      question: ' Which is better equity or commodity', answer: {
        hedging: "Equity has lower risk compared to the commodity market",
        tittle: "",
        subtitle: "",
        describe: "",
        location: "",
        trade: "",
        tradeSub: "",
        retu: "",
        serve: "",
      }
    },
    {
      question: 'What is clearing in commodity markets', answer: {
        hedging: "In commodity markets, clearing refers to the process of settling and reconciling trades executed on a futures exchange. The clearing process is essential to ensure the smooth functioning and integrity of the market. It involves the clearinghouse, which acts as an intermediary between buyers and sellers in the futures market.",
        tittle: "",
        subtitle: "",
        describe: "",
        location: "",
        trade: "",
        tradeSub: "",
        retu: "",
        serve: "",
      }
    },
    {
      question: '  What are the timings for the Commodity', answer: {
        hedging: " Commodity market time is divided into two sessions",
        tittle: "Morning and evening. The morning session starts at 9:00 am and lasts till 5:00 pm. The evening session is from 5:00 pm to 11:30",
        subtitle: "",
        describe: "",
        location: "",
        trade: "",
        tradeSub: "",
        retu: "",
        serve: "",
      }
    },

  ];


  return (
    <>
      <Helmet>
        <title>Sky Commodity | FAQ</title>
      </Helmet>
      <section className=' py-[50px] sm:py-[62px]'>
        <div className=' mx-auto sm:px-0 px-5'>

          <h2 className=' text-[28px] sm:text-[32px] font-bold text-center font-spectral  sm:px-0 sm:mb-16'>Frequently Asked Questions</h2>
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

              <div className="selected-question">
                {selectedQuestion !== null ? (
                  <div>
                    {/* <h2 className='pl-1 leading-[24px] font-spectral text-[18px]'>
                      {questions[selectedQuestion].question}
                    </h2> */}
                    <p className='pl-1 leading-[24px] font-spectral tracking-wide text-[18px]'>
                      {questions[selectedQuestion].answer.hedging}
                    </p>

                    {questions[selectedQuestion].answer.tittle && (
                      <p className='pl-1 leading-[24px] font-spectral text-[18px]'>
                        {questions[selectedQuestion].answer.tittle}
                      </p>
                    )}

                    {questions[selectedQuestion].answer.subtitle && (
                      <p className='pl-1 leading-[24px] font-spectral text-[18px]'>
                        {questions[selectedQuestion].answer.subtitle}
                      </p>
                    )}

                    {questions[selectedQuestion].answer.describe && (
                      <p className='pl-1 leading-[24px] font-spectral text-[18px]'>
                        {questions[selectedQuestion].answer.describe}
                      </p>
                    )}

                    {questions[selectedQuestion].answer.location && (
                      <p className='pl-1 leading-[24px] font-spectral text-[18px]'>
                        {questions[selectedQuestion].answer.location}
                      </p>
                    )}

                  </div>
                ) : (
                  <p className='pl-1 leading-[24px] font-spectral text-[18px]'>
                    No question selected.
                  </p>
                )}
              </div> 
            </div>

          </div>
        </div> 

      </section>
    </>

  )
}

export default FAQ