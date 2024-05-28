import { gql } from '@apollo/client';

export const GET_SKILLS = gql`
    query GetSkills {
        skills {
            skillTitle
            skillImage {
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

export const GET_PROJECTS = gql`
    query MyQuery {
        projects {
          projectTitle
          projectDescription
          githubUrl
          liveUrl
          skills {
            skillTitle
            skillImage {
              url
            }
          }
          projectImage {
            url
          }
        }
      }
`;