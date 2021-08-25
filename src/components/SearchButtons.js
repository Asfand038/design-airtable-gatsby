import React, { useState } from 'react'
import styled from 'styled-components'

const SearchButtons = ({ projects, setProjects, setBackToAll }) => {
  const [index, setIndex] = useState(0)

  const types = ['all', ...new Set(projects.map(({ data: { type } }) => type))]

  const handleSearch = (index, type) => {
    setIndex(index)
    if (type === 'all') {
      setBackToAll()
      return
    }
    const filteredProjects = projects.filter(
      project => type === project.data.type
    )
    setProjects(filteredProjects)
  }

  return (
    <Wrapper>
      {types.map((type, typeIndex) => (
        <button
          key={typeIndex}
          onClick={() => handleSearch(typeIndex, type)}
          className={typeIndex === index ? 'active' : undefined}
        >
          {type}
        </button>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  margin-bottom: 0;
  justify-content: center;
  flex-wrap: wrap;
  button {
    margin: 0.5rem;
    text-transform: capitalize;
    background: transparent;
    border: transparent;
    color: var(--clr-grey-6);
    letter-spacing: var(--spacing);
    font-size: 1rem;
    padding: 0.25rem;
    cursor: pointer;
    outline: none;
    transition: var(--transition);
  }
  button:hover,
  button.active {
    box-shadow: 0px 1.5px 0 var(--clr-grey-6);
  }
`
export default SearchButtons
