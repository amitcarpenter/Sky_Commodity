import React, { useEffect } from "react";
import Future from "./Future/Future";
import Affiliate from "./Affiliate";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./Contacts/ContactUs";
import Home from "./Home/Home";
import Blog from "./Blog";
import SingleBlogPage from "./SingleBlogPage";
import ForgetPassword from "./AcountLogin/ForgetPassword";
// import Mobile_verification from "./AcountLogin/Mobile_verification";
// import Email_verification from "./AcountLogin/Email_verification";
import Document_verification from "./AcountLogin/Document_verification";
import News from "./News";
import SingleNewsPage from "./SingleNewsPage";
import MissionAndPromise from "./MissionAndPromise";
import CommodityAnalysis from "./CommodityAnalysis";
import StatergyTip from "./Commodity-sub/StatergyTip";
import TradingTip from "./Commodity-sub/TradingTip";
import TermsCondition from "./TermsCondition";
import FAQ from "./FAQ";
import MultistepUser from "./AcountLogin/MultistepUser";
import SuppoetQuestion from "./SuppoetQuestion";
import PrivecyQustion from "./PrivecyQustion";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Offer from "./Offer";

const App = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Future />} />
        {/* <Route path="/sign-in" element={<SignIn />} /> */}
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/news" element={<News />} />
        <Route path="/single-blog/:id" element={<SingleBlogPage />} />
        <Route path="/single-news/:id" element={<SingleNewsPage />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        {/* <Route path="/mobile-verification" element={<Mobile_verification />} /> */}
        {/* <Route path="/email-verification" element={<Email_verification />} /> */}
        <Route path="/document-verification" element={<Document_verification />} />
        <Route path="/mission-promise" element={<MissionAndPromise />} />
        <Route path="/commodity-analysis" element={<CommodityAnalysis />} />
        <Route path="/StatergyTip" element={<StatergyTip />} />
        <Route path="/TradingTip" element={<TradingTip />}></Route>
        <Route path="/user-register" element={<MultistepUser />} />
        <Route path="/termscondition" element={<TermsCondition />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/supportquestion" element={<SuppoetQuestion />} />
        <Route path="/privecyqustion" element={<PrivecyQustion />} />
        <Route path="/offer" element={<Offer />} />
        {/* <Route path="/left" element={<Document_verification />} /> */}

      </Routes>
    </>
  );
};

export default App;