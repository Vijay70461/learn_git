import React from "react";

function Power() {
  const count = [10, 15, 20, 15, 30, 35, 40];
  const countno = count.map((n) => <li> {n * n * n * n * n} </li>);
  return <div>{countno}</div>;
}
export default Power;
