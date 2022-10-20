import { Route, Routes, redirect } from 'react-router-dom'
import { Dashboard } from './Pages/Dashboard'
import { Settings } from './Pages/Dashboard/Settings'
import { Notes } from './Pages/Dashboard/Notes'
import { Shop } from './Pages/Dashboard/Shop'
import { Login } from './Pages/Login'


export function Router() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='notes' element={<Notes />} />
        <Route path='shop' element={<Shop />} />
        <Route path='settings' element={<Settings />} />
      </Route>

    </Routes>
  )
}
