import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextHooksApp } from "../context/contextHooksApp";
import Translation from "../context/translation";

const NavBar = () => {
  let { state } = useContext(ContextHooksApp);

  if (state.tabLayout) {
    return (
      <>
        <div className="ui top attached tabular menu">
          <NavLink exact activeClassName="active item" className="item" to="/">
            Home
          </NavLink>

          <NavLink activeClassName="active item" className="item" to="/people">
            <Translation string={"people"} />
          </NavLink>

          <NavLink activeClassName="active item" className="item" to="/planets">
            <Translation string={"planets"} />
          </NavLink>
          <NavLink className="item" activeClassName="active item" to="/films">
            <Translation string={"films"} />
          </NavLink>
          <NavLink className="item" activeClassName="active item" to="/species">
            <Translation string={"species"} />
          </NavLink>

          <NavLink
            className="item red"
            activeClassName="active item"
            to="/vehicles"
          >
            <Translation string={"vehicles"} />
          </NavLink>
          <NavLink
            className="item red"
            activeClassName="active item"
            to="/starships"
          >
            <Translation string={"starships"} />
          </NavLink>
        </div>
      </>
    );
  }

  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary pointing menu">
        <NavLink exact activeClassName="active item" className="item" to="/">
          Home
        </NavLink>

        <NavLink activeClassName="active item" className="item" to="/people">
          <Translation string={"people"} />
        </NavLink>

        <NavLink activeClassName="active item" className="item" to="/planets">
          <Translation string={"planets"} />
        </NavLink>
        <NavLink className="item" activeClassName="active item" to="/films">
          <Translation string={"films"} />
        </NavLink>
        <NavLink className="item" activeClassName="active item" to="/species">
          <Translation string={"species"} />
        </NavLink>

        <NavLink
          className="item red"
          activeClassName="active item"
          to="/vehicles"
        >
          <Translation string={"vehicles"} />
        </NavLink>
        <NavLink
          className="item red"
          activeClassName="active item"
          to="/starships"
        >
          <Translation string={"starships"} />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
