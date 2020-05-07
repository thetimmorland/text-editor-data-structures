import React, { useState, useEffect } from "react";

import useGapBuffer from "./useGapBuffer"
import Editor from "./Editor";

import "./App.css"

export default function GapBufferDemo() {
  const { handleDiff, text, gapSize, gapIndex } = useGapBuffer("");

  const front = text.slice(0, gapIndex);
  const back = text.slice(gapIndex);
  const gapString = "·".repeat(gapSize);

  const buffer = front + gapString + back;

  return(
    <div>
      <Editor handleDiff={handleDiff} />
      <p className="Output">{buffer}</p>
    </div>
  );
}
