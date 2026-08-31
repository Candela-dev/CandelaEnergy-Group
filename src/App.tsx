import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Layout Components
import { ScrollToTop } from './components/ScrollToTop'; // Added import
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Homepage Components
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import OurStory from './components/OurStory';
import Leadership from './components/Leadership';
import Services from './components/Services';
import Partners from './components/Partners';
import SavingsCalculator from './components/SavingsCalculator';
import Insights from './components/Insights';
import Contact from './components/Contact';

// Dedicated Pages
import ThoughtLeadership from './pages/ThoughtLeadership';
import Letterhead from './components/Letterhead';
import Telemetry from './pages/Telemetry';
import GridMetering from './pages/GridMetering';
import EnergyAnalytics from './pages/EnergyAnalytics';
import DownstreamPetroleum from './pages/DownstreamPetroleum';
import GasPowerInfrastructure from './pages/GasPowerInfrastructure';
import UpstreamPetroleum from './pages/UpstreamPetroleum';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white flex flex-col justify-between">
        
        {/* Global Scroll Reset */}
        <ScrollToTop />
        
        {/* Top Navigation */}
        <Navbar />

        {/* Main Content Routed */}
        <main className="flex-grow">
          <Routes>
            {/* The Homepage Narrative Flow */}
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <MissionVision />
                  <OurStory />
                  <Leadership />
                  <Services />
                  <Partners />
                  <SavingsCalculator />
                  <Insights />
                  <Contact />
                </>
              } 
            />
            
            {/* Utility & Content Pages */}
            <Route path="/thought-leadership" element={<ThoughtLeadership />} />
            <Route path="/letterhead" element={<Letterhead />} />
            
            {/* Core Service Detail Routes */}
            <Route path="/services/gas-power-infrastructure" element={<GasPowerInfrastructure />} />
            <Route path="/services/upstream-petroleum" element={<UpstreamPetroleum />} />
            <Route path="/services/telemetry" element={<Telemetry />} />
            <Route path="/services/grid-metering" element={<GridMetering />} />
            <Route path="/services/analytics" element={<EnergyAnalytics />} />
            <Route path="/services/downstream-petroleum" element={<DownstreamPetroleum />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;