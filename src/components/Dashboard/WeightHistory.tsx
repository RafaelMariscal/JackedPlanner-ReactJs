import { Button } from "../LoginPage/Button";
import DashboardCard from "./DashboardCard";
import Grafic from "../../assets/Grafic.png";

export function WeightHistory() {
  return (
    <DashboardCard title="Weigth History" className="w-full max-w-[720px] min-w-[662px]" classNameCard="py-0 px-0" >
      <div className="flex w-full h-full gap-6">
        <div className="absolute w-full h-full rounded bg-black
          bg-opacity-[45%] flex items-center justify-center
          "
        >
          <Button variant="dark" size="lg" className="max-w-[320px] shadow-[0_0_.5rem_.1rem] shadow-orange-500">
            Get<span className="text-orange-500 px-1">PRO</span>to access this Feature
          </Button>
        </div>

        <img src={Grafic} alt="" className="object-contain ml-2" />

        <div className="flex-1 ">
          <div className="p-4 h-1/2 font-bold text-xl text-gray-800
            flex flex-col items-center justify-center
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

          <div className="p-4 h-1/2 font-semibold text-xl text-gray-100
            flex flex-col items-center justify-center
            bg-transparent rounded-br-md border-2 border-l-4 border-orange-500
            "
          >
            <span className="block">
              274 kg /
            </span>
            <span className="block">
              1 Rep
            </span>
          </div>
        </div>
      </div>
    </DashboardCard >
  );
}
