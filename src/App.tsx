import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import PrishaSupport from './components/prisha/PrishaSupport';
import PrishaTerms from './components/prisha/PrishaTerms';
import PrishaRefund from './components/prisha/PrishaRefund';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/prisha/support" element={<PrishaSupport />} />
        <Route path="/prisha/terms" element={<PrishaTerms />} />
        <Route path="/prisha/refund" element={<PrishaRefund />} />
      </Routes>
    </Router>
  );
}

export default App;