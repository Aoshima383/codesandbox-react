import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p>{count}</p>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={onClickCountUp}>+</button>
    </div>
  );
}
