import React, { useState, useEffect } from 'react';
import { sendPostRequest, sendGetRequest } from './ajax.jsx';
import BartChart from './BarChart.jsx';

function WaterData(){  
  
  const [ waterData, setWaterData ] = useState("None");

  //Initialize on load of this component
  useEffect(async() => {
    let newWaterData = await sendPostRequest("/query/postCDECData");
    console.log(newWaterData);
    // setWaterData(newWaterData);
  }, [])
  
  return (<></>);
}

export default WaterData;