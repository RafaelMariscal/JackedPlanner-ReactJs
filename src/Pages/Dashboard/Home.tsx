import { useEffect, } from "react";
import { useOutletDataContext } from ".";
import { Calendar } from "../../components/Dashboard/Calendar/Index";
import { ExercisePlan } from "../../components/Dashboard/ExercisePlan";
import { JackedPlannerProCall } from "../../components/Dashboard/JackedPlannerProCall";
import { PersonalNotes } from "../../components/Dashboard/PersonalNotes";
import { PlannerController } from "../../components/Dashboard/PlannerController";
import { WeightHistory } from "../../components/Dashboard/WeightHistory";
import { WorkoutSection } from "../../components/Dashboard/WorkoutSection";
import { useUserContext } from "../../contexts/userContext/hook";
import { ExerciseProps } from "../../@types/PlannerProps";

export type PlannerSelectedType = "planner1" | "planner2" | "planner3"

export function Home() {
  const {
    PlannerSelected,
    selectedDay, setSelectedDay,
    selectedSplit
  } = useOutletDataContext();
  const { setIsLoading, Planners } = useUserContext();

  useEffect(() => {
    if (!!Planners && !!setIsLoading) {
      setIsLoading(false);
    }
  }, [Planners]);

  let selectedExerciseList: ExerciseProps[] | null = null;
  if (PlannerSelected !== null) {
    selectedExerciseList = selectedSplit ? selectedSplit.splitExercises : null;
  }
  return (
    <div className="h-full flex flex-col gap-4" >
      <div className="flex gap-4">
        <div className="flex justify-between gap-4 w-full max-w-[720px]">
          <PlannerController
            planners={Planners}
            price={4.99}
          />
          <Calendar
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        </div>
        <WorkoutSection exercises={selectedExerciseList} />
      </div>

      <div className="flex-1 flex gap-4">
        <WeightHistory />
        <ExercisePlan
          exercises={selectedSplit ? selectedSplit.splitExercises : null}
        />
      </div>

      <div className="flex-1 flex gap-4">
        <JackedPlannerProCall price={4.99} />
        <PersonalNotes />
      </div>
    </div>
  );
}
