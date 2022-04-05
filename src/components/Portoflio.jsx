import React from 'react';

export default function Portoflio() {
  return (
    <section id='portfolio' className='pt-36 pb-16 bg-slate-100'>
      <div className='container'>
        <div className='w-full px-4'>
          <div className='max-w-xl mx-auto text-center mb-16'>
            <h4 className='font-semibold text-lg text-primary mb-2'>
              Portfolio
            </h4>
            <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>
              Project Terbaru
            </h2>
            <p className='font-medium text-md text-secondary md:text-lg'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus porro consequuntur alias, commodi nemo enim aliquam
              ipsam obcaecati? Assumenda, ipsam?
            </p>
          </div>
        </div>

        <div className='w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto'>
          <div className='mb-12 p-4 md:w-1/2'>
            <div className='rounded-md shadow-md overflow-hidden'>
              <img
                src='dist/img/portfolio/1.png'
                alt='Landing Page'
                width='w-full'
                Loading='lazy'
              />
            </div>
            <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>
              Landing Page Sandhika Galih
            </h3>
            <p className='font-medium text-base text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              iusto! Aliquam, corporis.
            </p>
          </div>
          <div className='mb-12 p-4 md:w-1/2'>
            <div className='rounded-md shadow-md overflow-hidden'>
              <img
                src='dist/img/portfolio/2.png'
                alt='E-Commerce'
                width='w-full'
                Loading='lazy'
              />
            </div>
            <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>
              E-Commerce
            </h3>
            <p className='font-medium text-base text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              iusto! Aliquam, corporis.
            </p>
          </div>
          <div className='mb-12 p-4 md:w-1/2'>
            <div className='rounded-md shadow-md overflow-hidden'>
              <img
                src='dist/img/portfolio/3.png'
                alt='Technical Documentation'
                width='w-full'
                Loading='lazy'
              />
            </div>
            <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>
              Technical Documentation
            </h3>
            <p className='font-medium text-base text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              iusto! Aliquam, corporis.
            </p>
          </div>
          <div className='mb-12 p-4 md:w-1/2'>
            <div className='rounded-md shadow-md overflow-hidden'>
              <img
                src='dist/img/portfolio/4.png'
                alt='Tribute Page'
                width='w-full'
                Loading='lazy'
              />
            </div>
            <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>
              Tribute Page
            </h3>
            <p className='font-medium text-base text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              iusto! Aliquam, corporis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
