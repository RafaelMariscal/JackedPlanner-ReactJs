import { useContext } from "react";
import { SelectedPlannerContext } from ".";

export const usePlannerContext = () => {
  const context = useContext(SelectedPlannerContext);
  return context;
};
