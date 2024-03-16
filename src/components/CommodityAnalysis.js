import React, { useEffect, useState } from "react";
import Graph from "./Graph.js";
import Market from "./Market.js";
import GainerLosser from "./GainerLosser.js";
import { Helmet } from "react-helmet";
import axios from "axios";
const CommodityAnalysis = () => {
  const [coins, setCoins] = useState([]);

  const url = "https://scripts.Sky Commoditytrade.com/api/getMarket";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data.Data);
        // console.log(res.data.Data, "____________-data");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Sky Commodity | Analysis</title>
      </Helmet>
      <section id="commodity" className="commodity mt-5">
        <div className="container">
          <div className="row">
            <h3 style={{ color: "#059473", fontWeight: "bold" }}>
              COMMODITY MARKET
            </h3>
            <div className="col-lg-7 mt-5 ">
              <Graph />
            </div>
            <div className="col-lg-5  px-5">
              <Market coins={coins} />
            </div>
          </div>
        </div>
      </section>
      <section id="losser" className="losser mt-4">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-12">
              <GainerLosser coins={coins} />
            </div>
            {/* <div className='col-lg-6'>
                            <MostActive />
                        </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default CommodityAnalysis;
