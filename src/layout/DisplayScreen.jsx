import React from "react";

export default function DisplayScreen({ result }) {
  return (
    <>
      <div>{result.exp}</div>
      <div>{result.result ?? 0}</div>
    </>
  );
}
