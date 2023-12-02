import "./App.css";
import DisplayScreen from "./layout/DisplayScreen";
import Calculator from "./layout/CalculatorButtons";
import { cal_reducer, useR, init } from "./reducer/CalReducer";

function App() {
  const [state, dispatch] = useR(cal_reducer, init);

  return (
    <div className="cal-container">
      <DisplayScreen result={state}></DisplayScreen>
      <Calculator dispatch={dispatch} />
    </div>
  );
}

export default App;
