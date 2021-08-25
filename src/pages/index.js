import React from 'react'
import { graphql } from 'gatsby'

import {
  Layout,
  Hero,
  About,
  Survey,
  Slider,
  GridProjects,
} from '../components'

const HomePage = ({
  data: {
    allAirtable: { nodes: projects },
    customers: { nodes: customers },
  },
}) => {
  return (
    <Layout>
      <Hero />
      <About />
      <GridProjects projects={projects} title="latest projects" />
      <Survey />
      <Slider customers={customers} />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      limit: 4
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
    customers: allAirtable(filter: { table: { eq: "Customers" } }) {
      nodes {
        id
        data {
          quote
          name
          title
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  placeholder: TRACED_SVG
                  height: 150
                  width: 150
                )
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage
