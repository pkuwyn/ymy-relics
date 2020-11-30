import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: "0 2rem",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Itemgrid({ dataList, component }) {
  const DataComponent = component;
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={2}>
          {dataList.map((data, index) => (
            <DataComponent data={data} key={index} />
          ))}
        </Grid>
      </div>
    </>
  );
}
