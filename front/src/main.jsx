import React from 'react'
import ReactDOM from 'react-dom/client'
import Styled from './styles'
import "./main.css";
import { Route, Redirect, Switch } from 'wouter'
//import App from './App.jsx'
import Provider from './context/Provider'
import Inicio from './pages/Inicio'
import Register from './pages/register'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import CreateEvent from './pages/createEvent'
import UnirseEvento from './pages/unirseEvento'
import DetallesEvento from './pages/detallesEvento'
import ListaInvitados from './pages/listaInvitados'
import Navbar from './components/Navbar';
const Container = () => {
  return (
    <Provider>
      <Styled.Wrapper>
        <Navbar/>
        <Switch>
          <Route path='/' component={Inicio} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/createEvent' component={CreateEvent} />
          <Route path='/unirseEvento' component={UnirseEvento} />
          <Route path='/detalles/:id' component={DetallesEvento} />
          <Route path='/lista/:id' component={ListaInvitados} />
          <Redirect to='/'/>
        </Switch>
      </Styled.Wrapper>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
)
