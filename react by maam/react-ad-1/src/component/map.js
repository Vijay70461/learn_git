import React from "react";

function Namelist() {
  const names = [
    { name: "Vijay", id: 1, age: 35, skill: "Frontend" },
    { name: "Ajay", id: 2, age: 25, skill: "Backend" },
    { name: "Kamal", id: 3, age: 45, skill: "Fullstack" }
  ];
  const namelist = names.map((n,id) => <h2 key={id}>My name is { n.name}, my id {n.id}, My age {n.age}, My skill {n.skill}</h2>)

  return (<div>{namelist}</div>)
};

export default Namelist;
