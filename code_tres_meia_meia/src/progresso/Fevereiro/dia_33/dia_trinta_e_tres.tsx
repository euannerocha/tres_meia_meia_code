import React, { useEffect, useState } from 'react';

type Theme = 'dark' | 'light'

const ThemeToggle = () => {
  const defaultTheme = 'light'

  const [themeMode, setThemeMode] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || defaultTheme);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', themeMode === 'dark');
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((theme) => theme === 'dark' ? 'light' : 'dark');

    document.body.classList.toggle('dark-theme', true);
  };

  console.log(themeMode)

  return (
    <div>
      <label>
        <input type="checkbox" checked={themeMode === 'dark'} onChange={toggleTheme} />
        {
        themeMode === 'light' 
        ? 
        'Dark Mode' 
        :
        'Light Mode'
        }
      </label>
    </div>
  );
};

export default ThemeToggle;