import About from 'components/About';
import Blog from 'components/Blog';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import Portoflio from 'components/Portoflio';
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Chandra Perdiansyah';
  });
  return (
    <div className='homepage'>
      <Header />
      <Hero />
      <About />
      <Portoflio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
