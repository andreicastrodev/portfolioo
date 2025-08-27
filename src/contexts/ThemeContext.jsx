import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const isDark = true;

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};