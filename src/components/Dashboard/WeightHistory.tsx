import DashboardCard from "./DashboardCard";

export function WeightHistory() {
  return (
    <DashboardCard title="Weigth History" className="w-full max-w-[720px]" classNameCard="py-0 px-0" >
      <div className="flex w-full h-full gap-6">
        <img src="/src/assets/Grafic.png" alt="" className="px-4 py-4" />

        <div className="flex-1">
          <div className="p-4 font-bold text-xl text-center text-gray-800
            bg-orange-500 rounded-tr-md border-2 border-orange-500 
            "
          >
            <span className="block">
              PERSONAL
            </span>
            <span className="block">
              RECORD
            </span>
          </div>

          <div className="p-4 font-semibold text-xl text-center text-gray-100
            bg-transparent rounded-br-md border-2 border-l-4 border-orange-500 
            "
          >
            <span className="block">
              310 kg /
            </span>
            <span className="block">
              2 reps
            </span>
          </div>
        </div>
      </div>
    </DashboardCard >
  )
}
