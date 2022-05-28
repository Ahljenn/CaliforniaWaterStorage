import React, { useState, useEffect } from 'react';
import MonthYearPicker from 'react-month-year-picker';

function MonthPicker(props){

  let updateDate = props.update;
  
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
          onChangeYear={year => updateDate({month: props.state.month, year: year })}
          onChangeMonth={month => updateDate({ month: month, year: props.state.year })}
        />
        <h3>Selected month: {props.state.month}</h3>
        <h3>Selected year: {props.state.year}</h3>
      </div>
    );
}

export default MonthPicker;