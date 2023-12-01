import React from "react";

export default function DisplayScreen({ result }) {
  return (
    <>
      <div>screen</div>
      <div>{result.result ?? 0}</div>
    </>
  );
}
