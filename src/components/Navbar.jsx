import React from 'react';
import { Link } from 'react-router-dom';
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useSearchContext } from '../contexts/SearchContext';
import { useState } from 'react';

const Navbar = () => {
  const { search, handleChangeSearchKeyword, handleSearchSubmit, handleHome } =
    useSearchContext();

  const [dark, setDark] = useState(false);

  return (
    <header className="shadow py-2">
      <nav className="main-container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={handleHome}>
          <img
            src="/assets/img/video-logo.png"
            alt="My-Tube"
            className="h-10"
          />
          <span className="text-lg font-josefin mt-1">MyTube</span>
        </Link>

        <form onSubmit={handleSearchSubmit}>
          <input
            type="search"
            value={search}
            className="border-2 focus:ring-2 focus:ring-gray-200 py-1 px-3 rounded-l outline-none rounded-r-none"
            onChange={handleChangeSearchKeyword}
          />{' '}
          <button
            className="bg-gray-600 hover:bg-gray-100 hover:text-gray-600 text-white border-2 border-gray-600 focus:ring-2 focus:ring-gray-200 rounded-r px-3  py-1 -m-1"
            type="submit"
          >
            Search
          </button>
        </form>

        <button
          className="text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg text-lg py-2.5 px-3 text-center inline-flex items-center"
          onClick={() => setDark(!dark)}
        >
          {dark ? <BsFillSunFill /> : <BsMoonFill />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
