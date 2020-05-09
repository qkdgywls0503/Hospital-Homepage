import React from "react";
import treatstep from "../treatstep.png";

class Reservation extends React.Component {
  render() {
    return (
      <div>
        <h1>진료예약</h1>
        <div>
          <h3>외래진료예약</h3>
          <img src={treatstep} alt="treatstep" />
        </div>
        <div>
          <h3>종합검진예약</h3>
          <img src={treatstep} alt="treatstep" />
        </div>
      </div>
    );
  }
}

export default Reservation;
