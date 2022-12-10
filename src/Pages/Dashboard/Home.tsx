import { startOfDay } from "date-fns";
import { useEffect, useState } from "react";
import { useOutletDataContext } from ".";
import { Calendar } from "../../components/Dashboard/Calendar/Index";
import { ExercisePlan } from "../../components/Dashboard/ExercisePlan";
import { JackedPlannerProCall } from "../../components/Dashboard/JackedPlannerProCall";
import { PersonalNotes } from "../../components/Dashboard/PersonalNotes";
import { PlannerController } from "../../components/Dashboard/PlannerController";
import { WeightHistory } from "../../components/Dashboard/WeightHistory";
import { WorkoutSection } from "../../components/Dashboard/WorkoutSection";
import { useUserContext } from "../../contexts/userContext/hook";
import { getSelectedDaySplit } from "../../utils/getSelectedDaySplit";
import { calendarProps, SplitProps } from "../../@types/PlannerProps";
import LoadingModal from "../../components/LoadingModal";

export type PlannerSelectedType = "planner1" | "planner2" | "planner3"

export function Home() {
  const {PlannerSelected} = useOutletDataContext();
  const {setIsLoading, Planners} = useUserContext();
  const [selectedDay, setSelectedDay] = useState<Date>(startOfDay(new Date()));
  const [selectedExerciseId, setSelectedExerciseId] = useState<string | null>(null);

  useEffect(() => {
    if(!!Planners && !!setIsLoading){
      setIsLoading(false);
    }
  },[Planners]);

  let selectedSplitInfo: calendarProps | null = null;
  let selectedSplit: SplitProps | null = null;

  if(PlannerSelected !== null){
    const plannerStartDate = PlannerSelected?.startDate;
    selectedSplitInfo = getSelectedDaySplit({
      calendar:  PlannerSelected.plannerCalendar,
      selectedDay,
      plannerStartDate});

    const splitSelectedIndex =  PlannerSelected.splits.findIndex(split=>
      split.splitLabel === selectedSplitInfo?.label);
    splitSelectedIndex === -1 ? null :
      selectedSplit = PlannerSelected.splits[splitSelectedIndex];
  }

  return (
    <div className="h-full flex flex-col gap-4" >
      <div className="flex gap-4">
        <div className="flex justify-between gap-4 w-full max-w-[720px]">
          <PlannerController
            planners={Planners}
            PlannerSelected={PlannerSelected}
            price={4.99}
          />
          <Calendar
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        </div>
        <WorkoutSection
          exercises={selectedSplit ? selectedSplit.splitExercises : null}
          selectedExerciseId={selectedExerciseId}
          setSelectedExerciseId={setSelectedExerciseId}
        />
      </div>

      <div className="flex-1 flex gap-4">
        <WeightHistory />
        <ExercisePlan
          exercises={selectedSplit ? selectedSplit.splitExercises : null}
          selectedExerciseId={selectedExerciseId}
        />
      </div>

      <div className="flex-1 flex gap-4">
        <JackedPlannerProCall price={4.99} />
        <PersonalNotes />
      </div>
    </div>
  );
}
