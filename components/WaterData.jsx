import React, { useState, useEffect } from 'react';
import { sendPostRequest, sendGetRequest } from './ajax.jsx';
import DataChart from './DataChart.jsx';
import PropTypes from 'prop-types';


//Recieve data object to send as a post request
//Post response request returns water data
//Maps a new array only with stationId and value
async function waterPostReq(dateObj){
  let waterData = await sendPostRequest("/query/postCDECData", dateObj); 
  let filteredData = waterData.map(({stationId, value}) => ({stationId,value}));
  console.log(filteredData);
  return filteredData;
}

function WaterData(props){  
  
  const [ waterData, setWaterData ] = useState("None");

  //Send a post request for retrieve data only when the date state changes / not on inital render
  useEffect(async() => {
    setWaterData(await waterPostReq(props.state));
  }, [props.state])

  return (
    <>
      Month:{props.state.month}
      Year:{props.state.year}
    </>
  );
}

export default WaterData;