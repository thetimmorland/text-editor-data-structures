import React, { useState, useEffect } from "react";

import useGapBuffer from "./useGapBuffer"
import Editor from "./Editor";

import "./App.css"

export default function GapBufferDemo() {
  const [handleInsert, handleDelete, text, gap, test] = useGapBuffer("");

  console.log(gap);

  const front = text.slice(0, gap.index);
  const back = text.slice(gap.index);
  const gapString = "·".repeat(gap.size);

  const buffer = front + gapString + back;

  return(
    <div>
      <Editor handleInsert={handleInsert} handleDelete={handleDelete} />
      <p className="Output">{buffer}</p>
    </div>
  );
}
