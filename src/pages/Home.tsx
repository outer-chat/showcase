import { useState, useEffect } from 'react';
import headerImg from '/header.png';

import happyPeoples from '/shutterstock/happy.jpg';
import chatPeople from '/shutterstock/chat.jpg';
import fandomPeople from '/shutterstock/fandom.jpg';
import hanginOutPeople from '/shutterstock/hanging.jpg';

type Props = {}

function Home({}: Props) {
  const [introHeight, setIntroHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeights = () => {
      const intro = document.getElementById('intro');
      const headerImage = document.getElementById('headerImage');
      if (intro && headerImage) {
        setIntroHeight(intro.clientHeight);
        setHeaderHeight(headerImage.clientHeight);
      }
    };

    const handleResize = () => {
      updateHeights();
    };

    // we until the DOM elements are fully loaded (not the best solution, but it just works for now)
    const timeoutId = setTimeout(() => {
      updateHeights();
      setHeight((headerHeight - introHeight) / 2);
    }, 0);

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, [introHeight, headerHeight]);

  return (
    <>
      <div className='flex items-center justify-center' style={{ height: `calc(${headerHeight}px)` }}>
        <img id="headerImage" src={headerImg} alt='header' className='absolute top-0 left-0 w-full z-[-1] invisible xl:visible' />

        <div id="intro" className='flex flex-col items-center justify-center text-white font-montserrat h-full' style={{ paddingTop: height }}>
          <h1 className='text-3xl xl:text-5xl text-center font-light'>Chat in <span className='text-[#FF7D25] font-semibold'>outer space</span></h1>
          <p className='text-center text-xl mt-5 xl:px-32'>Outer.Chat is a chat application that allows you to chat with people from all around the world in outer space.</p>
          <button
            className='bg-neutral-900 text-white px-5 py-2 mt-5 hover:bg-neutral-800 transition-colors rounded-lg hover:bg-opacity-50 border border-white border-opacity-50'
            onClick={() => window.open('https://docs.outer.chat', '_blank')}
          >
              Get Started
          </button>
        </div>
      </div>

      <div className='flex items-center justify-center h-full flex-row gap-5'>
        <img src={happyPeoples} alt='happy peoples' className='rounded-lg shadow-xl w-1/2' />
        <div className='xl:text-black text-white p-5 rounded-lg mt-5'>
          <h2 className='text-5xl font-bold'>Create an invite-only place where you belong</h2>
          <p
            className='text-xl font-medium mt-5 xl:text-gray-700 text-gray-300'
          >
            Outer Chat servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
          </p>
        </div>
      </div>

      <hr className='border-t border-gray-300 my-10' />

      <div className='flex items-center justify-center h-full flex-row gap-5'>
        <div className='xl:text-black text-white p-5 rounded-lg mt-5'>
          <h2 className='text-5xl font-bold'>Where hanging out is easy</h2>
          <p
            className='text-xl font-medium mt-5 xl:text-gray-700 text-gray-300'
          >
            Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.
          </p>
        </div>
        <img src={hanginOutPeople} alt='happy peoples' className='rounded-lg shadow-xl w-1/2' />
      </div>

      <hr className='border-t border-gray-300 my-10' />

      <div className='flex items-center justify-center h-full flex-row gap-5'>
        <img src={fandomPeople} alt='happy peoples' className='rounded-lg shadow-xl w-1/2' />
        <div className='xl:text-black text-white p-5 rounded-lg mt-5'>
          <h2 className='text-5xl font-bold'>From few to a fandom</h2>
          <p
            className='text-xl font-medium mt-5 xl:text-gray-700 text-gray-300'
          >
            Get a community of any size running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
          </p>
        </div>
      </div>

      <hr className='border-t border-gray-300 my-10' />

      <div className='flex items-center justify-center h-full flex-col gap-5 text-center'>
        <div className='xl:text-black text-white p-5 rounded-lg mt-5'>
          <h2 className='text-6xl font-bold'>Reliable tech for staying close</h2>
          <p
            className='text-xl font-medium mt-5 xl:text-gray-700 text-gray-300'
          >
            Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
          </p>
        </div>
        <img src={chatPeople} alt='happy peoples' className='rounded-lg shadow-xl w-[80%]' />
      </div>

    </>
  )
}

export default Home;
