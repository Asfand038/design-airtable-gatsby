import React, { createContext, useState } from 'react'
import sublinks from '../constants/links'

const GatsbyContext = createContext()

const ContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const showSidebar = () => setIsSidebarOpen(true)
  const hideSidebar = () => setIsSidebarOpen(false)

  const value = {
    isSidebarOpen,
    showSidebar,
    hideSidebar,
    links: sublinks,
  }

  return (
    <GatsbyContext.Provider value={value}>{children}</GatsbyContext.Provider>
  )
}

export { GatsbyContext, ContextProvider }
