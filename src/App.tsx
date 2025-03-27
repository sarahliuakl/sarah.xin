import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ThoughtsPage from './pages/ThoughtsPage';
import ThoughtDetailPage from './pages/ThoughtDetailPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      {/* Apply base font and text color to the root div */}
      <div className="flex flex-col min-h-screen font-sans text-gray-700">
        <Header />
        {/* Reduced main content top padding: py-12 -> py-10, md:py-20 -> md:py-16 */}
        <main className="flex-grow container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-16"> {/* Adjusted padding */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/thoughts" element={<ThoughtsPage />} />
            <Route path="/thoughts/:slug" element={<ThoughtDetailPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
