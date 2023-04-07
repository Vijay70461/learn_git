import React from "react";

const Card = ({ name, pno }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <h2>{pno}</h2>
      <button>Edit</button>
      <button>Delete</button>
      <hr />
    </div>
  );
};

export default Card;
