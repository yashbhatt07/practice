import "./App.css";
// import Portals from "./Pages/Portals";
import General from "./Pages/General/General";
import { BackwardCounter } from "./Pages/hooks/BackwardCounter";
import ForwardCounter from "./Pages/hooks/ForwardCounter";

function App() {
  return (
    <>
      <h3>Hello</h3>
      <General />
      <ForwardCounter />
      <BackwardCounter />
    </>
  );
}

export default App;
