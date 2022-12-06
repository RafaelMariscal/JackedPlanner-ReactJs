import { useEffect } from "react";
import { useOutletDataContext } from ".";
import { Calendar } from "../../components/Dashboard/Calendar/Index";
import { ExercisePlan } from "../../components/Dashboard/ExercisePlan";
import { JackedPlannerProCall } from "../../components/Dashboard/JackedPlannerProCall";
import { PersonalNotes } from "../../components/Dashboard/PersonalNotes";
import { PlannerController } from "../../components/Dashboard/PlannerController";
import { WeightHistory } from "../../components/Dashboard/WeightHistory";
import { WorkoutSection } from "../../components/Dashboard/WorkoutSection";
import { useUserContext } from "../../contexts/userContext/hook";

export type PlannerSelectedType = "planner1" | "planner2" | "planner3"

export function Home() {
  const {PlannerSelectedIndex, setPlannerSelectedIndex} = useOutletDataContext();
  const {setIsLoading, Planners, Notes} = useUserContext();

  useEffect(() => {
    if(!!Planners && !!Notes && !!setIsLoading){
      setIsLoading(false);
    }
    return;
  },[Planners, Notes]);

  if(Planners === undefined || Notes === undefined) return (<></>);
  const plannerSelected = Planners[PlannerSelectedIndex];
  console.log(plannerSelected);
  return (
    <div className="h-full flex flex-col gap-4" >
      <div className="flex gap-4">
        <div className="flex justify-between gap-4 w-full max-w-[720px]">
          <PlannerController
            planners={Planners}
            plannerSelectedIndex={PlannerSelectedIndex}
            setPlannerSelectedIndex={setPlannerSelectedIndex}
            price={4.99}
          />
          <Calendar />
        </div>
        <WorkoutSection />
      </div>

      <div className="flex-1 flex gap-4">
        <WeightHistory />
        <ExercisePlan />
      </div>

      <div className="flex-1 flex gap-4">
        <JackedPlannerProCall price={4.99} />
        <PersonalNotes />
      </div>
    </div>
  );
}
