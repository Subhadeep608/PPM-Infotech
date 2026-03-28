import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../styles/header.css";


import ButtonComponent from './button.js';
import Sidebar from './Sidebar.js';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className='container header-wraper'>

          <div className='row action-bar py-2'>
            <div className='col-lg-6 col-md-6 col-12 left-action-bar'>
              Are you ready to grow up your business?
              <Link to="/contact" className="top-contact ms-2">
                Contact Us →
              </Link>
            </div>
            
            <div className='col-lg-6 col-md-6 col-12 rgt-action-bar text-end'>
              <a href="mailto:info@ppminfotech.com" className="me-4">
                <i className="fa-solid fa-envelope"></i> info@ppminfotech.com
              </a>
              <a href="tel:+917836917667" className="">
                <i className="fa-solid fa-envelope"></i> +91 78369 17667
              </a>
            </div>
          </div>

          <nav className='navbar-sec navbar navbar-expand-lg navbar-light px-4 py-3 justify-content-between align-items-center'>

            {/* logo  */}
            <Link className="navbar-brand" to="/">
              <img src='/media/images/ppm infotech svg.svg' alt='header-logo' loading="lazy"/>
            </Link>

            {/* Menu  */}
            <div className='menu-holder'>
              {/* Toggle Button  */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
                <span className="navbar-toggler-icon"></span>
              </button>


              {/* Menu   */}
              <div className="collapse navbar-collapse " id="navbarMenu">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item"><NavLink to="/" end className="nav-link" href="#">Home</NavLink></li>
                  <li className="nav-item"><NavLink to="/about" className="nav-link" href="#">About</NavLink></li>
                  <li className="nav-item"><NavLink to="/service" className="nav-link" href="#">Services</NavLink></li>
                  <li className="nav-item"><NavLink to="/blog" className="nav-link" href="#">Blog</NavLink></li>
                  <li className="nav-item"><NavLink to="/contact" className="nav-link" href="#">Contact</NavLink></li>
                </ul>
              </div>
            </div>

            {/* Right Side Button  */}
            <div className='nav-right-btn-sec d-flex justify-content-end align-items-center'>
              {/* button || sidebar */}
              <ButtonComponent name="Book a Meeting" path="/contact" className="header-btn" />

              {/* sidebar menu buttom  */}
              <button id="sidebar-menu-btn" className="sidebar-menu-btn ms-3 " onClick={() => setIsOpen(true)}>
                <img className="menu-dark" src="/media/icons/menu-dark-icon.png" alt="Menu-icon" loading="lazy"/>
                <img className="menu-light" src="/media/icons/menu-light-icon.png" alt="Menu-icon" loading="lazy"/>
              </button>
              
            </div>
          </nav>
        </div>

        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      </header>
    </>

  )
}


export default Header;