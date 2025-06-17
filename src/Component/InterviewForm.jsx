import React from 'react';
import './interview.css';
function InterviewForm() {
  return (
      <form className="interview-form">
      <div className="interview-title">Interview Availability</div>
      <p className="interview-note">Note: All fields are mandatory in this section.</p>

      <div className="interview-fields">
        <div className="interview-group">
          <label className="interview-label">
            Email <span className="req">*</span>
          </label>
          <input type="email" required className="interview-input" placeholder="Enter your email" />
        </div>

        <div className="interview-group">
          <label className="interview-label">
            Location <span className="req">*</span>
          </label>
          <input type="text" required className="interview-input" placeholder="Enter your location" />
        </div>

        <div className="interview-group">
          <label className="interview-label">
            Interview Date <span className="req">*</span>
          </label>
          <input type="date" required className="interview-input" />
        </div>

        <div className="interview-group">
          <label className="interview-label">
            Interview Time <span className="req">*</span>
          </label>
          <input type="time" required className="interview-input" />
        </div>

        <div className="interview-group">
          <label className="interview-label">
            Time Zone <span className="req">*</span>
          </label>
          <select required className="interview-input">
            <option value="">Select time zone</option>
            <option value="IST">IST (India Standard Time)</option>
            <option value="EST">EST (Eastern Standard Time)</option>
            <option value="PST">PST (Pacific Standard Time)</option>
            <option value="GMT">GMT (Greenwich Mean Time)</option>
            <option value="CET">CET (Central European Time)</option>
          </select>
        </div>

        <div className="interview-group">
          <label className="interview-label">
            Interview Medium <span className="req">*</span>
          </label>
          <select required className="interview-input">
            <option value="">Select medium</option>
            <option value="Zoom">Zoom</option>
            <option value="Google Meet">Google Meet</option>
            <option value="Skype">Skype</option>
            <option value="In-person">In-person</option>
          </select>
        </div>
      </div>

      <div className="interview-button-wrapper">
        <button type="submit" className="interview-btn">Submit</button>
      </div>
    </form>
  );
}

export default InterviewForm;
