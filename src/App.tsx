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
        <h1>Deploy Main To Prod</h1>
        <h2>Version: 1</h2>
        <h1>Ebvironment: Production</h1>
        <button onClick={handleClick}>Log To Console</button>
      </div>
    </>
  );
}

export default App;
