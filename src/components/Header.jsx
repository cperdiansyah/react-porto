import React from 'react';
import Brand from './Brand';
import './Header.scss';

export default function Header(props) {
  const navLinks = ['Beranda', 'Tentang Saya', 'Portofolio', 'Blog', 'Contact'];
  const className = [props.className];

  return (
    <header
      className={'header-list flex justify-between ' + className.join(' ')}
    >
      <Brand />

      <nav className='nav-list'>
        {navLinks.map((link, index) => (
          <a
            key={index}
            className='nav-list-item'
            href={`#${link.toLowerCase()}`}
          >
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}
