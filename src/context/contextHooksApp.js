import React, { useReducer } from "react";

let ContextHooksApp = React.createContext();

let initialState = {
  tabLayout: true,
  defaultLang: "en"
};

let reducer = (state, action) => {
  switch (action.type) {
    case "setTabLayout":
      return { ...state, tabLayout: action.payload };
    case "setLang":
      return { ...state, defaultLang: action.payload };
    default:
      return { ...state };
  }
};

function ContextHooksAppProvider(props) {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <ContextHooksApp.Provider value={value}>
      {props.children}
    </ContextHooksApp.Provider>
  );
}

export { ContextHooksApp, ContextHooksAppProvider };
