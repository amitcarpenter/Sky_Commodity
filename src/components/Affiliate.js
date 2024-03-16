import React from "react";

import "./Affiliate.css";
import { AiOutlineArrowRight } from "react-icons/ai";

import AffiliateImg from "./assets/home-banner-bg.png";
import AffiliateMob from "./assets/affiliate-illustration.png";
import Reffer1 from "./assets/link.png";
import Reffer2 from "./assets/invite.png";
import Reffer3 from "./assets/earn.png";
import WhyAffiliate from "./assets/why-affiliate1.png";
import TradeAffiliate from "./assets/trade-affiliate.png";
import { Helmet } from "react-helmet";
const Affiliate = () => {
  return (
    <>
      <Helmet>
        <title>Sky Commodity | Affiliate</title>
      </Helmet>
      <section
        id="affiliate_hero"
        className="affiliate_hero"
        style={{ backgroundImage: `url(${AffiliateImg})` }}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 pb-5 gap-4">
            <div className="">
              <div className="affiliate__content">
                <h1 className="text-white font-bold pt-[30px] text-[20px] md:text-[24px] lg:text-[26px] xl:text-[40px]">
                  {" "}
                  Join The Sky Commodity Affiliate Program.
                </h1>
                <h3 className="text-white pt-2 text-[20px] md:text-[24px] lg:text-[26px] xl:text-[40px]">
                  Get Paid for Bringing People to Sky Commodity
                </h3>
                <p className="text-white leading-7 pt-2 text-[20px] md:text-[24px] lg:text-[26px] xl:text-[40px]">
                  Our Bitcoin Affiliate Program helps you bring financial
                  freedom to your community. And as a bonus, you get a steady
                  stream of income too.
                </p>
              </div>
              <div className="affiliate__btn">
                <button className=" btn affiliateBtn ">
                  Become An Affiliate <AiOutlineArrowRight />
                </button>
              </div>
            </div>
            <div className=" pt-3 affiliat-img1st">
              <img src={AffiliateMob} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="reffer pb-40px bg-[#131128]">
        <div className="container">
          <div className="row">
            <div className="col reffer-content flex justify-center items-center flex-column">
              <h3 className="reffer-head text-white text-[35px] md:text-[40px] lg:text-[42px] font-bold ">
                Refer and Earn
              </h3>
              <p className="reffer-para text-white text-center text-[20px] md:text-[24px] lg:text-[26px] pt-2 ">
                Refer your friends to crypto and earn 50% of their trading fee
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1   sm:grid-cols-2  md:grid-cols-2  lg:grid-cols-3   gap-4 pt-3  ">
            <div>
              <div className=" reffer-div flex justify-center items-center flex-column">
                <div className="reffer-circle">
                  <img src={Reffer1} alt="" />
                </div>
                <h2 className="reffer-heading text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px]">
                  Get Your Link
                </h2>
                <p className="reffer-para text-[18px] p-[10px] md:text-[20px] lg:text-[24px] xl:text-[25px]">
                  Sign in to your Sky Commodity account and copy your unique
                  link.
                </p>
              </div>
            </div>
            <div>
              <div className=" reffer-div flex justify-center items-center flex-column">
                <div className="reffer-circle">
                  <img src={Reffer2} alt="" />
                </div>
                <h2 className="reffer-heading sm:text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px]">
                  Invite Friends
                </h2>
                <p className="reffer-para sm:text-[18px] p-[10px] md:text-[20px] lg:text-[24px] xl:text-[25px]">
                  Share your referral link with your friends so they can Sign
                  Up.
                </p>
              </div>
            </div>
            <div>
              <div className=" reffer-div flex justify-center items-center flex-column">
                <div className="reffer-circle">
                  <img src={Reffer3} alt="" />
                </div>
                <h2 className="reffer-heading sm:text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px]">
                  Earn Crypto
                </h2>
                <p className="reffer-para sm:text-[18px] p-[10px] md:text-[20px] lg:text-[24px] xl:text-[25px]">
                  50% trading fee from each refer, sent right to your crikto
                  wallet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="affiliate_income" className="affiliate_income bg-[#131128]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  gap-5">
            <div className=" affiliate-incom-trade flex justify-center items-center">
              <img
                src={TradeAffiliate}
                alt="Affiliate"
                className=".trade-affiliate-img"
              ></img>
            </div>
            <div className=" flex justify-center items-start flex-column ">
              <h2 className="text-white font-Josefin Sans font-bold text-[26px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] pb-2">
                Instant Income on Every Trade
              </h2>
              <p className="text-white text-[20px]  md:text-[20px] lg:text-[26px] ">
                You make money every time the people you introduce to Sky
                Commodity, and the people they invite, buy Bitcoin. <br />
                Earn 50% Escrow Fee When the people you invite buy Bitcoin on
                Sky Commodity Earn. <br /> 10% Escrow Fee When people invited by
                your friends buy Bitcoin on Sky Commodity
              </p>

              <button className=" btn affiliateBtn text-white text-[5px] xs:text-[15px] sm:text-[20px] md:text-[20px]">
                {" "}
                Join Program{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="why_affiliate" className="why_affiliate bg-[#131128] pb-5">
        <div className="container">
          <div className="text-center">
            <h3 className="pt-[60px] text-[26px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] ">
              Why Become an Affiliate?
            </h3>
            <span className="text-[26px]  md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px]">
              Our Bitcoin Affiliate Program is a great way for you to spread{" "}
              <br /> the word of crypto in your community.
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2   gap-4 pt-5">
            <div className="grid grid-rows-1 gap-4 ml-4">
              <div className="inner-box-affiliate">
                <h3 className="text-white font-bold text-[20px]  md:text-[20px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]">
                  __Earn Bitcoin
                </h3>
                <p className="text-[#c6c5c9] text-[15px]  md:text-[20px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]">
                  You make 50% of the escrow fee every time one of your
                  affiliates buys Bitcoin.
                </p>
              </div>
              <div className="inner-box-affiliate">
                <h3 className="text-white font-bold text-[20px]  md:text-[20px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]">
                  __Grow Your Network
                </h3>
                <p className="text-[#c6c5c9] text-[15px]  md:text-[20px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]">
                  You make 10% of the escrow fee every time somebody from your
                  extended network buys Bitcoin.
                </p>
              </div>
              <div className="inner-box-affiliate">
                <h3 className="text-white font-bold text-[20px]  md:text-[20px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]">
                  __Cash Out Anytime
                </h3>
                <p className="text-[#c6c5c9] text-[15px]  md:text-[20px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]">
                  Once you've earned at least 10 USD worth of Bitcoin, you can
                  cash out your earnings into your Sky Commodity wallet anytime
                  you want.
                </p>
              </div>
            </div>
            <div className="col p-5">
              <img
                src={WhyAffiliate}
                alt="Affiliate"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Affiliate;
