import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import AuthContext from "./AuthContext";

const DispalyData = () => {
  const { state, ref, clickHandler, dispatch } = useContext(AuthContext);
  const [isValid, setIsValid] = useState(false);
  console.log("🚀 ~ file: DispalyData.jsx:8 ~ DispalyData ~ count:", isValid);
  return (
    <>
      {state}
      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        ref={ref}
      />
      <Button
        variant="outline-secondary"
        id="button-addon2"
        onClick={clickHandler}
      >
        Button
      </Button>
      <Button onClick={() => dispatch("add")}>+</Button>
      <Button onClick={() => dispatch("subtract")}>-</Button>
      <Button onClick={() => dispatch("div")}>/</Button>
    </>
  );
};

export default DispalyData;
