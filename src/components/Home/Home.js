import React, { useEffect, useState } from "react";
import "./Home.css";
import "../Future/Future.css";
// import { BiDollar } from "react-icons/bi";
// import { BiDollar, BiTime, BiHappyAlt } from "react-icons/bi";
import Swipper from "./Swipper";
import Video from "../../components/Iconaasets/ShareMarket.mp4";

import GoogleStore from "../assets/google-store-btn.png";
import { BsPlusCircleDotted } from "react-icons/bs";
import { MdOutlineInsights, MdOutlineFollowTheSigns } from "react-icons/md";
import { AiOutlineBank } from "react-icons/ai";

// import { AiOutlineSmile, AiOutlineProject, AiOutlineClockCircle } from "react-icons/ai";
import axios from "axios";

import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AppContext } from "../../Context/Context";
import Testimonial from "./Testimonial";
import Servies_section from "../Servies_section";
import Trade from "../Trade";
import Activity from "../Activity";

import quality from "../../components/Iconaasets/quality.png";
import cliet from "../../components/Iconaasets/cliet.png";
import custum from "../../components/Iconaasets/custum.png";
import interg from "../../components/Iconaasets/interg.png";
import Intraday_trading1 from "../../components/Iconaasets/Intraday-trading1.jpg";
import intraday1 from "../../components/Iconaasets/intraday1.jpg";
import { Collapse } from "react-collapse";
import stock1 from "../../components/Iconaasets/stock1.png";
import stock2 from "../../components/Iconaasets/stock2.png";
import stock3 from "../../components/Iconaasets/stock3.png";
import stock4 from "../../components/Iconaasets/stock4.png";
import mobileIcon from "../../components/Iconaasets/mobileIcon.png";
import Tradr from "../../components/Iconaasets/Trade.webp";
import low from "../../components/Iconaasets/low.jpg";
import Research from "../../components/Iconaasets/Research.jpg";
import acess from "../../components/Iconaasets/acess.webp";
import train from "../../components/Iconaasets/train.jpg";
import day from "../../components/Iconaasets/day.jpg";

const Home = () => {
  const Data = useContext(AppContext);
  const [coins, setCoins] = useState([]);
  const [isshow, setisshow] = useState(false);
  const [isopen, setisopen] = useState(false);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const trade = [
    {
      image: Tradr,
      heading: "Trading Technology",
      title:
        "We offer a robust and user-friendly trading platform with advanced technology and real-time data for our clients.",
    },
    {
      image: Research,
      heading: "Research and Analysis",
      title:
        "We provide comprehensive market research, analysis, and investment recommendations to help clients make informed trading decisions.",
    },
    {
      image: acess,
      heading: "Market Access",
      title:
        "We ensure reliable and secure access to the stock market, with redundancy and failover systems to minimize downtime.",
    },
    {
      image: train,
      heading: "Education and Training",
      title:
        "Our focus is on educating clients and offering trading courses, webinars, and resources to help clients become more knowledgeable.",
    },
    {
      image: day,
      heading: "Day Trading",
      title:
        "Our focus is on short-term trading strategies, often buying and selling securities within the same trading day.",
    },
    {
      image: low,
      heading: "Low-Cost Trading",
      title:
        "Competing on the cost by offering low commissions, minimal fees, and cost-effective trading solutions for clients.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sky Commodity | Home</title>
      </Helmet>
      <section className="hero">
        <div className="container">
          <div className="row flex justify-start items-center top-main-content gy-4 ">
            <div className="col-lg-6 mt-5">
              <div className="discover text-black">
                <h6 className="discover-text">
                  {" "}
                  Multiply Your Savings With Sky Commodity{" "}
                </h6>
              </div>
              <div className="trade-wrape-div">
                <h3 className="Trade-text-main">
                  {/* Trade like a legend on the legendary crypto exchange */}
                  We help you invest and make money with our experience.
                </h3>
                <p className="trade-para">
                  {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error quasi esse fugit modi hic quae, reprehenderit ipsam?
                  Fugit aut eos rerum suscipit labore at necessitatibus
                  dignissimos, sit officia error assumenda. */}
                  Investing Experience in the Commodity market and stocks and We
                  will help you invest money, manage, and grow your money!{" "}
                </p>
              </div>
              <div className="front-btn flex justify-start gap-4 ">
                <button className="main-btn"> Get Started</button>
                {/* <button className="main-btn"> Get Started</button> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="outervideo">
                <video autoPlay loop muted className="videostyle">
                  <source src={Video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40px">
        <div className="container">
          <div className="row flex justify-center items-center pt-1">
            <div className="col-lg-6 col-md-6 col-sm-12 home-content-wrapper">
              <h3 className="main__common__heading text-black pb-1 pt-4 font-bold font-jost">
                Intraday Trading
              </h3>
              <div className="col flex justify-start items-center text-center flex-row gap-1">
                <div className="color1"></div> <div className="color2"></div>{" "}
                <div className="color3"></div> <div className="color4"></div>{" "}
                <div className="color5"></div> <div className="color6"></div>
              </div>
              <p className="main__common__para text-black pt-3">
                Intraday trades, also known as day trading, involve buying and
                selling a stock within a trading session, i.e. on the same day.
                If you do not square off your situation by the end of the day,
                your stock can be sold automatically at the day’s closing price
                under assured brokerage plans. Maximum traders set up an
                intraday trade by setting a target price for a stock and buying
                it if it is trading under the target price.
              </p>

              <Collapse isOpened={isopen}>
                <p className="main__common__para text-black pt-3">
                  They then sell the stock if it reaches the target price or if
                  they feel the stock won’t reach the target before the market
                  closes for the day. The idea behind trading shares intraday is
                  to make quick profits within a day.
                </p>
              </Collapse>

              <button className="main-btn" onClick={() => setisopen(!isopen)}>
                Read more
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="main__image__common" data-aos="fade-left">
                <img
                  src={Intraday_trading1}
                  alt=""
                  className="img-fluid rounded-md"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-ful py-40px">
        <div className="container ">
          <div className="row flex justify-center items-center pt-1 ">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="main__image__common" data-aos="fade-right">
                <img
                  src={intraday1}
                  alt=""
                  className="img-fluid rounded-md"
                ></img>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 home-content-wrapper">
              <h3 className="main__common__heading text-black pb-1 pt-4 font-bold">
                Stock Holdings
              </h3>
              <div className="col flex justify-start items-center text-center flex-row gap-1">
                <div className="color1"></div> <div className="color2"></div>{" "}
                <div className="color3"></div> <div className="color4"></div>{" "}
                <div className="color5"></div> <div className="color6"></div>
              </div>
              <p className="main__common__para text-black pt-3">
                Stock holdings refer to the number of stocks, or shares, that a
                person or institution owns in a company. These make up a portion
                of an investment portfolio, by futures, bonds, mutual funds and
                other assets. Each of these is an investment that can boost in
                profit, generating a return for the holder.
              </p>

              <Collapse isOpened={isshow}>
                <p className="main__common__para text-black pt-3">
                  A different portfolio contains a range of investments across
                  multiple sectors. Rather than putting all your money in one
                  stock, you increase it across investment products that can
                  appreciate in value in different ways.
                </p>
              </Collapse>

              <button className="main-btn" onClick={() => setisshow(!isshow)}>
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>

      <Servies_section />
      <Trade />
      <Activity />

      <section id="about-home" class="about-home">
        <div class="section-header text-center">
          <h2
            className="text-center capitalize  text-[28px] font-medium font-jost leading-[48px] md:text-[38px] md:leading-[55px]"
            style={{ paddingTop: "46px", color: "#059473", fontWeight: "500" }}
          >
            About Us
          </h2>
          {/* <p>Learn More <span>About Us</span></p> */}
          <div className="col flex justify-center items-center text-center flex-row gap-1">
            <div className="color1"></div> <div className="color2"></div>{" "}
            <div className="color3"></div> <div className="color4"></div>{" "}
            <div className="color5"></div> <div className="color6"></div>
          </div>
        </div>
        <div
          class="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="row align-items-xl-center gy-5">
            <div class="col-xl-5 content">
              <h2 className="mb-3 text-[#059473]  ">
                Know About Sky Commodity
              </h2>

              <p>
                Sky Commodity was started in 2007, Sky Commodity now has a
                presence in over 50+ locations with 13+ years 3.5+ Lakhs happy
                customers, and 7.5+ lakh follow-up customers nationwide. Sky
                Commodity earned the trust of these valued investors by
                providing them with top-notch services in various trading and
                investment.
              </p>
            </div>

            <div
              class="col-xl-7"
              style={{ marginTop: "100px", marginBottom: "60px" }}
            >
              <div class="row gy-4 icon-boxes">
                <div
                  class="col-md-6 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div class="icon-box">
                    {/* <AiFillInstagram /> */}
                    <img src={quality} className="w-16 h-16 mb-2" alt="log" />
                    <h3>QUALITY</h3>
                    <p>
                      Our <strong className="font-semibold">QUALITY</strong> of
                      services will be the best in India. We will provide
                      excellence, and respond vigorously to change. We are
                      responsible for the quality of whatever we provide.
                    </p>
                  </div>
                </div>

                <div
                  class="col-md-6 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div class="icon-box">
                    <img src={cliet} className="w-12 h-12  mb-2" alt="log" />
                    <h3>CLIENT</h3>
                    <p>
                      We value our{" "}
                      <strong className="font-semibold">CLIENT</strong> always.
                      We treat one another with respect and take pride in the
                      significance. We are committed to openness and trust in
                      all relationships.
                    </p>
                  </div>
                </div>

                <div
                  class="col-md-6 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div class="icon-box">
                    <img src={custum} className="w-12 h-12  mb-2" alt="log" />
                    <h3>CUSTOMER</h3>
                    <p>
                      We deliver{" "}
                      <strong className="font-semibold">CUSTOMER</strong>{" "}
                      satisfaction. We are dedicated to satisfying our
                      customers. We strive to exceed their expectations in
                      affordability, quality and on-time delivery.
                    </p>
                  </div>
                </div>

                <div
                  class="col-md-6 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div class="icon-box">
                    <img
                      src={interg}
                      className="w-12 h-12 mb-2 object-cover"
                      alt="log"
                    />
                    <h3 className="">INTEGRITY</h3>
                    <p>
                      We act with{" "}
                      <strong className="font-semibold">INTEGRITY</strong> in
                      all we do. We fulfill our responsibility & commitments to
                      our clients. We will consistently treat customers and
                      company resources with the respect they deserve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slider__section__main bg-[#1EB2A6]">
        <div className="container">
          <div className="row flex justify-center items-center text-center ">
            <h3 className="text-white text-center capitalize text-[28px] font-medium font-jost  leading-[48px] md:text-[38px] md:leading-[55px]">
              We are Trusted
            </h3>
            <div className="col flex justify-center items-center text-center flex-row gap-1">
              <div className="color1"></div> <div className="color2"></div>{" "}
              <div className="color3"></div> <div className="color4"></div>{" "}
              <div className="color5"></div> <div className="color6"></div>
            </div>
            <div className="slider-here pt-5">
              <Swipper />
            </div>

            {/* coins section */}
            {/* <div className="row mt-5">
              <NavbarCoins />
              <Routes>
                <Route path="/" element={<Coins coins={coins} />} />
                <Route path="/coin" element={<Coin />}>
                  <Route path=":coinId" element={<Coin />} />
                </Route>
              </Routes>
            </div> */}

            {/* <div className="row flex justify-center items-center pt-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="main__image__common" data-aos="fade-right">
                <img src={intraday1} alt="" className="img-fluid rounded-md"></img>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 home-content-wrapper">
              <h3 className="main__common__heading text-black pb-1 pt-4">
                Stock holdings
              </h3>
              <div className="col flex justify-start items-center text-center flex-row gap-1">
                <div className="color1"></div> <div className="color2"></div>{" "}
                <div className="color3"></div> <div className="color4"></div>{" "}
                <div className="color5"></div> <div className="color6"></div>
              </div>
              <p className="main__common__para text-black pt-3">
                Stock holdings refer to the number of stocks, or shares, that a person or institution owns in a company. These make up a portion of an investment portfolio, by futures, bonds, mutual funds and other assets. Each of these is an investment that can boost in profit, generating a return for the holder.
              </p>


              <Collapse isOpened={isshow}>
                <p className="main__common__para text-black pt-3">
                  A different portfolio contains a range of investments across multiple sectors. Rather than putting all your money in one stock, you increase it across investment products that can appreciate in value in different ways.
                </p>
              </Collapse>

              <button className="main-btn" onClick={() => setisshow(!isshow)}>Read more</button>
            </div>
          </div> */}
            {/* <div className="row flex justify-center items-center pt-2">
            <div className="col-lg-6 col-md-6 col-sm-12 home-content-wrapper">
              <h3 className="main__common__heading text-black pb-1 pt-4">
                Peer-To-Peer
              </h3>
              <div className="col flex justify-start items-center text-center flex-row gap-1">
                <div className="color1"></div> <div className="color2"></div>{" "}
                <div className="color3"></div> <div className="color4"></div>{" "}
                <div className="color5"></div> <div className="color6"></div>
              </div>
              <p className="main__common__para text-black pt-3">
                An intuitive interface for trading all your assets. Trade any of
                the currencies supported by Sky Commodity or over 100 other IOUs on
                the XRP Ledger decentralized exchange. Explore and analyze the
                markets.The new Trade page works for you whether you're a
                beginner or a seasoned trader.
              </p>
              <p className="main__common__para text-black pt-3">
                An intuitive interface for trading all your assets. Trade any of
                the currencies supported by Sky Commodity or over 100 other IOUs on
                the XRP Ledger decentralized exchange. Explore and analyze the
                markets.The new Trade page works for you whether you're a
                beginner or a seasoned trader.
              </p>
              <button className="main-btn">Read more</button>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="main__image__common" data-aos="fade-left">
                <img src={p2pImg} alt="" className="img-fluid"></img>
              </div>
            </div>
          </div> */}

            {/* <div className="row flex justify-center items-center pt-2">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="main__image__common" data-aos="fade-right">
                <img src={intraday1} alt="" className="img-fluid"></img>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 home-content-wrapper">

              <h3 className="main__common__heading text-black pb-1 pt-4">
                Easy To Invest
              </h3>
              <div className="col flex justify-start items-center text-center flex-row gap-1">
                <div className="color1"></div> <div className="color2"></div>{" "}
                <div className="color3"></div> <div className="color4"></div>{" "}
                <div className="color5"></div> <div className="color6"></div>
              </div>
              <p className="main__common__para text-black pt-3">
                An intuitive interface for trading all your assets. Trade any of
                the currencies supported by Sky Commodity or over 100 other IOUs on
                the XRP Ledger decentralized exchange. Explore and analyze the
                markets.The new Trade page works for you whether you're a
                beginner or a seasoned trader.
              </p>
              <p className="main__common__para text-black pt-3">
                An intuitive interface for trading all your assets. Trade any of
                the currencies supported by Sky Commodity or over 100 other IOUs on
                the XRP Ledger decentralized exchange. Explore and analyze the
                markets.The new Trade page works for you whether you're a
                beginner or a seasoned trader.
              </p>
              <button className="main-btn">Read more</button>
            </div>
          </div> */}
          </div>
        </div>
      </section>

      <section id="servies-section" className="py-[30px] md:py-[40px]   ">
        <div className="container">
          <h2 className=" capitalize text-center text-[#059473] text-[28px] font-medium font-jost pb-[5px] leading-[48px] md:text-[38px] md:leading-[57px] ">
            Our Trading specialties
          </h2>
          <div className="w-60  mx-auto flex justify-center gap-2">
            <div className="w-3 h-3 rounded-full p-1 bg-orange-500"></div>
            <div className="w-3 h-3 rounded-full p-1 bg-orange-500"></div>
            <div className="w-3 h-3 rounded-full p-1 bg-[#059473]"></div>
            <div className="w-3 h-3 rounded-full p-1 bg-[#059473]"></div>
            <div className="w-3 h-3 rounded-full p-1 bg-orange-500"></div>
            <div className="w-3 h-3 rounded-full p-1 bg-orange-500"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {trade.map((spece) => {
              return (
                <div className="  border-b-[10px] border-b-[#ff5e14] rounded-lg  h-auto md:h-[410px] bg-white overflow-hidden">
                  <div className="">
                    <img
                      className=" w-full h-32   lg:h-48   object-cover rounded-t-lg"
                      src={spece.image}
                      alt={spece.image}
                    />
                  </div>
                  <div className="inner__worldClass__content">
                    <h3 className="inner__wordclass__heading">
                      {spece.heading}
                    </h3>
                    <p className="inner__worldClass__para">{spece.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mobile-platform__section ">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-gap-4 pt-4 trusted-platform">
            <div className="col">
              <div className="mobile_circule_outer"></div>
              <div className="mobile-image">
                <img
                  src={mobileIcon}
                  alt="mobile"
                  className="w-full moving-rotating-image   md:h-[560px]"
                />
              </div>
            </div>
            <div className="col">
              <div className="mobile__content features-future">
                <h2 className="text-[20px] text-[#1EB2A6] uppercase pt-3 pb-1">
                  Do your investment needs Directly through{" "}
                </h2>
                <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold font-popin">
                  The Mobile Apps
                </h1>
                <div className="col flex justify-start items-center text-center flex-row gap-1 mb-5">
                  <div className="color1"></div> <div className="color2"></div>{" "}
                  <div className="color3"></div> <div className="color4"></div>{" "}
                  <div className="color5"></div> <div className="color6"></div>
                </div>
                <div
                  class="icon-box shadow-md mt-4 mt-lg-0 aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  {/* <i class="bx bx-receipt"></i><BsFillCalendar2EventFill /> */}

                  <div className="flex ">
                    <img
                      src={stock1}
                      className=" w-10 h-10 rounded-lg"
                      alt="trade"
                    />
                    <div style={{ padding: "0px !important" }}>
                      <h4 className="font-bold">Intraday Trading</h4>
                      <p>
                        Now you can buy and sell multiple shares in intraday by
                        our mobile app.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="icon-box shadow-md  mt-4 aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <div className="flex ">
                    <img
                      src={stock2}
                      className=" w-10 h-10 rounded-lg"
                      alt="trade"
                    />
                    <div style={{ padding: "0px !important" }}>
                      <h4>Stock Holdings</h4>
                      <p>
                        Now you can buy and sell multiple shares in holdings by
                        our mobile app.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="icon-box shadow-md  mt-4 aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <div className="flex ">
                    <img
                      src={stock3}
                      className=" w-10 h-10 rounded-lg"
                      alt="trade"
                    />
                    <div style={{ padding: "0px !important" }}>
                      <h4>Common Stock</h4>
                      <p>
                        Now you can buy and sell multiple shares in common stock
                        by our mobile app.
                      </p>
                    </div>
                  </div>

                  {/* <i class="bx bx-shield"></i><BsFillCalendar2EventFill /> */}
                </div>
                <div
                  class="icon-box shadow-md   mt-4 aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <div className="flex ">
                    <img
                      src={stock4}
                      className=" w-10 h-10 rounded-lg"
                      alt="trade"
                    />
                    <div style={{ padding: "0px !important" }}>
                      <h4>Preferred Stock</h4>
                      <p>
                        Now you can buy and sell multiple shares in preferred
                        stock by our mobile app.
                      </p>
                    </div>
                  </div>

                  {/* <i class="bx bx-images"></i><BsFillCalendar2EventFill /> */}
                </div>
                {/* <p className="mobile__para text-black">
                  The Sky Commodity mobile app adapts the full functionality of the
                  Sky Commodity platform for seamless ‘on-the-go’ trading.
                  <br />
                  The Sky Commodity Mobile application allows you to connect to your
                  Sky Commodity trading account and provide live information about
                  your open orders as well as the status of your account.
                  Wherever you are, you can easily make changes to your trades
                  and never have to miss an opportunity again.
                </p>
                
                <p className="mobile__para text-black">
                  The dawn of a better world that is freer. Send or receive any
                  amount of money from anywhere on the planet!
                </p> */}
                <div className="row flex justify-start gap-4 pt-3 appStoreBtn">
                  <div className="col">
                    <a href="./Sky_commodity.apk" download>
                      <img className="w-44 mt-3" src={GoogleStore} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-invest pt-5">
        <div className="container">
          <div className="row">
            <div className="col flex justify-center items-center flex-column mb-5">
              <h2 className="invest__heading text-black">
                Get started in a few minutes
              </h2>
              <p className="invest__sub-heading text-black">
                Start your crypto investment with Sky Commodity now !
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col ">
              <div className="invest__outer ">
                <div className="flex justify-center items-center pt-5">
                  <div className="invest__circle flex justify-center items-center">
                    <BsPlusCircleDotted className="icons" size="4rem" />
                  </div>
                </div>
                <div className="invest__content flex justify-center items-center flex-column">
                  <h2 className="invest__account-heading">Create an account</h2>
                  <p className="invest__account-para">
                    Open your Instant Demate account Within a 2hrs
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="invest__outer">
                <div className="flex justify-center items-center pt-5">
                  <div className="invest__circle flex justify-center items-center">
                    <AiOutlineBank className="icons" size="4rem" />
                  </div>
                </div>
                <div className="invest__content flex justify-center items-center flex-column">
                  <h2 className="invest__account-heading">
                    Link your bank account
                  </h2>
                  <p className="invest__account-para">
                    Link Your Bank Account Instant
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="invest__outer">
                <div className="flex justify-center items-center pt-5">
                  <div className="invest__circle flex justify-center items-center">
                    <MdOutlineInsights className="icons" size="4rem" />
                  </div>
                </div>
                <div className="invest__content flex justify-center items-center flex-column">
                  <h2 className="invest__account-heading">
                    Start buying & selling
                  </h2>
                  <p className="invest__account-para">
                    Learn with our company,How to Buy And Sell
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="slider__section__main">
        <div className="container">
          <div className="row flex justify-center items-center text-center ">
            <h3 className="text-black" style={{ fontSize: "40px" }}>Testimonial</h3>
            <div className="col flex justify-center items-center text-center flex-row gap-1">
              <div className="color1"></div> <div className="color2"></div>{" "}
              <div className="color3"></div> <div className="color4"></div>{" "}
              <div className="color5"></div> <div className="color6"></div>
            </div>
            <div className="slider-here pt-5">
              <Testimonial />
            </div>
          </div>
        </div>
      </section> */}
      <Testimonial />

      {/* <section id="features" class="features">

      <div class="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Features</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div class="container">

        <div class="row gy-4 align-items-center features-item">
          <div class="col-lg-5 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <h3>Corporis temporibus maiores provident</h3>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <a href="#" class="btn btn-get-started">Get Started</a>
          </div>
          <div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out" data-aos-delay="100">
            <div class="image-stack">
              <img src={h1} alt="" class="stack-front"/>
              <img src={Maingraph} alt="" class="stack-back"/>
            </div>
          </div>
        </div>
      </div>

    </section> */}
    </>
  );
};

export default Home;
