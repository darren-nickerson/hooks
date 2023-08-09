import { useTrees } from "./index";

function App() {
  const { trees } = useTrees();
  return (
    <div>
      <h1>Trees I've Heard Of</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
