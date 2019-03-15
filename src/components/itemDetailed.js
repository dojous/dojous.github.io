import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

const ItemDetailed = props => {
  let path = `${props.location.pathname}`;


  

  const [data, setData] = useState([]);

  useEffect(() => {
    let ignore = false;

    const getCollections = async () => {
      await axios
        .get(`https://swapi.co/api${path}`)
        .then(res => {
       
          if (!ignore)  setData(res.data);
         
        })
        .catch(err => {
          console.log("ERR", err);
        });
    };

    getCollections();
    return () => { ignore = true; }

  }, [data]);

  // useEffect(() => {
  //   try {
  //     window.scroll({
  //       top: 0,
  //       left: 0,
  //       behavior: "smooth"
  //     });
  //   } catch (error) {
  //     window.scrollTo(0, 0);
  //   }
  // });

  if (data === null) {
    return (
      <div className="ui container">
        <Loader type="ThreeDots" color="black" height="100" width="100" />
      </div>
    );
  }

  var tifOptions = Object.keys(data).map(key => {
    return (
      <div className="ui feed" key={Math.random(100)}>
        <div className="event">
          <div className="label">
            <i className="check icon" />
          </div>
          <div className="content">
            <p style={{ fontWeight: "bold" }}>{key.toUpperCase()}</p>
            <div className="ui list">
              {Array.isArray(data[key])
                ? data[key].map(item => (
                    <div className="item" key={Math.random(100)}>
                      <i className="linkify icon" />
                      <div className="content">
                        <Link
                         to={`/${item.match(/\/api\/(.*)/)[1]}`}
                        >
                          {item}
                        </Link>
                      </div>
                    </div>
                  ))
                : data[key]}
            </div>
          </div>
        </div>
      </div>
    );
  });
  let name = path.split("/")[1];

  return (
    <>
      <div className="rightTopCorner">
        <div className="ui breadcrumb">
         
            <Link  to="/">
              Home
            </Link>
         
          <span className="divider">/</span>
         
            <Link to={`/${name}`}>
              {name}
            </Link>
       
          <span className="divider">/</span>
          <div className="active section">
            {data.name ? data.name : data.title}
          </div>
        </div>
      </div>
      <div>
        <Link to={`/${name}`}>
          <i className="large icons">
            <i className="big left chevron icon" />
          </i>
          Back
        </Link>
      </div>

      {tifOptions}
    </>
  );
};

export default ItemDetailed;
