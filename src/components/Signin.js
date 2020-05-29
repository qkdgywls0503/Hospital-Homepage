import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../css/styles.css";
import Button from "@material-ui/core/Button";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      in_id: "",
      in_pass: "",
    };
  }

  render() {
    const { in_id, in_pass } = this.state;

    return (
      <div className="signBox">
        <div className="signBox__tt">
          <h1
            style={{
              color: "#CA8D76",
              textShadow: "2px 2px 2px #684B40",
              textDecoration: "overline",
            }}
          >
            SIGN IN
          </h1>
          <div className="signBox__txtf">
            <div>
              <label for="in_id">ID : </label>
              <input
                type="text"
                id="in_id"
                name="in_id"
                placeholder="Your id..."
                value={in_id}
                onChange={this._handleValueChange}
              />
            </div>
            <div>
              <label for="in_pass">PASSWORD : </label>
              <input
                type="password"
                id="in_pass"
                name="in_pass"
                placeholder="Your password..."
                value={in_pass}
                onChange={this._handleValueChange}
              />
            </div>
            <Button variant="outlined" onClick={() => this._btnClickHandler()}>
              SIGN IN
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
    if (this.state.in_id == 0) {
      alert("ID를 입력해주세요");
    } else if (this.state.in_pass == 0) {
      alert("Password를 입력해주세요");
    } else {
      alert("로그인 되었습니다.");
      alert(
        "id : " + this.state.in_id + " / " + "password : " + this.state.in_pass
      );
    }
  };
}

export default Signin;
