import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const prices = ['20', '300', '5000','20', '300', '5000','20', '300', '5000','20', '300', '5000'];
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Commodity',
        data: [
          [new Date('2023-01-01').getTime(), 28],
          [new Date('2023-02-01').getTime(), 29],
          [new Date('2023-03-01').getTime(), 33],
          [new Date('2023-04-01').getTime(), 36],
          [new Date('2023-05-01').getTime(), 32],
          [new Date('2023-06-01').getTime(), 32],
          [new Date('2023-07-01').getTime(), 33],
          [new Date('2023-08-01').getTime(), 35],
          [new Date('2023-09-01').getTime(), 37],
          [new Date('2023-10-01').getTime(), 34],
          [new Date('2023-11-01').getTime(), 32],
          [new Date('2023-12-01').getTime(), 3],
        ],
      },
    ],

    options: {
      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: 'zoom',
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: 'Stock Price Movement',
        align: 'left',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            const priceIndex = Math.floor(val / 1000000);
            return prices[priceIndex];
          },
        },
        title: {
          text: 'Price',
        },
      },
      xaxis: {
        type: 'datetime',
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return prices[val];
          },
        },
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={350} />
    </div>
  );
};

export default ApexChart;
