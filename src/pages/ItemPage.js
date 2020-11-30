import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

//local import
import { useJsonApi } from "../hooks/dataFetchHooks";
import GridLayout from "../layout/GridLayout";
import Item from "../components/Item";
import SearchBar from "../components/SearchBar";
import ItemNavigation from "../components/ItemNavigation";

const useStyles = makeStyles((theme) => ({
  div: {
    marginTop: theme.spacing(2),
  },
  tools: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    display: "flex",
    alignItems: "flex-end",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  pagination: {
    margin: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
}));

const countPerPage = 6;

export default function ItemPage({ match: { params }, collections }) {
  const classes = useStyles();
  const [items, setItems] = useJsonApi(
    `http://www.sourcescene.com/map/json_collection_items/${params.collectionId}/`
  );

  const [search, setSearch] = useState("");

  const filteredItems = items.filter(
    (item) => search === "" || item.item_name.indexOf(search) !== -1
  );

  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = Math.ceil(filteredItems.length / countPerPage);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const getCollectionName = () => {
    const collection = collections.find(
      (collection) => collection.collection_id === params.collectionId
    );
    return {
      name: collection.collection_name,
      link: `/collection/${collection.collection_id}`,
    };
  };

  return (
    <div className={classes.page}>
      <div className={classes.tools}>
        <ItemNavigation
          rootName="首页"
          firstLevel={getCollectionName()}
          secondLevel={currentPage}
        />
        <SearchBar
          search={search}
          setSearch={setSearch}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {/* <p>{JSON.stringify(items)}</p> */}
      <GridLayout
        dataList={filteredItems.slice(
          (currentPage - 1) * countPerPage,
          currentPage * countPerPage
        )}
        component={Item}
      ></GridLayout>
      {pageNumber > 1 ? (
        <Pagination
          count={pageNumber}
          color="secondary"
          className={classes.pagination}
          page={currentPage}
          onChange={handlePageChange}
        />
      ) : null}
    </div>
  );
}
