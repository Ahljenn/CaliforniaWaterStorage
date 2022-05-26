import React, { useState } from 'react';
import MonthYearPicker from 'react-month-year-picker';
import PropTypes from 'prop-types';

function MonthPicker(){

  const [date, setDate] = useState({
    month: 12,
    year: 2022
  });

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

export default MonthPicker;



// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     date = {
//       month: 10,
//       year: 2018,
//     };
//   }
//   render() {
//     return (
//       <div>
//         <MonthYearPicker
//           selectedMonth={date.month}
//           selectedYear={date.year}
//           minYear={2000}
//           maxYear={2030}
//           onChangeYear={year => setDate({ year: year })}
//           onChangeMonth={month => setDate({ month: month })}
//         />
//         <h3>Selected month: {date.month}</h3>
//         <h3>Selected year: {date.year}</h3>
//       </div>
//     );
//   }
// }