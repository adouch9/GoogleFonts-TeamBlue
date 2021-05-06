import React, { useState, createContext } from 'react';

export const Context = createContext();

// On détermine si modification il y a en comparant les nouvelles et les anciennes valeurs. Ainsi les updates.

const ContextProvider = ({ children }) => {
  const [inputText, setInputText] = useState(
    'Portez ce vieux whisky au juge blond qui fume !? 0123456789'
  );
  const [fontSize, setFontSize] = useState(20);

  return (
    <Context.Provider
      value={{ inputText, setInputText, fontSize, setFontSize }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
