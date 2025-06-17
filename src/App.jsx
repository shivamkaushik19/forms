import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import DashboardLayout from './Component/DashboardLayout';
import DetailsForm from './Component/DetailsForm';
import DocumentsForm from './Component/DocumentsForm';
import StatementForm from './Component/StatementForm';
import InterviewForm from './Component/InterviewForm';
import ResponsiveWrapper from './Component/ResponsiveWrapper';

function App() {
  return (
    <ResponsiveWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<DetailsForm />} />
            <Route path="details" element={<DetailsForm />} />
            <Route path="documents" element={<DocumentsForm />} />
            <Route path="statement" element={<StatementForm />} />
            <Route path="interview" element={<InterviewForm />} />
          </Route>
        </Routes>
      </Router>
    </ResponsiveWrapper>
  );
}

export default App;
