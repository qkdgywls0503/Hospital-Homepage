import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import RoomIcon from "@material-ui/icons/Room";
import CallIcon from "@material-ui/icons/Call";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ghmap from "../ghmap.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    display: "flex",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    backgroundColor: "#99ff55",
    color: "#775533",
    margin: theme.spacing(4, 0, 2),
  },
  img: {
    boxShadow: "2px 2px 4px #879988",
  },
}));

function generate(element) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function HosInfo() {
  const classes = useStyles();
  const [dense] = React.useState(false);
  const [secondary] = React.useState(false);

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <div className={classes.img}>
          <img src={ghmap} alt="ghmap" />
        </div>
        <Typography variant="h5" className={classes.title}>
          Information
        </Typography>

        <div className={classes.demo}>
          <List dense={dense}>
            {generate(
              <>
                <ListItem>
                  <ListItemIcon>
                    <RoomIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="충청남도 공주시 금학동 250-6"
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <CallIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="041-853-2090"
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <QueryBuilderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="오전 8:30~오후 5:30 / 토, 일 휴무"
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              </>
            )}
          </List>
        </div>
      </Grid>
    </div>
  );
}
