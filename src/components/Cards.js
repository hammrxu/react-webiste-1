import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='card_bg'>
      <div className="divider-card-01"></div>
      <div className='cards__container my-container'>
        <div className='cards'>
          <h1 className='h1-title'>Other Projects!</h1>
          <div className='card-extra-space'></div>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='https://hammer-resume-1.s3.amazonaws.com/cover_images/other_work_images/card01.jpg'
                text='Scheduler (MLH Backyard Hacks III)'
                label='JQeury / PHP'
                path='/works/n/01'
                devpost='https://devpost.com/software/churchscheduler'
                web='http://church-scheduler.lovestoblog.com/pages/index.php'
              />
              <CardItem
                src='https://hammer-resume-1.s3.amazonaws.com/cover_images/other_work_images/card01.jpg'
                text='Lisp Interpreter (MLH Hacky Birthday MLH! 2022)'
                label='Python / Lisp'
                path='/works/n/02'
                devpost='https://devpost.com/software/simple-lisp-interpreter-in-python'
              />
              {/* <CardItem
                src='./images/img-6.jpg'
                text='MS excel macros helping real Shopify business shortern data process'
                label='VBA/MSExcel'
                path='/'
              /> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="divider-card-01"></div>
    </div>
  );
}

export default Cards;
