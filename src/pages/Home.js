import React from 'react';


export default function Home() {
  return (
    <div className='homePage main'>
      <div className='homePage--content'>
        <div className='homePage--content-text'>
          <h2>Hello, I'm Laïs Ben Belgacem</h2>
          <h3>Developer</h3>
          <h2>From Belgium</h2>
          <p>
            Back-end web developer. Coffee-fueled coder and pizza powered problem solver.
          </p>
        </div>
        <button className='homePage--content-downloadBtn'>
          <a href='./media/CV_Laïs-Ben-Belgacem.pdf' download='Laïs_Ben_Belgacem_Resume' className=''>Resume</a>
        </button>
      </div>
        <img src='./' alt='pfp'/>
    </div>
  )
}
