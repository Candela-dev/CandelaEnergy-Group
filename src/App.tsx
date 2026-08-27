import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThoughtLeadership from './pages/ThoughtLeadership';
import Letterhead from './components/Letterhead';
import SavingsCalculator from './components/SavingsCalculator';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Services from './components/Services';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import the new dedicated service pages
import Telemetry from './pages/Telemetry';
import GridMetering from './pages/GridMetering';
import EnergyAnalytics from './pages/EnergyAnalytics';
import DownstreamPetroleum from './pages/DownstreamPetroleum';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white flex flex-col justify-between">
        {/* Top Navigation */}
        <Navbar />

        {/* Main Content Routed */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <OurStory />
                  <Services />
                  <SavingsCalculator />
                  <Insights />
                  <Contact />
                </>
              } 
            />
            <Route path="/thought-leadership" element={<ThoughtLeadership />} />
            <Route path="/letterhead" element={<Letterhead />} />
            
            {/* New Service Detail Routes */}
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