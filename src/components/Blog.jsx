import React from 'react';

export default function Blog() {
  return (
    <section id='blog' class='pt-36 pb-32 bg-slate-100'>
      <div class='container'>
        <div class='w-full px-4'>
          <div class='max-w-xl mx-auto text-center mb-16'>
            <h4 class='font-semibold text-lg text-primary mb-2'>Blog</h4>
            <h2 class='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>
              Tulisan Terkini
            </h2>
            <p class='font-medium text-md text-secondary md:text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              quisquam perspiciatis blanditiis dolores?
            </p>
          </div>
        </div>

        <div class='flex flex-wrap'>
          <div class='w-full px-4 lg:w-1/2 xl:w-1/3'>
            <div class='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
              <img
                src='https://source.unsplash.com/360x200?programming'
                alt='Programming'
                class='w-full'
              />
              <div class='py-8 px-6'>
                <h3>
                  <a
                    href='#'
                    class='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'
                  >
                    Tips Belajar Programming
                  </a>
                </h3>
                <p class='font-medium text-base text-secondary mb-6'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Placeat officia beatae quisquam?
                </p>
                <a
                  href='#'
                  class='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div class='w-full px-4 lg:w-1/2 xl:w-1/3'>
            <div class='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
              <img
                src='https://source.unsplash.com/360x200?mechanical+keyboard'
                alt='Mechanical Keyboard'
                class='w-full'
              />
              <div class='py-8 px-6'>
                <h3>
                  <a
                    href='#'
                    class='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'
                  >
                    Review Keyboard GMMK Pro
                  </a>
                </h3>
                <p class='font-medium text-base text-secondary mb-6'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  facilis illum in.
                </p>
                <a
                  href='#'
                  class='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div class='w-full px-4 lg:w-1/2 xl:w-1/3'>
            <div class='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
              <img
                src='https://source.unsplash.com/360x200?coffee'
                alt='Coffee'
                class='w-full'
              />
              <div class='py-8 px-6'>
                <h3>
                  <a
                    href='#'
                    class='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'
                  >
                    Menikmati Secangkir Kopi
                  </a>
                </h3>
                <p class='font-medium text-base text-secondary mb-6'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, totam ipsum ea quam sequi velit sunt.
                </p>
                <a
                  href='#'
                  class='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
