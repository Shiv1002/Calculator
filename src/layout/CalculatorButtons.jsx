import React from "react";

export default function Calculator({ dispatch }) {
  let buttons = [
    "AC",
    "DEL",
    "+",
    "1",
    "2",
    "3",
    "*",
    "4",
    "5",
    "6",
    "+",
    "7",
    "8",
    "9",
    "-",
    ".",
    "0",
    "=",
  ];
  return (
    <>
      {buttons.map((digit) => (
        <button
          onClick={() => {
            console.log("Typed digit", digit);
            if (digit == "AC" || digit == "DEL" || digit == "=") {
              return dispatch({ type: digit });
            }
            return dispatch({ type: "DIGIT", expression: digit });
          }}
        >
          {digit}
        </button>
      ))}
    </>
  );
}
