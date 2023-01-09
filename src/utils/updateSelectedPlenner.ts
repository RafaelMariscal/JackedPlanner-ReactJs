import { Timestamp } from "firebase/firestore";
import { calendarProps, PlannerProps, ScheduleLabel, SplitProps } from "../@types/PlannerProps";
import { SplitInfoProps } from "../components/Dashboard/Modals/PlannerModal/ModalForm";
import { createSplitScheduleStructure } from "./createSplitScheduleStructure";


interface updatedPlannerOptionsProps {
  name?: string
  splitsInfo?: SplitInfoProps[]
  schedule?: ScheduleLabel[]
  startDate?: Timestamp
  duration?: number
}

interface updatePlannerDocProps{
  planner: PlannerProps
  updatedPlannerOptions: updatedPlannerOptionsProps
}
function timestampToDate(stamp: Timestamp){
  return new Timestamp(stamp.seconds, stamp.nanoseconds).toDate();
}

export function updatePlannerDoc({planner, updatedPlannerOptions}:updatePlannerDocProps) {
  const {name, splitsInfo, schedule, startDate, duration} = updatedPlannerOptions;
  let updatedSplits: SplitProps[] = [...planner.splits];
  let updatedCalendar: calendarProps[] = [...planner.plannerCalendar];

  if(splitsInfo){
    updatedSplits = planner.splits.reduce((splits, currentSplit)=>{
      const selectedSplit = splitsInfo.find(splitInfo=> splitInfo.label === currentSplit.splitLabel);
      if(selectedSplit?.splitTitle !== undefined){
        const updatedSplit: SplitProps= {...currentSplit, splitTitle: selectedSplit.splitTitle};
        return [...splits, updatedSplit];
      }
      return splits;
    }, [] as SplitProps[]);
  }

  if (duration){
    const { calendar } = createSplitScheduleStructure({
      schedule: schedule ? schedule : planner.schedule,
      cardios: [],
      cardioRest: [],
      plannerDuration: duration + 1,
      startDate: startDate ? timestampToDate(startDate) : timestampToDate(planner.startDate),
    });
    updatedCalendar = {...calendar};
  }

  const plannerToBeUpdated: PlannerProps = {
    ...planner,
    name: name ? name : planner.name,
    schedule: schedule ? schedule : planner.schedule,
    startDate: startDate ? startDate : planner.startDate,
    duration: duration ? duration : planner.duration,
    splits: updatedSplits,
    plannerCalendar: updatedCalendar
  };

  return plannerToBeUpdated;
}
