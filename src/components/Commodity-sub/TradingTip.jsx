

import React from 'react'
import { AiFillDollarCircle } from "react-icons/ai"

import participantCommodity from "../../components/Iconaasets/Participant-Commodity- Market.png"
import investingCommodity from "../../components/Iconaasets/Commodities-Market.png"
import intradaytip from "../../components/Iconaasets/Intraday-Trading-Tips.png"
import { Helmet } from 'react-helmet'

const TradingTip = () => {
    return (
        <>

<Helmet>
                <title>Sky Commodity | TradingTip</title>
            </Helmet>
            <section className=' py-[65px] sm:py-[102px] bg-cover bg-no-repeat bg-gradient-to-r from-[#059473]/60 via-indigo-200 to-[#059473]/20'>
                <div className='container mx-auto '>
                    <h3 className='font-semibold font-popin mb-5 capitalize '>IntraDay Trading Tips</h3>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                        <div className='h-70  flex flex-col justify-center items-center  hover:border-2 hover:border-[#00D094]  bg-white px-4 py-4 rounded-xl hover:-translate-y-6 hover:ease-in-out duration-300 cursor-pointer hover:shadow-xl '>
                            <div className='w-[70px] h-[70px]  border-[2px] border-green-600 p-3 rounded-full text-center'>
                                <img src={intradaytip} className='mb-2' />
                            </div>
                            <h3 class="text-[20px] my-2  font-medium hover:text-[#00D094]   cursor-pointermb-3"> Choose Liquid Shares</h3>
                            <p class=" leading-[24px] py-2">Liquid shares are shares that are traded in high volumes on a daily basis and hence can be easily bought or sold without significantly impacting their price.
                            </p>
                        </div>

                        <div className='h-70  flex flex-col justify-center items-center  hover:border-2 hover:border-[#00D094]  bg-white px-4 py-4 rounded-xl hover:-translate-y-6 hover:ease-in-out duration-300 cursor-pointer hover:shadow-xl '>
                            <div className='w-[70px] h-[70px]  border-[2px] border-green-600 p-3 rounded-full text-center'>
                                <img src={intradaytip} className='mb-2' />
                            </div>
                            <h3 class="text-[20px] my-2  font-medium hover:text-[#00D094] capitalize   cursor-pointermb-3">Utilizing Stop Loss for Lower Impact </h3>
                            <p class=" text-left py-2">Stop-loss can be defined as an advance order to sell an asset when it reaches a particular price point. It is used to limit loss or gain in a trade.
                            </p>
                        </div>

                        <div className=' h-70  flex flex-col justify-center items-center  bg-white px-4 py-5 rounded-lg hover:-translate-y-6 hover:ease-in-out duration-300 cursor-pointer '>
                            <div className='w-[70px] h-[70px]  border-[2px] border-green-600 p-3 rounded-full text-center'>
                                <img src={intradaytip} className='mb-2' />
                            </div>
                            <h3 class="text-[20px]  font-medium hover:text-orange-400  cursor-pointermb-3"> Volatile Stocks are a no-go </h3>
                            <p class=" py-2">Volatility is often associated with fear, which tends to rise during bear markets, stock market crashes, and other big downward moves.</p>
                        </div>
                        <div className='h-70  flex flex-col justify-center items-center  bg-white px-4 py-5 rounded-lg hover:-translate-y-6 hover:ease-in-out duration-300 cursor-pointer '>
                            <div className='w-[70px] h-[70px]  border-[2px] border-green-600 p-3 rounded-full text-center'>
                                <img src={intradaytip} className='mb-2' />
                            </div>
                            <h3 class="text-[20px] font-medium hover:text-orange-400  cursor-pointermb-3"> Correlated Stocks </h3>
                            <p class=" t  py-2">The relationship that exists between two stocks and their respective price movements. It can also refer to the relationship between stocks and other asset classes, such as bonds or real estate.

                            </p>
                        </div>

                        <div className='h-70  flex flex-col justify-center items-center  bg-white px-4 py-5 rounded-lg hover:-translate-y-6 hover:ease-in-out duration-300 cursor-pointer '>
                            <div className='w-[70px] h-[70px]  border-[2px] border-green-600 p-3 rounded-full text-center'>
                                <img src={intradaytip} className='mb-2' />
                            </div>
                            <h3 class="text-[20px] font-medium hover:text-orange-400  cursor-pointermb-3"> Choose Transparency </h3>
                            <p class="  py-2">It is usually good to invest in stocks of firms that provide the marketplace with adequate information about their company activities. When you consider all relevant facts, making a choice becomes simple.</p>
                        </div>

                        <div className='h-70  flex flex-col justify-center items-center  bg-white px-4 py-5 rounded-lg hover:-translate-y-6 hover:ease-in-out duration-300 cursor-pointer '>
                            <div className='w-[70px] h-[70px]  border-[2px] border-green-600 p-3 rounded-full text-center'>
                                <img src={intradaytip} className='mb-2' />
                            </div>
                            <h3 class="text-[20px] font-medium hover:text-orange-400  cursor-pointermb-3"> News-Sensitive Stocks</h3>
                            <p class="   py-2">Choosing stocks that are responsive to news is a common intraday stock-selecting approach. These stocks usually react to any good or bad news in the news.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='  py-[65px] sm:py-[102px] bg-cover bg-no-repeat  bg-gradient-to-br from-gray-200 via-[#059473] to-[#059473]/40'>
                <div className='container mx-auto '>
                    <h3 className='font-semibold font-popin mb-5 capitalize '>Benefits of Investing in the commodities market</h3>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                        <div className='h-70  flex flex-col justify-center items-center  border-b-8  border-t-8 border-[#059473] bg-white px-4 py-4 rounded-xl  shadow-xl  hover:-translate-y-6 hover:ease-in-out duration-300 cursor-pointer hover:shadow-xl'>
                            {/* <img src="" alt="" /> */}
                            <div className='w-[70px] h-[70px]  border-[2px] border-green-600 p-3 rounded-full text-center'>
                                <img src={investingCommodity} className='mb-2' />
                            </div>
                            <h3 class="text-[20px] my-2  font-medium hover:text-[#00D094]   cursor-pointermb-3"> Diversification</h3>
                            <p class=" py-2">Diversification is a risk management strategy that creates a mix of various investments
                                within a portfolio. Over time, commodities and commodity stocks tend to provide returns that differ from other stocks and bonds.

                            </p>
                        </div>

                        <div className='h-70  flex flex-col justify-center items-center  border-b-8 border-t-8 border-yellow-600  bg-white px-4 py-4 rounded-xl hover:-translate-y-6 hover:ease-in-out duration-300 cursor-pointer hover:shadow-xl '>
                            {/* <img src="" alt="" /> */}
                            <div className='w-[70px] h-[70px] border-[2px] border-yellow-600  p-3 rounded-full text-center'>
                                <img src={investingCommodity} className='mb-2' />
                            </div>
                            <h3 class="text-[20px] my-2  font-medium hover:text-[#00D094]   cursor-pointermb-3">Margin Trading</h3>
                            <p class="  py-2">Margin trading refers to borrowing money from the broker to purchase stock. The investor is allowed to buy more securities than what he can afford with the available funds at the moment.
                            </p>
                        </div>


                        <div className='h-70  flex flex-col justify-center items-center   border-b-8 border-t-8 border-pink-600 bg-white px-4 py-4 rounded-xl hover:-translate-y-6 hover:ease-in-out duration-300 cursor-pointer hover:shadow-xl '>
                            {/* <img src="" alt="" /> */}
                            <div className='w-[70px] h-[70px] border-[2px] border-pink-600 p-3 rounded-full text-center'>
                                <img src={investingCommodity} className='mb-2' />
                            </div>
                            <h3 class="text-[20px] my-2  font-medium hover:text-[#00D094]   cursor-pointermb-3">Real Returns </h3>
                            <p class="  py-2">Real return is what is earned on an investment after accounting for taxes and inflation. Real returns are lower than nominal returns, which do not subtract taxes and inflation.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            <section className='  py-[65px] sm:py-[102px] bg-cover bg-no-repeat ' >
                <div className='container mx-auto '>
                    <h3 className=' font-semibold font-popin mb-5 capitalize '>Participants of the commodity market</h3>
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-5 '>
                        {/* <div className='h-70  flex flex-col justify-center items-center  px-4 py-4 rounded-xl cursor-pointer shadow-xl border-2 border-gray-600 px-4 py-6  transform transition duration-500 hover:scale-125" '>
                          
                            <span className='text-[65px] mb-1 '>  <AiFillDollarCircle /></span>
                            <h3 class="text-[20px] my-2  font-medium hover:text-[#00D094]   cursor-pointermb-3"> Speculators</h3>
                            <p class=" text-center py-2">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores aspernatur quis repudiandae voluptas maiores modi,
                            </p>
                        </div> */}


                        <div class="   flex flex-col justify-center items-center bg-white   border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                            <div className='w-[70px] h-[70px] border-[2px] border-green-600  p-3 rounded-full text-center'>
                                <img src={participantCommodity} className='mb-2' />
                            </div>
                            <h3 class="text-[20px] my-2  font-medium  hover:text-[#00D094]   cursor-pointermb-3">Speculators</h3>
                            <p class=" py-2">A speculator is a party who most often does not handle the actual physical commodity. A speculator is someone who takes a chance at losing a lot of money when there's a prospect of making even more money.
                            </p>
                        </div>

                        <div class="  flex flex-col justify-center items-center bg-white px-4  border-2 border-gray-600  py-6 rounded-lg transform transition duration-500 hover:scale-110">
                            <div className='w-[70px] h-[70px] border-2 border-green-600 p-3 rounded-full text-center'>
                                <img src={participantCommodity} className='mb-2' />
                            </div>
                            <h3 class="text-[20px] my-2  font-medium hover:text-[#00D094]   cursor-pointermb-3">Hedgers</h3>
                            <p class=" py-2">A hedger is any individual or firm that buys or sells the actual physical commodity. A hedging instrument is any financial product that will enable traders to reduce or limit the risk in an underlying asset class, such as cash, shares, commodities, indices, and forex.

                            </p>
                        </div>

                    </div>
                </div>

            </section >

        </>
    )
}

export default TradingTip