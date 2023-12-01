import "./App.css";
import DisplayScreen from "./layout/DisplayScreen";
import CalculatorButtons from "./layout/CalculatorButtons";
import { cal_reducer, useR } from "./reducer/CalReducer";
import { useReducer, useState } from "react";

function App() {
  const [result, dispatch] = useR(cal_reducer, 0);

  return (
    <>
      <div>This is cal</div>
      <DisplayScreen result={result}></DisplayScreen>
      <div>
        <CalculatorButtons dispatch={dispatch} />
      </div>
    </>
  );
}

export default App;
