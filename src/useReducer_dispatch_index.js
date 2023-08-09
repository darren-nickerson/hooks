import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

let initialState = {
  message: "HI",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "yell":
      return {
        message: `HEY! I JUST SAID ${state.message}`,
      };
    case "whisper":
      return {
        message: `excuse me, i just said ${state.message}`,
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "yell" })}>Yell</button>
      <button onClick={() => dispatch({ type: "whisper" })}>Whisper</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name="Darren" />
  </React.StrictMode>
);
