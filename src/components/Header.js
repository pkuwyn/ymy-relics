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
    // ...theme.mixins.toolbar,
    height: "8rem",
  },
  toolbar: {
    height: "8rem",
    // justifyContent: "flex-start",
  },
  logo: {
    height: "5rem",
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    display: "block",
    // [theme.breakpoints.up("sm")]: {
    //   display: "block",
    // },
  },
}));

// const tabLinkMap = ["/", "/services", "/revolution", "/about", "/contact"];

export default function Header(props) {
  const classes = useStyles();
  // const [value, setValue] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // let { pathname } = useLocation();
  // console.log(pathname);

  // //check if url is correct
  // useEffect(() => {
  //   const correctValue = tabLinkMap.indexOf(pathname);
  //   if (correctValue === -1) {
  //     setValue(false);
  //   } else {
  //     correctValue === value || setValue(correctValue);
  //   }
  // }, [value, pathname]);

  return (
    <>
      <ElevationScroll elevationValue={24}>
        <AppBar color="primary">
          <Toolbar className={classes.toolbar}>
            <Link to="/">
              <img src={logo} alt="logo" className={classes.logo} />
            </Link>
            <Typography className={classes.title} variant="h5" noWrap>
              圆明园文物数字化
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
}
