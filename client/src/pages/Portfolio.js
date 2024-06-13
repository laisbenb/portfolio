import React from 'react';
import Works from '../components/Works';

export default function Portfolio() {
  return (
    <div className='main portfolioPage'>
      <h2>Some of <span className='blueText'>my works</span></h2>
      <p>Here are some of the projects I've worked on.</p>
      <Works />
    </div>
  );
};
