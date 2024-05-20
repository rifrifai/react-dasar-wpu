import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <Header />
      <button onClick={handleClick}> Total ({count})</button>
    </>
  );
}

export default App;
