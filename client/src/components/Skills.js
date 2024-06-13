import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SKILLS } from '../graphql/queries';

export default function Skills() {
  const { loading, error, data } = useQuery(GET_SKILLS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log('Data logged: ',  data);

  return (
    <div className='aboutPage--skills-skillbox'>
      {data.skills.map((skill) => (
        <div key={skill.skillTitle} className='aboutPage--skills-skillCard'>
          <img src={skill.skillImage.url} alt={skill.skillTitle} />
          <p>{skill.skillTitle}</p>
        </div>
      ))}
    </div>
  );
};