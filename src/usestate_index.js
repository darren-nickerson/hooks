import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FaStar } from "react-icons/fa";



function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h1>The package is: {status}</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name="Darren" />
  </React.StrictMode>
);
