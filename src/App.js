import React, { useState, useEffect } from "react";
import "./App.css";
import Component1 from "./Component1";
const data1 = require("./data.json");

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(data1);
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        {data.map((d, index) => (
          <Component1 name={d.name} city={d.city} marks={d.marks} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
