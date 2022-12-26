import { add } from "date-fns";
import { Timestamp } from "firebase/firestore";
import { calendarProps, CardioProps, ScheduleLabel, splitScheduleProps } from "../@types/PlannerProps";

export interface createSplitScheduleStructureProps {
  schedule: ScheduleLabel[]
  plannerDuration: number
  startDate: Date
  cardios?: CardioProps[]
  cardioRest?: CardioProps[]
}

interface scheduleByLabelProps {
  [key: string]: splitScheduleProps[]
}

export function createSplitScheduleStructure(params:createSplitScheduleStructureProps) {
  const {
    schedule,
    plannerDuration,
    startDate,
    cardios,
    cardioRest,
  } = params;

  const sortedSchedule = schedule.filter((label, index, self)=>{
    return self.indexOf(label) === index;
  });
  const schedulesByLabelMatrix: splitScheduleProps[][] = [];
  sortedSchedule.map(()=> schedulesByLabelMatrix.push([]));

  const calendar: calendarProps[] = [];

  for (let i = 0; i < (plannerDuration/schedule.length); i++) {
    schedule.forEach((scheduleLabel, index)=>{
      const daysCounter = i === 0 ? index : (index + (i * schedule.length));
      const date = add(startDate, {days: daysCounter});
      const dateWithoutTime = new Date(date.toDateString());
      const splitCardios: CardioProps[] = cardioRest !== undefined && scheduleLabel === "rest" ? cardioRest :
        cardios !== undefined ? cardios : [];

      const splitScheduleToAdd: splitScheduleProps = {
        date: Timestamp.fromDate(dateWithoutTime),
        notes: {
          cardio: splitCardios,
          rate: "GREAT",
          trainingNotes: "",
        },
        exerciseNotes: []
      };

      const calendarObject : calendarProps = {
        label: scheduleLabel,
        date: Timestamp.fromDate(dateWithoutTime)
      };
      calendar.push(calendarObject);

      const indexOfLabel = sortedSchedule.findIndex((label)=>label === scheduleLabel);
      schedulesByLabelMatrix[indexOfLabel].push(splitScheduleToAdd);
    });
  }
  const scheduleByLabel: scheduleByLabelProps = {};
  sortedSchedule.map((label, index)=>{
    scheduleByLabel[label] = schedulesByLabelMatrix[index];
  });
  return {calendar, scheduleByLabel};
}
