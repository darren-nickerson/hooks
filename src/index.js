import ReactDOM from "react-dom";
import "./index.css";
import React from "react";
import { useFetch } from "./useFetch";

function App({login}) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );

  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (data) {
    return (
      <div>
        <img src={data.avatar_url} width={100} alt={data.login} />
        <div>
          <h1>{data.login}</h1>
          {data.name && <p>{data.name}</p>}
          {data.location && <p>{data.location}</p>}
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App login="darren-nickerson" />
  </React.StrictMode>
);
