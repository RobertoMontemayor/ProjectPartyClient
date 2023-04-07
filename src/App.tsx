import './App.css'
import React, { useState } from 'react'

import * as Contexts from './contexts'
interface Props {
    children: React.ReactNode
}
const App: React.FC<Props> = ({ children }) => {
    const contexts = Object.keys(Contexts).reduce((element, key) => {
        const ContextProvider = Contexts[key]
        return <ContextProvider>{element}</ContextProvider>
    }, children)
    return <>{contexts}</>
}

export default App
