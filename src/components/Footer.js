import React from 'react';
import './Footer.css';
import { HashLink as Link } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAws, faFigma, faLinkedin, faGithubSquare, faYoutubeSquare, faDev, faInstagramSquare, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <p><strong>About</strong></p>
            <Link to='/about#anchor-background'>Background</Link>
            <Link to='/about#anchor-career'>Careers</Link>
            <Link to='/about/#anchor-challenges'>Challenges</Link>
            <Link to='/about/#anchor-skills'>Skills</Link>
            <a href={process.env.REACT_APP_MY_RESUME_LINK} target='_blank' rel="noreferrer" > RESUME</a>
          </div>
          <div className='footer-link-items'>
            <p><strong>Navigation</strong></p>
            <Link to='/' > Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/RESUME'>RESUME</Link>
          </div>

          <div className='footer-link-items'>
            <p><strong>My Links</strong></p>
            <a href={process.env.REACT_APP_MY_GITHUB_LINK} target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faGithubSquare} /> Github</a>
            <a href={process.env.REACT_APP_MY_LINKEDIN_LINK} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
            <a href={process.env.REACT_APP_MY_DEVPOST_LINK} target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faDev} /> DevPost</a>
          </div>
          <div className='footer-link-items'>
            <p><strong>This Site Built By</strong></p>
            <a href='https://aws.amazon.com/cloudfront/' target='_blank' rel="noreferrer" >  <FontAwesomeIcon icon={faAws} /> AWS Cloud Front</a>
            <a href='https://aws.amazon.com/s3/' target='_blank' rel="noreferrer" >  <FontAwesomeIcon icon={faAws} /> AWS S3</a>
            <a href='https://reactjs.org/' target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faReact} /> React</a>
            <a href='https://www.figma.com/' target='_blank' rel="noreferrer" >           <FontAwesomeIcon icon={faFigma} /> Figma</a>
          </div>
          <div className='footer-link-items'>
            <p><strong>Social Media</strong></p>
            <a href={process.env.REACT_APP_MY_INSTAGRAM_LINK} target='_blank' rel="noreferrer" >  <FontAwesomeIcon icon={faInstagramSquare} /> Instagram</a>
            <a href={process.env.REACT_APP_MY_FACEBOOK_LINK} target='_blank' rel="noreferrer">  <FontAwesomeIcon icon={faFacebookSquare} /> Facebook</a>
            <a href={process.env.REACT_APP_MY_YOUTUBE_LINK} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faYoutubeSquare} /> YouTube</a>
            <a href={process.env.REACT_APP_MY_TWITTER_LINK} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faTwitterSquare} /> Twitter</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>{process.env.REACT_APP_MY_NAME} © 2022</small>
        </div>
      </section >
    </div >

  );
}

export default Footer;
