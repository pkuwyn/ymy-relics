import React from "react";

export default function ItemPage({ match: { params } }) {
  return (
    <>
      <p>ItemPage- {params.collectionId}</p>
    </>
  );
}
