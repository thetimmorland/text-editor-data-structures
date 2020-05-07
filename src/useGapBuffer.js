import { useState, useEffect } from "react";
import { diffChars } from "diff"

export default function useGapBuffer() {

  const GAPSIZE = 5; // default gap width

  const [text, setText] = useState("");
  const [gap, setGap] = useState({ index: 0, size: GAPSIZE});

  const createGap = (cursor) => {
      setGap({ index: cursor, size: GAPSIZE });
  }

  const moveGap = (cursor) => {
      setGap(({ index, size }) => ({ index: index + 1, size: size - 1 }))
  }

  const checkGap = (cursor) => {
    if (gap.size === 0) {
    } else if (cursor === gap.index) {
    } else {
    }
  }

  const handleInsert = (cursor, toInsert) => {
    console.log("insert: ", {cursor, toInsert});


    const front = text.slice(0, cursor);
    const back = text.slice(cursor);
    setText(front + toInsert + back);
  }

  const handleDelete = (cursor, count) => {
    console.log("delete: ", {cursor, count});

    const front = text.slice(0, cursor);
    const back = text.slice(cursor + count);

    setGap(({ index, size }) => (index - 1))
    setText(front + back);
  }

  const test = (value) => {
    console.log(diffChars(text, value))
  }

  return [handleInsert, handleDelete, text, gap, test];
}
