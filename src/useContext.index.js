import ReactDOM from "react-dom/client";
import "./index.css";
import React, { createContext, useContext } from "react";
import App from "./App";

const TreeContext = createContext();
export const useTrees = () => useContext(TreeContext);

const trees = [
  { id: 1, name: "Oak" },
  { id: 2, name: "Pine" },
  { id: 3, name: "Birch" },
  { id: 4, name: "Maple" },
  { id: 5, name: "Ash" },
  { id: 6, name: "Elm" },
  { id: 7, name: "Cedar" },
  { id: 8, name: "Walnut" },
  { id: 9, name: "Cherry" },
  { id: 10, name: "Beech" },
];



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TreeContext.Provider value={{ trees }}>
      <App />
    </TreeContext.Provider>
  </React.StrictMode>
);
