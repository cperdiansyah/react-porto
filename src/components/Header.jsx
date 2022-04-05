import React, { useRef } from 'react';
import Brand from './Brand';
import './Header.scss';

export default function Header(props) {
  const navLinks = ['Beranda', 'Tentang Saya', 'Portofolio', 'Blog', 'Contact'];
  const className = [props.className];

  const hamburgerButton = useRef(null);
  const navMenu = useRef(null);

  const toogleNav = () => {
    const hamburger = hamburgerButton.current;
    const nav = navMenu.current;
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden');
  };

  window.onscroll = () => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
    } else {
      header.classList.remove('navbar-fixed');
    }
  };

  return (
    <header
      className={
        ' bg-transparent absolute top-0 left-0 w-full flex items-center z-10  ' +
        className.join(' ')
      }
    >
      <div className='container'>
        <div className='flex items-center justify-between relative'>
          <div className='px-4'>
            <Brand className='font-bold text-lg text-primary block py-6' />
          </div>

          <div className='flex items-center px-4'>
            <button
              id='hamburger'
              name='hamburger'
              type='button'
              className='block absolute right-4 lg:hidden'
              ref={hamburgerButton}
              onClick={toogleNav}
            >
              <span className='hamburger-line transition duration-300 ease-in-out origin-top-right'></span>
              <span className='hamburger-line transition duration-300 ease-in-out'></span>
              <span className='hamburger-line transition duration-300 ease-in-out origin-bottom-right'></span>
            </button>

            <nav
              ref={navMenu}
              className='nav-menu hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none'
            >
              <ul className='block lg:flex'>
                {navLinks.map((link, index) => (
                  <li key={index} className='group'>
                    <a
                      className='nav-list-item text-base text-dark py-2 mx-8 flex group-hover:text-primary'
                      href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
