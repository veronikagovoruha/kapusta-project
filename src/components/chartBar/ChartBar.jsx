import React from 'react';
import MediaQuery from 'react-responsive';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import s from './chartBar.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const ChartBar = dataForChart => {

  const [arrayDescr, setArrayDescr] = useState()
  const [arrayTotal, setArrayTotal] = useState()

  useEffect(()=> {
    setArrayDescr(dataForChart.dataForChart.map(descr => {
        return descr.description;
      }));
      setArrayTotal(dataForChart.dataForChart.map(descr => {
          return descr.total;
        }))
  },[dataForChart])
  // const arrayDescr = dataForChart.dataForChart.map(descr => {
  //   return descr.description;
  // });

  // const arrayTotal = dataForChart.dataForChart.map(descr => {
  //   return descr.total;
  // });

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: false,
      },

      tooltip: {
        enabled: true,
      },
    },

    borderRadius: 10,
    maxBarThickness: 38,

    scales: {
      x: {
        display: true,
        grid: {
          color: 'transparent',
          borderColor: '#F5F6FB',
          tickColor: 'transparent',
        },
      },
      y: {
        grid: {
          color: '#F5F6FB',
          borderColor: 'white',
          tickColor: 'transparent',
          lineWidth: 2,
        },
      },
    },
  };

  const optionsHorisontal = {
    indexAxis: 'y',
    // elements: {
    //   bar: {
    //     borderWidth: 2,
    //   },
    // },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    borderRadius: 10,
    borderColor: 'transparent',
    maxBarThickness: 20,
    minBarThickness: 15,

    scales: {
      x: {
        display: true,
        grid: {
          color: 'transparent',
          borderColor: 'white',
          tickColor: 'transparent',
        },
      },
      y: {
        display: true,
        grid: {
          color: 'white',
          borderColor: 'white',
          tickColor: 'transparent',
        },
      },
    },
  };

  const labels = arrayDescr;

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: arrayTotal,
        backgroundColor: ['#FF751D', '#FED9BF', '#FED9BF'],
      },
      // {
      //   label: 'Dataset 2',
      //   data: [457,721,464,916,500,275,981],
      //   backgroundColor: '#FFDAC0',
      // },
    ],
  };

  return (
    <div className={s.chartDiv}>
      <MediaQuery maxWidth={771}>
        <Bar options={optionsHorisontal} data={data} />
      </MediaQuery>
      <MediaQuery minWidth={772}>
        <Bar options={options} data={data} />
      </MediaQuery>
    </div>
  );
};

export default ChartBar;
