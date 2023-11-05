import React, { useState } from "react";

function UI() {
  const [text, setText] = useState("");
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div id="main">
      <div id="container">
        <h1>
          Responsive Paragraph Word Counter
        </h1>
        <textarea rows={8} cols={50} onChange={handleTextChange}></textarea>
        <p>
          Word Count: {wordCount}
        </p>
      </div>
    </div>
  );
}

export default UI;
