import React, { useState, useEffect } from "react";

export default function GapBuffer({ editorEvent, setBuffer }) {
    const [array, setArray] = useState([]);

    const handleEditorEvent = (editorEvent) => {
        console.log(editorEvent);
    };

    useEffect(() => {
        if (editorEvent) { handleEditorEvent(editorEvent); }
    }, [editorEvent]);

    return(<p>GapBuffer</p>);
}
