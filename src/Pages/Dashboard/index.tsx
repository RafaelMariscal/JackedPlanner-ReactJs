import { isEqual, startOfDay } from "date-fns";
import { Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { ExerciseNotes, PlannerProps, ScheduleLabel, SplitProps, splitScheduleProps } from "../../@types/PlannerProps";
import { DashboardHeader } from "../../components/Dashboard/DashboardHeader";
import { Navbar } from "../../components/Dashboard/Navbar";
import LoadingModal from "../../components/LoadingModal";
import { useUserContext } from "../../contexts/userContext/hook";

export type PlannerSelectedType = "planner1" | "planner2" | "planner3";

export type OutletContextType = {
  PlannerSelected: PlannerProps | null
  setPlannerSelected: (p: PlannerProps | null) => void;
  selectedExerciseId: string | null
  setSelectedExerciseId: (id: string | null) => void
  selectedDay: Date
  setSelectedDay: (date: Date) => void
  selectedSplit: SplitProps | null
  exercisesNotes: ExerciseNotes[] | null | undefined
  setExercisesNotes: (notes: ExerciseNotes[] | null | undefined) => void
}

export function useOutletDataContext() {
  return useOutletContext<OutletContextType>();
}

export function Dashboard() {
  const { UserLogged, Planners, isLoading } = useUserContext();
  const [PlannerSelected, setPlannerSelected] = useState<PlannerProps | null>(null);
  const [selectedDay, setSelectedDay] = useState<Date>(startOfDay(new Date()));
  const [selectedExerciseId, setSelectedExerciseId] = useState<string | null>(null);

  const [selectedSplit, setSelectedSplit] = useState<SplitProps | null>(null);
  const [exercisesNotes, setExercisesNotes] = useState<ExerciseNotes[] | null | undefined>(null);

  useEffect(() => {
    if (Planners !== undefined) {
      setPlannerSelected(Planners.planner1);
    }
  }, [Planners]);

  // let selectedSplit: SplitProps | null = null;
  // let ExercisesNotes: ExerciseNotes[] | null | undefined = null;

  useEffect(() => {
    // let selectedSplitLabel: ScheduleLabel | undefined = undefined;
    // let selectedSplitIndex: number | undefined = undefined;
    if (PlannerSelected) {
      const selectedSplitLabel = PlannerSelected.plannerCalendar.find(schedule => {
        const dateToCompare = new Timestamp(
          schedule.date.seconds,
          schedule.date.nanoseconds
        ).toDate();
        return isEqual(dateToCompare, selectedDay);
      })?.label;

      const selectedSplitIndex = PlannerSelected.splits.findIndex(split =>
        split.splitLabel === selectedSplitLabel);
      const NewSelectedSplit = selectedSplitIndex !== -1 ?
        PlannerSelected.splits[selectedSplitIndex] : null;
      setSelectedSplit(NewSelectedSplit);

      const selectedSchedule = NewSelectedSplit?.splitSchedule.find(schedule => {
        const dateToCompare = new Timestamp(
          schedule.date.seconds,
          schedule.date.nanoseconds
        ).toDate();
        return isEqual(dateToCompare, selectedDay);
      });
      setExercisesNotes(selectedSchedule?.exerciseNotes);
    }
  }, [PlannerSelected, selectedDay]);

  return (
    <>
      <LoadingModal visible={isLoading} />

      <div className='
      w-screen h-screen
      bg-background-polygons bg-no-repeat bg-cover bg-center
      flex flex-col
      '
      >
        <DashboardHeader userName={
          UserLogged?.displayName ?
            UserLogged.displayName :
            "Anonymous"
        } />

        <div className=' w-full h-full p-6 pt-[4.5rem]'>
          <div className=" m-auto
          w-full max-w-[1600px] h-full rounded-xl overflow-hidden
          flex items-center justify-center gap-6 overflow-x-auto
          bg-gradient-to-br from-white-opac-35 to-gray-opac-35
          bg-opacity-30 backdrop-blur-md border border-gray-400
          shadow-[0_0_6px_rgba(0,0,0,0.35)]
          "
          >
            <Navbar />
            <div className='w-full h-full py-6 ml-24 mr-4
            overflow-x-auto '>
              <Outlet context={
                {
                  PlannerSelected, setPlannerSelected,
                  selectedExerciseId, setSelectedExerciseId,
                  selectedDay, setSelectedDay,
                  selectedSplit, exercisesNotes, setExercisesNotes
                }
              }
              />
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
