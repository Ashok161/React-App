# My SQL JSON App

## Overview

My SQL JSON App is a dummy web-based SQL query interface built using React. The application allows users to type SQL queries into an editor with syntax highlighting and autosuggestions. Users can run these queries on in-memory JSON data (using AlaSQL) and view the results in a tabulated format. The interface also includes a sidebar with predefined queries and a right sidebar displaying table structures with data types. Additionally, the app supports CSV export functionality for query results.

## Tech Stack & Major Packages

- **JavaScript Framework:** React (bootstrapped with Create React App)
- **SQL Execution:** AlaSQL (in-memory SQL engine for JSON data)
- **Code Editor & Syntax Highlighting:**
  - `react-simple-code-editor` for the editable SQL input field
  - `PrismJS` for syntax highlighting of SQL keywords (customized to display keywords in blue)
- **Styling:** Plain CSS (no Tailwind CSS)
- **Version Control & Deployment:**
  - Code hosted on GitHub
  - Deployed using Netlify/Vercel

## Page Load Time & Measurement

- **Measured Page Load Time:** Approximately **1.2 seconds**
- **Measurement Tools:**
  - **Chrome DevTools Network Tab:** to measure the time taken for initial requests and resource loading
  - **[PageSpeed Insights](https://pagespeed.web.dev/):** for performance audits and load time metrics
- The application's load time is measured from the initial request until the main UI is fully rendered in the browser.

## Performance Optimizations

- **Code Splitting:** Leveraged Create React App's built-in code splitting to reduce initial bundle size.
- **Asynchronous Data Fetching:** JSON data is fetched asynchronously on app mount, ensuring the UI renders quickly.
- **In-Memory Query Execution:** Using AlaSQL allows for near-instant execution of SQL queries on the provided JSON data.
- **Minimal Dependencies:** Kept third-party libraries to a minimum to ensure faster load times.
- **Optimized CSS:** Custom plain CSS was used instead of heavier frameworks, resulting in a smaller CSS bundle and faster rendering.

## How to Run the Application

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   ```
2. **Navigate into the project directory:**
   ```bash
   cd my-sql-app
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm start
   ```
5. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Additional Features

- **SQL Editor with Syntax Highlighting & Autosuggestions:**  
  Utilizes `react-simple-code-editor` and `PrismJS` to highlight SQL keywords in blue as you type, providing a more dynamic coding experience.
- **Predefined Query Sidebar:**  
  A left sidebar with multiple predefined queries that users can select to populate the SQL editor.
- **Dynamic Table Structures:**  
  The right sidebar displays table schemas in visually separated, rounded boxes, including the data type for each column.
- **CSV Export:**  
  Query results can be exported to CSV using a comma delimiter to ensure proper column separation.

---
