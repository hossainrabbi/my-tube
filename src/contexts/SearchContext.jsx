import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchContext = createContext(null);
export const useSearchContext = () => useContext(SearchContext);

const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();

  const handleChangeSearchKeyword = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate('/');

    setSearchKeyword(search);
    setSearch('');
  };

  const handleHome = () => {
    setSearchKeyword('');
  };

  const value = {
    search,
    handleChangeSearchKeyword,
    handleSearchSubmit,
    searchKeyword,
    handleHome,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;
