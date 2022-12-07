import { isBefore, isEqual } from "date-fns";
import { Timestamp } from "firebase/firestore";
import { calendarProps } from "../@types/PlannerProps";

export interface getSelectedDaySplitProps{
  calendar: calendarProps[]
  selectedDay: Date
  plannerStartDate: Timestamp
}

export function getSelectedDaySplit({calendar,selectedDay, plannerStartDate}:getSelectedDaySplitProps) {
  const startDate = new Timestamp(plannerStartDate.seconds, plannerStartDate.nanoseconds).toDate();
  if(isBefore(selectedDay, startDate)){
    return null;
  }
  const selectedSplitIndex = calendar.findIndex(schedule=>{
    const dateToCompare = new Timestamp(
      schedule.date.seconds, schedule.date.nanoseconds).toDate();
    dateToCompare.getUTCDate();
    return isEqual(dateToCompare.getUTCDate(), selectedDay.getUTCDate());
  });
  const selectedSplit = calendar[selectedSplitIndex];
  return selectedSplit;
}
