/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Blog.scss';

const blog = [
  {
    title: 'Generasi Gigih YABB x Gojek | My 4 Weeks Journey',
    link: 'https://cperdiansyah.medium.com/generasi-gigih-yabb-x-gojek-my-4-weeks-journey-e2fa58c486f',
    description:
      'Program Generasi Gigih menghadirkan segudang pengalaman baru bagi saya dalam segala aspek. Hal ini dikarenakan selama 4 minggu pembelajaran kami diberikan lingkungan yang sangat nyaman untuk belajar, bukan hanya materi yang diberikan, melainkan juga beberapa teman seperjuangan yang jagonya udah gila-gilaan tapi gak sungkan untuk memberi arahan dan pelajaran.',
    image: 'https://miro.medium.com/max/700/1*JkVH4J-HscHdL8vEqZrJgA.png',
    date: new Date('2021-06-21'),
  },
  {
    title: 'Digital Talent Scholarship | Fresh Graduate Academy',
    link: 'https://www.linkedin.com/posts/cperdiansyah_fga-dts-dicoding-activity-6905788087721431040-_lmb?utm_source=linkedin_share&utm_medium=member_desktop_web',
    description:
      'Beberapa waktu lalu sempat melihat postingan Kominfo tentang program Digital Talent Scholarship ini, Pas banget saat itu jalur Fresh Graduate Academy (FGA) sedang dibuka dan tertarik mengikuti jalur belajar Backend dengan platform Dicoding Indonesia. Langsung saat itu juga daftar, kesempatan gak boleh disia-siakan, apalagi platform Dicoding sangat cocok buat cara belajar saya yang lebih suka study case dan kalau nonton video tutorial malah ngantuk',
    image:
      'https://media-exp1.licdn.com/dms/image/C5622AQGF8XYJPs-kXw/feedshare-shrink_800/0/1646468182739?e=2147483647&v=beta&t=3_EWg0Vbn7RW3JrIkg5Mls2JNhfX8XZc-Kz4UtzSFbk',
    date: new Date('2022-02-15'),
  },
  {
    title: 'Lulus IDCamp 2021 - Frontend Path',
    link: 'https://www.linkedin.com/posts/cperdiansyah_frontend-dicoding-idcamp-activity-6905796406318116864-aC99?utm_source=linkedin_share&utm_medium=member_desktop_web',
    description:
      'Tahun 2021 lalu memberikan banyak pengalaman berharga buat saya, banyak kesempatan yang saya coba guna meningkatkan kemampuan diri, saya mencoba "memantaskan diri" untuk bersaing di industri. Berbagai kesempatan pelatihan yang ada saya coba kejar guna mempersempit gap antara lulusan kampus dengan kebutuhan industri.',
    image:
      'https://media-exp1.licdn.com/dms/image/C5622AQG42oJ0cjik7A/feedshare-shrink_800/0/1646470165912?e=2147483647&v=beta&t=3WYA_kQBDGpRhNnR9sYxrkIGQJvsYt_mbPeM-15GCME',
    date: new Date('2022-02-31'),
  },
];

const newBlog = blog.sort((a, b) => b.date - a.date);

export default function Blog() {
  return (
    <section id='blog' className='pt-36 pb-32 bg-slate-800'>
      <div className='container'>
        <div className='w-full px-4'>
          <div className='max-w-xl mx-auto text-center mb-16'>
            <h4 className='font-semibold text-lg text-primary mb-2'>Blog</h4>
            <h2 className='font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl'>
              Tulisan Terkini
            </h2>
            <p className='font-medium text-md text-slate-400 md:text-lg'>
              Ini adalah tulisan yang pernah saya buat
            </p>
          </div>
        </div>

        <div className='flex flex-wrap justify-center'>
          {newBlog.map((item, index) => (
            <div key={index} className='w-full px-4 lg:w-1/2 xl:w-1/3'>
              <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full'
                  loading='lazy'
                />
                <div className='py-8 px-6'>
                  <h3>
                    <a
                      href={item.link}
                      className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {item.title}
                    </a>
                  </h3>
                  <p className='description font-medium text-base text-secondary mb-6 '>
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
