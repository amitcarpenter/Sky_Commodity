import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import AffiliateImg from './assets/home-banner-bg.png'
import AboutMainSection from './assets/about-us.png'
import OurValue from './assets/our-value.png'
import { motion, AnimatePresence } from 'framer-motion'

import './About.css';
import { Helmet } from 'react-helmet';
import { AiOutlineSmile,  } from "react-icons/ai";
import {  BiTime, BiHappyAlt } from "react-icons/bi";
import { MdOutlineFollowTheSigns } from "react-icons/md";

import Jur from "../../src/components/Iconaasets/jur.jpg"
import exlle from "../../src/components/Iconaasets/exlle.jpg"
import International from "../../src/components/Iconaasets/International.jpg"
import perso from "../../src/components/Iconaasets/perso.jpg"

const About = () => {
    return (
        <>
            <Helmet>
                <title>Sky Commodity | About Us</title>
            </Helmet>
            <section id='about_hero' className='about_hero' style={{ backgroundImage: `url(${AffiliateImg})` }}>
                <div className='container'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                        <div className='flex justify-center items-center'>
                            <h1 className='text-white text-[40px] pt-3 md:text-[60px] lg:text-[60px] xl:text-[60px] 2xltext-[60px] font-bold'>About-US</h1>

                        </div>
                        <div className='  flex justify-center items-center'>
                            <AnimatePresence>
                                <motion.div
                                    initial={{ x: -50 }}
                                    animate={{ x: 10 }}
                                    exit={{ x: 100 }}
                                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", type: "tween", bounce: 0.25 }}
                                    className="two p-50px">
                                    <img src={AboutMainSection} alt='About.png' className='img-fluid'></img>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>  
                </div>
            </section>

            <section id="about-sec" class="about-sec " style={{ backgroundColor: "#cdd3e1" }}>
                {/* <p className=' text-2xl py-6 text-center'>At Sky Commodity, we are a team of passionate professionals who bring diverse backgrounds and expertise to the table. Our analysts, traders, and advisors have years of experience in the financial industry and are dedicated to helping our clients succeed</p> */}

            

                <div className='w-full py-8 md:py-16  bg-[#f8f8f8]'>
                    <div class="container aos-init aos-animate" data-aos="fade-up">
                        <div class=" md:py-4 ">
                            <div class=" p-2 md:p-12  ">

                                <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 '>
                                    <div className=' bg-slate-200 rounded-md shadow-lg  p-2.5 h-fit   '>
                                        <img class=" object-cover w-full"
                                            src={perso}
                                            alt="Who We Are Image"

                                        />
                                    </div>

                                    <div className='flex flex-col  md:pl-12  '>
                                        <h1 class=" text-[#059573] underline underline-offset-4 font-jost text-2xl md:text-3xl font-medium mb-4">About Our Company</h1>
                                        <p class=" text-[1rem] md:text-[1.2rem] text-black leading-[1.6rem] lg:leading-[2rem]   font-jost">
                                            Welcome to Sky Commodity, where financial expertise meets innovation in the world of share market trading. With a deep-rooted commitment to delivering value to our clients and a relentless pursuit of excellence, we have established ourselves as a trusted partner in the world of finance.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
 
                <div className='md:py-5 bg-[#e4dddd]'>
                    <div class="container aos-init aos-animate" data-aos="fade-up">
                        <div class="  md:py-4">
                            <div class="p-2 md:p-12 ">
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4  '>

                                    <div className='flex flex-col   order_change' >
                                        <h1 class=" text-[#ff5e14] font-jost  underline underline-offset-4 text-2xl md:text-3xl font-bold mb-4 ">Who We Are?</h1>
                                        <p class=" text-[1rem] md:text-[1.2rem] text-black  leading-[1.6rem] lg:leading-[2rem] font-jost">
                                            At Sky Commodity, we are a team of passionate professionals who bring diverse backgrounds and expertise to the table. Our analysts, traders, and advisors have years of experience in the financial industry and are dedicated to helping our clients succeed. We are driven by a shared commitment to integrity, transparency, and putting our clients' interests first.
                                        </p>
                                    </div>
                                    <div className=' bg-slate-200 rounded-md shadow-lg  p-2.5 h-fit md:ml-12 order_change2  '>
                                        <img class=" object-cover w-full"
                                            src={International}
                                            alt="Who We Are Image"
                                        />

                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

                <div className='  py-8 md:py-16 bg-[#f8f8f8]'>
                    <div class="container aos-init aos-animate" data-aos="fade-up">
                        <div class=" md:py-4">
                            <div class=" p-2 md:p-12  ">

                                <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 '>
                                    <div className=' bg-slate-200 rounded-md shadow-lg  p-2.5 h-fit   '>
                                        <img class=" object-cover w-full"
                                            src={exlle}
                                            alt="Who We Are Image"

                                        />
                                    </div>

                                    <div className='flex flex-col   md:pl-12 '>
                                        <h1 class=" text-[#059573] underline underline-offset-4 font-jost text-2xl md:text-3xl font-bold mb-4">Our Commitment to Excellence</h1>
                                        <p class=" text-[1rem] md:text-[1.2rem] text-black leading-[1.6rem] lg:leading-[2rem]  font-jost">
                                            We are committed to upholding the highest standards of integrity, security, and compliance in all our operations. We prioritize the safety of our client's investments and data, and we continuously invest in cutting-edge technology to ensure a secure and seamless trading experience.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='bg-[#e4dddd] md:py-4'>
                    <div class="container aos-init aos-animate" data-aos="fade-up">
                        <div class=" md:py-4">
                            <div class=" p-2 md:p-12 ">
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4  '>

                                    <div className='flex flex-col   order_change  ' >
                                        <h1 class=" text-[#ff5e14] font-jost  underline underline-offset-4 text-2xl md:text-3xl font-bold mb-4 ">Join Us on the Journey of trading</h1>
                                        <p class=" text-[1rem] md:text-[1.2rem] text-black leading-[1.6rem] lg:leading-[2rem] font-jost">
                                            Whether you're a seasoned investor or just starting your journey in the world of share market trading, we invite you to join us on this exciting journey. Sky Commodity is your trusted partner in achieving your financial aspirations. Together, we can navigate the complexities of the share market and unlock the potential for financial growth.                                    </p>
                                    </div>
                                    <div className=' bg-slate-200 rounded-md shadow-lg  p-2.5 h-fit md:ml-12 order_change2   '>
                                        <img class=" object-cover w-full"
                                            src={Jur}
                                            alt="Who We Are Image"

                                        />

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </section >
            {/* <section className="crypto-platform bg-[#cdd3e1] pt-[60px]">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                        <div className="  flex justify-center items-center">
                            <img src={AboutPlatform} alt='About.png' className='img-fluid'></img>
                        </div>
                        <div className="flex justify-center items-start flex-column">
                            <h4 className='text-[#000000] '>About Sky Commodity?</h4>
                            <h2 className='text-black pt-4'>We Built a Crypto Platform</h2>
                            <h2 className='text-black'>To Buy & Sell Shares</h2>
                            <p className='text-black text-[20px] pt-2'>Progressively predominate performance based internal or "orga sources before high standards in architectures. Interactively ini transparent functionalities via efficient ROI.</p>

                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section id='about_product' className='about_product bg-[#cdd3e1] pt-[60px]'>
                <div className='container'>
                    <div className='text-center'>
                        <h1 className='font-bold text-black'> Sky Commodity Products</h1>
                    </div>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 px-3  content-justify-center'>
                        <div className=' '>
                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                    <div className="circle-product flex justify-center items-center"><HiOutlineCursorArrowRipple className='text-yellow' size="2rem" /></div>
                                    <h3>Sky Commodity</h3>
                                </div>
                                <p>Sky Commodity seeks to provide deep and reliable liquidity in the cryptocurrency ecosystem. We deliver a variety of
                                    products and services, including margin trading, derivatives and institutional-grade connectivity
                                </p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                    <div className="circle-product flex justify-center items-center"><HiOutlineCursorArrowRipple className='text-yellow' size="2rem" /></div>
                                    <h3>Sky Commodity Pay</h3>
                                </div>

                                <p>Accept cryptocurrency payments for your goods or services, seamlessly. Access the
                                    world of cryptocurrency and explore its endless possibilities with a simple and easy setup
                                </p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                    <div className="circle-product flex justify-center items-center"><HiOutlineCursorArrowRipple className='text-yellow' size="2rem" /></div>
                                    <h3>Sky Commodity Borrow</h3>
                                </div>

                                <p>Set your own payment terms on our peer-to-peer platform using a number of different cryptocurrencies as collateral. You can use funds on
                                    Sky Commodity or withdraw and spend as you choose.
                                </p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                    <div className="circle-product flex justify-center items-center"><HiOutlineCursorArrowRipple className='text-yellow' size="2rem" /></div>
                                    <h3>UNUS SED LEO</h3>
                                </div>

                                <p>Sky Commodity native utility token, UNUS SED LEO, provides holders with a variety of benefits, including discounts
                                    on trading fees and P2P lending fees.
                                </p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                    <div className="circle-product flex justify-center items-center"><HiOutlineCursorArrowRipple className='text-yellow' size="2rem" /></div>
                                    <h3>Sky Commodity payment</h3>
                                </div>

                                <p>Accept cryptocurrency payments for your goods or services, seamlessly. Access the
                                    world of cryptocurrency and explore its endless possibilities with a simple and easy setup
                                </p>
                            </div>
                        </div>
                        <div className=''>

                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                    <div className="circle-product flex justify-center items-center"><HiOutlineCursorArrowRipple className='text-yellow' size="2rem" /></div>
                                    <h3>Affiliate Program</h3>
                                </div>

                                <p>Set your own payment terms on our peer-to-peer platform using a number of different cryptocurrencies as collateral. You can use funds on
                                    Sky Commodity or withdraw and spend as you choose
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section id="counts" class="counts  w-full py-[50px] ">
                <div class="container h-full aos-init aos-animate" data-aos="fade-up" >

                    <div class="row no-gutters">
                        {/* <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate" data-aos="fade-right" data-aos-delay="100"></div> */}
                        <div class="col-xl-8 mx-auto ps-4 ps-lg-5 pe-4 pe-lg-1 d-flex align-items-stretch aos-init aos-animate" >
                            <div class="content d-flex flex-column justify-content-center">
                                <h3 className="capitalize text-orange-500">Our Fields Of Activity in the Market</h3>
                                <p>
                                    We ensure the trading experience at Sky Commodity to be one of its kind,
                                    with the help of our expertise.
                                    It’s our passion to offer you the best Product, Technology & Service.                </p>
                                <div class="row mt-2">
                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <AiOutlineSmile />
                                            <span className="">Journey Started</span>
                                            <p> We started our journey in the field of trading in 2007.</p>
                                        </div>
                                    </div>

                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <BiTime />
                                            <span>Year Of Experience</span>
                                            <p> We have completed 13+ years in the trading field.</p>
                                        </div>
                                    </div>

                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <BiHappyAlt />
                                            <span data-purecounter-start="0" data-purecounter-end="35" data-purecounter-duration="0" class="purecounter">Happy Customers</span>
                                            <p>We have 3,15,650+ happy customers who always get benefits from us</p>
                                        </div>
                                    </div>

                                    <div class="col-md-6 d-md-flex align-items-md-stretch ">
                                        <div class="count-box">
                                            <MdOutlineFollowTheSigns />
                                            <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="0" class="purecounter">Follow Up</span>
                                            <p>We have 7,56,308+ customers who follow us.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section >

            <section id='about_value' className='about_value pb-[30px] md:pb-[50px] bg-[#cdd3e1] pt-[10px]'>
                <div className='container'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 justify-center items-center'>
                        <div className="">
                            <div className="row flex jutify-center items-center ">
                                <h1 className='text-black font-bold text-[36px]'>Our Values</h1>
                                <Accordion defaultActiveKey="0">
                                    <div className='col'>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header> <h3>Integrity</h3></Accordion.Header>
                                            <Accordion.Body>
                                                <p>  We uphold honesty, truthfulness, and ethical behavior in all aspects of life for our all clients.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                    <div className='col'>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header><h3> Respect</h3> </Accordion.Header>
                                            <Accordion.Body>
                                                <p>   We treat our clients with courtesy, consideration, and dignity, regardless of their background or beliefs.</p>
                                            </Accordion.Body>

                                        </Accordion.Item>
                                    </div>
                                    <div className='col'>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header> <h3>Responsibility</h3></Accordion.Header>
                                            <Accordion.Body>
                                                <p>We take ownership of your actions and obligations, and fulfilling your commitments.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </div>

                                    <div className='col'>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header> <h3> Compassion </h3> </Accordion.Header>
                                            <Accordion.Body>
                                                <p>We demonstrate empathy and kindness toward our clients, especially in times of need or suffering.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                    <div className='col'>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>  <h3>Creativity</h3>  </Accordion.Header>
                                            <Accordion.Body>
                                                <p>We nurture your imagination and express yourself through artistic or innovative endeavors.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                    <div className='col'>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>  <h3>Achievement</h3>  </Accordion.Header>
                                            <Accordion.Body>
                                                <p>We strive for excellence, setting goals, and working for our clients diligently to accomplish them.
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                </Accordion>
                            </div>

                        </div>
                        <div className=" flex justify-end items-end ">
                            <AnimatePresence>
                                <motion.div
                                    initial={{ y: 100 }}
                                    animate={{ y: 20 }}
                                    exit={{ y: 100 }}
                                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", type: "tween", bounce: 0.25 }}>
                                    <img src={OurValue} alt='About.png' className='img-fluid' />

                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="news__blog bg-[#353c4b] pt-[100px]">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                        <div className="">
                            <h4 className='text-[#000000] '>News</h4>
                            <h2 className='text-black pt-4'>From the blog</h2>
                            <p className='text-black pt-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                            <button className=' view-btn text-white bg-[#ff5e14]' >View More</button>
                        </div>
                        <div className="">
                            <div className=" grid grid-cols-2 gap-4">
                                <div className="">
                                    <div className="main-card mb-5">
                                        <div className="img-w-img">
                                            <img src={BoxImg1} alt='About.png' className='img-fluid rounded-t-xl'></img>
                                        </div>
                                        <div className="card-content">
                                            <h5 className='text-white font-bold pt-1  text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]'>From the blog</h5>
                                            <p className='text-white pt-1  text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]'>It is a long established fact that a reader will be distracted </p>
                                            <NavLink className='anchor-text text-white font-bold pt-2  text-[10px] md:text-[12px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]' as={Link} to={"/"}><h5 > Read More</h5></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                <div className="main-card mb-4">
                                        <div className="img-w-img">
                                            <img src={BoxImg2} alt='About.png' className='img-fluid rounded-t-xl  '></img>
                                        </div>
                                        <div className="card-content">
                                            <h5 className='text-white font-bold pt-1 text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] '>From the blog</h5>
                                            <p className='text-white pt-1 text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]'>It is a long established fact that a reader will be distracted</p>
                                    
                                            <NavLink className='anchor-text text-white font-bold pt-2  text-[10px] md:text-[12px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]' as={Link} to={"/"}><h5 > Read More</h5></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default About