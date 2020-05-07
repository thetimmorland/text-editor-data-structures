import React, { useState } from 'react';
import { diffChars } from 'diff';

export default function Editor({ handleDiff }) {

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    const diff = diffChars(value, newValue);
    handleDiff(newValue, diff);
    setValue(newValue);
  }

  return (
    <textarea
      type="text"
      className="Editor"
      value={value}
      onChange={handleChange}
    />
  );
}
