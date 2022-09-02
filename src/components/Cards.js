import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Other Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/img-5.jpg'
              text='Scheduler (MLH Backyard Hacks III)'
              label='JQeury / PHP'
              path='/'
              devpost='https://devpost.com/software/churchscheduler'
              web='http://church-scheduler.lovestoblog.com/pages/index.php'
            />
            <CardItem
              src='./images/img-5.jpg'
              text='Lisp Interpreter (MLH Hacky Birthday MLH! 2022)'
              label='Python / Lisp'
              path='/'
              devpost='https://devpost.com/software/simple-lisp-interpreter-in-python'
            />
            <CardItem
              src='./images/img-6.jpg'
              text='MS excel macros helping real Shopify business shortern data process'
              label='VBA / MS Excel'
              path='/'
            />
          </ul>
          {/* <ul className='cards__items'>


            <CardItem
              src='./images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/resume'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
