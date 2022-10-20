import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Login } from './Pages/Login'
import './styles/global.css'

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}