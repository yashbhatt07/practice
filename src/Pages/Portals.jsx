import React from "react";
import ReactDOM from "react-dom";
import Portal1 from "./Portals/Portal1";
import Portal2 from "./Portals/Portal2";

const Portals = () => {
  const p1 = "This is Portal 1";
  const p2 = "This is Portal 2";

  return (
    <div>
      {ReactDOM.createPortal(
        <Portal1 p1={p1} />,
        document.getElementById("first-root")
      )}
      {ReactDOM.createPortal(
        <Portal2 p2={p2} />,
        document.getElementById("second-root")
      )}
    </div>
  );
};

export default Portals;
