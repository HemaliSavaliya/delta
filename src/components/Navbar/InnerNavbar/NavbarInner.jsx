import React, { useState } from 'react';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi';
import { FaGripLines } from 'react-icons/fa';
import NavbarInnerItem from './NavbarInnerItem';
import { Link } from 'react-router-dom';
import useScrollNavbar from '../../../Hooks/useScrollNavbar';
import logo from "../../../Assets/img/logo.png";

const NavbarInner = () => {
  const { navbarVisible } = useScrollNavbar();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <header className="reverse-scroll" style={{ display: navbarVisible ? 'block' : 'none' }}>
      <nav id="headerBar" className="navbar-inner flex justify-between items-center" >
        <div className="text-black cursor-pointer inner-logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>

        <div className="justify-center">
          <NavbarInnerItem isSidebarOpen={isSidebarOpen} />
        </div>

        <div className="flex gap-3">
          <div className="btn menu-btn">
            <FaGripLines onClick={handleSidebarToggle} />
          </div>

          <div className="social">
            <div className="text-black">
              <Link to="https://facebook.com/"><BiLogoFacebook /></Link>
            </div>
            <div className="text-black">
              <Link to="https://instagram.com/"><BiLogoInstagram /></Link>
            </div>
            <div className="text-black">
              <Link to="https://linkedin.com/"><BiLogoLinkedin /></Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavbarInner;