import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
          <h1
            style={{
              color: "#CA8D76",
              textShadow: "2px 2px 2px #684B40",
              textDecoration: "overline",
            }}
          >
            SIGN UP
          </h1>
          <div className="signupBox__txtf">
            <div>
              <label for="up_name">NAME : </label>
              <input
                type="text"
                id="up_name"
                name="up_name"
                placeholder="Your name..."
                value={up_name}
                onChange={this._handleValueChange}
              />
            </div>
            <div>
              <label for="up_id">ID : </label>
              <input
                type="text"
                id="up_id"
                name="up_id"
                placeholder="Your id..."
                value={up_id}
                onChange={this._handleValueChange}
              />
            </div>
            <div>
              <label for="up_pass">PASSWORD : </label>
              <input
                type="text"
                id="up_pass"
                name="up_pass"
                placeholder="Your password..."
                value={up_pass}
                onChange={this._handleValueChange}
              />
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
    if (this.state.up_name == 0) {
      alert("Name을 입력해주세요");
    } else if (this.state.up_id == 0) {
      alert("ID를 입력해주세요");
    } else if (this.state.up_pass == 0) {
      alert("Password를 입력해주세요");
    } else {
      alert("회원가입 되었습니다.");
      alert(
        "NAME : " + this.state.up_name + " / " + "ID : " + this.state.up_id
      );
    }
  };
}

export default Signup;
