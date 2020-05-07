import { useState } from "react";

export default function useGapBuffer() {

  const handleDiff = (diff) => {
    console.log(diff)
  }

  return [handleDiff, stats];
}
