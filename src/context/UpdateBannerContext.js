import React, { useReducer } from "react";

let reducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { ...state, isBannerDisplayed: !state.isBannerDisplayed };
    default:
      return;
  }
};
const initialState = {
  isBannerDisplayed: true
};

const BannerContext = React.createContext(initialState);

function BannerProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BannerContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BannerContext.Provider>
  );
}

export { BannerContext, BannerProvider };
