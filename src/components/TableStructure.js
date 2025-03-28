import React from "react";

function TableStructure() {
  return (
    <div className="table-structure">
      <h3>Table Structures</h3>

      <div className="table-block">
        <h4>customers</h4>
        <ul>
          <li>customerID (VARCHAR)</li>
          <li>companyName (VARCHAR)</li>
          <li>contactName (VARCHAR)</li>
          <li>contactTitle (VARCHAR)</li>
          <li>street (VARCHAR)</li>
          <li>city (VARCHAR)</li>
          <li>region (VARCHAR)</li>
          <li>postalCode (VARCHAR)</li>
          <li>country (VARCHAR)</li>
          <li>phone (VARCHAR)</li>
        </ul>
      </div>

      <div className="table-block">
        <h4>categories</h4>
        <ul>
          <li>categoryID (INT)</li>
          <li>description (TEXT)</li>
          <li>name (VARCHAR)</li>
        </ul>
      </div>

      <div className="table-block">
        <h4>products</h4>
        <ul>
          <li>productID (INT)</li>
          <li>supplierID (INT)</li>
          <li>categoryID (INT)</li>
          <li>quantityPerUnit (VARCHAR)</li>
          <li>unitPrice (DECIMAL)</li>
          <li>unitsInStock (INT)</li>
          <li>unitsOnOrder (INT)</li>
          <li>reorderLevel (INT)</li>
          <li>discontinued (BOOLEAN)</li>
          <li>name (VARCHAR)</li>
        </ul>
      </div>
    </div>
  );
}

export default TableStructure;
