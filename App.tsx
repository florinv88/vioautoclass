import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Pricing from './components/Pricing';
import StudentInfo from './components/StudentInfo';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Team from './components/Team';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-100 selection:text-red-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Team />
        <Pricing />
        <StudentInfo />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;