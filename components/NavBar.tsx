import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <ul className='flex gap-3'>
        <Link
          className='font-bebas_neue text-2xl font-bold text-emerald-800 hover:underline'
          href='/'
        >
          Indie Gamer
        </Link>
        <Link
          className='ml-auto text-emerald-800 hover:underline'
          href='/reviews'
        >
          Reviews
        </Link>
        <Link
          className='text-emerald-800 hover:underline'
          prefetch={false}
          href='/about'
        >
          About
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
