import { useEffect, useState } from "react";
import { UserPlannersProps } from "../../@types/PlannerProps";
import { Calendar } from "../../components/Dashboard/Calendar/Index";
import { ExercisePlan } from "../../components/Dashboard/ExercisePlan";
import { JackedPlannerProCall } from "../../components/Dashboard/JackedPlannerProCall";
import { PersonalNotes } from "../../components/Dashboard/PersonalNotes";
import { PlannerController } from "../../components/Dashboard/PlannerController";
import { WeightHistory } from "../../components/Dashboard/WeightHistory";
import { WorkoutSection } from "../../components/Dashboard/WorkoutSection";
import { USER_PLANNERS } from "../../utils/getUserDocs";

export type PlannerSelectedType = 1 | 2 | 3

export function Home() {
  const [userPlanners, setUserPlanners] = useState<UserPlannersProps | null>(null);
  const [PlannerSelected, setPlannerSelected] = useState<PlannerSelectedType>(1);

  useEffect(() => {
    const sessionUserPlanners = sessionStorage.getItem(USER_PLANNERS);
    if(sessionUserPlanners ){
      setUserPlanners(JSON.parse(sessionUserPlanners));
    }
  }, []);

  return (
    <div className="h-full flex flex-col gap-4" >
      <div className="flex gap-4">
        <div className="flex justify-between gap-4 w-full max-w-[720px]">
          <PlannerController
            planners={userPlanners}
            plannerSelected={PlannerSelected}
            setPlannerSelected={setPlannerSelected}

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
