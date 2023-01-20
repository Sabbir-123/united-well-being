import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    const menuItems = (
        <>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT ME</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </>
      );
    
    return (
        <div className="navbar whiteColor  flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow whiteColor rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
        <div>
        <h1 className='font-semibold'>Sayesta Goswami, PhD <br /> <span className='text-[14px]'>CLINICAL PSYCHOLOGIST </span></h1>

        </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    );
};

export default Navbar;