import { Outlet } from 'react-router-dom'
import { Header } from '../../components/LoginPage/Header'
export function Dashboard() {
  return (
    <div>
      <Header />

      <h1>Dashboard</h1>

      <Outlet />

    </div>
  )
}
