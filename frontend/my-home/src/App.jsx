import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CategorySection from './components/CategorySection';
import TrustedCompanies from './components/TrustedCompanies';
import Footer from './components/Footer';
import { useRippleEffect } from './hooks/useAnimation';

function App() {
  useRippleEffect();

  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <CategorySection />
      <TrustedCompanies />
      <Footer />
    </div>
  );
}

export default App;