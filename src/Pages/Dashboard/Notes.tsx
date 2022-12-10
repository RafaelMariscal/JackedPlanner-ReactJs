import { useOutletDataContext } from ".";
import { calendarProps, SplitProps } from "../../@types/PlannerProps";
import { ExercisePlan } from "../../components/Dashboard/ExercisePlan";
import { ImageCard } from "../../components/Dashboard/ImageCard";
import { NotesHistory } from "../../components/Dashboard/NotesHistory";
import { PersonalNotes } from "../../components/Dashboard/PersonalNotes";
import { PlannerController } from "../../components/Dashboard/PlannerController";
import { useUserContext } from "../../contexts/userContext/hook";
import { getSelectedDaySplit } from "../../utils/getSelectedDaySplit";

export function Notes() {
  const {
    PlannerSelected,
    selectedExerciseId, setSelectedExerciseId,
    selectedDay, setSelectedDay
  } = useOutletDataContext();
  const {Planners} = useUserContext();

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
    <div className="h-full flex gap-4" >

      <div className="h-full w-full max-w-3xl flex flex-col gap-4 relative" >
        <div className="w-full flex justify-between gap-4">
          <PlannerController
            planners={Planners}
            PlannerSelected={PlannerSelected}
            price={4.99}
          />
          <NotesHistory />
        </div>

        <PersonalNotes history />

        <ExercisePlan
          exercises={selectedSplit ? selectedSplit.splitExercises : null}
          selectedExerciseId={selectedExerciseId}
        />
      </div>

      <ImageCard variant="guy" />

    </div>
  );
}
