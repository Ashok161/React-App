import React, { useState, useEffect } from "react";
import QuerySidebar from "./components/QuerySidebar";
import QueryResult from "./components/QueryResult";
import TableStructure from "./components/TableStructure";
import SqlInput from "./components/SqlInput";
import alasql from "alasql";

function App() {
  const [query, setQuery] = useState("SELECT * FROM customers;");
  const [queryResult, setQueryResult] = useState([]);

  const validateSQL = (query) => {
    const trimmed = query.trim().toUpperCase();
    return trimmed.startsWith("SELECT");
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsRes, categoriesRes, customersRes] = await Promise.all([
          fetch("/data/products.json").then((res) => res.json()),
          fetch("/data/categories.json").then((res) => res.json()),
          fetch("/data/customers.json").then((res) => res.json()),
        ]);

        alasql("CREATE TABLE products");
        alasql.tables.products.data = productsRes;

        alasql("CREATE TABLE categories");
        alasql.tables.categories.data = categoriesRes;

        alasql("CREATE TABLE customers");
        alasql.tables.customers.data = customersRes;
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    loadData();
  }, []);

  const runQuery = () => {
    if (!validateSQL(query)) {
      alert("Invalid SQL syntax: Query must start with SELECT");
      setQueryResult([]);
      return;
    }

    try {
      const res = alasql(query);
      setQueryResult(res);
    } catch (error) {
      alert("Error executing query: " + error.message);
      setQueryResult([]);
    }
  };

  const exportCSV = () => {
    if (!queryResult || queryResult.length === 0) {
      alert("No data to export!");
      return;
    }
    alasql(
      "SELECT * INTO CSV('export.csv',{headers:true,separator:','}) FROM ?",
      [queryResult]
    );
  };

  return (
    <div className="app-container">
      <QuerySidebar setQuery={setQuery} />

      <div className="main-content">
        <div className="query-container">
          <SqlInput query={query} setQuery={setQuery} />
          <div>
            <button onClick={runQuery}>Run Query</button>
            <button onClick={exportCSV}>Download Result CSV</button>
          </div>
        </div>

        <QueryResult data={queryResult} />
      </div>

      <TableStructure />
    </div>
  );
}

export default App;
