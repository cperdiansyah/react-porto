import Button from 'elements/Button';
import React from 'react';
import './Hero.scss';
import fotoDiri from 'assets/image/foto-diri.png';

export default function Hero(props) {
  const className = [props.className];
  return (
    <section
      className={'hero-section pt-36 overflow-hidden' + className.join(' ')}
      id='beranda'
    >
      <div className='container '>
        <div className='flex flex-wrap'>
          <div className='w-full self-center px-4 lg:w-1/2'>
            <h1 className='flex items-end text-base font-semibold text-primary md:text-xl '>
              Halo Semuanya &nbsp;
              <img
                src='https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif'
                alt='hello_sign'
                className='icon-image mr-1'
                Loading='lazy'
              />
              , saya
            </h1>
            <span className='block font-semibold text-dark text-4xl mt-1 lg:text-5xl'>
              Chandra Perdiansyah
            </span>
            <h2 className='font-medium text-slate-700 text-lg mb-5 lg:text-2xl'>
              Frontend Developer &
              <span className='text-secondary font-bold'>
                &nbsp; Lifetime Learner
              </span>
            </h2>
            {/* <p className='font-medium text-slate-400 mb-10 leading-relaxed'>
              Saya seorang Frontend Developer yang berpikiran terbuka, kreatif,
              dan komunikatif. Saya memiliki
              <span className='text-slate-600 font-bold'>
                &nbsp;satu tahun&nbsp;
              </span>
              pengalaman langsung dalam mengkodekan situs web dan aplikasi
              secara efisien menggunakan
              <span className='text-slate-600 font-bold'>
                &nbsp; HTML, CSS, dan JavaScript modern.&nbsp;
              </span>
              Saya bersemangat untuk
              <span className='text-slate-600 font-bold'>
                &nbsp; mempelajari hal-hal baru&nbsp;
              </span>
              dan saya selalu berusaha untuk meningkatkan diri.
            </p> */}

            <p className='font-medium text-secondary mb-10 leading-relaxed'>
              Seorang
              <span className='text-slate-600 font-bold'>
                &nbsp;Frontend Developer muda&nbsp;
              </span>
              yang berpikiran terbuka, kreatif, dan komunikatif. Sangat
              bersemangat untuk
              <span className='text-slate-600 font-bold'>
                &nbsp; mempelajari hal-hal baru&nbsp;
              </span>
              dan selalu berusaha untuk meningkatkan diri.
            </p>
            <Button
              href='#contact'
              type='link'
              className='text-base fong-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out'
            >
              Hubungi Saya
            </Button>
          </div>

          <div className='w-full self-end px-4 lg:w-1/2'>
            <div className='relative mt-10 lg:mt-9 lg:right-0'>
              <img
                src={fotoDiri}
                alt='FotoDiri'
                className='max-w-full mx-auto lg:mx-0 lg:ml-auto'
                Loading='lazy'
              />

              <span className='absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 lg:-translate-x-1/3  lg:scale-110'>
                <svg
                  width='400px'
                  height='400px'
                  viewBox='0 0 200 200'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill='#6366f1'
                    d='M58.2,-56.1C71.3,-45.1,74.9,-22.6,73.4,-1.5C71.9,19.6,65.4,39.2,52.3,48.8C39.2,58.3,19.6,57.8,3.1,54.7C-13.4,51.6,-26.7,45.9,-43.1,36.3C-59.4,26.7,-78.7,13.4,-79.9,-1.2C-81.1,-15.7,-64.1,-31.5,-47.8,-42.4C-31.5,-53.4,-15.7,-59.7,3.4,-63.1C22.6,-66.5,45.1,-67.1,58.2,-56.1Z'
                    transform='translate(100 100) scale(1.2)'
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
