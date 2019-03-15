import { useState, useEffect } from "react";
import axios from "axios";

function useSWAPIcollection(collection) {
   const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;
    const getCollections = async () => {
      await axios
        .get(`https://swapi.co/api/${collection}`)
        .then(res => {
          console.log("axios", res.data.results);
          if (!ignore) setData(res.data.results);
        })
       
        .catch(err => {
          console.log("ERR", err);
        });
    };

    getCollections();
    return () => {
      ignore = true;
    };
  }, []);

  return data;
}

export { useSWAPIcollection };
