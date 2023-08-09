import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useInput } from "./useInput";
// The code renders a React app with a root element, using the ReactDOM library. The app component is wrapped in a StrictMode component and rendered to the root element.

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle();
    resetColor();
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input {...titleProps} type="text" placeholder="Sound..." />
        <input {...colorProps} type="color" />
        <button>ADD</button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name="Darren" />
  </React.StrictMode>
);
