import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Header = () => {
  
  const [darkMode, setDarkMode] = useDarkMode("darkmode", false);

  const Toggle = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <h1>Women's World Cup Players</h1>
    <button onClick={Toggle}>Dark Mode</button>
    </header>
  );
};

export default Header;