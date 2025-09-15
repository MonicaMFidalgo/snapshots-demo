import React from 'react';

const PreviewFooter: React.FC = () => {
  return (
    <footer className='fixed bottom-0 left-0 w-full bg-black bg-opacity-80 text-white py-4 px-6 flex justify-between items-center'>
      <a
        href='https://flowbite.com/'
        className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'
      >
        <img
          src='https://flowbite.com/docs/images/logo.svg'
          className='h-8'
          alt='Flowbite Logo'
        />
        <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
          Flowbite
        </span>
      </a>
    </footer>
  );
};

export default PreviewFooter;
