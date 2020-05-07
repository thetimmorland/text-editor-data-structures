import React, { useState } from 'react';
import { diffChars } from 'diff';

export default function Editor(props) {

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const diff = diffChars(value, event.target.value);
    console.log(diff);

    let cursor = 0;
    diff.map((section) => {
      if (section.added) {
        props.handleInsert(cursor, section.value);
      } else if (section.removed) {
        props.handleDelete(cursor, section.value.length);
      } else {
        cursor += section.count; 
      }

      // cursor should advance, unless text is deleted
      if (!section.removed) {
      }
    })


    setValue(event.target.value);

    if (props.test) {
      props.test(value)
    }
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
}
