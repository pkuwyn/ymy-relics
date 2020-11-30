import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: -30,
    height: 30,
    // width: "100vw",
    backgroundColor: theme.palette.primary.light,

    // position: "fixed",
    // bottom: 0,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography
        color="textPrimary"
        variant="subtitle1"
        className={classes.text}
        noWrap
      >
        版权所有 © 北京大学考古虚拟仿真实验教学中心
      </Typography>
    </footer>
  );
}
