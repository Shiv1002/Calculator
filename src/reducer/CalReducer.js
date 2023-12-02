import { useState } from "react";
export const init = {
  exp: "",
  result: 0,
};

const calculate = (exp) => {
  console.log("Calculating...");
  let stack = [];
  //   if last digit is operator

  if (isNaN(exp[exp.length - 1])) return 0;

  //   convert string exp into stack
  let i = 0;
  let j = 0;
  let t_ans = 0;
  let ans = 0;
  while (j < exp.length + 1) {
    if (isNaN(exp[j])) {
      t_ans = Number(exp.substring(i, j));
      stack.push(t_ans);
      if (j < exp.length) stack.push(exp[j]);
      i = j + 1;
    }
    j++;
  }
  let l_op = "";
  ans = stack[0];
  for (let i = 1; i < stack.length; i++) {
    if (isNaN(stack[i])) l_op = stack[i];
    else {
      if (l_op == "+") ans += stack[i];
      if (l_op == "-") ans -= stack[i];
      if (l_op == "*") ans *= stack[i];
      if (l_op == "/") ans /= stack[i];
      l_op = "";
    }
  }
  console.log(stack, ans);
  return ans;
};

export function cal_reducer(state, action) {
  switch (action.type) {
    case "AC":
      return init;
    case "DEL":
      state.exp = state.exp.slice(0, state.exp.length - 1);
      return { ...state };
    case "DIGIT": {
      console.log(state, action.expression);
      state.exp = state.exp + action.expression;
      let tmp_rs = calculate(state.exp);
      if (tmp_rs) state.result = tmp_rs;
      return { ...state };
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
