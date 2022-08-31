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

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Peng Xu
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
            <li className='nav-item'>
              <a className='nav-links'
                onClick={closeMobileMenu} href='https://hammer-resume-1.s3.us-east-1.amazonaws.com/PengXu_RESUME_FD.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIFrHPY3axoFeTV5trHRKAwKwjXcf76KPTiV%2BzIVbNMctAiA5kta%2BmoTk5p3YjYyQX%2BJ0JEEZfBFT6fdBOeDg%2Bnf9mirkAghhEAEaDDEyOTYxNzA4MTE3MiIMFKrA%2Fhav775qNxxfKsECc%2Fsffb6YWKncVkvo%2FvtS7VNaw6lm4KWR57rXdi5JbWDlZzeynO%2FeIm%2Ft2gfulLsGey2VZZBPHDJXMshdhOlojFugriWIbFYqI%2F8ZuFJaD%2BC%2FAbXc7msPTpzLo2qp8uvxSVn0RyS2EHfoTh33Xj6S%2F%2Bb2Xt9YS3DnxlrVKYM1sFXtTSHVsD%2BTghcb32cYe1MIyWrmDckGIs9B0Ae7IfaM6NWuxjGACdHHhBS3a56xTRski4B%2Br2tTz0aZ7DeJ5bW0G64r%2Fdc%2FLt7nKwEvE8Yvx0sZ%2BluVwhPLbE8RSOGpL9Dxq%2B9Vkn53DtGX1BWk5zQuHUKrFxDNPDhsWDS5pE6CYxJIc%2BKqmqNGy64ZnrfMvTuo%2FsG9%2BTjYnT1CwR2a4%2BmY2I5%2B8rcCFCkjsqGeSs1lQ2sdswj%2Bnw31beTUZ0L%2B1slPMLSIvpgGOrQCu8JxlLrg2I%2BsThYUbVoNRbi6kHXkFZvdlkY%2Fi35bOeC8N2b5v6C%2BtIm9DIz%2FW2SEAZ1QSI%2BWJ5NKc8Pl6LA9dgG4Knqqm8JA2bbKMhQYujdZ5ki1ZOfKXxelckqwUm5hJTDA5EjPg4zJ358phM9oerPmOgaIOGg39gp8KWpy1qHNY9i9Bm%2BZg8shY%2FQA%2FULRKFfT8leaNpSi5S8aCvFo3OtvRPuqDg%2B2sLHtEWgWth%2Fs1YYooz4p0NiJHBfw5Cb1lMy7R7U5jrjwTIXV5%2F4B4yKugHl4CF8t0Sypj7EC01LE8y2m%2BvckXTc2VtDleETC5jhmphfqZ%2BBlALL36WabbUy%2BQ57WF8LlRTS1C30Y3e8EJoOKyZjYEIDosRUay0e3eYgewpx4IhF1P75lRigXwj%2FqhVk%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220831T160214Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAR4LOHWNKNQM7TJHB%2F20220831%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5ee847d1f606bfee04d2e31e27d891dbff1e43aa1b6ab4c3cb4ef2d8132c937f' target='_blank' rel="noreferrer" > RESUME</a>
            </li>
          </ul>
          <div className="switch-component">
            <span>Theme</span>
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