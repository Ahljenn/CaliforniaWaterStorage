import React, { useState, useEffect } from 'react';
import { sendPostRequest, sendGetRequest } from './ajax.jsx';
import DataChart from './DataChart.jsx';
import PropTypes from 'prop-types';


//Recieve data object to send as a post request
//Post response request returns water data
//Maps a new array only with stationId and value
async function waterPostReq(dateObj){
  let waterDataFromPost = await sendPostRequest("/query/postCDECData", dateObj); 
  let valid = true;

  // -9999 means data does not exist for that month
  waterDataFromPost.forEach(item => {
    if(item.value == -9999){
      valid = false;
    }
    console.log(item);
  })

  //Return data only if the inputs are 'valid' and the number of items greater than 0
  if (valid && waterDataFromPost.length > 0){
    let filteredData = waterDataFromPost.map(({value}) => ({value}));
    return filteredData;
  }

  return "No data available";
}

function WaterData(props){  
  
  const [ waterData, setWaterData ] = useState("None");

  //Send a post request for retrieve data only when the date state changes / not on inital render
  useEffect(async() => {
    setWaterData(await waterPostReq(props.state));
    console.log("Date state changed in WaterData component")
  }, [props.state])

  // Display certain messages or chart depending on state of waterData
  if (waterData == "None") {
    return(<h1 class="temp-msg">Loading...</h1>);
  } else if (waterData == "No data available"){
    return(<h1 class="temp-msg">{waterData}</h1>);
  } else {
    return (<DataChart data={waterData} />);
  }
}

export default WaterData;