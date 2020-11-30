import React from "react";
import TextField from "@material-ui/core/TextField";

export default function SearchBar({ search, setSearch, setCurrentPage }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <TextField
        id="standard-basic"
        label="搜索"
        value={search}
        onChange={handleChange}
        InputLabelProps={{
          color: "secondary",
        }}
      />
    </>
  );
}
