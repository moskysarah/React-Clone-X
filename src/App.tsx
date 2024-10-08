import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react';
import './App.css'

import Home from './Pages/Home';
import Profile from './Pages/profile';
import Replie from './components/RepliPages/reply';
import Highlight from './components/RepliPages/hightLight';
import Media from './components/RepliPages/media';
import Likes from './components/RepliPages/likes';




function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={< Home/>} />
      <Route path="/:username" element={<Profile />} >
        <Route path='replies' element={<Replie/>} />
        <Route path='media' element={<Media />} />
        <Route path='highlights' element={<Highlight/>} />
        <Route path='likes' element={<Likes/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
