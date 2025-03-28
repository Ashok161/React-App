import React from "react";

function QuerySidebar({ setQuery }) {
  const predefinedQueries = [
    "SELECT * FROM customers",
    "SELECT companyName, contactName FROM customers",
    "SELECT * FROM products",
    "SELECT p.name, c.name FROM products p JOIN categories c ON p.categoryID = c.categoryID",
  ];

  return (
    <div className="sidebar">
      <h2>Available Queries</h2>
      {predefinedQueries.map((q, idx) => (
        <div key={idx} className="query-block" onClick={() => setQuery(q)}>
          <p>{q}</p>
        </div>
      ))}
    </div>
  );
}

export default QuerySidebar;
