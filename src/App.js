import React from 'react';
import Dashboard from './Dashborad';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CateringForm from './components/CateringForm';
import Yoga from './components/Yoga';
import CateringReqForm from './components/CateringReqForm';
import Announcements from './components/Announcements';
import VedicSchool from './components/VedicSchool';

const App = () => {
  return (
    <Router>
     
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/CateringForm" element={<CateringForm />} />
        <Route path="/Yoga" element={<Yoga />} />
        <Route path="/CatringReq" element={<CateringReqForm />} />
        <Route path="/Announcements" element={<Announcements />} />
        <Route path="/Vedic" element={<VedicSchool />} />
      </Routes>
    </Router>
  );
};
export default App;
