import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route,Redirect,Switch} from 'wouter'
//import App from './App.jsx'
const Container = ()=> {
  return (
    <h1>Hola Mundo</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
)
