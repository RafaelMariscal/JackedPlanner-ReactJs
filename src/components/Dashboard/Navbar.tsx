import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext/hook";
import Logo from "../../assets/icons/Logo.png";
import HomeIcon from "../../assets/icons/Home.svg";
import NotesIcon from "../../assets/icons/Notes.svg";
import ProIcon from "../../assets/icons/PRO.svg";
import ShopIcon from "../../assets/icons/Shop.svg";
import ExitIcon from "../../assets/icons/Exit.svg";

export function Navbar() {
  const { signOutTrigger } = useUserContext();

  return (
    <nav className=" fixed left-0
      w-[4.5rem] h-full bg-gray-800 px-6 pb-8 pt-24
      drop-shadow-[.15rem_.15rem_.15rem_rgba(0,0,0,0.25)]
      flex flex-col items-center justify-between
      "
    >
      <img src={Logo} alt=""
        className="absolute top-6 left-4 w-52"
      />
      <div className="flex flex-col items-center justify-center gap-12">
        <Link to={""}>
          <img src={HomeIcon} alt="" className="w-6 hover:animate-wiggle" />
        </Link>
        <Link to={"notes"}>
          <img src={NotesIcon} alt="" className="w-6 hover:animate-wiggle" />
        </Link>
        <Link to={"settings"}>
          <img src="/src/assets/icons/Dashboard/Config.svg" alt="" className="w-6 hover:animate-wiggle" />
        </Link>
        <Link to={"pro"}>
          <img src={ProIcon} alt="" className="w-6 hover:animate-wiggle" />
        </Link>
        <Link to={"shop"}>
          <img src={ShopIcon} alt="" className="w-6 hover:animate-wiggle" />
        </Link>

      </div>
      <div onClick={signOutTrigger}>
        <img src={ExitIcon} alt="" className="w-6 hover:animate-wiggle" />
      </div>
    </nav>
  );
}
