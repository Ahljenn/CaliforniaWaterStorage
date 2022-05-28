import React, { useState, useEffect } from 'react';
import { sendPostRequest, sendGetRequest } from './ajax.jsx';
import BarChart from './BarChart.jsx';
import PropTypes from 'prop-types';



function WaterData(props){  
  
  const [ waterData, setWaterData ] = useState("None");
  
  //Initialize on load of this component
  useEffect(async() => {
    let newWaterData = await sendPostRequest("/query/postCDECData", { month: 4, year: 2022 }); //Default to this date
    setWaterData(newWaterData);
    console.log(waterData);
  }, []);
  
  return (
    <>
      Month:{props.state.month}
      Year:{props.state.year}
    </>
  );
}

export default WaterData;