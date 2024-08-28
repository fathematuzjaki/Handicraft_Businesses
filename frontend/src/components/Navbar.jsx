import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle'; // Import the ThemeToggle component

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <img src="/images/logo.png" alt="Logo" className="w-12 h-12" />
          <h1 className="text-white text-2xl font-bold">Bangladeshi Handicrafts</h1>
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-lg font-medium ${isActive ? 'bg-blue-800' : 'hover:bg-blue-700'}`
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-lg font-medium ${isActive ? 'bg-blue-800' : 'hover:bg-blue-700'}`
              }
            >
              Blog
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li>
              <NavLink
                to="/profile"
                className="flex items-center"
              >
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Profile"
                  className="rounded-full w-10 h-10 border-2 border-white transition-transform transform hover:scale-105"
                />
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-white px-3 py-2 rounded-md text-lg font-medium ${isActive ? 'bg-blue-800' : 'hover:bg-blue-700'}`
                }
              >
                Login
              </NavLink>
            </li>
          )}
          <li>
            <ThemeToggle /> {/* Add the ThemeToggle component here */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
