import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incCount, decCount } from "../action/actions";

const Count = () => {
  const myState = useSelector((state) => state.countReducers);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <button onClick={() => dispatch(decCount())}>Dec.</button>
        <h1>{myState}</h1>
        <button onClick={() => dispatch(incCount(10))}>Inc.</button>
      </div>
    </>
  );
};

export default Count;
