import { gql } from '@apollo/client';

export const GET_SKILLS = gql`
    query Skills {
        skills {
            skillTitle
            skillImage {
              url
            }
          }
    }
`;

export const GET_TOOLS = gql`
    query Tools {
        tools {
          title
          image {
            url
          }
        }
      }
`;

export const GET_PROJECTS = gql`
  query Projects {
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
      date
    }
  }
`;