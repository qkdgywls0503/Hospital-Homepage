import React from "react";
import vtitle from "../vtitle.png";
import tcont from "../tcont.png";

class TreatInfo extends React.Component {
  render() {
    return (
      <div className="treatcon">
        <img src={vtitle} alt="vtitle" />
        <img src={tcont} alt="tcont" />
      </div>
    );
  }
}

export default TreatInfo;
