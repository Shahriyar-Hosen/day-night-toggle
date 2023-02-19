import React, { useState } from "react";
import "./App.css";
import Toggle from "./Toggle";

const App = () => {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled((day) => !day);
  };

  return (
    <div className="App">
      <Toggle toggled={toggled} onClick={handleClick} />
    </div>
  );
};

export default App;
