import React from "react";
import  "./Component1.css";

export default function Component1({ name, city, marks }) {
  return (
    <div className="profile">
      <h1>{name}</h1>
      <h1>{city}</h1>
      <h1>{marks}</h1>
    </div>
  );
}
