import React, { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setInputData("");
      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    const updateItem = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updateItem);
  };

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });

    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
  };

  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-name">
          <h1 className="todoheader">ToDo List</h1>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleSubmit ? (
              <button onClick={addItem}>Add</button>
            ) : (
              <button onClick={addItem}>Edit</button>
            )}
          </div>
          <div className="showItems">
            {items.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.name}</h3>
                  <button onClick={() => editItem(elem.id)}>Edit</button>
                  <button onClick={() => deleteItem(elem.id)}>Delete</button>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button onClick={removeAll}>Remove All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
