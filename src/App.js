import React, { lazy, Suspense } from "react";

import "./App.css";

import Main from "./components/main";
import NavBar from "./components/navBar";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./components/notfound";

import Header from "./components/header";

import ItemDetailed from "./components/itemDetailed";

import Loader from "react-loader-spinner";

const collectionName = "(people|starships|films|vehicles|planets|species)";

const App = () => {
  return (
    <>
      <Header />

      <NavBar />

      <div className="ui bottom attached active tab segment">
        <Suspense
          fallback={
            <Loader type="Watch" color="red" height="250" width="250" />
          }
        >
          <Switch>
            <Route path="/" exact component={Main} />

            <Route
              path={`/${collectionName}`}
              exact
              render={props => (
                <LazySwapiCollection
                  items={props.location.pathname.split("/")[1]}
                />
              )}
            />

            <Route path={`/${collectionName}/:id`} component={ItemDetailed} />

            <Route path="/not-found" component={NotFound} />

            <Redirect to="/not-found" />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

const LazySwapiCollection = ({ items }) => {
  const SwapiCollection = lazy(() => import("./components/swapicollection"));

  return <SwapiCollection items={items} />;
};

export default App;
