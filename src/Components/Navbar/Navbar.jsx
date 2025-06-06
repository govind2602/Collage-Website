/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import naacLogo from '../../assets/Naac-Logo-bg-remove.png';
import { Link } from 'react-scroll';
import { TbMenuDeep } from "react-icons/tb";

const Navbar = () => {
   const [sticky, setSticky] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         window.scrollY > 610 ? setSticky(true) : setSticky(false);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const [mobileMenu, setMobileMenu] = useState(false);
   const toggleMenu = () => {
      setMobileMenu(!mobileMenu);
   };

   return (
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
         <img src={logo} alt="logo" height="75px" />
         <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='faculty' smooth={true} offset={-260} duration={500}>Faculty</Link></li>
            <li><Link to='alumni' smooth={true} offset={-260} duration={500}>Alumni</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <Link to='contact' smooth={true} offset={-260} duration={500} className='btn-nav'>
               <li>Contact us</li>
            </Link>
         </ul>

         <TbMenuDeep className='menu-icon' onClick={toggleMenu} />

         <div className="naac-logo-container">
            <img src={naacLogo} alt="NAAC Logo" className="naac-logo" />
         </div>
      </nav>
   );
};

export default Navbar;