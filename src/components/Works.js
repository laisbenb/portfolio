import React from 'react';
import { projects } from '../data/works';
import {ReactComponent as GithubLogo} from '../assets/github_icon.svg';
import {ReactComponent as LinkIcon} from '../assets/link_icon.svg';

export default function Works() {
  return (
    <div className='portfolioPage--projects'>
        {
            projects.map((project) => (
                <div className='portfolioPage--projects-projectCard'>
                    <img src={project.image} alt='project' />
                    <div className='title-links'>
                        <h3 className='blueText'>{project.title}</h3>
                        <div className='portfolioPage--projects-projectCard-links'>
                            <a href={project.links.github} rel="noreferrer" target='_blank'><GithubLogo className='social-logo'/></a>
                            {
                                project.links.live && (
                                    <a href={project.links.live} rel="noreferrer" target='_blank'><LinkIcon className='social-logo'/></a>
                                )
                            }
                        </div>
                    </div>
                    <p>{project.description}</p>
                </div>
            ))
        }
    </div>
  );
};