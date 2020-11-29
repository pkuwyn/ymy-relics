import React from "react";

//local import
import { useJsonApi } from "../hooks/dataFetchHooks";
import GridLayout from "../layout/GridLayout";
import Collection from "../components/Collection";

export default function CollectionPage(props) {
  const [collections, setCollections] = useJsonApi(
    "http://www.sourcescene.com/map/json_collections/"
  );

  return (
    <>
      <p>CollectionPage</p>
      <p>{JSON.stringify(collections)}</p>
      <GridLayout dataList={collections} component={Collection}></GridLayout>
    </>
  );
}
