import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, useLocation } from "react-router-dom";

//local import
import logo from "../assets/logo.png";

function ElevationScroll(props) {
  const { children, elevationValue } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? elevationValue : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2rem",
  },
  logoButton: {
    padding: 0,
    border: "none",
    "&:hover": {
      backgroundColor: "unset",
    },
  },
  logo: {
    height: "5rem",
    // marginRight: "auto",
    // flex: "1 0 0",
  },
  tabs: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    height: "5rem",
    minWidth: 60,
    marginLeft: 25,
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: 100,
    margin: "0 1.5rem 0 3rem",
    minWidth: 140,
    height: 35,
  },
  buttonLabel: {},
}));

const tabLinkMap = ["/", "/services", "/revolution", "/about", "/contact"];

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    const correctValue = tabLinkMap.indexOf(pathname);
    if (correctValue === -1) {
      setValue(false);
    } else {
      correctValue === value || setValue(correctValue);
    }
  }, [value, pathname]);

  return (
    <>
      <ElevationScroll elevationValue={24}>
        <AppBar color="primary">
          <Toolbar variant="dense"></Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
}
