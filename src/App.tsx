import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("hello world");
  }, []);
  function handleClick() {
    console.log("Hello");
  }

  return (
    <>
      <h1>Docker CICD Test</h1>
      <div className="card">
        <h1>Deploy To Production</h1>
        <h2>Live</h2>
        <h1>Development</h1>
        <button onClick={handleClick}>Log To Console</button>
      </div>
    </>
  );
}

export default App;
