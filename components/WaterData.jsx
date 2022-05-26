import React, { useState, useEffect } from 'react';
import { sendPostRequest, sendGetRequest } from './ajax.jsx';
import BarChart from './BarChart.jsx';
import MonthYearPicker from 'react-month-year-picker';
import PropTypes from 'prop-types';

let data = {};

export function MonthPicker(){

  const [date, setDate] = useState({
    month: 12,
    year: 2022
  });

  useEffect(() => {
    data = date;
  },[date])

  return (
      <div>
        <MonthYearPicker
          selectedMonth={date.month}
          selectedYear={date.year}
          minYear={2000}
          maxYear={2022}
          onChangeYear={year => setDate({ month: date.month, year: year })}
          onChangeMonth={month => setDate({ month: month, year: date.year })}
        />
        <h3>Selected month: {date.month}</h3>
        <h3>Selected year: {date.year}</h3>
      </div>
    );
}

export function WaterData(){  
  
  const [ waterData, setWaterData ] = useState("None");
  
  
  //Initialize on load of this component
  useEffect(async() => {
    let newWaterData = await sendPostRequest("/query/postCDECData", { month: 4, year: 2022 }); //Default to this date
    setWaterData(newWaterData);
  }, [])
  
  return (
    <>
      <BarChart data={waterData} />;
      <h1>TEST: {data.month}-{data.year}</h1>
    </>
  );
}