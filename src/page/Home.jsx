import About from 'components/About';
import Header from 'components/Header';
import Hero from 'components/Hero';
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
    </div>
  );
}
