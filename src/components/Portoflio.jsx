import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import eralintas from 'assets/image/porto/eralintas.jfif';
import movienesia from 'assets/image/porto/1649305808303.jfif';
import makanin from 'assets/image/porto/1649305817750.jfif';
import sobatgadaiku from 'assets/image/porto/1649305233239.jfif';

export default function Portoflio() {
  const dataPortoflio = [
    {
      title: 'Era Lintas Data Solusindo',
      url: 'http://eralintasdata.co.id/',
      description:
        'Website company profile untuk bisnis yang bergerak di bidang konsultan IT, website yang dibangun dengan menggunakan standar pemrograman web dan dibantu dengan framework bootstrap CSS agar mendapatkan hasil yang sesuai dengan kebutuhan',
      image: eralintas,
      date: new Date('2020-09-01'),
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    },
    {
      title: 'Movienesia',
      url: 'https://cper-fwd-fundamental.netlify.app/',
      description:
        'Situs web yang menyajikan data film menggunakan API TMDB API. Website yang dibangun hanya fokus pada fetch API dan slicing design',
      image: movienesia,
      date: new Date('2021-09-01'),
      tech: ['HTML', 'SCSS', 'JavaScript', 'TMDB API'],
    },
    {
      title: 'Makan.in',
      url: 'https://cperdiansyah-fwd-sub3.netlify.app/',
      description:
        'Website yang menyajikan data restoran dan menu-menu di dalamnya. CRUD dengan fetch API, mendukung Progressive Web App (PWA), dan berkinerja baik pada PageSpeed Insights',
      image: makanin,
      date: new Date('2021-12-01'),
      tech: [
        'HTML',
        'SCSS',
        'JavaScript',
        'Dicoding API',
        'PWA',
        'PageSpeed Insights',
      ],
    },
    {
      title: 'Sobatgadaiku',
      url: 'https://www.sobatgadaiku.com/',
      description:
        'Website penggadaian properti dan aset yang dibangun menggunakan wordpress dengan banyak kustomisasi desain menggunakan tailwind css serta berfokus pada SEO agar muncul pada halaman awal pencarian google',
      image: sobatgadaiku,
      date: new Date('2021-12-01'),
      tech: ['Wordpress', 'Tailwind CSS', 'JavaScript'],
    },
  ];

  console.log(dataPortoflio);

  const dataPortoflioSorted = dataPortoflio.sort((a, b) => b.date - a.date);

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
              Berikut adalah beberapa project yang pernah saya buat
            </p>
          </div>
        </div>

        <div className='w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto'>
          {dataPortoflioSorted.map((item, index) => (
            <div key={index} className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md shadow-md overflow-hidden'>
                <img
                  src={item.image}
                  alt='Landing Page'
                  width='w-full'
                  loading='lazy'
                />
              </div>

              <div className='title flex justify-between items-center'>
                <h3 className='font-semibold text-xl text-dark mt-5 mb-3 hover:text-primary transition duration-300 ease-in-out'>
                  <a href={item.url} target='_blank' rel='noopener noreferrer'>
                    {item.title}
                  </a>
                </h3>

                <span className='text-base font-semibold text-secondary'>
                  <Moment format='MMM YYYY'>{item.date}</Moment>
                </span>
              </div>
              <p className='font-medium text-base text-secondary'>
                {item.description}
              </p>

              <div className='tech-stack mt-2'>
                {item.tech.map((techStack, index) => (
                  <span
                    key={index}
                    className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
                  >
                    {techStack}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
