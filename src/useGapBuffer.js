import { useState, useEffect } from "react";

export default function useGapBuffer() {

  const GAPSIZE = 5; // default gap width

  const [text, setText] = useState("");
  const [gapIndex, setGapIndex] = useState(0);
  const [gapSize, setGapSize] = useState(GAPSIZE);

  const checkGap = (cursor) => {
    if (cursor !== gapIndex) {
      setGapIndex(cursor)
    }

    if (gapSize === 0) {
      setGapSize(GAPSIZE);
    }
  }

  const handleInsert = (cursor, diffSection) => {
    checkGap(cursor);
    setGapIndex((index) => index + 1)
    setGapSize((size) => size - 1)
  }

  const handleDelete = (cursor, diffSection) => {
    checkGap(cursor);
    setGapSize(size => size + diffSection.count);
  }

  const handleDiff = (newValue, diff) => {
    setText(newValue);

    let cursor = 0;
    diff.map((diffSection) => {
      console.log(diffSection)

      if (diffSection.added) {
        handleInsert(cursor, diffSection);
      } else if (diffSection.removed) {
        handleDelete(cursor, diffSection);
      }

      if (!diffSection.deleted) { // cursor advances for non deleted text
        cursor += diffSection.count
      }
    })
  }

  return { handleDiff, text, gapIndex, gapSize };
}
