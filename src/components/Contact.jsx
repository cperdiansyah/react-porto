import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [finish, setFinish] = useState(false);

  // console.log(name);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qe09bbk',
        'template_tvv6tpy',
        form.current,
        'hgNxXSOqOlk7eQzCI'
      )
      .then(
        (result) => {
          setLoading(false);
          console.log(result.text);
          setFinish(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  let content = (
    <div className='w-full lg:w-2/3 lg:mx-auto'>
      <div className='w-full px-4 mb-8'>
        <label htmlFor='name' className='text-base font-bold text-primary'>
          Nama
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary'
        />
      </div>
      <div className='w-full px-4 mb-8'>
        <label htmlFor='email' className='text-base font-bold text-primary'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary'
        />
      </div>
      <div className='w-full px-4 mb-8'>
        <label htmlFor='message' className='text-base font-bold text-primary'>
          Pesan
        </label>
        <textarea
          type='message'
          id='message'
          name='message'
          className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32'
        ></textarea>
      </div>
      <div className='w-full px-4'>
        <button
          className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500'
          // type={name && email && message ? 'disable' : 'submit'}
          type='submit'
        >
          Kirim
        </button>
      </div>
    </div>
  );

  if (loading) {
    content = (
      <div className='flex justify-center items-center flex-wrap flex-col px-4 mb-8 h-[300px]'>
        <div
          style={{ borderTopColor: 'transparent' }}
          className='w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin'
        ></div>
        <span className='font-semibold pt-5 text-2xl text-primary'>
          Loading .....
        </span>
      </div>
    );
  }

  if (finish) {
    content = (
      <div className='flex justify-center items-center flex-wrap flex-col px-4 mb-8 h-[300px]'>
        <span className='material-icons-outlined text-blue-500 text-6xl'>
          done
        </span>
        <span className='font-semibold pt-5 text-2xl text-primary'>
          Berhasil terkirim
        </span>
        <button
          type='button'
          className='px-3 py-4 bg-primary text-white rounded-xl shadow-md mt-3'
          onClick={() => setFinish(false)}
        >
          Kirim Form Lagi
        </button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form) {
      const name = form.current.elements.name.value;
      const email = form.current.elements.email.value;
      const message = form.current.elements.message.value;
      if (name && email && message) {
        setLoading(true);
        sendEmail(e);
      } else {
        alert('Form tidak boleh kosong');
      }
    }
  };

  return (
    <section id='kontak' className='pt-36 pb-32'>
      <div className='container'>
        <div className='w-full px-4'>
          <div className='max-w-xl mx-auto text-center mb-16'>
            <h4 className='font-semibold text-lg text-primary mb-2'>Kontak</h4>
            <h2 className='font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl'>
              Hubungi Saya
            </h2>
            <p className='font-medium text-md text-secondary md:text-lg'>
              Untuk setiap pertanyaan dan informasi lainnya, silakan hubungi
              saya melalui form
            </p>
          </div>
        </div>

        <form ref={form} onSubmit={handleSubmit}>
          {content}
        </form>
      </div>
    </section>
  );
}
