import React, { useState } from 'react';

function SeeButton() {

  const [buttonState, setButtonState] = useState("See More");

  function seeButtonHandler() {
    setButtonState(buttonState == "See More" ? "See Less" : "See More");
  }

  return (
    <button
      className="see"
      onClick={seeButtonHandler}
    >
      {buttonState}
    </button>
  )
}

export default SeeButton;