import React from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism.css";

const customStyle = `
.token.keyword {
  color: blue;
}
`;

if (typeof document !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = customStyle;
  document.head.appendChild(styleTag);
}

function SqlInput({ query, setQuery }) {
  const highlightCode = (code) =>
    Prism.highlight(code, Prism.languages.sql, "sql");

  return (
    <div className="sql-input-container">
      <Editor
        value={query}
        onValueChange={setQuery}
        highlight={highlightCode}
        padding={10}
        style={{
          fontFamily: "monospace",
          fontSize: 16,
          border: "1px solid #ccc",
          borderRadius: "6px",
          minHeight: "120px",
          outline: "none",
          backgroundColor: "#fdfdfd",
        }}
      />
    </div>
  );
}

export default SqlInput;
