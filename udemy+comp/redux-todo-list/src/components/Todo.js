import React, { useState } from "react";
import "./todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <h3>Add your todos </h3>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Todos ..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <button
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            >
              Add
            </button>
          </div>
          <div className="showItems">
            {list.map((a) => {
              return (
                <div className="eachItem" key={a.id}>
                  <h3>{a.data}</h3>
                  <div className="todo-btn">
                    <button
                      onClick={() => dispatch(deleteTodo(a.id))}
                      title="delete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="remove">
            <button onClick={() => dispatch(removeTodo())}>Remove All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
