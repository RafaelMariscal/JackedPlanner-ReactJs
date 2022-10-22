
export function GoalsSection() {
  return (
    <div className="py-10 flex items-center justify-center gap-28">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-xl text-gray-800 max-w-md">
          The Jacked Planner was designed looking for one simple goal:
        </h2>
        <div className="
          font-semibold text-4xl text-gray-100
          py-5 pr-5
          relative inline-block 
          before:content-['*'] before:block before:absolute 
          before:right-[0]  before:top-0 before:z-[-1] 
          before:w-[300%] before:h-60 before:drop-shadow-[.75rem_.75rem_0_#FE9016]
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
      <img src="/src/assets/DashboardImg.png" alt="" />

    </div >
  )
}
