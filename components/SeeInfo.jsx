import React from 'react';
import WaterData from './WaterData.jsx';
import MonthPicker from './MonthPicker.jsx';

function SeeInfo(props){
  if (props.state == "See Less"){
      return (        
        <section className="main-container">

          <div className="charts">
            <WaterData />
          </div>

          <section className="sub-container">
            <p>
              Here's a quick look at some of the data on reservoirs from the <a href="https://cdec.water.ca.gov/index.html">California Data Exchange Center</a>, which consolidates climate and water data from multiple federal and state government agencies, and  electric utilities.  Select a month and year to see storage levels in the eleven largest in-state reservoirs.
            </p>

            
            <MonthPicker />
          </section>
        </section>
    )  
  }
  return (<></>); //Send nothing if state is "See More"
}

export default SeeInfo;