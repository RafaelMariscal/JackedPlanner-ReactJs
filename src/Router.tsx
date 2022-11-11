import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { Dashboard } from './Pages/Dashboard'
import { Settings } from './Pages/Dashboard/Settings'
import { Notes } from './Pages/Dashboard/Notes'
import { Shop } from './Pages/Dashboard/Shop'
import { Login } from './Pages/Login'
import { Home } from './Pages/Dashboard/Home'
import { NotFound } from './Pages/NotFound'
import { ProSection } from './Pages/Dashboard/ProSection'
import { USER_KEY, USER_TOKEN } from './contexts/userContext/provider'
import { useEffect } from 'react'
import { useUserContext } from './contexts/userContext/hook'

const PrivateRoutes = () => {
  const user = sessionStorage.getItem(USER_KEY);
  const token = sessionStorage.getItem(USER_TOKEN);
  return !!user && !!token ? <Dashboard /> : <Navigate to={'/'} />
}

export function Router() {
  let navigate = useNavigate()
  const { UserLogged } = useUserContext()

  useEffect(() => {
    const sessionStorageAuth = () => {
      const sessionToken = sessionStorage.getItem(USER_TOKEN);
      const sessionUser = sessionStorage.getItem(USER_KEY);
      if (sessionToken && sessionUser) {
        navigate('/dashboard')
      }
    }
    sessionStorageAuth();
  }, [UserLogged])

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<PrivateRoutes />}>
        <Route path='' element={<Home />} />
        <Route path='notes' element={<Notes />} />
        <Route path='pro' element={<ProSection />} />
        <Route path='shop' element={<Shop />} />
        <Route path='settings' element={<Settings />} />
      </Route>

      <Route path='*' element={<NotFound />} />

    </Routes>
  )
}