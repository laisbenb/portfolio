import React from 'react';
import {ReactComponent as GithubLogo} from '../assets/github_icon.svg';
import {ReactComponent as LinkIcon} from '../assets/link_icon.svg';
import { GET_PROJECTS } from '../graphql/queries';
import { useQuery } from '@apollo/client';

export default function Works() {
    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='portfolioPage--projects'>
        {
            data.projects.map((project) => (
                <div className='portfolioPage--projects-projectCard'>
                    <img className='example' src={project.projectImage.url} alt='project' />
                    <div className='title-links'>
                        <h3 className='blueText'>{project.projectTitle}</h3>
                        <div className='portfolioPage--projects-projectCard-links'>
                            <a href={project.githubUrl} rel="noreferrer" target='_blank'><GithubLogo className='social-logo'/></a>
                            {
                                project.liveUrl && (
                                    <a href={project.liveUrl} rel="noreferrer" target='_blank'><LinkIcon className='social-logo'/></a>
                                )
                            }
                        </div>
                    </div>
                    <div className='portfolioPage--projects-projectCard__languages'>
                        {
                           project.skills.map((skill) => (
                            <div className={`${skill.skillTitle} language--card`}>
                                <img src={skill.skillImage.url} alt={skill.skillTitle} />
                                <p>{skill.skillTitle}</p>
                            </div>
                           ))
                        }
                    </div>
                    <p>{project.projectDescription}</p>
                </div>
            ))
        }
    </div>
  );
};