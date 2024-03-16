import React from 'react'
import "./statergytip.css"
import { useTransition, useSpring, animated } from 'react-spring';
import intradaystartergy from "../../components/Iconaasets/Intraday Trading Strategies.png"
import { Helmet } from 'react-helmet';
const StatergyTip = () => {

    const transitions = useTransition(true, {
        from: { opacity: 0, transform: 'scale(0.8)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0.8)' },
        trail: 500,
    });




    return (
        <>


            <Helmet>
                <title>Sky Commodity | StatergyTip</title>
            </Helmet>
            <section id="" className='stat_warp'>


                <div className='container'>
                    <div className='row gy-4 mb-5'>
                        <h2 className='sm:text-start' style={{
                            color: "#059473", paddingTop: "46px", fontSize: "32px",
                            fontWeight: "500", paddingBottom: "30px"
                        }}>Best Intraday Trading Strategies</h2>

                        {/* Use transitions to apply animations */}
                        {transitions((style, item) =>
                            item && (
                                <>

                                    <animated.div className='col-lg-4' style={style}>
                                        <div className='serv_wrap'>
                                            <div className='w-[70px] h-[70px]  border-[2px] border-green-600 p-3 rounded-full text-center'>
                                                <img src={intradaystartergy} className='mb-2' />
                                            </div>
                                            <div>
                                                <h3 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}> Moving Average Crossover</h3>
                                            </div>
                                            <div style={{ paddingTop: "15px", }}>
                                                <p className='pl-1 leading-[24px] '>A moving average crossover is a popular trading strategy that uses two or extra moving averages to analyze potential
                                                    buy and sell signals.

                                                </p>
                                            </div>
                                        </div>
                                    </animated.div>
                                    <animated.div className='col-lg-4' style={style}>
                                        <div className='serv_wrap'>
                                            <div className='w-[70px] h-[70px]  border-[2px] border-green-600 p-3 rounded-full text-center'>
                                                <img src={intradaystartergy} className='mb-2' />
                                            </div>
                                            <div>
                                                <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>Reversal Trading </h6>
                                            </div>
                                            <div style={{ paddingTop: "15px", }}>
                                                <p className='pl-1 leading-[24px]'>A reversal is when the direction of a price movement has changed, from increase to decrease, or vice-versa. It is also known as Pull Back Trading.</p>
                                            </div>

                                        </div>
                                    </animated.div>
                                    <animated.div className='col-lg-4' style={style}>
                                        <div className='serv_wrap'>
                                            <div className='w-[70px] h-[70px]  border-[2px] border-green-600 p-3 rounded-full text-center'>
                                                <img src={intradaystartergy} className='mb-2' />
                                            </div>
                                            <div>
                                                <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>Momentum Trading </h6>
                                            </div>
                                            <div style={{ paddingTop: "15px", }}>
                                                <p className='pl-1 leading-[24px]'>Momentum trading is an investment strategy involving buying an asset that has shown a significant movement in price or volume.

                                                </p>
                                            </div>

                                        </div>
                                    </animated.div>



                                    <animated.div className='col-lg-4' style={style}>
                                        <div className='serv_wrap'>
                                            <div className='w-[70px] h-[70px]  border-[2px] border-green-600 p-3 rounded-full text-center'>
                                                <img src={intradaystartergy} className='mb-2' />
                                            </div>
                                            <div>
                                                <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>Bull Flag Trading </h6>
                                            </div>
                                            <div style={{ paddingTop: "15px", }}>
                                                <p className='pl-1 leading-[24px]'>A Bull Flag Pattern is formed, then place a buy-stop order above the swing high. The bull flag diagram is a continuation chart pattern that facilitates an extension of the uptrend.</p>
                                            </div>

                                        </div>
                                    </animated.div>
                                    <animated.div className='col-lg-4' style={style}>
                                        <div className='serv_wrap'>
                                            <div className='w-[70px] h-[70px]  border-[2px] border-green-600 p-3 rounded-full text-center'>
                                                <img src={intradaystartergy} className='mb-2' />
                                            </div>
                                            <div>
                                                <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>Pull back trading </h6>
                                            </div>
                                            <div style={{ paddingTop: "15px", }}>
                                                <p className='pl-1 leading-[24px]'>The pullback trading strategy is a common trading technique that allows traders to profit from short-term market corrections within the framework of a wider trend.</p>
                                            </div>

                                        </div>
                                    </animated.div>
                                    <animated.div className='col-lg-4' style={style}>
                                        <div className='serv_wrap'>
                                            <div className='w-[70px] h-[70px]  border-[2px] border-green-600 p-3 rounded-full text-center'>
                                                <img src={intradaystartergy} className='mb-2' />
                                            </div>
                                            <div>
                                                <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>Breakout Trading </h6>
                                            </div>
                                            <div style={{ paddingTop: "15px", }}>
                                                <p className='pl-1 leading-[24px]'>Breakout in Technical Analysis refers to when the price of an asset moves above a resistance area or moves below a support area.</p>
                                            </div>

                                        </div>
                                    </animated.div>


                                    <animated.div className='col-lg-4' style={style}>
                                        <div className='serv_wrap'>
                                            <div className='w-[70px] h-[70px]  border-[2px] border-green-600 p-3 rounded-full text-center'>
                                                <img src={intradaystartergy} className='mb-2' />
                                            </div>
                                            <div>
                                                <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>Pivot Point</h6>
                                            </div>
                                            <div style={{ paddingTop: "15px", }}>
                                                <p className='pl-1 leading-[24px]'>the average of the intraday high and low, and the closing price from the previous trading day. A pivot point strategy is beneficial in critical support and resistance-level situation.</p>
                                            </div>

                                        </div>
                                    </animated.div>
                                    <animated.div className='col-lg-4' style={style}>
                                        <div className='serv_wrap'>
                                            <div className='w-[70px] h-[70px]  border-[2px] border-green-600 p-3 rounded-full text-center'>
                                                <img src={intradaystartergy} className='mb-2' />
                                            </div>
                                            <div>
                                                <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>CFD Strategy</h6>
                                            </div>
                                            <div style={{ paddingTop: "15px", }}>
                                                <p className='pl-1 leading-[24px]'> CFD allows traders to speculate on the future market movements of an underlying asset, without actually owning or taking physical delivery of the underlying asset.</p>
                                            </div>

                                        </div>
                                    </animated.div>
                                    <animated.div className='col-lg-4' style={style}>
                                        <div className='serv_wrap'>
                                            <div className='w-[70px] h-[70px]  border-[2px] border-green-600 p-3 rounded-full text-center'>
                                                <img src={intradaystartergy} className='mb-2' />
                                            </div>
                                            <div>
                                                <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>Scalping Strategy</h6>
                                            </div>
                                            <div style={{ paddingTop: "15px", }}>
                                                <p className='pl-1 leading-[24px]'>Scalping means entering and exiting your orders within a few seconds to a few minutes. A scalper does this with the sole aim of earning profit during a short-term price fluctuation.</p>
                                            </div>

                                        </div>
                                    </animated.div>
                                </>
                            )
                        )}


                    </div>

                </div>
            </section>
        </>
    )
}

export default StatergyTip