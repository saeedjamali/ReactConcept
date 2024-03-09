import React from 'react'
import ReactDOM from 'react-dom/client'
import '/public/style.css'; // Import your styles
import { BrowserRouter } from 'react-router-dom';
import App from './pages/App';


ReactDOM.createRoot(document.getElementById('root')).render(


  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>


)
