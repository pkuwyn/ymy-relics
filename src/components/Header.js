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
import ThemeColorPicker from "./ThemeColorPicker";

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
  },
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
          <Toolbar>
            <ThemeColorPicker />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
}
