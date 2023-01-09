import { Timestamp } from "firebase/firestore";
import { v4 as uuidV4} from "uuid";
import { CardioProps, PlannerProps, ScheduleLabel, SplitProps } from "../@types/PlannerProps";
import { SplitInfoProps } from "../components/Dashboard/Modals/PlannerModal/ModalForm";
import { createSplitScheduleStructure } from "./createSplitScheduleStructure";

export interface createNewPlannerDocProps {
  name: string
  splits: SplitInfoProps[]
  schedule: ScheduleLabel[]
  restDays: number
  startDate: Timestamp
  duration: number
}

export const createNewPlannerDoc = ({name, schedule, restDays, splits, startDate,duration}:createNewPlannerDocProps) => {
  const cardios:CardioProps[] = [];
  const cardioRest :CardioProps[] = [];
  const startDateAsDate = new Timestamp(startDate.seconds, startDate.nanoseconds).toDate();

  const {calendar, scheduleByLabel} = createSplitScheduleStructure({
    schedule,
    cardios,
    cardioRest,
    plannerDuration: duration,
    startDate: startDateAsDate,
  });

  let splitsDocs : SplitProps[] = [];

  splitsDocs = splits.map(split=>{
    const splitDoc : SplitProps = {
      splitLabel: split.label,
      splitTitle: split.splitTitle ? split.splitTitle : "",
      splitExercises: [],
      splitSchedule: scheduleByLabel[split.label]
    };
    return splitDoc;
  });

  if(restDays > 0){
    splitsDocs = splitsDocs.concat([{
      splitLabel: "rest",
      splitTitle: "Rest Day",
      splitExercises: [],
      splitSchedule: scheduleByLabel["rest"]
    }]);
  }

  const newPlannerDocument: PlannerProps = {
    uid: uuidV4(),
    name,
    schedule,
    startDate,
    duration,
    splits: splitsDocs,
    plannerCalendar: calendar
  };

  return newPlannerDocument;
};
