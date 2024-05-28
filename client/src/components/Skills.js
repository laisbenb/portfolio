import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SKILLS } from '../graphql/queries';

export default function Skills() {
  const { loading, error, data } = useQuery(GET_SKILLS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='aboutPage--skills-skillbox'>
      {data.skills.map((skill) => (
        <div key={skill.title} className='aboutPage--skills-skillCard'>
          <img src={skill.image} alt={skill.title} />
          <p>{skill.title}</p>
        </div>
      ))}
    </div>
  );
}