import React from 'react';
import Timer from './components/Timer'
import Landing from './pages/Landing';
import MusicPlayer from './components/MusicPlayer';
import QuoteBox from './components/QuoteBox';
import StatsPanel from './components/StatsPanel';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/timer" element={<Timer/>}/>
      </Routes>
    </Router>
  )
}

export default App;