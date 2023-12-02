import "./App.css";
import DisplayScreen from "./layout/DisplayScreen";
import Calculator from "./layout/CalculatorButtons";
import { cal_reducer, useR, init } from "./reducer/CalReducer";

function App() {
  const [state, dispatch] = useR(cal_reducer, init);

  return (
    <>
      <DisplayScreen result={state}></DisplayScreen>
      <div>
        <Calculator dispatch={dispatch} />
      </div>
    </>
  );
}

export default App;
