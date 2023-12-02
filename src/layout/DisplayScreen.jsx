import React from "react";

export default function DisplayScreen({ result }) {
  return (
    <div className="dis-screen">
      <div className="exp-screen">{result.exp}</div>
      <div className="res-screen">{result.result ?? 0}</div>
    </div>
  );
}
