import React from 'react';
import {ReactComponent as GithubLogo} from '../assets/github_icon.svg';
import {ReactComponent as LinkedInLogo} from '../assets/linkedin_icon.svg';
import DownloadIcon from '../assets/download_icon.svg';

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
        <div  className='homePage--content-links'>
          <button className='homePage--content-downloadBtn'>
            <a href='./media/CV_Laïs-Ben-Belgacem.pdf' download='Laïs_Ben_Belgacem_Resume' className=''>Resume <img src={DownloadIcon} alt='download' /></a>
          </button>
          <a href='https://github.com/laisbenb' rel="noreferrer" target='_blank'>
            <GithubLogo className='social-logo'/>
          </a>
          <a href='https://www.linkedin.com/in/lais-ben-belgacem-0672b72b3/' rel="noreferrer" target='_blank'>  
            <LinkedInLogo className='social-logo'/>
          </a>
        </div>
      </div>
        <img src='./' alt='pfp'/>
    </div>
  )
}
