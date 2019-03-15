import { useContext } from "react";
import { ContextHooksApp } from "../context/contextHooksApp";

import en from "../locales/en.json";
import pl from "../locales/pl.json";

const Translation = ({ string }) => {
  const langs = {
    en,
    pl
  };

  let { state } = useContext(ContextHooksApp);

  return langs[state.defaultLang][string];
};

export default Translation;
