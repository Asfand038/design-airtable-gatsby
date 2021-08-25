const airtableQuery = `
  {
    allAirtable(filter: { table: { eq: "Projects" } }) {
      nodes {
        id
        data {
          name
          type
          date
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

const pageToAlgoliaRecord = ({ id, data: { name, type, date, image } }) => ({
  objectID: id,
  name,
  type,
  date,
  image: { ...image.localFiles[0].childImageSharp.gatsbyImageData },
})

const queries = [
  {
    query: airtableQuery,
    transformer: ({
      data: {
        allAirtable: { nodes },
      },
    }) => nodes.map(pageToAlgoliaRecord),
  },
]

module.exports = queries
