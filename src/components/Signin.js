import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../css/styles.css";
import Button from "@material-ui/core/Button";

class Signin extends React.Component {
  render() {
    return (
      <div className="signBox">
        <div className="signBox__tt">
          <h1>LOGIN</h1>
          <div className="signBox__txtf">
            <div>
              <TextField id="loginid" label="ID" />
            </div>
            <div>
              <TextField id="loginpass" label="PASSWORD" />
            </div>

            <Button variant="outlined">SIGN IN</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
