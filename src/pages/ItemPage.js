import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//local import
import { useJsonApi } from "../hooks/dataFetchHooks";
import GridLayout from "../layout/GridLayout";
import Item from "../components/Item";

export default function ItemPage({ match: { params } }) {
  const [items, setItems] = useJsonApi(
    `http://www.sourcescene.com/map/json_collection_items/${params.collectionId}/`
  );
  return (
    <>
      <p>ItemPage- {params.collectionId}</p>
      {/* <p>{JSON.stringify(items)}</p> */}
      <GridLayout dataList={items} component={Item}></GridLayout>
    </>
  );
}
