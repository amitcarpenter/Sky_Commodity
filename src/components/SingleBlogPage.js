import React, { useEffect, useState } from "react";
import "./Blog.css";
import btc from "./assets/crypto-news.jpg";
import { FaRegCalendarAlt, FaRegUser, FaRegComments } from "react-icons/fa";
import { AiFillTag } from "react-icons/ai";

import axios from "axios";
import { Parser } from "html-to-react";
import { useParams } from "react-router";
import { format } from "date-fns";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";

const SingleBlogPage = () => {
  const [allBlog, setAllBlog] = useState({});
  let { id } = useParams();
  const htmlParser = new Parser();
  const imageBaseUrl =
    "https://skycommodity.in/bullsPanel/public/assets/system/uploads/posts/";

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://skycommodity.in/bullsPanel/api/post-details/${id}`
        );
        const result = response.data.data;

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
    <>
      <section id="SingleBlogPage" className="SingleBlogPage">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto py-3 px-4 my-5 bg-[#f8f8f8]">
              <div id="news-content" className="news-content">
                <h1 className="capitalize">{allBlog.post_title}</h1>

                <div className="flex justify-between">
                  <div
                    className="flex flex-col md:flex-row gap-2 md:gap-0 blog_icons"
                    id="blog_icons"
                  >
                    <div className="flex">
                      <FaRegCalendarAlt />
                      <span> {allBlog.formattedDate}</span>
                      <span> {allBlog.formattedTime}</span>
                    </div>
                    {/* <AiFillTag />
                  <span>Crypto</span> */}
                    <div className="flex">
                      <FaRegUser />
                      <span>{allBlog.author_name}</span>
                    </div>
                    {/* <FaRegComments />
                  <span>1</span> */}
                  </div>
                  <div className="flex space-x-3">
                    <span>
                      <BsWhatsapp className="text-[#1EB2A6] text-[22px] hover:text-[#408a84] " />
                    </span>
                    <span>
                      <BsLinkedin className="text-[#1EB2A6] text-[22px] hover:text-[#408a84] " />
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={imageBaseUrl + allBlog.post_featured_image}
                  alt="blog-img"
                  className="md:w-full object-cover  mx-auto"
                ></img>
              </div>

              <p className="break-words text-[0.9rem] md:text-[1.3] text-black leading-[1.6rem] font-jost">
                {htmlParser.parse(allBlog.post_content)}
              </p>
            </div>

            {/* <div className='col-lg-3 blog-search'>
              <div class="input-group rounded" style={{ marginTop: "30px" }}>
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <span class="input-group-text border-0" id="search-addon">
                  <i class="fas fa-search"></i>
                </span>
              </div>
              <div className='blog-category'>
                <h2 style={{ color: "#059573", marginTop: "30px", fontSize: "30px", fontWeight: "400" }}>Categories</h2>
                <ul style={{ padding: "0px" }}>
                  <li>General <span className='px-2'>(25)</span></li>
                  <li>LifeStyle <span className='px-2'>(2)</span></li>
                  <li>Travel <span className='px-2'>(5)</span></li>
                  <li>Design <span className='px-2'>(0)</span></li>
                  <li>Creative <span className='px-2'>(20)</span></li>
                  <li>Education <span className='px-2'>(12)</span></li>
                </ul>
              </div>
              <div>
                <h2 style={{ color: "#059573", marginTop: "30px", fontSize: "30px", fontWeight: "400" }}>Recent Posts</h2>
                <div className='d-flex blog-sideimg'>

                  <div>
                    <img src={btc} alt='img-blog' className='img-fluid'></img>
                  </div>

                  <div className='blog-content'>
                    <Nav.Link as={Link} to={"/single-blog"}><h6>What is Bitcoin Mining and why use bitcoin</h6></Nav.Link>
                    <div className='blog_icons'>
                      <p style={{ marginLeft: "12px" }}> January 3, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
