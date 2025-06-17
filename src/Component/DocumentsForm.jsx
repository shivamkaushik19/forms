import React from 'react';
import './Document.css';
import { useNavigate } from 'react-router-dom';
function DocumentsForm() {

   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Statement');
  }
  return (
    <section className="document-form">
      <h2 className="document-title">Document Upload Form</h2>
      <p className="document-subtitle">Upload your academic and job-related documents</p>
      <p className="document-note">All documents must be PDF or image files, up to 5 MB.</p>

      <form className="document-fields" onSubmit={handleSubmit} >
        <div className="document-group">
          <label htmlFor="doc10" className="document-label">
            1. 10th Marksheet<span className="req">*</span>
          </label>
          <input type="file" id="doc10" className="document-input" required />
        </div>

        <div className="document-group">
          <label htmlFor="doc12" className="document-label">
            2. 12th Marksheet<span className="req">*</span>
          </label>
          <input type="file" id="doc12" className="document-input" required />
        </div>

        <div className="document-group">
          <label htmlFor="docGrad" className="document-label">
            3. Graduation Marksheet<span className="req">*</span>
          </label>
          <input type="file" id="docGrad" className="document-input" required />
        </div>

        <div className="document-group">
          <label htmlFor="docPG" className="document-label">
            4. Post Graduation Marksheet
          </label>
          <input type="file" id="docPG" className="document-input" />
        </div>

        <div className="document-group">
          <label htmlFor="docOffer" className="document-label">
            5. Offer Letter<span className="req">*</span>
          </label>
          <input type="file" id="docOffer" className="document-input" required />
        </div>

        <div className="document-group">
          <label htmlFor="docSalary" className="document-label">
            6. Salary Slips<span className="req">*</span>
          </label>
          <input type="file" id="docSalary" className="document-input" required />
        </div>

        <div className="document-group">
          <label htmlFor="docBank" className="document-label">
            7. Bank Statement<span className="req">*</span>
          </label>
          <input type="file" id="docBank" className="document-input" required />
        </div>

        <div className="document-group">
          <label htmlFor="docIncrement" className="document-label">
            8. Increment Letter (if any)
          </label>
          <input type="file" id="docIncrement" className="document-input" />
        </div>

        <div className="document-button-wrapper">
          <button type="submit" className="document-btn">NEXT</button>
        </div>
      </form>
    </section>
  );
}

export default DocumentsForm;
