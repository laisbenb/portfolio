import { gql } from '@apollo/client';

export const GET_SKILLS = gql`
    query GetSkills {
        technieks {
            title
            image {
              url
            }
          }
    }
`;

export const GET_TOOLS = gql`
query GetTools {
    tools {
      title
      image {
        url
      }
    }
  }
`;