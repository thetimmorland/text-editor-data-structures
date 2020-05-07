import React, { useState, useEffect } from "react";

import useGapBuffer from "./useGapBuffer"
import Editor from "./Editor";

export default function GapBufferDemo() {
  const [handleDiff, stats] = useGapBuffer("");

  return(
    <Editor handleDiff={handleDiff} />
  );
}
