import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/index.css'
import Layout from './Components/Layout.jsx'
import Option from './Components/Option.jsx'
// import Show from './Components/Header/Show.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
    <App />
    </Layout>
    {/* <Option/> */}
  </React.StrictMode>,
)
