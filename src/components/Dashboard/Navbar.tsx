import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className=" fixed left-0
      w-[4.5rem] h-full bg-gray-800 px-6 pb-8 pt-24
      drop-shadow-[.15rem_.15rem_.15rem_rgba(0,0,0,0.25)]
      flex flex-col shrink-0 items-center justify-between 
      "
    >
      <img src="/src/assets/Logo.png" alt=""
        className="absolute top-6 left-4 w-52"
      />
      <div className="flex flex-col items-center justify-center gap-12">
        <Link to={'home'}>
          <img src="/src/assets/icons/Dashboard/Home.svg" alt="" className="w-6 hover:animate-wiggle" />
        </Link>
        <Link to={'notes'}>
          <img src="/src/assets/icons/Dashboard/Notes.svg" alt="" className="w-6 hover:animate-wiggle" />
        </Link>
        <Link to={'pro'}>
          <img src="/src/assets/icons/Dashboard/PRO.svg" alt="" className="w-6 hover:animate-wiggle" />
        </Link>
        <Link to={'shop'}>
          <img src="/src/assets/icons/Dashboard/Shop.svg" alt="" className="w-6 hover:animate-wiggle" />
        </Link>
        <Link to={'settings'}>
          <img src="/src/assets/icons/Dashboard/Config.svg" alt="" className="w-6 hover:animate-wiggle" />
        </Link>

      </div>
      <Link to={'/'}>
        <img src="/src/assets/icons/Dashboard/Exit.svg" alt="" className="w-6 hover:animate-wiggle" />
      </Link>
    </nav>
  )
}
