import React from "react";
import "./App.css";
import Toggle from "./Toggle";

const App = () => {
  const [toggled, setToggled] = React.useState(false);
  const handleClick = () => {
    setToggled((s) => !s);
  };

  return (
    <div className="App">
      <Toggle toggled={toggled} onClick={handleClick} />
    </div>
  );
};

export default App;
