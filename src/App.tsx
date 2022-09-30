import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import NewNameTag from "./components/NameTag";

function App() {
  return (
    <div className="App">
      <NewNameTag name={"Aasim Sayyed"}>
        <div className="child-comp">I am a child component</div>
      </NewNameTag>
      <Counter />
    </div>
  );
}

export default App;
