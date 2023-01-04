/* eslint-disable indent */
import clsx from "clsx";
import { useState } from "react";
import { PlannerProps } from "../../../@types/PlannerProps";
import { useUserContext } from "../../../contexts/userContext/hook";
import { useOutletDataContext } from "../../../Pages/Dashboard";
import PlannerModal from "../Modals/PlannerModal";

interface PlannerCardProps {
  plannerIndex: 1 | 2 | 3
  planner: PlannerProps | null
}

export function PlannerCard({ plannerIndex, planner }: PlannerCardProps) {
  const { Planners } = useUserContext();
  const { PlannerSelected, setPlannerSelected } = useOutletDataContext();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const PlannerSelectedUid = PlannerSelected?.uid;
  const IfPlannerSelected = !!PlannerSelected && PlannerSelectedUid === planner?.uid ? true : false;

  function handlePlannerSelector(plannerIndex: 1 | 2 | 3) {
    if (Planners === undefined) return;
    switch (plannerIndex) {
      case 1:
        setPlannerSelected(Planners.planner1);
        break;
      case 2:
        setPlannerSelected(Planners.planner2);
        break;
      case 3:
        setPlannerSelected(Planners.planner3);
        break;
      default:
        setPlannerSelected(Planners.planner1);
        break;
    }
  }
  return (
    <>
      {planner ? (
        <button
          onClick={() => handlePlannerSelector(plannerIndex)}
          className={clsx(
            "bg-gray-100 h-10 rounded-lg px-4 flex items-center justify-between",
            "font-semibold text-sm leading-4 text-gray-800 cursor-pointer select-none",
            {
              "outline outline-2 outline-offset-1 outline-orange-500": IfPlannerSelected
            }
          )}
        >
          <div className="flex items-center">
            <span >
              {plannerIndex}
            </span>

            <p className="pl-2 truncate max-w-[240px]">
              {planner.name}
            </p>
          </div>

          <PlannerModal
            plannerIndex={plannerIndex}
            planner={planner}
            visible={isModalVisible}
            setVisible={setIsModalVisible}
          />
        </button>
      ) : (
        <PlannerModal
          plannerIndex={plannerIndex}
          visible={isModalVisible}
          setVisible={setIsModalVisible}
        />
      )}
    </>
  );
}
