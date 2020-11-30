import { useEffect, useState } from "react";

// const collectionsUrl = "http://192.168.50.110/map/json_collections/";

// export function useCollections() {
//   const [value, setValue] = useState([]);
//   useEffect(() => {
//     fetch(collectionsUrl)
//       .then((res) => res.json())
//       .then((collections) => {
//         setValue(collections);
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   return [value, setValue];
// }

// export function useCollectionItems() {
//   return false;
// }

export function useJsonApi(url) {
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setValue(data);
      })
      .catch((err) => console.log(err));
  }, [url]);
  return [value, setValue];
}
