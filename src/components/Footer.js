import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./Footer.css";

import GoogleStore from "../components/assets/google-store-btn.png";
// import skyapk from "../../public/Sky_commodity.apk";

import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
// import android from "../components/Iconaasets/android-app.png";
import log_x from "../components/Iconaasets/Asset-5-x.png";
const Footer = () => {
  return (
    <>
      <footer id="foot" class="foot">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-3 col-md-12 footer-info">
              <Link to="/" class="d-flex align-items-center">
                <img src={log_x} alt="log-x" className="logo" />
              </Link>
              <span className="text-sm ">
                Sky Commodities India Private Limited - Commodity Broker in
                India SKY COMMODITY BROKING .: Member of NSE, BSE & MCX – SEBI
                Registration no.: INZ000049235 CDSL/NSDL: Depository services
                through SKY Broking Ltd. Commodity Trading through SKY
                Commodities Pvt. Ltd. MCX:46365; NSE-90221 – SEBI Registration
                no.: INZ000049235.
              </span>

              {/* <div class="social-links d-flex mt-4">
            <Link to="#" class="twitter"><i class="bi bi-twitter"></i></Link>
            <Link to="#" class="facebook"><i class="bi bi-facebook"></i></Link>
            <Link to="#" class="instagram"><i class="bi bi-instagram"></i></Link>
            <Link to="#" class="linkedin"><i class="bi bi-linkedin"></i></Link>
          </div> */}
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About us</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/commodity-analysis">Market</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>

                <li>
                  <Link to="/contact-us">Contact</Link>
                </li>
                <li>
                  <Link to="/user-register">Sign up</Link>
                </li>
                <li>
                  <a href="https://skycommodity.in/bullsPanel/login">Sign in</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                {/* <li><Link to="/">Home</Link></li> */}
                <li>
                  <Link to="/StatergyTip">StatergyTip</Link>
                </li>
                <li>
                  <Link to="/TradingTip">TradingTip</Link>
                </li>
                <li>
                  <Link to="/commodity-analysis">Market</Link>
                </li>
                <li>
                  <Link to="/mission-promise">Mission</Link>
                </li>
                <li>
                  <Link to="/faq">Faq</Link>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>Business Hours</h4>
              <p>
                Monday-Sunday
                <br></br>
                09:00 AM - 11:30PM
              </p>

              <p className="mt-4 text-xl font-semibold">
                Download The App
                <a href="./Sky_commodity.apk" download>
                  <img className="w-44 mt-3" src={GoogleStore} alt="" />
                </a>
              </p>
            </div>

            <div class="col-lg-3 col-6 footer-contact  text-md-start">
              <h4>Contact Us</h4>
              <div className="sm:flex">
                <span className="mt-1 text-xl">
                  {" "}
                  <CiLocationOn className=" text-white" />
                </span>
                <p className="sm:ml-3">
                  SKY Broking Ltd., 40-41,first floor visha tower Coimbatore
                  ,641001, Tamilnadu india
                  {/* A108 Adam Street <br />
                  New York, NY 535022 */}
                  {/* <br />
                  United States <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br /> */}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div class="container mt-4">
          <div class="copyright">
            © Copyright{" "}
            <strong>
              <span>Sky Commodity</span>
            </strong>
            . All Rights Reserved
          </div>
          {/* <div class="credits">
            Designed by <Link to="https://srninfotech.com/">SRN INFOTECH</Link>
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
