import React from 'react'
import ReactDOM from 'react-dom/client'


// Global styles (for background)
import '../styles/index.css'

// App component
import App from './components/App'; // Import App instead of Home

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>,
)