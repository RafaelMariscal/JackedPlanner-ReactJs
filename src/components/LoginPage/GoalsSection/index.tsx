
export function GoalsSection() {
  return (
    <div id="aboutUs" className="
      py-10 max-w-[1020px] m-auto
      flex items-center justify-center gap-4
      "
    >
      <div className="px-4 flex flex-col gap-3">
        <h2 className="font-semibold text-xl text-gray-800 max-w-md">
          The Jacked Planner was designed looking for one simple goal:
        </h2>
        <div className="
          font-semibold text-4xl text-gray-100
          py-5 pr-5
          relative inline-block
          before:content-[''] before:block before:absolute
          before:right-[0] before:top-0 before:z-[-1]
          before:w-[100vw] before:h-60 before:drop-shadow-[.75rem_.75rem_0_#FE9016]
          before:text-gray-800 before:bg-gray-800
          "
        >
          <h2>MAKE THE BEST</h2>
          <span className="text-orange-500">
            TRAINING METRICS
          </span>
          <h2>AVAILABLE TO EVERYONE!</h2>
        </div>
      </div>

      <div className="pr-2 flex-1 flex justify-center">
        <img src="/src/assets/DashboardImg.png" alt="" />
      </div>

    </div >
  );
}
