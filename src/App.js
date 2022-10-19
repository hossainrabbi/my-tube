import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import VideoDetails from './components/pages/VideoDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:videoId" element={<VideoDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
