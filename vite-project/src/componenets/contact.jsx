import React from "react";
import Address from "./address";

const Contact = ({ name, email, count, onIncrement }) => {
  return (
    <div>
      <h3>Contact</h3>
      <Address
        name={name}
        email={email}
        count={count}
        onIncrement={onIncrement}
      />
    </div>
  );
};

export default Contact;
