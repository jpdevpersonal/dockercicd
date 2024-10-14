import { useEffect } from "react";
import packageJson from "../package.json";

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
        <h1>Manual checkout</h1>
        <h1>Manual Docker Build</h1>
        <h1>Version: {packageJson.version}</h1>
        <button onClick={handleClick}>Log To Console</button>
      </div>
    </>
  );
}

export default App;
