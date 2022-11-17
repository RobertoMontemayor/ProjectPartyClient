import './App.css'
import React, { useState } from 'react'
import { TextField } from '@mui/material'
import * as Contexts from './contexts'
interface Props {
    children: React.ReactNode
}
// const App: React.FC<Props> = ({ children }) => {
//     const contexts = Object.keys(Contexts).reduce((element, key) => {
//         const ContextProvider = Contexts
//         return <ContextProvider>{element}</ContextProvider>
//     }, children)
//     return <>{contexts}</>
// }
const App: React.FC<Props> = ({ children }) => {
    const [name, setName] = useState('')
    const handleChange = (e: any) => {
        console.log('lo que se4a')
        Object.keys(Contexts).reduce((child, key) => {
            console.log('here')
            console.log(child, key, Contexts[key])
            return child
        }, 'element')
    }
    const handleTextChange = (e: any) => {
        console.log(e.target.value)
        setName(e.target.value)
    }
    return (
        <>
            <div>{name}</div>
            <TextField onChange={handleTextChange}></TextField>
            <button onClick={handleChange}>Test</button>
        </>
    )
}
export default App
