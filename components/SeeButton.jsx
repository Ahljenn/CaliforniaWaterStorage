import React, { useState } from 'react';

function SeeMoreText(props){
  if (props.state == "See Less"){
      return (        
        <p>
          Here's a quick look at some of the data on reservoirs from the <a href="https://cdec.water.ca.gov/index.html">California Data Exchange Center</a>, which consolidates climate and water data from multiple federal and state government agencies, and  electric utilities.  Select a month and year to see storage levels in the eleven largest in-state reservoirs.
        </p>  
    )  
  }
  return (<></>) 
}

function SeeButton() {

  const [buttonState, setButtonState] = useState("See More");

  function seeButtonHandler() {
    setButtonState(buttonState == "See More" ? "See Less" : "See More");
  }

  return (
    <>
      <button
        className="see"
        onClick={seeButtonHandler}>
        {buttonState}
      </button>

      <div>
        <SeeMoreText state={buttonState}/>
      </div>
    </>
  )
}

export default SeeButton;