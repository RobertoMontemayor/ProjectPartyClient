import React, { useContext, useState, ReactNode } from 'react'
const AgeContext = React.createContext<any>({})
interface Props {
    children?: ReactNode
}
const AgeContextProvider = ({ children, ...props }: Props) => {
    const [Age, setAge] = useState('')
    return (
        <AgeContext.Provider value={{ Age, setAge }}>
            {children}
        </AgeContext.Provider>
    )
}
export const useAgeContext = () => useContext(AgeContext)
export { AgeContextProvider, AgeContext }
