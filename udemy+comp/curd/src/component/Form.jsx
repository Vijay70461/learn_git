import React, { useState } from "react";

const Form = ({ onAddData, index }) => {
  const [name, setName] = useState("");
  const [pno, setPno] = useState("");

  const create = (event) => {
    event.preventDefault();
    const product = { id: index, name, pno };
    onAddData(product);
    setName("");
    setPno("");
  };
  return (
    <>
      <form>
        <label>Full Name :</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Phone No. :</label>
        <input
          type="number"
          value={pno}
          onChange={(e) => setPno(e.target.value)}
        />
        <br />
        <br />
        <button onClick={create}>Create </button>
      </form>
    </>
  );
};

export default Form;
