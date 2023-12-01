import { useState } from "react";
export function useR(reducer, init) {
  const [state, setState] = useState(init);
  function dispatch(action) {
    let next_state = reducer(action);
    setState(next_state);
  }
  return [state, dispatch];
}
export function cal_reducer(action) {}
