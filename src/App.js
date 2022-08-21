import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";

function App() {
  // let likes = 5;

  // function increment() {
  //   likes += 1;
  //   console.log(likes);
  // }
  const [value, setValue] = useState("Текст в инпуте");

  // console.log(count);
  // console.log(setCount);

  return (
    <div className="App">
      <ClassCounter />
    </div>
  );
}

export default App;
