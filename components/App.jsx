import React, {useState} from 'react';
import '../styles/App.css';
import SeeInfo from './SeeInfo.jsx';

function App() {

  //Initialize state variable and function
  const [buttonState, setButtonState] = useState("See More");

  //Set state based on current on button click
  function seeButtonHandler() {
    setButtonState(buttonState == "See More" ? "See Less" : "See More");
  }
  
  return (
  <>
    <header>
      <h1 className="title">Water Storage in California reservoirs</h1>
    </header>
    
    <main>
      <div className="main-about">
        <p className="main-paragraph">
          California's reservoirs are part of a <a href="https://www.ppic.org/wp-content/uploads/californias-water-storing-water-november-2018.pdf">complex water storage system</a>.  The State has very variable weather, both seasonally and from year-to-year, so storage and water management is essential.  Natural features - the Sierra snowpack and vast underground aquifers - provide more storage capacity,  but reservoirs are the part of the system that people control on a day-to-day basis.  Managing the flow of surface water through rivers and aqueducts, mostly from North to South, reduces flooding and attempts to provide a steady flow of water to cities and farms, and to maintain natural riparian habitats.  Ideally, it also transfers some water from the seasonal snowpack into long-term underground storage.  Finally, hydro-power from the many dams provides carbon-free electricity. 
        </p>
        <p className="text-before-button">
          California's water managers monitor the reservoirs carefully, and the state publishes daily data on reservoir storage.
        </p>
        
        <button
          className="see"
          onClick={seeButtonHandler}>
          {buttonState}
        </button>
      </div>

      <div className="figure-container">
        <img src="https://cdn.theatlantic.com/thumbor/HYdYHLTb9lHl5ds-IB0URvpSut0=/900x583/media/img/photo/2014/09/dramatic-photos-of-californias-historic-drought/c01_53834006/original.jpg
"/>
        <figcaption>Lake Oroville in the 2012-2014 drought. Image credit Justin Sullivan, from The Atlatic article Dramatic Photos of California's Historic Drought.</figcaption>
      </div>
    </main>

    <div className="charts">
      <SeeInfo state={buttonState}/>
    </div>
    
  </>
  );
}

export default App;