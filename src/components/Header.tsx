import { Launch } from "@carbon/icons-react";

type Props = {};

function Header({}: Props) {
  return (
    <header className='bg-transparent w-full z-[3] text-white'>
      <div className='flex items-center justify-between px-5 xl:px-80 h-20'>
        <div className='flex items-center space-x-2'>
          <img src='/favicon.svg' className='h-12 w-12' alt='logo' />
          <p className='text-xl font-bold'>Outer.Chat</p>
        </div>

        <button
          className='text-white hover:text-gray-300 flex items-center space-x-2'
          onClick={() => window.open('https://github.com/outer-chat', '_blank')}
        >
          <span>GitHub</span>
          <Launch />
        </button>

      </div>
    </header>
  );
}

export default Header;