import React from 'react';
import './Sidedashboard.css';
import { Link } from 'react-router-dom';

function Sidedashboard() {
  return (
    <div className="sidebar">
      <div className="template">New Form</div>
      <h3>Explore the following Templates:</h3>

      <div className="template">
        <Link to="/details" className="btn-link">Details Collection</Link>
      </div>
      <div className="template">
        <Link to="/documents" className="btn-link">Document Collection</Link>
      </div>
      <div className="template">
        <Link to="/statement" className="btn-link">Statement of Purpose</Link>
      </div>
      <div className="template">
        <Link to="/interview" className="btn-link">Interview Availability</Link>
      </div>
    </div>
  );
}
export default Sidedashboard;