import React from "react";
import ConCard from "./ConCard";

class TreatInfo extends React.Component {
  render() {
    return (
      <div className="treatcon">
        <h1>진료안내</h1>
        <div className="concard">
          <ConCard />
          <ConCard />
          <ConCard />
          <ConCard />
        </div>
      </div>
    );
  }
}

export default TreatInfo;
