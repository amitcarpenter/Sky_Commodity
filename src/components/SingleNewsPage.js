import React, { useEffect, useState } from "react";
import "./Blog.css";

import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";

import axios from "axios";
import { Parser } from "html-to-react";
import { useParams } from "react-router";
import { format } from "date-fns";

const SingleNewsPage = () => {
  const [allBlog, setAllBlog] = useState({});
  let { id } = useParams();
  const htmlParser = new Parser();
  const imageBaseUrl =
    "https://skycommodity.in/bullsPanel/public/assets/system/uploads/news/";

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://skycommodity.in/bullsPanel/api/news-details/${id}`
        );
        const result = response.data.data;
        console.log(result, "_____-kfk");

        // Format date and time here
        const formattedDate = format(
          new Date(result.created_at),
          "dd MMMM yyyy"
        );
        const formattedTime = format(new Date(result.created_at), "hh:mm a");

        result.formattedDate = formattedDate;
        result.formattedTime = formattedTime;

        setAllBlog(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData(); // Fetch data when the component mounts
  }, [id]);

  return (
    <div>
      <section id="SingleBlogPage" className="SingleBlogPage ">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto  py-3 px-4 my-5 bg-[#f8f8f8] ">
              <div id="news-content" className="news-content">
                <h1 className="break-words">{allBlog.news_title}</h1>
                <div className="d-flex blog_icons" id="blog_icons">
                  <FaRegCalendarAlt className="calendar-icon" />
                  <span>{allBlog.formattedDate}</span>
                  <span>{allBlog.formattedTime}</span>
                  <FaRegUser className="user-icon" />
                  <span>{allBlog.author_name}</span>
                </div>
              </div>
              <div>
                <img
                  src={imageBaseUrl + allBlog.news_featured_image}
                  alt="blog-img"
                  className="md:w-full object-cover md:h-[300px] mx-auto rounded-md"
                />
              </div>

              <p className="break-words"></p>
              <p className="break-words text-[0.9rem] md:text-[1.3] text-black leading-[1.6rem] font-jost">
                {htmlParser.parse(allBlog.news_desc)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleNewsPage;
