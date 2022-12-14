import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ChannelDetails from './components/pages/ChannelDetails';
import Home from './components/pages/Home';
import PlayPlaylist from './components/pages/PlayPlaylist';
import VideoDetails from './components/pages/VideoDetails';
import SearchContextProvider from './contexts/SearchContext';
import { useThemeContext } from './contexts/ThemeContext';

const App = () => {
  const { dark } = useThemeContext();

  return (
    <main className={dark ? 'dark' : ''}>
      <BrowserRouter>
        <SearchContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/videos/:videoId" element={<VideoDetails />} />
              <Route path="/playlist/:playlistId" element={<PlayPlaylist />} />
              <Route path="/channel/:channelId" element={<ChannelDetails />} />
            </Route>
          </Routes>
        </SearchContextProvider>
      </BrowserRouter>
    </main>
  );
};

export default App;
