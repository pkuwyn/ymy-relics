import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

//local import
import GridLayout from "../layout/GridLayout";
import Collection from "../components/Collection";

const useStyles = makeStyles((theme) => ({
  collection: {
    marginTop: theme.spacing(2),
  },
}));

export default function CollectionPage({ collections }) {
  const classes = useStyles();

  return (
    <>
      {/* <p>CollectionPage</p>
      <p>{JSON.stringify(collections)}</p> */}
      <div className={classes.collection}>
        <GridLayout dataList={collections} component={Collection}></GridLayout>
      </div>
    </>
  );
}
