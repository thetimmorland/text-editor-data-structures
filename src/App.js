import React, { useState } from 'react';
import './App.css';

import GapBuffer from "./GapBuffer";

function App() {
  const [buffer, setBuffer] = useState("");
  const [editorEvent, setEditorEvent] = useState(null);

  const handleKeyPressEvent = (event) => {
    const char = String.fromCharCode(event.charCode);
    const { selectionStart, selectionEnd } = event.target;
    const type = (selectionStart - selectionEnd === 0) ? "insert" : type = "change";

    setEditorEvent({ type, char, selectionStart, selectionEnd});
  };

  const handleKeyDownEvent = (event) => {
    if (event.key == "Backspace") {
      const type = "delete";
      const char = null;
      const { selectionStart, selectionEnd } = event.target;

      setEditorEvent({ type, char, selectionStart, selectionEnd });
    }
  };

  return (
    <div className="App">
      <textarea value={buffer} onKeyPress={handleKeyPressEvent} onKeyDown={handleKeyDownEvent}/>
      <GapBuffer editorEvent={editorEvent} setBuffer={setBuffer}/>
    </div>
  );
}

export default App;
