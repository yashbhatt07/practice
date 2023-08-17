import React from "react";
import useCounter from "./Counter";
import { Card } from "react-bootstrap";

export const BackwardCounter = () => {
  const counter = useCounter(false);

  //   const [counter, setCounter] = useState(0);
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCounter((prevCounter) => prevCounter - 1);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);
  return (
    <Card style={{ backgroundColor: "red", color: "white" }}>{counter}</Card>
  );
};
