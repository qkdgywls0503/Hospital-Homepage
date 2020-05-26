import React from "react";
import treatstep from "../treatstep.png";
import rtime from "../rtime.png";
import rtimeway from "../rtimeway.png";

class Reservation extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={rtime} alt="rtime" />
        </div>
        <div>
          <img src={rtimeway} alt="rtimeway" />
        </div>
      </div>
    );
  }
}

export default Reservation;
