import React from 'react';
import './css/Navbar.css';
import { FaUserCircle } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { IoSettingsSharp } from 'react-icons/io5';
import { IoMdNotifications } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';

const Navbar = () => {
  return (
    <nav className='navbar bg-body-tertiary'>
      <div className='container-fluid'>
        <form className='d-flex' role='search'>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          <IoSearch className='search-icon-image' />
        </form>
        <ul className='navbar-nav flex-row'>
          <li className='nav-item'>
            <FaUserCircle />
          </li>
          <li className='nav-item'>
            <FaMessage />
          </li>
          <li className='nav-item'>
            <IoSettingsSharp />
          </li>
          <li className='nav-item'>
            <IoMdNotifications />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
