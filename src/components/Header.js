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

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={logopic} alt="logopic" />
      </Link>
      <div className="sign">
        <Link to="/Signin">
          <input type="button" value="Sign In" />
        </Link>
        <Link to="/Signup">
          <input type="button" value="Sign Up" />
        </Link>
      </div>
      <div className="header__menubar">
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <Link to="/treatinfo">
            <BottomNavigationAction
              label="진료안내"
              value="recents"
              icon={<RestoreIcon />}
            />
          </Link>
          <Link to="/reservation">
            <BottomNavigationAction
              label="진료예약"
              value="favorites"
              icon={<FavoriteIcon />}
            />
          </Link>
          <Link to="/guidence">
            <BottomNavigationAction
              label="이용안내"
              value="folder"
              icon={<FolderIcon />}
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
    </div>
  );
}
