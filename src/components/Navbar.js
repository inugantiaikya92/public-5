import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Img/nav-jss-logo.png';
import '../css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white md:py-2 fixed w-full top-0 z-10 flex justify-center items-center">
      <div className="container-fluid">
        <div className="block md:hidden">
          <button onClick={toggleMenu}  className="text-gray-800 text-xl focus:outline-none">
            {isOpen ? 'Close' : <>&#9776;</>}
          </button>
        </div>
        <div className={`row md:items-center customtoggle  ${isOpen ? 'hide' : 'show'}` }>
          <div className='col-lg-5 text-center'>
            <Link to="/" className={`navtext mx-3 md:mx-12 navsection ${isActive('/') ? 'active' : ''}`}>POOJA REQUEST</Link>
            <Link to="/CatringReq" className={`navtext mx-4 navsection ${isActive('/CatringReq') ? 'active' : ''}`}>CATERING REQUEST FORM</Link>
            <Link to="/Yoga" className={`navtext mx-4 navsection ${isActive('/Yoga') ? 'active' : ''}`}>YOGA</Link>
          </div>
          <div className='col-lg-2 text-center'>
            <div className="hidden md:block md:mx-4">
              <div className="logo-container items-center border rounded-full bg-white logobox"></div>
            </div>
          </div>
          <div className='col-lg-5 text-center'>
            <Link to="/CateringForm" className={`navtext mx-4 navsection ${isActive('/CateringForm') ? 'active' : ''}`}>VOLUNTEER FORM</Link>
            <Link to="/Announcements" className={`navtext mx-4 navsection ${isActive('/Announcements') ? 'active' : ''}`}>ANNOUNCEMENTS</Link>
            <Link to="/Vedic" className={`navtext mx-4 navsection ${isActive('/Vedic') ? 'active' : ''}`}>VEDIC SCHOOL </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
