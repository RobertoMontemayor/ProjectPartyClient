import React, { useContext, useState, ReactNode } from 'react'
const AgeContext = React.createContext<any>({})
interface Props {
    children?: ReactNode
}
const AgeContextProvider = ({ children, ...props }: Props) => {
    const [age, setAge] = useState('')
    return (
        <AgeContext.Provider value={{ age, setAge }}>
            {children}
        </AgeContext.Provider>
    )
}
export const useAgeContext = () => useContext(AgeContext)
export { AgeContextProvider, AgeContext }
