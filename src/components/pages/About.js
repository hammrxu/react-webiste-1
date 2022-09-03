import React from 'react';
import '../../App.css';
import './About.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faShoePrints, faGamepad, faLaugh } from '@fortawesome/free-solid-svg-icons';
import SkillBoxA from '../SkillBoxA';
import SkillBoxB from '../SkillBoxB';
import SkillBoxC from '../SkillBoxC';
import Update from '../Update';

export default function About() {
  return (
    <>
      <Update />
      <div className='about-wrap'>
        <div className='divider-about-1'></div>
        <div className='about-area'>
          <div className='about-left-wrap'>
            <div className='about-heading'>
              <h1 className='about-heading-text'>About</h1>
            </div>
            <div className='divider-about-2'></div>
            <div className='my-image-wrap'>
              <FontAwesomeIcon className='about-icon about-icon-faLaugh' icon={faLaugh} />
              <img className='my-image' src='./images/3-blue-mt.jpg' alt='my img'></img>
            </div>


          </div>

          <div className='about-area-wrap'>
            <div className='about-1 about'>

              <h2 className='about-title-1 about-title' >
                <span class="anchor" id="anchor-background" />
                Background
              </h2>
              <FontAwesomeIcon className='about-icon about-icon-faGraduationCap' icon={faGraduationCap} /><p className='about-content-1 about-content'>My name is Peng Xu, or a preffered nickname Hammer Xu. I graduated in 2021 from York University with a Hon. Bachlor degree in Information Technology.</p>
            </div>

            <div className='about-2 about'>

              <h2 className='about-title-2 about-title' >
                <span class="anchor" id="anchor-career" />
                Career
              </h2>
              <FontAwesomeIcon className='about-icon about-icon-faShoePrints' icon={faShoePrints} /><p className='about-content-2 about-content'>With my practical experiences ranging across many different fields, I hope to one day dive into <strong>DevOps</strong>! Feel free to reach out and get connected, I love to meet new people!</p>
            </div>


          </div>


        </div>
        <div className='challenge-taking about-4 about'>
          <h2 className='about-title-4 about-title'>
            <span class="anchor" id="anchor-challenges" />
            Challenges Taking
          </h2>
          <FontAwesomeIcon className='about-icon about-icon-4' icon={faGamepad} /><p className='about-content-4 about-content'>
            <a href='https://leetcode.com/'>LeetCode </a>
            <a href='https://flukeout.github.io/'>CSS Diner </a>
            <a href='https://cssbattle.dev/'>CSS Battle </a>
          </p>
        </div>
        <div className='games about-3 about'>
          <h2 className='about-title-3 about-title'>*And Favor Games</h2>
          <FontAwesomeIcon className='about-icon about-icon-3' icon={faGamepad} /><div className='about-content-3 about-content'><strong>Now-Playing: </strong>
            PC
            (
            <a href='https://genshin.hoyoverse.com/en/'>Genshine Impact </a>,<a href='https://osu.ppy.sh/home'>Osu! </a>,
            <a href='https://www.ea.com/en-ca/games/library/pc-download?/filter/franchise=battlefield'>Battlefield 1 </a>
            ),
            <p></p>
            <p>!!! Loved Duo/Party Games !!!</p>
            <p>
              xbox:(
              <a href='https://store.steampowered.com/search/?term=overcooked'>Overcooked series </a>,
              <a href='https://store.steampowered.com/app/400080/Out_of_Space/'>Out Of Space </a>
              )</p>
            <p>
              Steam:(
              <a href='https://store.steampowered.com/app/996770/Moving_Out/'>Moving Out </a>,
              <a href='https://store.steampowered.com/app/1426210/It_Takes_Two/'>It Takes Two </a>,
              )</p>
            <p>
              Switch:(
              <a href='storepickupamai.myshopify.com'>Super Mario Party™ </a>,
              <a href='https://ringfitadventure.nintendo.com/'>Ring Fit Adventure™ </a>,
              <a href='https://www.nintendo.com/en-ca/store/products/clubhouse-games-51-worldwide-classics-switch/'>Clubhouse Games™: 51 Worldwide Classics </a>,
              )
            </p>
          </div>
        </div>
        <div className='skill-box about'>
          <h2 className='about-title'>
            <span class="anchor" id="anchor-skills" />
            Skills-Box
          </h2>
          <div className='skillbox-wrap'>
            <SkillBoxA />
            <SkillBoxB />
            <SkillBoxC />
          </div>
        </div>
      </div>
    </>
  );
}


