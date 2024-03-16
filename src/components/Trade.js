import React from 'react'

import './Home/Home.css'
import budget from "../../src/components/Iconaasets/budget.png"
import convenient from "../../src/components/Iconaasets/convenient.png"
import risk from "../../src/components/Iconaasets/risk.png"
import user_risk from "../../src/components/Iconaasets/user-experience.png"
import monitor from "../../src/components/Iconaasets/monitor.png"
import long_term from "../../src/components/Iconaasets/long-term.png"


const Trade = () => {

    const trade = [
        {

            image: user_risk,
            heading: "Expertise and Experience",
            title: "We have experienced professionals who can provide guidance and make informed investment decisions on your behalf. We have access to research, market insights, and tools that can help you achieve your financial goals."
        },
        {
            image: monitor,
            heading: "Regular Monitoring",
            title: "Our professional executive typically involves regular monitoring and adjustments to your portfolio as market conditions change. This active management can help you optimize returns and minimize losses."
        },
        {
            image: budget,
            heading: "Financial Planning",
            title: "We provide financial planning services in addition to investment management. They can help you create a comprehensive financial plan that aligns with your goals and helps you stay on track."
        },
        {
            image: convenient,
            heading: "Convenience",
            title: "We have a reputable executive. They often offer online platforms and mobile apps that make it easy to manage your investments, monitor performance, and make changes to your portfolio."
        },
        {
            image: risk,
            heading: "Risk Management",
            title: "We can help you assess your risk tolerance and design a portfolio that matches your comfort level while still working toward your financial objectives."
        },
        {
            image: long_term,
            heading: "Long-Term Perspective",
            title: "We can help you stay disciplined during market fluctuations, avoid emotional decisions that might hurt your returns and focus on long-term investment strategies and the importance of avoiding short-term speculation."
        }
    ]




    return (
        <div>
            <section id="servies-section" className='servies-section mb-5'>
                <div className='container'>
                    <h2 className='text-center capitalize text-[#059473] text-[28px] font-medium  font-jost pt-[46px] pb-[12px] leading-[48px] md:text-[38px] md:leading-[55px]'>Why invest with us</h2>
                    <div className="col flex justify-center items-center text-center flex-row gap-1">
                        <div className="color1"></div> <div className="color2"></div>{" "}
                        <div className="color3"></div> <div className="color4"></div>{" "}
                        <div className="color5"></div> <div className="color6"></div>
                    </div>
                    <div className='row gy-4'>


                        {
                            trade.map((trad, index) => {
                                return (
                                    <div className='col-lg-4 ' key={index}>
                                        <div className='servv md:h-[335px] '>
                                            <div >
                                                <img src={trad.image} alt="" style={{ margin: "auto", width: "50px", height: "50px" }} />
                                            </div>
                                            <div>
                                                <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>{trad.heading}</h6>
                                            </div>
                                            <div style={{ paddingTop: "15px", fontSize: "17px" }}>
                                                <p className=''>{trad.title}</p>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Trade