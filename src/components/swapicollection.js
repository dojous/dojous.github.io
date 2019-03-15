import React from "react";
import { useSWAPIcollection } from "../utils/useSWAPIcollection";
import "semantic-ui-css/semantic.min.css";
import Item from "./item";
import Loader from "react-loader-spinner";
import Translation from "../context/translation";

const SwapiCollection = ({ items }) => {
  const collection = useSWAPIcollection(items);

  if (collection === null) {
    return <Loader type="ThreeDots" color="black" height="100" width="100" />;
  }

  return (
    <>
      <div className="ui center aligned container">
        <h1 className="ui header">
          <Translation string={items} />
        </h1>
        <div className="ui unstackable divided items">
          {collection.map(item => (
            <Item key={Math.random(100)} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SwapiCollection;
