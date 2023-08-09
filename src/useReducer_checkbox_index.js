import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";






function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false)

  return (
    <div>
 
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      <p>{checked ? "checked" : "not checked"}</p>


    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name="Darren" />
  </React.StrictMode>
);
