import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NoteApp from './noteComponent/NoteApp'

import '/public/style.css'; // Import your styles
// import "../public/style.css"





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <NoteApp />

  </React.StrictMode>,
)
