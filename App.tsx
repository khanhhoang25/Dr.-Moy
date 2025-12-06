
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './components/Home';
import Appointment from './components/Appointment';
import InsuranceVerification from './components/InsuranceVerification';
import PatientForms from './components/PatientForms';
import SurgicalForms from './components/SurgicalForms';
import OutOfStatePatient from './components/OutOfStatePatient';
import BeforeAndAfter from './components/BeforeAndAfter';
import PatientSurveys from './components/PatientSurveys';
import VisitDrMoy from './components/VisitDrMoy';
import ConvenientLodging from './components/ConvenientLodging';
import AccessibleTravel from './components/AccessibleTravel';
import Bunion from './components/Bunion';
import BunionSurgery from './components/BunionSurgery';
import MeetTheStaff from './components/MeetTheStaff';
import FacilityTour from './components/FacilityTour';
import Blog from './components/Blog';
import HistoryTimeline from './components/HistoryTimeline';
import ContactUs from './components/ContactUs';
import ShareYourStory from './components/ShareYourStory';
import LiveSurgeries from './components/LiveSurgeries';
import ForDoctorsOnly from './components/ForDoctorsOnly';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/insurance-verification" element={<InsuranceVerification />} />
          <Route path="/patient-forms" element={<PatientForms />} />
          <Route path="/pre-op-orders" element={<SurgicalForms />} />
          <Route path="/out-of-state-patient" element={<OutOfStatePatient />} />
          <Route path="/visit-dr-moy" element={<VisitDrMoy />} />
          <Route path="/convenient-lodging" element={<ConvenientLodging />} />
          <Route path="/accessible-travel" element={<AccessibleTravel />} />
          <Route path="/before-after-photos" element={<BeforeAndAfter />} />
          <Route path="/patient-surveys" element={<PatientSurveys />} />
          <Route path="/conditions/bunion" element={<Bunion />} />
          <Route path="/bunion-surgery" element={<BunionSurgery />} />
          <Route path="/about-us/meet-dr-moy" element={<MeetTheStaff />} />
          <Route path="/about-us/facility-tour" element={<FacilityTour />} />
          <Route path="/about-us/history-timeline" element={<HistoryTimeline />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/share-your-story" element={<ShareYourStory />} />
          <Route path="/live-surgeries-with-patient-comments" element={<LiveSurgeries />} />
          <Route path="/for-drs-only" element={<ForDoctorsOnly />} />
        </Routes>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;
