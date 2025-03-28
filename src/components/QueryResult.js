import React from "react";

function QueryResult({ data }) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="results-container">
        <p>No results to display.</p>
      </div>
    );
  }

  const columns = Object.keys(data[0]);

  return (
    <div className="results-container">
      <h3>Output</h3>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={col}>{String(row[col])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QueryResult;
