import React from "react";
import logo from './logo.svg';
import './App.css';
import {Comments} from './Comments.js';
import {TreeView} from "./TreeView.js";
import {StackView} from "./StackView.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Comments />
          {/* <TreeView /> */}
          {/* {<StackView />} */}

      </header>
    </div>
  );
}

export default App;
