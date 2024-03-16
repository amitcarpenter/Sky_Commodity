import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Helmet } from "react-helmet";
import Pagination from "./Pagination";
import "./Blog.css";
import btc from "./assets/crypto-news.jpg";
import {
  FaRegCalendarAlt,
  FaRegUser,
  FaRegComments,
  FaArrowRight,
} from "react-icons/fa";
import axios from "axios";

import { format } from "date-fns";
import { Parser } from "html-to-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Blog = () => {
  const [allBlog, setAllBlog] = useState([]);
  const [loadingblog, setLoadingBlog] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalItems = allBlog.length;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allBlog.slice(indexOfFirstItem, indexOfLastItem);

  const imageBaseUrl =
    "https://skycommodity.in/bullsPanel/public/assets/system/uploads/posts/";

  const htmlParser = new Parser();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get(
        "https://skycommodity.in/bullsPanel/api/post-details"
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

      setLoadingBlog(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const parseHtmlToReact = (html) => {
    return htmlParser.parse(html);
  };

  const truncateText = (text, numWords) => {
    const words = text.split(" ");
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + "..."; // Append '...' for truncated text
    } else {
      return text; // Return the original text if it has fewer words than numWords
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Helmet>
        <title>Sky Commodity | Blog</title>
      </Helmet>

      <section
        id="blog_img"
        className="blog_img"
        style={{ backgroundColor: "#cdd3e1" }}
      >
        <div className="container bg-[#e4dddd] px-4 py-4 my-5">
          <div className="col-lg-12">
            <span className=" text-[#059573] text-[2rem] md:text-[2.5rem] font-spectral text-right font-medium">
              Latest Blogs
            </span>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {loadingblog
                  ? Array.from({ length: itemsPerPage }).map((_, index) => (
                      <div
                        className="mx-3 mt-6 flex flex-col self-start rounded-[30px] overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0"
                        key={index}
                      >
                        <div
                          className="overflow-hidden"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <Skeleton
                            style={{ width: "100%", height: "150px" }}
                            className="bg-gray-200"
                          />
                        </div>
                        <div className="p-4">
                          <Skeleton height={20} width={150} />
                        </div>
                      </div>
                    ))
                  : currentItems.length > 0 &&
                    currentItems.map((blogs) => (
                      <Link
                        to={`/single-blog/${blogs.id}`}
                        className="mx-3 mt-6 flex flex-col self-start rounded-[10px] overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-50 sm:shrink-0 sm:grow sm:basis-0"
                        key={blogs.id}
                      >
                        <div className="overflow-hidden">
                          <img
                            className="w-full h-[150px] md:h-[200px]"
                            src={imageBaseUrl + blogs.post_featured_image}
                            alt="Blog Image"
                          />
                        </div>
                        <div className="p-3">
                          <h5 className="mb-2 text-[20px] font-medium leading-tight text-[#059473] capitalize">
                            {blogs.post_title} {""}
                          </h5>
                        </div>
                      </Link>
                    ))}
              </div>
              <Pagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
