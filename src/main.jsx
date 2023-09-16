import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container mx-auto'>
      <h1 className=' items-center  text-center py-8 text-4xl font-bold '>Course Registration</h1>
      <App />
    </div>
  </React.StrictMode>,
)
