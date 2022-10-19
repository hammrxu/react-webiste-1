import React from 'react';
import '../../App.css';
import Update from '../Update';
import Cards from '../Cards';
import Brief from '../Brief';
import FeaturedSection from '../FeaturedSection';
import RestAPI from '../RestAPI';

function Home() {
  return (
    <>
      <Update />
      <Brief />
      <FeaturedSection />
      <Cards />
      <RestAPI />
    </>
  );
}

export default Home;
