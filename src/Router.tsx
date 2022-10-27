import { Route, Routes, redirect } from 'react-router-dom'
import { Dashboard } from './Pages/Dashboard'
import { Settings } from './Pages/Dashboard/Settings'
import { Notes } from './Pages/Dashboard/Notes'
import { Shop } from './Pages/Dashboard/Shop'
import { Login } from './Pages/Login'
import { Home } from './Pages/Dashboard/Home'


export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='home' element={<Home />} />
        <Route path='notes' element={<Notes />} />
        <Route path='pro' element={<Shop />} />
        <Route path='shop' element={<Shop />} />
        <Route path='settings' element={<Settings />} />
      </Route>

      <Route path='*' element={<div><h2>Nothing here...</h2></div>} />

    </Routes>
  )
}
