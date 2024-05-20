/* eslint-disable react/prop-types */
import { useState } from "react";

function Header({ author }) {
  return <h1>Learn Basic React with {author ? author : "RifT"} 🚀</h1>;
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <Header />
      <button onClick={handleClick}> Total ({count})</button>;
    </>
  );
}

export default App;
