import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

export default function Swipper() {
  const [tradedata, settradedata] = useState([]);

  const getDatatrade = async () => {
    try {
      const response = await axios.get(
        "https://scripts.Sky Commoditytrade.com/api/getMarket"
      );
      settradedata(response.data.Data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDatatrade();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}
            itemClass="carousel-item-padding-40-px"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {tradedata.length > 0 &&
              tradedata.map((trade) => {
                const profitOrLoss = (trade.low - trade.open).toFixed(2);
                const isProfit = profitOrLoss >= 0;

                return (
                  <div
                    key={trade.symbol}
                    className={`py-4  m-3 bg-[#f8f8f8] hover:bg-pink-50  flex flex-col gap-1 border-teal-300 border-2 ${
                      isProfit ? "border-green-700" : "border-red-700"
                    }`}
                  >
                    <span className="font-bold">{trade.symbol}</span>
                    <span className="font-bold">{trade.trade_name}</span>
                    <span className="font-medium">Open: Rs.{trade.open}</span>
                    <span
                      className={`${
                        isProfit ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {isProfit ? "Profit" : "Loss"}: Rs.
                      {Math.abs(profitOrLoss)}
                    </span>
                  </div>
                );
              })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
