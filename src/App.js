import React from "react";
import style from "./index.module.css";

function App() {
  return (
    <div className="App">
      <h1>This is React App.</h1>
      <h2 className={style.pink_color}>引入css</h2>
      <h3 className="title">index.module.css里定义的全局样式</h3>
    </div>
  );
}

export default App;
