import React, { useState } from 'react';
import { diffChars } from 'diff';

export default function Editor({ handleDiff }) {

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    handleDiff(diffChars(value, event.target.value));
    setValue(event.target.value);
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
}
