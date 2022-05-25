import React, { useState, useEffect } from 'react';
import { sendPostRequest, sendGetRequest } from './ajax.jsx';
import BarChart from './BarChart.jsx';

function WaterData(){  
  
  const [ waterData, setWaterData ] = useState("None");

  //Initialize on load of this component
  useEffect(async() => {
    let newWaterData = await sendPostRequest("/query/postCDECData");
    setWaterData(newWaterData);
  }, [])
  
  return (
    <>
      <BarChart data={waterData} />;
    </>);
}

export default WaterData;