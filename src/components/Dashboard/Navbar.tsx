import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext/hook";
import Logo from "../../assets/Logo.png";
import { HomeIcon } from "../../assets/icons/Dashboard/Home";
import { ConfigIcon } from "../../assets/icons/Dashboard/Config";
import { NotesIcon } from "../../assets/icons/Dashboard/Notes";
import { ProIcon } from "../../assets/icons/Dashboard/Pro";
import { ShopIcon } from "../../assets/icons/Dashboard/Shop";
import { ExitIcon } from "../../assets/icons/Dashboard/Exit";

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
        <Link to={""}  className="hover:animate-wiggle">
          <HomeIcon/>
        </Link>
        <Link to={"notes"}  className="hover:animate-wiggle">
          <NotesIcon/>
        </Link>
        <Link to={"settings"}  className="hover:animate-wiggle">
          <ConfigIcon/>
        </Link>
        <Link to={"pro"}  className="hover:animate-wiggle">
          <ProIcon/>
        </Link>
        <Link to={"shop"}  className="hover:animate-wiggle">
          <ShopIcon/>
        </Link>

      </div>
      <div
        onClick={signOutTrigger}
        className="cursor-pointer hover:animate-wiggle">
        <ExitIcon/>
      </div>
    </nav>
  );
}
