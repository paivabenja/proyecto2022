import { createContext, useState } from 'react';

const context = createContext();

const ContextProvider = ({ children }) => {
  const [searchUrl, setSearchUrl] = useState('http://localhost:5000/buscar');
  const [genre, setGenre] = useState('')
  return (
    <context.Provider value={{ searchUrl, setSearchUrl, genre, setGenre }}>
      {children}
    </context.Provider>
  );
};

export { context, ContextProvider };
