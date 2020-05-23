import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import TreatInfo from "./TreatInfo";
import Reservation from "./reservation";
import Guidence from "./Guidance";
import HosInfo from "./HosInfo";
import SignIn from "./Signin";
import SignUp from "./Signup";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="Box">
          <Route exact path="/" component={Content} />
          <Route exact path="/treatinfo" component={TreatInfo} />
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/guidence" component={Guidence} />
          <Route exact path="/hosinfo" component={HosInfo} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
