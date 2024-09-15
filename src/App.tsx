import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("hello world");
  }, []);
  function handleClick() {
    console.log("hello");
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>Built and Deployed by Github Actions</h1>
        <h1>Version 10</h1>
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  );
}

export default App;
