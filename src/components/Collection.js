import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import ButtonBase from "@material-ui/core/ButtonBase";
import "./webkit.css";

const extraCollectionConfig = {
  beida: {
    year: 2019,
    map_link: "http://www.sourcescene.com/map/show_map/ymy/",
  },
  xiyanglou: {
    year: 2020,
    map_link: "http://www.sourcescene.com/map/show_map/ymy/",
  },
};

const useStyles = makeStyles((theme) => ({
  paper: {
    userSelect: "none",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover ": {
      "& $img": {
        opacity: 1,
        transform: "scale(1.1)",
      },
    },
  },
  img: {
    width: "70%",
    display: "block",
    transition: "all 0.5s",
    opacity: 0.95,
    clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)",
  },
  right: {
    alignSelf: "stretch",
    padding: theme.spacing(2),
    position: "relative",
    width: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  content: {
    width: "100%",

    textAlign: "center",
  },
  year: {
    width: 50,
    height: 50,
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: theme.palette.primary.main,
    clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
  },
  buttonbase: {
    padding: 3,
    borderRadius: 10,
  },
  text: {
    position: "absolute",
    fontWeight: 700,
    bottom: 5,
    right: 5,
    transform: `rotateZ(-45deg)`,
  },
}));

export default function Collection({
  data: { collection_name, collection_picurl, collection_id },
}) {
  const classes = useStyles();
  let history = useHistory();

  return (
    <>
      <Grid item xs={12} md={6}>
        <Paper
          elevation={4}
          className={classes.paper}
          onClick={() => {
            history.push(`/collection/${collection_id}`);
          }}
        >
          <img
            src={collection_picurl}
            alt={collection_name}
            className={`${classes.img} img-webkit`}
          />

          <div className={classes.right}>
            <div className={classes.content}>
              <ButtonBase className={classes.buttonbase}>
                <Typography color="textPrimary" variant="subtitle2">
                  {collection_name}
                </Typography>
              </ButtonBase>
            </div>

            <div className={`${classes.year} year-webkit`}>
              <Typography
                color="secondary"
                variant="caption"
                className={classes.text}
              >
                {extraCollectionConfig[collection_id].year}
              </Typography>
            </div>
          </div>
        </Paper>
      </Grid>
    </>
  );
}
