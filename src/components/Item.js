import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    // height: "10rem",
    width: "100%",
  },
  paper: {
    position: "relative",
    overflow: "hidden",
    "&:hover div": {
      opacity: 1,
    },
  },
  bottom: {
    height: "20%",
    width: "100%",
    backgroundColor: theme.palette.secondary.light,
    position: "absolute",
    bottom: "0px",
    opacity: 0.6,
    transition: "all 0.3s",
    // zIndex: "1000",
    // "&:hover": {
    //   opacity: 1,
    // },
  },
}));

export default function Item({ data: { item_name, item_picurl } }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      {/* <Paper>{item_name}</Paper> */}

      <Paper className={classes.paper}>
        <img src={item_picurl} alt={item_name} className={classes.img} />
        <div className={classes.bottom}></div>
      </Paper>
    </Grid>
  );
}
