import { useOutletDataContext } from ".";
import { ExercisePlan } from "../../components/Dashboard/ExercisePlan";
import { ImageCard } from "../../components/Dashboard/ImageCard";
import { NotesHistory } from "../../components/Dashboard/NotesHistory";
import { PersonalNotes } from "../../components/Dashboard/PersonalNotes";
import { PlannerController } from "../../components/Dashboard/PlannerController";
import { useUserContext } from "../../contexts/userContext/hook";

export function Notes() {
  const {PlannerSelectedIndex, setPlannerSelectedIndex} = useOutletDataContext();

  const {Planners} = useUserContext();

  return (
    <div className="h-full flex gap-4" >

      <div className="h-full w-full max-w-3xl flex flex-col gap-4 relative" >
        <div className="w-full flex justify-between gap-4">
          <PlannerController
            planners={Planners}
            plannerSelectedIndex={PlannerSelectedIndex}
            setPlannerSelectedIndex={setPlannerSelectedIndex}
            price={4.99}
          />
          <NotesHistory />
        </div>

        <PersonalNotes history />

        <ExercisePlan />
      </div>

      <ImageCard variant="guy" />

    </div>
  );
}
