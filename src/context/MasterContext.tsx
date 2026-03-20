import React from 'react'
import { createContext } from 'vm'
//Context = cara share data ke banyak komponen tanpa props

export const MasterContext = createContext()

const MainContext = () => {

    
  const contextValue = {
      
  }
  return (
      <MasterContext.Provider value={contextValue}>
          
      </MasterContext.Provider>
     
  )
}

export default MainContext