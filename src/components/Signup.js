import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../css/styles.css";
import Button from "@material-ui/core/Button";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      up_name: "",
      up_id: "",
      up_pass: "",
    };
  }

  render() {
    const { up_name, up_id, up_pass } = this.state;

    return (
      <div className="signupBox">
        <div className="signupBox__tt">
          <h1>SIGN UP</h1>
          <div className="signupBox__txtf">
            <div>
              <input
                type="text"
                name="up_name"
                value={up_name}
                onChange={this._handleValueChange}
              />
            </div>
            <div>
              <input type="text" name="up_id" value={up_id} />
            </div>
            <div>
              <input type="text" name="up_pass" value={up_pass} />
            </div>

            <Button variant="outlined" onClick={() => this._btnClickHandler()}>
              SIGN UP
            </Button>
          </div>
        </div>
      </div>
    );
  }

  _handleValueChange = (event) => {
    let nextState = {};

    nextState[event.target.name] = event.target.value;

    this.setState(nextState);
  };

  _btnClickHandler = () => {
    alert(this.state.up_name);
  };
}

export default Signup;
