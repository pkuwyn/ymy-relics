import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import { Link } from "react-router-dom";

//icon
import MapIcon from "@material-ui/icons/Map";

//local import
import logo from "../assets/ymylogo.png";

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
    height: "5rem",
  },
  toolbar: {
    height: "5rem",
  },
  logo: {
    height: "3.5rem",
    marginRight: theme.spacing(1),
  },
  title: {
    display: "block",
    marginRight: "auto",
    fontSize: "1.15rem",
    userSelect: "none",
  },
  button: {
    color: theme.palette.secondary.light,
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
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
              color="secondary"
            >
              圆明园文物数字化
            </Typography>
            <Button
              variant="text"
              // color="secondary"
              size="large"
              className={classes.button}
              startIcon={<MapIcon />}
              onClick={() => {
                window.open("http://www.sourcescene.com/map/show_map/ymy/");
              }}
            >
              地图模式
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
}
