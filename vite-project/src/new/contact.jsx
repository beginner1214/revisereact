import React from "react";
import address from "../componenets/address";
import Address from "../componenets/address";

const contact = ({ names, classs, rollno }) => {
  return (
    <div>
      <div>contact</div>
      <Address names={names} classs={classs} rollno={rollno} />
    </div>
  );
};

export default contact;
