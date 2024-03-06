import Habitmaker from "./component/Habitmaker"
import Display from "./component/Display";
import './App.css';
import { useState } from "react";

function App() {
  const [arrHabbit,toarrHabbit]=useState([]);
  function array(newHabbit){
    let arr=[...arrHabbit,newHabbit]
    toarrHabbit(arr);
  }
  return (
    <>
    <div className="bigbox">
      <div className="text"><h1>Habbit Maker</h1></div>
      <div className="box">
        <Habitmaker array={array}></Habitmaker>
      </div>
        <Display arrHabbit={arrHabbit} toarrHabbit={toarrHabbit}/>
      </div>
    </>
  );
}

export default App;