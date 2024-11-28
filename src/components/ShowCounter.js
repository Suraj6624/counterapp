import React, { useState } from "react";
import "./ShowCounter.css";
function ShowCounter() {
  const [number, setNumber] = useState(47);
  function increaseHandler() {
    setNumber(number + 1);
  }
  function decreaseHandler() {
    setNumber(number - 1);
  }
  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className="counter">Counter App</h1>
          <h1 className="number">{number}</h1>
          <div className="buttonbox">
            <button className="inc" onClick={increaseHandler}>
              Increase
            </button>
            <button className="dec" onClick={decreaseHandler}>
              Decrease
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ShowCounter;
