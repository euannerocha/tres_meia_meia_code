import React, { useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme');
  //   if (savedTheme?.valueOf() === 'light') {
  //     setIsDarkMode(false);
  //   } else if (savedTheme?.valueOf() === 'dark'){
  //     setIsDarkMode(true)
  //   }
  // }, []);

  const toggleTheme = () => {
    // const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);

    // localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark-theme', !isDarkMode);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        Dark Mode
      </label>
    </div>
  );
};

export default ThemeToggle;