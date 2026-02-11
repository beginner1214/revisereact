import { useState } from "react";
import Profile from "./componenets/profile";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sam");
  const [email, setEmail] = useState("sam@example.com");

  const handleRename = () => {
    setName("Alex");
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h2>App</h2>
      <Profile
        name={name}
        email={email}
        count={count}
        onRename={handleRename}
        onIncrement={handleIncrement}
      />
    </>
  );
}

export default App;
