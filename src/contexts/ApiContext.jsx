import { useContext } from 'react';
import { createContext } from 'react';
import useVideo from '../hooks/useVideo';

const ApiContext = createContext(null);

export const useApiContext = () => useContext(ApiContext);

const ApiContextProvider = ({ children }) => {
  const value = {};
  //   const { videos } = useVideo(
  //     `search?part=snippet,id&q=${searchKeyword}&maxResults=${'50'}&regionCode=${'bd'}`
  //   );

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export default ApiContextProvider;
