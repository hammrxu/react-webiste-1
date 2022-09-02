import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAws, faFigma, faLinkedin, faGithubSquare, faYoutubeSquare, faDev, faInstagramSquare, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <p><strong>About</strong></p>
            <a href={process.env.REACT_APP_MY_RESUME_LINK} target='_blank' rel="noreferrer" > RESUME</a>

            <Link to='/about'>Background</Link>
            <Link to='/aoubt'>Careers</Link>
          </div>
          <div className='footer-link-items'>
            <p><strong>My Links</strong></p>
            <a href='https://github.com/hammrxu' target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faGithubSquare} /> Github</a>
            <a href='https://www.linkedin.com/in/hammrxu/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>

            <a href='devpost.com/hammrxu' target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faDev} /> DevPost</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <p><strong>This Site Built By</strong></p>
            <a href='https://reactjs.org/' target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faReact} /> React</a>

            <a href='https://aws.amazon.com/s3/' target='_blank' rel="noreferrer" >  <FontAwesomeIcon icon={faAws} /> AWS S3</a>
            <a href='https://aws.amazon.com/cloudfront/' target='_blank' rel="noreferrer" >  <FontAwesomeIcon icon={faAws} /> AWS Cloud Front</a>
            <a href='https://www.figma.com/' target='_blank' rel="noreferrer" >           <FontAwesomeIcon icon={faFigma} /> Figma</a>

          </div>
          <div className='footer-link-items'>
            <p><strong>Social Media</strong></p>
            <a href='https://www.instagram.com/hammer_7517/' target='_blank' rel="noreferrer" >  <FontAwesomeIcon icon={faInstagramSquare} /> Instagram</a>
            <a href='https://www.facebook.com/storag.peng.3/' target='_blank' rel="noreferrer">  <FontAwesomeIcon icon={faFacebookSquare} /> Facebook</a>
            <a href='https://www.youtube.com/channel/UC0njNRoqhhi-6ISfD0_lOJQ/about' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faYoutubeSquare} /> YouTube</a>

            <a href='https://twitter.com/HammerXu1' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faTwitterSquare} /> Twitter</a>


          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>Peng Xu © 2022</small>
        </div>
      </section >
    </div >
  );
}

export default Footer;
