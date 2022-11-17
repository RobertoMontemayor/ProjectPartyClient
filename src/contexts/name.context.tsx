import React, { useContext, useState, ReactNode } from 'react'
const NameContext = React.createContext<any>({})

const NameContextProvider = ({ children }) => {
    const [name, setName] = useState('')
    return (
        <NameContext.Provider value={{ name, setName }}>
            {children}
        </NameContext.Provider>
    )
}
export const useNameContext = () => useContext(NameContext)
export { NameContextProvider, NameContext }
