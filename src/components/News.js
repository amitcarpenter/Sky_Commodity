import React, { useEffect, useState } from "react";
import "./news.css";
import { Link } from "react-router-dom";
import { FaRegUser, FaArrowRight } from "react-icons/fa";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import PaginationNews from "./PaginationNews";
import axios from "axios";
import { format } from "date-fns";
import { Parser } from "html-to-react";
import AffiliateImg from "./assets/home-banner-bg.png";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion, AnimatePresence } from "framer-motion";
import AboutMainSection from "./assets/about-us.png";
import { Helmet } from "react-helmet";
const News = () => {
  const [loading, setLoading] = useState(true); // Loading state
  const [allBlog, setAllBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const imageBaseUrl =
    "https://skycommodity.in/bullsPanel/public/assets/system/uploads/news/";

  const htmlParser = new Parser();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get(
        "https://skycommodity.in/bullsPanel/api/news-details"
      );
      console.log(response.data, "_________respo");
      const result = response.data.data.map((blog) => {
        const formattedDate = format(new Date(blog.created_at), "dd MMMM yyyy");
        const formattedTime = format(new Date(blog.created_at), "hh:mm a");
        return {
          ...blog,
          formattedDate,
          formattedTime,
        };
      });
      setAllBlog(result);
      setLoading(false); // Mark loading as false after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // In case of an error, set loading to false
    }
  }

  const renderBlogPosts = () => {
    if (loading) {
      return (
        <div className="col-12 col-xl-4 col-md-6" key="skeleton">
          <div className="post-item position-relative h-100">
            <div className="post-img position-relative overflow-hidden">
              <Skeleton height={200} />
            </div>
            <div className="post-content flex-wrap">
              <Skeleton count={2} height={20} />
            </div>
          </div>
        </div>
      );
    }

    return allBlog
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      .map((blog) => (
        <div className="col-12 col-xl-4 col-md-6  " key={blog.id}>
          <div className="post-item position-relative h-100 shadow-md ">
            <div className="post-img position-relative overflow-hidden">
              <img
                src={imageBaseUrl + blog.news_featured_image}
                className="w-full h-48 object-cover "
                alt=""
              />
              <span className="post-date">{blog.formattedDate}</span>
            </div>
            <div className="post-content flex-wrap">
              <h3 className="post-title capitalize break-words">
                {htmlParser.parse(blog.news_title)}
              </h3>

              <Link
                to={`/single-news/${blog.id}`}
                className="readmore stretched-link"
              >
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      ));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Helmet>
        <title>Sky Commodity | News</title>
      </Helmet>
      {/* Add your content here */}
      {/* <MDBCarousel showControls showIndicators dark fade>
        {/* Add your carousel items here */}
      {/* </MDBCarousel> */}

      <section
        id="about_hero"
        className="about_hero"
        style={{ backgroundImage: `url(${AffiliateImg})` }}
      >
        <div className="container ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
            <div className="flex justify-center items-center">
              <h1 className="text-white text-[40px] pt-3 md:text-[60px] lg:text-[60px] xl:text-[60px] 2xltext-[60px] font-bold">
                News
              </h1>
            </div>
            <div className="  flex justify-center items-center">
              <AnimatePresence>
                <motion.div
                  initial={{ x: -50 }}
                  animate={{ x: 10 }}
                  exit={{ x: 100 }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    repeatType: "reverse",
                    type: "tween",
                    bounce: 0.25,
                  }}
                  className="two p-50px"
                >
                  <img
                    src={AboutMainSection}
                    alt="About.png"
                    className="img-fluid"
                  ></img>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="news my-5">
        <div
          className="container aos-init aos-animate  bg-[#f8f8f8] px-4 py-3 "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row gy-4 posts-list">{renderBlogPosts()}</div>
          <PaginationNews
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={allBlog.length}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </div>
  );
};

export default News;
