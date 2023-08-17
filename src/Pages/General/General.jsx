import React, { useReducer, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import AuthContext from "./AuthContext/AuthContext";
import DispalyData from "./AuthContext/DispalyData";

//useReducer Example
const reducerHandler = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "div":
      return state % 1;
  }
};

const General = () => {
  //Work with ref
  const ref = useRef();
  console.log("🚀 ~ file: General.jsx:7 ~ General ~ ref:", ref);

  const clickHandler = (event) => {
    console.log("running");
    event.preventDefault();
    console.log("ref", ref.current.value);
    ref.current.value = "";
  };

  //useReducer
  const initial = 5;

  const [state, dispatch] = useReducer(reducerHandler, initial);
  console.log("🚀 ~ file: General.jsx:34 ~ General ~ state:", state);

  return (
    <AuthContext.Provider value={{ state, ref, clickHandler, dispatch }}>
      <DispalyData />
    </AuthContext.Provider>
  );
};

export default General;
