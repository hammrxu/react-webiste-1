import React from 'react';
import '../../App.css';
import Update from '../Update';
import Cards from '../Cards';
import Brief from '../Brief';
import FeaturedSection from '../FeaturedSection';


function Home() {
  return (
    <>
      <Update />
      <Brief />
      <FeaturedSection />
      <Cards />

    </>
  );
}

export default Home;
