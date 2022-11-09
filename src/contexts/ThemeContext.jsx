import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export const useThemeContext = () => useContext(ThemeContext);

const ThemeContextProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const handleDarkTheme = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider value={{ dark, handleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
