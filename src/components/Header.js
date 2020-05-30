import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "../css/styles.css";
import logopic from "../logopic.png";
import ChatIcon from "@material-ui/icons/Chat";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const [isLogin, setIsLogin] = React.useState(
    sessionStorage.getItem("isLogin")
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={logopic} alt="logopic" />
      </Link>
      <div className="boxes">
        <div className="header__menubar">
          <BottomNavigation
            value={value}
            onChange={handleChange}
            className={classes.root}
          >
            <Link to="/treatinfo">
              <BottomNavigationAction
                label="진료안내"
                value="PeopleAlt"
                icon={<PeopleAltIcon />}
              />
            </Link>
            <Link to="/reservation">
              <BottomNavigationAction
                label="진료예약"
                value="WatchLater"
                icon={<WatchLaterIcon />}
              />
            </Link>
            <Link to="/guidence">
              <BottomNavigationAction
                label="이용안내"
                value="Chat"
                icon={<ChatIcon />}
              />
            </Link>
            <Link to="/HosInfo">
              <BottomNavigationAction
                label="병원소개"
                value="nearby"
                icon={<LocationOnIcon />}
              />
            </Link>
          </BottomNavigation>
        </div>
        <div className="sign">
          {isLogin ? null : (
            <>
              <Link to="/Signin">
                <input type="button" value="Sign In" />
              </Link>
              <Link to="/Signup">
                <input type="button" value="Sign Up" />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
