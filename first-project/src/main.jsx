import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './courseComponents/App'
import NoteApp from './noteComponent/NoteApp'

import '/public/style.css'; // Import your styles
import Accordion from './accordionComponent/Accordion';
import RickApp from './rickComponent/RickApp';
import Stopwatch from './timer/Stopwatch';
// import "../public/style.css"





ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <div>
    {/* <App /> */}
    {/* <NoteApp /> */}
    {/* <Accordion /> */}
    {/* < RickApp /> */}

    <Stopwatch />

  </div>
  // </React.StrictMode>,
)
