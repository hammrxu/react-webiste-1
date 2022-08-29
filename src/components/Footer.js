import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <p><pre><strong>About</strong></pre></p>
            <Link to='/resume'>RESUME</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <p><pre><strong>My Links</strong></pre></p>
            <Link to='/'>Linkedin</Link>
            <Link to='/'>Github</Link>
            <Link to='/'>YouTube</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <p><pre><strong>This Site Built By</strong></pre></p>
            <a href='https://reactjs.org/' target='_blank' ><FontAwesomeIcon icon="fa-brands fa-react" /> React</a>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <p><pre><strong>Social Media</strong></pre></p>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <small><Link to='/' className='social-logo'>
              Peng Xu
            </Link></small>
          </div>
          <small class='website-rights'>Peng Xu © 2022</small>

          <div class='social-icons'>
            <small><Link
              class='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='Linkedin'
            >
              <i class="fab fa-linkedin"></i>
            </Link></small>
            <small><Link
              class='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='Github'
            >
              <i class="fab fa-github-square"></i>
            </Link></small>
            <small><Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link></small>
          </div>
        </div>
      </section >
    </div >
  );
}

export default Footer;
