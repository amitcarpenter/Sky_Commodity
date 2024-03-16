
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi'
import { FiArrowDownLeft } from 'react-icons/fi'
import './Carousel.css'
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import axios from 'axios'

const MarketCarousel = () => {


    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=11&page=1&sparkline=false';


    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get(url).then((res) => {
            setData(res.data)

        }).catch((error) => {
            console.log(error)
        })
    }, [])

    console.log(data)
    if (!data) return null


    {

        return (
            <>
                <Swiper
                    breakpoints={{
                        0: {

                            slidesPerView: 1,
                            spaceBetween: 10,
                            slidesPerGroup: 1

                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                            slidesPerGroup: 1

                        },

                        768: {

                            slidesPerView: 2,
                            spaceBetween: 40,
                            slidesPerGroup: 1
                        },
                        1024: {

                            slidesPerView: 3,
                            spaceBetween: 15,
                            slidesPerGroup: 1
                        },
                        1280: {

                            slidesPerView: 4,
                            spaceBetween: 20,
                            slidesPerGroup: 1
                        },
                    }}

                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                        paginationBulletClass: 'bullet',
                        renderBullet: function (index, className) {
                            return '<span className="' + className + '" style="background-color: red;"></span>';
                        },
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"

                >
                    <SwiperSlide>
                        <div className="content">
                            <div className="card">
                                <div className="card-content">
                                    <div className="image">
                                        <img src={data[0].image} alt='bitcoin' />
                                    </div>
                                    <div className="check-icon">
                                        <BsFillCheckCircleFill />
                                    </div>
                                    <div className="CoinDetails">
                                        <span className="Coin-name">{data[0].name}</span>
                                        <span className="price">${data[0].current_price.toLocaleString()}</span>

                                        {data[0].price_change_percentage_24h < 0 ? (

                                            <span className="highlited-price-Red">
                                                <FiArrowDownLeft />
                                                {data[0].price_change_percentage_24h}%</span>

                                        ) : (
                                            <span className="highlited-price-Green">
                                                <FiArrowUpRight />
                                                {data[0].price_change_percentage_24h}%</span>
                                        )}

                                    </div>
                                    <div className="Trade-btnS flex justify-center items-center ">
                                        <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="content">
                            <div className="card">
                                <div className="card-content">
                                    <div className="image">
                                        <img src={data[1].image} alt='bitcoin' />
                                    </div>
                                    <div className="check-icon">
                                        <BsFillCheckCircleFill />
                                    </div>
                                    <div className="CoinDetails">
                                        <span className="Coin-name">{data[1].name}</span>
                                        <span className="price">${data[1].current_price.toLocaleString()}</span>

                                        {data[1].price_change_percentage_24h < 1 ? (

                                            <span className="highlited-price-Red">
                                                <FiArrowDownLeft />
                                                {data[1].price_change_percentage_24h}%</span>
                                        ) : (
                                            <span className="highlited-price-Green">
                                                <FiArrowUpRight />
                                                {data[1].price_change_percentage_24h}%</span>
                                        )}

                                    </div>
                                    <div className="Trade-btnS flex justify-center items-center ">
                                        <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="content">
                            <div className="card">
                                <div className="card-content">
                                    <div className="image">
                                        <img src={data[2].image} alt='bitcoin' />
                                    </div>
                                    <div className="check-icon">
                                        <BsFillCheckCircleFill />
                                    </div>
                                    <div className="CoinDetails">
                                        <span className="Coin-name">{data[2].name}</span>
                                        <span className="price">${data[2].current_price.toLocaleString()}</span>

                                        {data[2].price_change_percentage_24h < 0 ? (

                                            <span className="highlited-price-Red">
                                                <FiArrowDownLeft />
                                                {data[2].price_change_percentage_24h}%</span>
                                        ) : (
                                            <span className="highlited-price-Green">
                                                <FiArrowUpRight />
                                                {data[2].price_change_percentage_24h}%</span>
                                        )}

                                    </div>
                                    <div className="Trade-btnS flex justify-center items-center ">
                                        <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="content">
                            <div className="card">
                                <div className="card-content">
                                    <div className="image">
                                        <img src={data[3].image} alt='bitcoin' />
                                    </div>
                                    <div className="check-icon">
                                        <BsFillCheckCircleFill />
                                    </div>
                                    <div className="CoinDetails">
                                        <span className="Coin-name">{data[3].name}</span>
                                        <span className="price">${data[3].current_price.toLocaleString()}</span>

                                        {data[3].price_change_percentage_24h < 0 ? (

                                            <span className="highlited-price-Red">
                                                <FiArrowDownLeft />
                                                {data[3].price_change_percentage_24h}%</span>
                                        ) : (
                                            <span className="highlited-price-Green">
                                                <FiArrowUpRight />
                                                {data[3].price_change_percentage_24h}%</span>
                                        )}

                                    </div>
                                    <div className="Trade-btnS flex justify-center items-center ">
                                        <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="content">
                            <div className="card">
                                <div className="card-content">
                                    <div className="image">
                                        <img src={data[4].image} alt='bitcoin' />
                                    </div>
                                    <div className="check-icon">
                                        <BsFillCheckCircleFill />
                                    </div>
                                    <div className="CoinDetails">
                                        <span className="Coin-name">{data[4].name}</span>
                                        <span className="price">${data[4].current_price.toLocaleString()}</span>

                                        {data[4].price_change_percentage_24h < 0 ? (

                                            <span className="highlited-price-Red">
                                                <FiArrowDownLeft />
                                                {data[4].price_change_percentage_24h}%</span>
                                        ) : (
                                            <span className="highlited-price-Green">
                                                <FiArrowUpRight />
                                                {data[4].price_change_percentage_24h}%</span>
                                        )}

                                    </div>
                                    <div className="Trade-btnS flex justify-center items-center ">
                                        <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="content">
                            <div className="card">
                                <div className="card-content">
                                    <div className="image">
                                        <img src={data[5].image} alt='bitcoin' />
                                    </div>
                                    <div className="check-icon">
                                        <BsFillCheckCircleFill />
                                    </div>
                                    <div className="CoinDetails">
                                        <span className="Coin-name">{data[5].name}</span>
                                        <span className="price">${data[5].current_price.toLocaleString()}</span>

                                        {data[5].price_change_percentage_24h < 0 ? (

                                            <span className="highlited-price-Red">
                                                <FiArrowDownLeft />
                                                {data[5].price_change_percentage_24h}%</span>
                                        ) : (
                                            <span className="highlited-price-Green">
                                                <FiArrowUpRight />
                                                {data[5].price_change_percentage_24h}%</span>
                                        )}

                                    </div>
                                    <div className="Trade-btnS flex justify-center items-center ">
                                        <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="content">
                            <div className="card">
                                <div className="card-content">
                                    <div className="image">
                                        <img src={data[6].image} alt='bitcoin' />
                                    </div>
                                    <div className="check-icon">
                                        <BsFillCheckCircleFill />
                                    </div>
                                    <div className="CoinDetails">
                                        <span className="Coin-name">{data[6].name}</span>
                                        <span className="price">${data[6].current_price.toLocaleString()}</span>

                                        {data[6].price_change_percentage_24h < 0 ? (

                                            <span className="highlited-price-Red">
                                                <FiArrowDownLeft />
                                                {data[6].price_change_percentage_24h}%</span>
                                        ) : (
                                            <span className="highlited-price-Green">
                                                <FiArrowUpRight />
                                                {data[6].price_change_percentage_24h}%</span>
                                        )}

                                    </div>
                                    <div className="Trade-btnS flex justify-center items-center ">
                                        <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="content">
                            <div className="card">
                                <div className="card-content">
                                    <div className="image">
                                        <img src={data[7].image} alt='bitcoin' />
                                    </div>
                                    <div className="check-icon">
                                        <BsFillCheckCircleFill />
                                    </div>
                                    <div className="CoinDetails">
                                        <span className="Coin-name">{data[7].name}</span>
                                        <span className="price">${data[7].current_price.toLocaleString()}</span>

                                        {data[7].price_change_percentage_24h < 0 ? (

                                            <span className="highlited-price-Red">
                                                <FiArrowDownLeft />
                                                {data[7].price_change_percentage_24h}%</span>
                                        ) : (
                                            <span className="highlited-price-Green">
                                                <FiArrowUpRight />
                                                {data[7].price_change_percentage_24h}%</span>
                                        )}

                                    </div>
                                    <div className="Trade-btnS flex justify-center items-center ">
                                        <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="content">
                            <div className="card">
                                <div className="card-content">
                                    <div className="image">
                                        <img src={data[9].image} alt='bitcoin' />
                                    </div>
                                    <div className="check-icon">
                                        <BsFillCheckCircleFill />
                                    </div>
                                    <div className="CoinDetails">
                                        <span className="Coin-name">{data[9].name}</span>
                                        <span className="price">${data[9].current_price.toLocaleString()}</span>

                                        {data[9].price_change_percentage_24h < 0 ? (

                                            <span className="highlited-price-Red">
                                                <FiArrowDownLeft />
                                                {data[9].price_change_percentage_24h}%</span>
                                        ) : (
                                            <span className="highlited-price-Green">
                                                <FiArrowUpRight />
                                                {data[9].price_change_percentage_24h}%</span>
                                        )}

                                    </div>
                                    <div className="Trade-btnS flex justify-center items-center ">
                                        <button className="trade-now">Trade Now </button><BsArrowRightCircleFill className='arrow' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>



                </Swiper>





            </>
        )
    }
}

export default MarketCarousel
