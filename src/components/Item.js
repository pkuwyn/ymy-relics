import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
//icons

import RoomIcon from "@material-ui/icons/Room";
import PanoramaOutlinedIcon from "@material-ui/icons/PanoramaOutlined";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    overflow: "hidden",
    "&:hover ": {
      "& $bottom": {
        opacity: 1,
        backgroundColor: theme.palette.primary.light,
      },
      "& $img": {
        opacity: 1,
        transform: "scale(1.2)",
      },
    },
  },
  img: {
    width: "100%",
    display: "block",
    transition: "all 0.5s",
    opacity: 0.95,
    cursor: "pointer",
  },
  bottom: {
    height: "20%",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    position: "absolute",
    bottom: "0px",
    opacity: 0.8,
    transition: "all 0.5s",
    zIndex: "1000",

    display: "flex",
    alignItems: "center",
    paddingLeft: "0.5rem",
  },
  text: {
    marginRight: "auto",
    userSelect: "none",
  },
  panoIcon: {
    zIndex: 1000,
    position: "absolute",
    top: 0,
    right: 0,
    color: theme.palette.primary.light,
  },
}));

export default function Item({
  data: {
    item_name,
    item_picurl,
    bd_pos_x,
    bd_pos_y,
    item_linkurl,
    pos_x,
    pos_y,
  },
}) {
  const classes = useStyles();
  const gotoPano = () => {
    window.open(`http://www.sourcescene.com${item_linkurl}`);
  };
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper className={classes.paper} elevation={1} onClick={gotoPano}>
        <IconButton
          aria-label="pano"
          color="primary"
          className={classes.panoIcon}
          onClick={gotoPano}
        >
          <PanoramaOutlinedIcon />
        </IconButton>

        <img src={item_picurl} alt={item_name} className={classes.img} />
        <div className={classes.bottom}>
          <Typography
            color="textPrimary"
            className={classes.text}
            variant="subtitle2"
            // onClick={handleClick(link)}
          >
            {item_name}
          </Typography>
          <IconButton
            aria-label="map"
            color="secondary"
            onClick={() => {
              window.open(
                `http://www.sourcescene.com/map/show_map/ymy/?x=${pos_x}&y=${pos_y}&level=19`
              );
            }}
          >
            <RoomIcon />
          </IconButton>
        </div>
      </Paper>
    </Grid>
  );
}
