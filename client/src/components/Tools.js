import React from 'react';
import { GET_TOOLS } from '../graphql/queries';
import { useQuery } from '@apollo/client';

export default function Tools() {
  const { loading, error, data } = useQuery(GET_TOOLS);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log('Data logged: ',  data);

  return (
    <div className='aboutPage--skills-skillbox'>
        {
            data.tools.map((tool, i) => (
                <div className='aboutPage--skills-skillCard' key={i}>
                    <img src={tool.image.url} alt={tool.title} /> 
                    <p>{tool.title}</p>
                </div>
            ))
        }
    </div>
  )
}