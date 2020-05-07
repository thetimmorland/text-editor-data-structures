import { useState, useEffect } from "react";
import { diffChars } from "diff"

export default function useGapBuffer() {

  const GAPSIZE = 5; // default gap width

  const [text, setText] = useState("");
  const [gap, setGap] = useState({ index: 0, size: GAPSIZE});

  const checkGap = (cursor) => {
    if (gap.size === 0) {
      setGap({ index: cursor, size: GAPSIZE });
    } else if (cursor !== gap.index) {
      setGap(({ size }) => ({ index: cursor, size }))
    }
  }

  const handleInsert = (cursor, toInsert) => {
    console.log("insert: ", {cursor, toInsert});
    checkGap(cursor);

    const front = text.slice(0, cursor);
    const back = text.slice(cursor);

    setText(front + toInsert + back);
    setGap(({ index, size }) => ({ index: index + 1, size: size - 1 }))
  }

  const handleDelete = (cursor, count) => {
    console.log("delete: ", {cursor, count});
    checkGap(cursor);

    const front = text.slice(0, cursor);
    const back = text.slice(cursor + count);

    setText(front + back);
    setGap(({ index, size }) => ({ index, size: size + count }))
  }

  const test = (value) => {
    console.log(diffChars(text, value))
  }

  return [handleInsert, handleDelete, text, gap, test];
}
