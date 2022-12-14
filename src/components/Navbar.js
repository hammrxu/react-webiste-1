import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SwitchLabel from './SwitchLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';



function Navbar() {
  const [click, setClick] = useState(false);
  const [value, setValue] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  // const [scrolldown, setScrollDown] = useState(false);



  return (
    <>
      <nav className='navbar' style={{}}>
        <div className='navbar-container my-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {process.env.REACT_APP_MY_NAME}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/about2'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About2
              </Link>
            </li> */}
            <li className='nav-item'>
              <a className='nav-links'
                onClick={closeMobileMenu} href={process.env.REACT_APP_MY_RESUME_LINK} target='_blank' rel="noreferrer" > RESUME</a>
            </li>
            <li className='nav-item'>
              <a className='nav-links'
                onClick={closeMobileMenu} href='https://github.com/hammrxu/react-webiste-1' target='_blank' rel="noreferrer">Code</a>
            </li>
          </ul>
          <div className="switch-component">
            <span>{value ? 'on' : 'off'}</span>
            <SwitchLabel
              isOn={value}
              onColor="#06D6A0"
              handleToggle={() => {
                setValue(!value);

                // want to make the background and color to reverse
                document.body.classList.toggle('bg-dark');
              }}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;