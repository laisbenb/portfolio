import React from 'react';
import {tools} from '../data/tools';

export default function Tools() {
  return (
    <div className='aboutPage--skills-skillbox'>
        {
            tools.map((tool) => (
                <div className='aboutPage--skills-skillCard'>
                    <img src={tool.image} alt={tool.title} /> 
                    <p>{tool.title}</p>
                </div>
            ))
        }
    </div>
  )
}