import { Anchor } from "../LoginPage/Anchor";

interface DashboardHeaderProps {
  userName: string;
}

export function DashboardHeader({ userName = 'userName' }: DashboardHeaderProps) {
  return (
    <header id="header" className="
      w-full h-12 bg-gray-800 
      flex items-center justify-center
      "
    >
      <div className="
        w-screen max-w-[1632px] px-8
        flex items-center justify-between
        "
      >
        <p className="text-gray-100 [&_span]:text-orange-500">
          Hello <span>{userName}</span>! Follow the plan and get Jacked!
        </p>

        <Anchor href="#getPro">
          About Jacked<span>PRO</span>
        </Anchor>
      </div>
    </header>
  )
}