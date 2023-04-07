import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@mui/system'
import { theme } from './assets/theme'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Root from './components/root.component'
import { Products } from './components/products.component'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <App>
        <React.StrictMode>
            <CssBaseline>
                <BrowserRouter>
                    <Root />
                    <Routes>
                        <Route path="/Products" element={<Products />}></Route>
                    </Routes>
                </BrowserRouter>
            </CssBaseline>
        </React.StrictMode>
    </App>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
