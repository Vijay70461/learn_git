import React, { useState } from "react";
import Card from "./Card";
import Form from "./Form";

const Curd = () => {
  const [data, setData] = useState([
    { id: 1, name: "Vijay Narola", pno: 7046178392 },
    { id: 2, name: "Akhil Bhuva", pno: 7046178392 },
    { id: 3, name: "Deep Sorathiya", pno: 7046178392 },
  ]);

  const addData = (newData) => {
    setData([...data, newData]);
  };
  return (
    <>
      <Form index={data.length + 1} onAddData={addData} />
      {data.map((post) => (
        <Card key={post.id} name={post.name} pno={post.pno} />
      ))}
    </>
  );
};

export default Curd;
