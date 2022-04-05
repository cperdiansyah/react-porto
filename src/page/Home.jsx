import About from 'components/About';
import Blog from 'components/Blog';
import Contanct from 'components/Contanct';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import Portoflio from 'components/Portoflio';
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Web Portofolio Chandra Perdiansyah';
  });
  return (
    <div className='homepage'>
      <Header />
      <Hero />
      <About />
      <Portoflio />
      <Blog />
      <Contanct />
      <Footer />
    </div>
  );
}
