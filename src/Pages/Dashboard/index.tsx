import { Outlet } from 'react-router-dom'
import { DashboardHeader } from '../../components/Dashboard/DashboardHeader'
import { Navbar } from '../../components/Dashboard/Navbar'

export function Dashboard() {
  return (
    <div className='
      w-screen h-screen
      bg-background-polygons bg-no-repeat bg-cover bg-center
      flex flex-col
      '
    >
      <DashboardHeader userName={'userName'} />

      <div className=' w-full h-full p-6 pt-[4.5rem]'>
        <div className=" m-auto
          w-full max-w-[1600px] h-full rounded-xl overflow-hidden
          flex items-center justify-center gap-6 overflow-x-auto
          bg-gradient-to-br from-white-opac-35 to-gray-opac-35 
          bg-opacity-30 backdrop-blur-md border border-gray-400
          shadow-[0_0_6px_rgba(0,0,0,0.35)]
          "
        >
          <Navbar />
          <div className='w-full h-full py-6 ml-24 mr-4 
            overflow-x-auto '>
            <Outlet />
          </div>
        </div>
      </div>
    </div >
  )
}
