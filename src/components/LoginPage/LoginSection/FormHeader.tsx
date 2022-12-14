import { Logo } from "../../../assets/Logo";
import { Anchor } from "../Anchor";

export function FormHeader() {
  return (
    <div className="flex items-center justify-center gap-6">
      <Logo />
      <div className="flex flex-col gap-1 text-gray-100 font-medium [&>*>span]:text-orange-500">
        <p className="text-lg leading-6">
          A simple Gym Planner...
        </p>
        <p className="text-4xl leading-none font-semibold">
          BUT SUPER <span>JACKED</span>
        </p>
        <h2 className="text-lg leading-6">
          Organize your workout routine and <span className="font-semibold">GET HUGE</span>!
        </h2>
        <div className="text-lg leading-6 flex gap-4">
          <Anchor href="#aboutUs">
            About<span>Us</span>
          </Anchor>
          <Anchor href="#getPro">
            Get<span>Pro</span>
          </Anchor>
        </div>
      </div >
    </div >
  );
}
