import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@mui/system'
import { theme } from './assets/theme'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <App>
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <BrowserRouter></BrowserRouter>
                </CssBaseline>
            </ThemeProvider>
        </React.StrictMode>
    </App>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
