import React from "react";
import useCounter from "./Counter";
import { Card } from "react-bootstrap";

const ForwardCounter = () => {
  const counter = useCounter();
  //   const [counter, setCounter] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCounter((prevCounter) => prevCounter + 1);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);
  return (
    <Card style={{ backgroundColor: "green", color: "white" }}>{counter}</Card>
  );
};

export default ForwardCounter;
