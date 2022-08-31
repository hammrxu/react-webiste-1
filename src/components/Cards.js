import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Featured Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/img-9.jpg'
              text='Scheduler (MLH Backyard Hacks III)'
              label='JQeury/PHP'
              path='/project/project01'
              devpost='https://devpost.com/software/churchscheduler'
              web='http://church-scheduler.lovestoblog.com/pages/index.php'
            />
            <CardItem
              src='./images/img-9.jpg'
              text='Lisp Interpreter (MLH Hacky Birthday MLH! 2022)'
              label='Python/Lisp'
              path='/project/project02'
              devpost='https://devpost.com/software/simple-lisp-interpreter-in-python'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./images/img-3.jpg'
              text='WordPress Web Volunteer'
              label='WordPress'
              path='/about'
            />
            <CardItem
              src='./images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='./images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/resume'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
