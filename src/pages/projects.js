import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Projects, Algolia } from '../components'

const ProjectsPage = ({
  data: {
    allAirtable: { nodes: projects },
  },
}) => {
  return (
    <Wrapper>
      <Layout>
        <Projects projects={projects} title="our projects" page />
        <Algolia />
      </Layout>
    </Wrapper>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        id
        data {
          name
          type
          date
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  }
`

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`

export default ProjectsPage
