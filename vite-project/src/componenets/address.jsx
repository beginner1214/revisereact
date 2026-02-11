import React from "react";

const Address = ({ name, email, count, onIncrement }) => {
  return (
    <div>
      <h3>Address</h3>
      <div>name: {name}</div>
      <div>email: {email}</div>
      <div>count: {count}</div>
      <button onClick={onIncrement}>Increment Count</button>
    </div>
  );
};

export default Address;
