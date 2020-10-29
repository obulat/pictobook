import './App.css';
import {IconSet} from "./icon-set";
import React from "react";

function App() {
  const icons = [
    "chevron-up", "chevron-down", "chevron-left", "chevron-right",
    "angle-up", "angle-down", "angle-left", "angle-right",
    "cc-by", "cc-nc", "cc-logo", "cc-nd", "cc-sa", "cc-zero"]
  return (
    <div className="App">
        <IconSet icons={icons} />
      </div>
  );
}

export default App;
