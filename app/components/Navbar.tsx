'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Set initial theme based on localStorage or system preference
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="w-full flex justify-between items-center p-6 bg-white dark:bg-gray-900 shadow-md">
      <Link href="/" className="font-bold text-xl text-gray-800 dark:text-white">
        Sidra Khan
      </Link>
      <div className="flex items-center gap-6">
        <Link href="#portfolio" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
          Projects
        </Link>
        <Link href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
          Contact
        </Link>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </div>
    </nav>
  );
}