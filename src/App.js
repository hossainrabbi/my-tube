import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import PlayPlaylist from './components/pages/PlayPlaylist';
import VideoDetails from './components/pages/VideoDetails';
import SearchContextProvider from './contexts/SearchContext';

const App = () => {
  return (
    <BrowserRouter>
      <SearchContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/videos/:videoId" element={<VideoDetails />} />
            <Route path="/playlist/:playlistId" element={<PlayPlaylist />} />
          </Route>
        </Routes>
      </SearchContextProvider>
    </BrowserRouter>
  );
};

export default App;
