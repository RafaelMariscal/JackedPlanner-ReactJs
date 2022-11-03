import { useId } from "react";
import DashboardCard from "../DashboardCard";
import { SetPlan, SetPlanProps } from "./SetPlan";


export function ExercisePlan() {

  const ExercisePlan: SetPlanProps[] = [
    { index: 1, und: 'pl', weight: 3, used: '', reps: '', done: false },
    { index: 2, und: 'pl', weight: 3, used: '', reps: '', done: false },
    { index: 3, und: 'pl', weight: 3, used: '', reps: '', done: false },
  ]

  return (
    <DashboardCard title="Exercise Plan:" extend classNameCard="px-4 py-4">
      <div className="w-full h-full flex  gap-2">
        <div className="py-[.875rem] flex flex-col gap-4 text-xs text-gray-100">
          <span>Set:</span>
          <span>W8:</span>
          <span>Used:</span>
          <span>Reps:</span>
        </div>

        <div className="flex items-center gap-2">
          {ExercisePlan.map(set => {
            return (
              <SetPlan key={useId()} index={set.index} und={set.und} weight={set.weight} />
            )
          })}
        </div>

        <button className=" self-center ml-2
            h-9 rounded-lg w-fit px-2 bg-gray-100 
            flex items-center cursor-pointer
            "
        >
          <img src="/src/assets/icons/Dashboard/Edit.svg" alt=""
            className="w-[1.125rem]"
          />
        </button>


      </div>
    </DashboardCard>
  )
}
