
import React, { useState, useEffect } from 'react';
import MonthYearPicker from 'react-month-year-picker';

const months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

function MonthPicker(props){

  let updateDate = props.update;
  const [visible, setVisibility] = useState(false);

  //If same month is selected, do not update state
  //Needed so double POST requests are not sent to server
  function checkMonth(month){
    if(month != props.state.month){
       updateDate({ month: month, year: props.state.year });
    }
  }

  function showWidget(){
    setVisibility(true);
  }

  function hideWidget() {
    setVisibility(false);
  }

  if(visible){
      return (
    /*This is from MonthYearPicker library*/
    /*onChangeYear changes the year on the picker but keeps the same month state*/
    /*onChangeMonth changes the month but keeps the year the same state*/
      <div>
        <MonthYearPicker
          selectedMonth={props.state.month}
          selectedYear={props.state.year}
          minYear={2000}
          maxYear={2022}
          onChangeYear={year => {
            updateDate({month: props.state.month, year: year })
            hideWidget()
          }}

          onChangeMonth={month => {
            checkMonth(month)
            hideWidget()
          }}
        />
      </div>
    );
  } else {
    return(
      <>
        <h2>Change month</h2>
        <button 
          onClick={showWidget}
        >
          {months[props.state.month - 1]+" "+props.state.year}
        </button>
      </>
    );
  }

}

export default MonthPicker;