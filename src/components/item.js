import React from "react";
import { Link } from "react-router-dom";
import stImage from "../images/star_wars_logo2.png";

const Item = props => {
  var { item } = props;

  let pathname = item.url.match(/\/api\/(.*)/)[1];

  return (
    <div className="item">
      <div className="image">
        <img src={stImage} alt='starWars'/>
      </div>
      <div className="content">
        <div className="header">{item.name != null ? item.name : item.title}</div>
        <div className="meta">
          <span>Created</span>
        </div>
        <div className="description">
          <p>{item.created}</p>
        </div>

        <div className="extra">
          <Link to={`/${pathname}`}>
             Additional Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
