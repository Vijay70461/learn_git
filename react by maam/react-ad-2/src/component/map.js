import React from "react";

function Namelists() {
  const names = ["mahesh", "suresh", "paresh"];
  return (
    /*------------using index----------
    <div>
      <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2>
    </div>*/
    //    -----------using map func.----------
    <div>
      {names.map((n, index) => (
        <h2 key={index}>{n}</h2>
      ))}
    </div>
  );
  /*------------using variable------------
    const namelists = names.map((n) => <h2>{n}</h2>)

    return <div>{namelists}</div>*/
}

export default Namelists;
