import React, { useContext, useEffect, useState } from "react";

import { ContextHooksApp } from "../context/contextHooksApp";
import Translation from "../context/translation";
import Search from "../components/search";

const Header = () => {
  let { state, dispatch } = useContext(ContextHooksApp);

   const [lang, setLang] = useState();

  useEffect(() => {
    setLang(state.defaultLang);
  }, [state.defaultLang]);

  const setLanguage = langVersion => () =>
    dispatch({ type: "setLang", payload: langVersion });

  const [isTablayout, setIsTablayout] = useState();

  useEffect(() => {
    setIsTablayout(state.tabLayout);
  }, [state.tabLayout]);

  const setTabLayout = () =>
    dispatch({ type: "setTabLayout", payload: !isTablayout });

  let classLang = lang === "en" ? "pl" : "gb uk";

  let langVersion = lang === "en" ? "pl" : "en";
  return (
    <div className="ui menu">
      <div className="header item">
        <button className="ui  basic icon button" onClick={setTabLayout}>
          <i className="icon settings" /> <Translation string={"layout"} />
        </button>
      </div>
      <div className="item">
        <button
          className="ui  basic icon button"
          onClick={setLanguage(langVersion)}
        >
          <i className={`${classLang} flag`} /> <Translation string={"lang"} />
        </button>
      </div>

      <div className="right menu">
        <div className="item">
          <div className="item">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
