import React from "react";

export default function CalculatorButtons() {
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
      calci
      {buttons.map((digit) => (
        <button>{digit}</button>
      ))}
    </>
  );
}
