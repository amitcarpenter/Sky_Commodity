import React, { useState, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'; // Import Swiper modules

import './testimonial.css';

// Initialize SwiperCore modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function Testimonial() {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(1);
  const [testimonials, setTestimonials] = useState([
    {
      image: 'https://th.bing.com/th?id=OIP.5avjGeP0dB26XRvEinK8vgHaE8&w=240&h=160&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      tett: 'Testimonial 1 text... Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      author: 'John Doe',
      position: 'CEO, ABC Inc.',
    },
    {
      image: 'https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=600',
      tett: 'Testimonial 2 text.text... Lorem ipsum is placeholder text commonly used in the graphic, print, ..',
      author: 'Winter Doe',
      position: 'CTO, XYZ Corp.',
    },
    {
      image: 'https://images.pexels.com/photos/5220075/pexels-photo-5220075.jpeg?auto=compress&cs=tinysrgb&w=600',
      tett: 'Testimonial 3 text... Lorem ipsum is placeholder text commonly used in the graphic, print, ..',
      author: 'Summer Doe',
      position: 'CFO, XYZ Corp.',
    },
    {
      image: 'https://images.pexels.com/photos/6968548/pexels-photo-6968548.jpeg?auto=compress&cs=tinysrgb&w=600',
      tett: 'Testimonial 4 text... Lorem ipsum is placeholder text commonly used in the graphic, print, ..',
      author: 'Autumn Doe',
      position: 'COO, XYZ Corp.',
    },
  ]);

  const handleSlideChange = () => {
    setLeftIndex((prevLeftIndex) => (prevLeftIndex + 1) % testimonials.length);

    setRightIndex((prevRightIndex) => (prevRightIndex + 1) % testimonials.length);
  };

  const restartArray = useCallback(() => {
    setLeftIndex(0);
    setRightIndex(1);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange();
      if (leftIndex === 0) {
        restartArray();
      }
    }, 3500); // Auto slide change interval

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [leftIndex, restartArray]);

  return (
    <section>
      <div className=" relative w-full mt-5 px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  bg-[#f8f8f8] ">
        <div className="relative">
          <h2 className="text-center text-[#059473] text-[28px] md:text-[38px] font-medium font-jost leading-tight">
            Testimonials
          </h2>
          <div className="col flex justify-center items-center text-center flex-row gap-1">
            <div className="color1"></div> <div className="color2"></div>{" "}
            <div className="color3"></div> <div className="color4"></div>{" "}
            <div className="color5"></div> <div className="color6"></div>
          </div>
          <div className="text-center text-gray-700 font-light py-[10px]">
            Here's what some of our amazing customers are saying ...
          </div>
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:mx-6">
                <div className="relative mx-auto mt-8 rounded-lg shadow max-w-lg p-10 bg-[#059473] text-white leading-snug flex flex-col justify-between">
                  <div className="mt-2">{testimonials[leftIndex].tett}</div>
                  <div>
                    <div className="mx-auto w-full border border-gray-300 my-8"></div>
                    <div className="flex items-center">
                      <div>
                        <img
                          className="w-12 h-12 rounded-full border-2 border-indigo-400"
                          src={testimonials[leftIndex].image}
                          alt="Testimonial Author"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-bold">
                          {testimonials[leftIndex].author}
                        </div>
                        <div className="text-sm text-white font-medium mt-1">
                          {testimonials[leftIndex].position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative mx-auto mt-8 rounded-lg shadow max-w-lg p-10 bg-[#059473] text-white leading-snug flex flex-col justify-between">
                  <div className="mt-2">{testimonials[rightIndex].tett}</div>
                  <div>
                    <div className="mx-auto w-full border border-gray-300 my-8"></div>
                    <div className="flex items-center">
                      <div>
                        <img
                          className="w-12 h-12 rounded-full border-2 border-indigo-400"
                          src={testimonials[rightIndex].image}
                          alt="Testimonial Author"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-bold">
                          {testimonials[rightIndex].author}
                        </div>
                        <div className="text-sm text-white font-medium mt-1">
                          {testimonials[rightIndex].position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
