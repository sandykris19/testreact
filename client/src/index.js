import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [items, setItems] = useState([]);

  const addHandler = () => {
    Axios.get("/read")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Axios.get("/read")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addToDb = () => {
    Axios.post("/add", { name: name, height: height });
  };
  return (
    <>
      <input
        type="text"
        name="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        name="height"
        onChange={(e) => {
          setHeight(e.target.value);
        }}
      />
      <button onClick={addToDb}>Add to</button>
      <button onClick={addHandler}>Get Items</button>
      <h1>Hello, form react</h1>
      <p>
        Name: {name}, Height: {height}
      </p>
      {items.map((item, index) => {
        return (
          <p key={index}>
            {item.name} height is {item.height}
          </p>
        );
      })}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
