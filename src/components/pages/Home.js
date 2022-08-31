import React from 'react';
import '../../App.css';
import Update from '../Update';
import Cards from '../Cards';
import Brief from '../Brief';
import Books from '../Books';


function Home() {
  return (
    <>
      <Update />
      <Brief />
      <Cards />
      <Books />
    </>
  );
}

export default Home;
