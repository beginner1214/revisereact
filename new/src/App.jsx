import { useReducer, useState } from "react";


const edata = {
  name: "",
  email: "",
  password: "",
};
const reducer = (data, action) => {
  console.log(action);
};
function App() {
  const [state, dispatch] = useReducer(reducer, edata);

  return (
    <>
      <input
        type="text"
        onChange={(e) => dispatch({ val: e.target.value, type: "name" })}
        placeholder="Enter your name"
      />
      <br></br>
      <input
        type="email"
        onChange={(e) => dispatch({ val: e.target.value, type: "email" })}
        placeholder="Enter your email"
      />
      <br></br>

      <input
        type="password"
        onChange={(e) => dispatch({ val: e.target.value, type: "password" })}
        placeholder="Enter your password"
      />
      <button>Submit</button>
    </>
  );
}

export default App;
