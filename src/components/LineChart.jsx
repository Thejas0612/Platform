// LineChart.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const LineChart = () => {
  //Adding dummy data for plotting demo
  const schemaData = [
    {
      "t_ambient": -40,
      "tpe_positive": 2.141738546134892,
      "tpe_negative": -2.141738546134892,
      "sensor_tpe_positive": 1.6890956160028363,
      "sensor_tpe_negative": -1.6890956160028363,
    },
    {
      "t_ambient": -30,
      "tpe_positive": 1.970812015388581,
      "tpe_negative": -1.970812015388581,
      "sensor_tpe_positive": 1.4663219291819927,
      "sensor_tpe_negative": -1.4663219291819927,
    },
    {
      "t_ambient": -20,
      "tpe_positive": 1.8190557990342133,
      "tpe_negative": -1.8190557990342133,
      "sensor_tpe_positive": 1.2549756969758419,
      "sensor_tpe_negative": -1.2549756969758419,
    },
    {
      "t_ambient": -10,
      "tpe_positive": 1.6916370769169138,
      "tpe_negative": -1.6916370769169138,
      "sensor_tpe_positive": 1.0619020670476162,
      "sensor_tpe_negative": -1.0619020670476162,
    },
    {
      "t_ambient": 0,
      "tpe_positive": 1.594401455092161,
      "tpe_negative": -1.594401455092161,
      "sensor_tpe_positive": 0.8989527240072195,
      "sensor_tpe_negative": -0.8989527240072195,
    },
    {
      "t_ambient": 10,
      "tpe_positive": 1.5331027362835148,
      "tpe_negative": -1.5331027362835148,
      "sensor_tpe_positive": 0.7851140044604987,
      "sensor_tpe_negative": -0.7851140044604987,
    },
    {
      "t_ambient": 20,
      "tpe_positive": 1.5121177202850313,
      "tpe_negative": -1.5121177202850313,
      "sensor_tpe_positive": 0.7433034373659253,
      "sensor_tpe_negative": -0.7433034373659253,
    },
    {
      "t_ambient": 30,
      "tpe_positive": 1.5331027362835148,
      "tpe_negative": -1.5331027362835148,
      "sensor_tpe_positive": 0.7851140044604987,
      "sensor_tpe_negative": -0.7851140044604987,
    },
    {
      "t_ambient": 40,
      "tpe_positive": 1.594401455092161,
      "tpe_negative": -1.594401455092161,
      "sensor_tpe_positive": 0.8989527240072195,
      "sensor_tpe_negative": -0.8989527240072195,
    },
    {
      "t_ambient": 50,
      "tpe_positive": 1.6916370769169138,
      "tpe_negative": -1.6916370769169138,
      "sensor_tpe_positive": 1.0619020670476162,
      "sensor_tpe_negative": -1.0619020670476162,
    },
    {
      "t_ambient": 60,
      "tpe_positive": 1.8190557990342133,
      "tpe_negative": -1.8190557990342133,
      "sensor_tpe_positive": 1.2549756969758419,
      "sensor_tpe_negative": -1.2549756969758419,
    },
    {
      "t_ambient": 70,
      "tpe_positive": 1.970812015388581,
      "tpe_negative": -1.970812015388581,
      "sensor_tpe_positive": 1.4663219291819927,
      "sensor_tpe_negative": -1.4663219291819927,
    },
    {
      "t_ambient": 85,
      "tpe_positive": 2.233034706402926,
      "tpe_negative": -2.233034706402926,
      "sensor_tpe_positive": 1.8034533539850706,
      "sensor_tpe_negative": -1.8034533539850706,
    },

  ]


  const data = {
    labels: schemaData.map((e) => e.t_ambient),

    datasets: [
      {
        position: "bottom",
        label: '248H HART(tpe -ve)',
        data: schemaData.map((e) => e.tpe_negative),
        fill: false,
        borderColor: 'blue',
        cubicInterpolationMode: 'monotone',
      },
      {
        label: '248H CVD(tpes -ve)',
        data: schemaData.map((e) => e.sensor_tpe_negative),
        fill: false,
        borderColor: 'orange',
        cubicInterpolationMode: 'monotone',
      },
      {
        label: '248H HART(tpe +ve)',
        data: schemaData.map((e) => e.tpe_positive),
        fill: false,
        borderColor: 'blue',
        cubicInterpolationMode: 'monotone',
      },

      {
        label: '248H CVD(tpes +ve)',
        data: schemaData.map((e) => e.sensor_tpe_positive),
        fill: false,
        borderColor: 'orange',
        cubicInterpolationMode: 'monotone',
      },
    ],
  };

  const options = {

    plugins: {
      "legend": {
        "display": true,
        "position": "bottom",
        "align": "center"
      },
      title: {
        display: true,
        text: '248R CVD',
        font: {
          size: 16,
          family: 'sans-serif',
          weight: '10',
          style: 'bold'
        },
        padding: {
          bottom: 10
        }
      },
    },

    scales: {
      x: {
        title: {
          display: false,
          text: 'Ambient Temperature (°C)',

        },
        display: true,
        position: 'center',
        ticks: {
          beginAtZero: false,
          padding: 20,
          align: 'center', // Center the x-axis labels
        },

      },
      y: {
        title: {
          display: false,
          text: 'Total Probable Error (°C)'
        },
        position: "center",
        min: -3.5000,
        max: 3.5000,
      },

    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
