import React from 'react';
import Skills from '../components/Skills';
import Tools from '../components/Tools';

export default function About() {
  return (
    <div className='aboutPage main'>
      <div className='aboutPage--content'>
        <h2><span className='blueText'>About</span> me</h2>
        <p>
          Hello! My name is Lais Ben Belgacem, I develop web, mobile and desktop applications. 
          I love to make the web more to the open world. I am still a student computer science and programming at ArteveldeHogeschool at Ghent, Belgium. 
          I am available for any kind of job that suits my interests.
          <br></br>
          When I'm not coding I like to spent my time playing videogames, watching anime or sharing moments with my friends and family.
        </p>
      </div>
      <div className='aboutPage--skills'>
        <h2>My <span className='blueText'>skills</span></h2>
        <Skills />
        <h2>My <span className='blueText'>tools</span></h2>
        <Tools />
      </div>
    </div>
  );
};
