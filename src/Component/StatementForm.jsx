import React from 'react';
import './Statement.css';
import { useNavigate } from 'react-router-dom';
function StatementForm() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/interview');
  }

  return (
    <form className="statement-form"    onSubmit={handleSubmit}>
      <div className="statement-title">Statement of Purpose</div>
      <p className="statement-note">
        Note: All questions are mandatory. Each answer must be within 300 words.
      </p>

      <div className="statement-fields">
        <div className="statement-group">
          <label className="statement-label">
            a. Tell me about a time you were asked to do something you had never done before.
            How did you react? What did you learn?
            <span className="req">*</span>
          </label>
          <textarea
            required
            maxLength="300"
            className="statement-input"
            placeholder="Maximum 300 words"
          />
        </div>

        <div className="statement-group">
          <label className="statement-label">
            b. Tell me about the last time something significant didn’t go according to plan at work.
            What was your role? What was the outcome?
            <span className="req">*</span>
          </label>
          <textarea
            required
            maxLength="300"
            className="statement-input"
            placeholder="Maximum 300 words"
          />
        </div>

        <div className="statement-group">
          <label className="statement-label">
            c. What are the three things that are most important to you in a job?
            <span className="req">*</span>
          </label>
          <textarea
            required
            maxLength="300"
            className="statement-input"
            placeholder="Maximum 300 words"
          />
        </div>
      </div>

      <div className="statement-button-wrapper">
        <button type="submit" className="statement-btn">next</button>
      </div>
    </form>
  );
}

export default StatementForm;
