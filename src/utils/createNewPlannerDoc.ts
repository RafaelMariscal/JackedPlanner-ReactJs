import { Timestamp } from "firebase/firestore";
import { PlannerProps, ScheduleLabel } from "../@types/PlannerProps";
import { SplitInfoProps } from "../components/Dashboard/Modals/PlannerModal/ModalForm";

interface createNewPlannerDocProps {
  name: string
  splitInfo: SplitInfoProps[]
  schedule: ScheduleLabel[]
  startDate: Timestamp

}

export const createNewPlannerDoc = (
  {name, schedule, splitInfo, startDate}:createNewPlannerDocProps) => {
  return;
};
