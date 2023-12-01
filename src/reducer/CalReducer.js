import { useState } from "react";
export const init = {
  exp: "",
  result: 0,
};

const calculate = (exp) => {
  let stack = [];
  let ans = 0;
  return ans;
};

export function cal_reducer(state, action) {
  switch (action.type) {
    case "AC":
      return init;
    case "DEL":
      state.exp = state.exp.slice(0, state.length - 1);
      return state;
    case "DIGIT": {
      console.log(state, action.expression);
      state.exp = state.exp + action.expression;
      state.result = calculate(state.exp);
      return state;
    }
    case "=":
      return state;
    default: {
      throw new Error("Opertion not allowed");
    }
  }
}

export function useR(reducer, init) {
  const [state, setState] = useState(init);
  function dispatch(action) {
    let next_state = reducer(state, action);
    setState(next_state);
  }
  return [state, dispatch];
}
