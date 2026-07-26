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
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;