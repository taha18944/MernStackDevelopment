import logo from "./logo.svg";
import "./App.css";
import "./Custom.css";
import { useState } from "react";
import React from "react";

function App() {
  const [arr, setArr] = useState([]);
  let InputVal = React.createRef();
  let add = (e) => {
    setArr( arr => [...arr, `${InputVal.current.value}`]);
  };
  let update = (e) => {

  };
  let rem = (e) => {

  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <div className="d-flex">
          <input className="form-control" onChange={add} placeholder="Enter text" ref={InputVal} />
          <button className="btn btn-primary" onChange={add}>Add</button>
        </div>
        <ul>
          {arr.map((e, i) => { 
            return <li className="mb-2">
                <div className="d-flex">
                  <input className="form-control mb-2" value={e}/>
                  <button className="btn btn-primary" onClick={update}>Update</button>
                  <button className="btn btn-primary" onClick={rem}>Remove</button>

                </div>
              </li>;
          })}
        </ul>

      </header>
    </div>
  );
}

export default App;