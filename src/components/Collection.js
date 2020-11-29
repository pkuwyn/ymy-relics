import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default function Collection({ data: { collection_name } }) {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Paper>{collection_name}</Paper>
      </Grid>
    </>
  );
}
