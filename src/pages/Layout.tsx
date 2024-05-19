import React from 'react';
import { Header, Footer } from '../components';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className='xl:bg-white bg-[#121212] min-h-screen h-full w-full flex flex-col relative overflow-hidden'>
      <Header />
      <div className='pointer-events-none fixed top-0 left-0 z-[1] h-screen w-screen opacity-50 bg-blend-normal bg-noisy-texture xl:hidden'></div>
      <div className='flex flex-col flex-1 px-5 xl:px-96 z-[2]'>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
