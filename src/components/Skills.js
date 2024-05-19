import React from 'react';
import {skills} from '../data/skills';

export default function Skills() {
  return (
    <div className='aboutPage--skills-skillbox'>
        {
            skills.map((skill) => (
                <div  className='aboutPage--skills-skillCard'>
                    <img src={skill.image} alt={skill.title} /> 
                    <p>{skill.title}</p>
                </div>
            ))
        }
    </div>
  );
};