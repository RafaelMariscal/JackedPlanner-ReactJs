import { Anchor } from "../LoginPage/Anchor";

export function DashboardHeader() {
  return (
    <header id="header" className="
      w-full h-12 bg-gray-800 
      flex items-center justify-center
    ">
      <div className="
        w-screen px-8
        flex items-center justify-between
      ">
        <Anchor href="#getPro">
          Get <span>PRO</span> for more features
        </Anchor>
        <div className="flex gap-6">
          <Anchor href="#aboutUs">
            About<span>Us</span>
          </Anchor>
          <Anchor href="#getPro">
            Get<span>PRO</span>
          </Anchor>
        </div>
      </div>
    </header>
  )
}