import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Remove</button>
    </div>
  );
}

export default Home;
