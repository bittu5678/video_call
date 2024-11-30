import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthcontextProvider } from './context/AuthContext.jsx'
import { SocketContext } from './context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthcontextProvider> 
         <App />
    </AuthcontextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
