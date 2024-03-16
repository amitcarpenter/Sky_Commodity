import React from 'react'
// import { FaLocationDot } from 'react-icons/fa';
import { BsChatSquareTextFill } from "react-icons/bs"
import { BiSolidPhoneCall, BiMoneyWithdraw } from "react-icons/bi"
import { IoIosContacts } from "react-icons/io"
import { FaHeadphones } from "react-icons/fa"
// import {IoLocationSharp} from "react-icons/io"
import { MdLocationOn } from "react-icons/md"

import './Home/Home.css'
const Servies_section = () => {
    return (
        <>
            <section id="servies-section" className=' py-[50px]  bg-cover bg-no-repeat '>
            {/* bg-gradient-to-r from-[#059473]/60 via-indigo-200 to-[#059473]/20   */}
                <h2 className='text-center text-[#059473] text-[28px]  font-jost font-medium  pb-[5px] leading-[48px] md:text-[38px] md:leading-[57px] '
                >Our Services</h2>
                <div className="col flex justify-center items-center text-center flex-row gap-2">
                    <div className="color1"></div> <div className="color2"></div>{" "}
                    <div className="color3"></div> <div className="color4"></div>{" "}
                    <div className="color5"></div> <div className="color6"></div>
                </div>

                <div className='container'>
                    <div className='row gy-4 mt-4 seve-g    ' data-aos="fade-down"  >

                        <div className='col-lg-4'>
                            <div className='serv hover:bg-indigo-200'>
                                <div >
                                    <MdLocationOn className='icon_svg' style={{ margin: "auto", width: "40px", height: "40px" }} />
                                </div>
                                <div>
                                    <h6 className='text-center capitalize' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>points of attention</h6>
                                </div>
                                <div style={{ paddingTop: "13px", fontSize: "19px" }}>
                                    <p className='ml-4 '> Plan your visit to our offices in advance.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='serv'>
                                <div>
                                    <BsChatSquareTextFill className='icon_svg' />
                                </div>
                                <div>
                                    <h6 className='text-center capitalize' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>online chat</h6>
                                </div>
                                <div style={{ paddingTop: "15px", fontSize: "19px" }}>
                                    <p>Our all clients can get advice and find responses to questions in real-time.</p>
                                </div>

                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='serv'>
                                <div>
                                    <FaHeadphones className='icon_svg' />
                                </div>
                                <div>
                                    <h6 className='text-center capitalize' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>call us</h6>
                                </div>
                                <div style={{ paddingTop: "15px", fontSize: "19px" }}>
                                    <p> We provide all trading information to our clients via calls.</p>
                                </div>

                            </div>
                        </div>



                        <div className='col-lg-4'>
                            <div className='serv'>
                                <div>
                                    <BiSolidPhoneCall className='icon_svg' />
                                </div>
                                <div>
                                    <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>We Call You </h6>
                                </div>
                                <div style={{ paddingTop: "15px", fontSize: "19px" }}>
                                    <p>We are available for you 24*7 in a week. Schedule a time to call.</p>
                                </div>

                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='serv'>
                                <div >
                                    <IoIosContacts className='icon_svg' />
                                </div>
                                <div>
                                    <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}> Executive Support</h6>
                                </div>
                                <div style={{ paddingTop: "15px", fontSize: "19px" }}>
                                    <p> We have high-level experienced trading executives for client support always.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='serv'>
                                <div>
                                    <BiMoneyWithdraw className='icon_svg' />
                                </div>
                                <div>
                                    <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "8px", color: "#059473", fontWeight: "bold" }}>PayIn PayOut</h6>
                                </div>
                                <div style={{ fontSize: "19px" }}>
                                    <p>Payin and Payouts are the days when brokers and exchanges make payment or delivery of the securities.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Servies_section