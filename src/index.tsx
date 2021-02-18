import React from 'react'
import ReactDOM from 'react-dom'
import { pdfjs } from 'react-pdf'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app'
import './assets/styles/main.css'
import { ResourceProvider } from './hooks/useResourceContext'
import reportWebVitals from './reportWebVitals'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

ReactDOM.render(
  <React.StrictMode>
    <ResourceProvider>
      <Router>
        <App />
      </Router>
    </ResourceProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
