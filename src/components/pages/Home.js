import React from 'react';
import '../../App.css';
import Update from '../Update';
import Cards from '../Cards';
import Brief from '../Brief';


function Home() {
  return (
    <>
      <Update />
      <Brief />
      <Cards />
    </>
  );
}

export default Home;
