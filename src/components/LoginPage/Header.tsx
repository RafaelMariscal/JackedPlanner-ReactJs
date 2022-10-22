import { Anchor } from "./Anchor";

export function Header() {
  return (
    <header className="w-screen h-12 bg-gray-800 flex items-center justify-center">
      <div className="w-screen max-w-screen-2xl px-4 flex items-center justify-between">
        <Anchor href="GetPro">
          Get <span>PRO</span> for more features
        </Anchor>
        <div className="flex gap-6">
          <Anchor href="AboutUs">
            About<span>Us</span>
          </Anchor>
          <Anchor href="GetPro">
            Get<span>PRO</span>
          </Anchor>
        </div>
      </div>
    </header>
  )
}
