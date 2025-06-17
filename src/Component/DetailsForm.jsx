import React from 'react';
import './Detail.css';
import { useNavigate } from 'react-router-dom';
function DetailsForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Documents');
  };



  return (
    <section className="detail-form">
      <h2 className="detail-title">Detail Form</h2>
      
      <p className="detail-subtitle">One line description of the form</p>
      <p className="detail-note">Provide the following information to process your application</p>

     <form onSubmit={handleSubmit} className="detail-fields">
        <div className="detail-group">
          <label htmlFor="name">1. Name<span className="req">*</span></label>
          <input type="text" id="name" name="name" placeholder="Enter a number " required />
        </div>

        <div className="detail-group">
          <label htmlFor="email">2. Email<span className="req">*</span></label>
          <input type="email" id="email" name="email" placeholder="Example – userid@gmail.com" required />
        </div>

        <div className="detail-group">
          <label htmlFor="dob">3. Date of Birth</label>
          <input type="date" id="dob" name="dob" />
        </div>

        <div className="detail-group">
          <label htmlFor="contact">4. Contact&nbsp;no</label>
          <input type="tel" id="contact" name="contact" placeholder="Enter your 10 digit contact no" pattern="[0-9]{10}" />
        </div>

        <div className="button-wrapper">
          <button type="submit" className="detail-btn">NEXT</button>
        </div>
      </form>
    </section>
  );
}

export default DetailsForm;