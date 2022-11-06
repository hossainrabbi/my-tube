import React from 'react';
import { Link } from 'react-router-dom';
import { useSearchContext } from '../contexts/SearchContext';

const Navbar = () => {
  const { search, handleChangeSearchKeyword, handleSearchSubmit, handleHome } =
    useSearchContext();

  return (
    <header className="bg-slate-100 py-2">
      <nav className="main-container flex justify-between items-center">
        <Link to="/" onClick={handleHome}>
          <img
            src="/assets/img/video-logo.png"
            alt="My-Tube"
            className="h-14"
          />
        </Link>

        <form onSubmit={handleSearchSubmit}>
          <input
            type="search"
            value={search}
            className="border py-1 px-3 rounded-l rounded-r-none"
            onChange={handleChangeSearchKeyword}
          />{' '}
          <button
            className="bg-purple-400 py-1 border-purple-400 border px-3 rounded-r -m-1"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Navbar;
