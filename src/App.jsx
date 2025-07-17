import React from 'react';
import CandleTimer from './components/CandleTimer';
import RingTimer from './components/RingTimer';
import MusicPlayer from './components/MusicPlayer';
import QuoteBox from './components/QuoteBox';
import StatsPanel from './components/StatsPanel';

const App = () => {
  return(
    <div className="min-h-screen bg-[#fdf6e3] text-gray-800 flex flex-col items-center justify-center p-4">
      <h1 className='text-4xl font-serif mb-6'>Vellichor</h1>
      <div className='relative flex items-center justify-center'>
        <CandleTimer/>
        <div className='absolute'>
          <RingTimer/>
        </div>
      </div>
      <div className='mt-6 flex gap-4'>
        <button className="bg-amber-600 text-white font-semibold px-4 py-2 rounded-xl hover:bg-amber-700">10 min</button>
        <button className='bg-amber-600 text-white font-semibold px-4 py-2 rounded-xl hover:bg-amber-700'>30 min</button>
        <button className='bg-amber-200 px-4 py-2 rounded-xl'>1 hour</button>
        <button className='bg-amber-200 px-4 py-2 rounded-xl'>2 hours</button>
        <button className='bg-amber-200 px-4 py-2 rounded-xl'>3 hours</button>
        <button className="bg-amber-600 text-white px-4 py-2 rounded-xl">Test Button</button>
      </div>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl'>
        <MusicPlayer/>
        <QuoteBox/>
        <StatsPanel/>
      </div>
    </div>
  )
}

export default App;