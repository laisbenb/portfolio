import React from 'react';
import DownloadIcon from '../assets/download_icon.svg';
import {ReactComponent as GithubLogo} from '../assets/github_icon.svg';
import {ReactComponent as LinkedInLogo} from '../assets/linkedin_icon.svg';

export default function Home() {
  return (
    <div className='homePage main'>
      <div className='homePage--content'>
        <div className='homePage--content-text'>
          <h2>Hello, I'm <span className='blueText'>Laïs Ben Belgacem</span></h2>
          <h3>Developer</h3>
          <h2>From <span className='blueText'>Belgium</span></h2>
          <p>
            Back-end web developer. Comfortable coffee <span className='blueText'>coder</span> and pizza powered <span className='blueText'>problem solver</span>.
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
        <img className='homePage-pfp' src='./media/images/homepage_picture.png' alt='pfp'/>
    </div>
  );
};
