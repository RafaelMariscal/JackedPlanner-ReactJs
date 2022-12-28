/* eslint-disable indent */
import clsx from "clsx";
import { useState } from "react";
import { PlannerProps } from "../../../@types/PlannerProps";
import { EditIcon } from "../../../assets/icons/Dashboard/Edit";
import { useUserContext } from "../../../contexts/userContext/hook";
import { useOutletDataContext } from "../../../Pages/Dashboard";
import PlannerModal from "../Modals/PlannerModal";

interface PlannerCardProps {
  index: 1 | 2 | 3
  PlannerName?: string
  PlannerSelected: PlannerProps | null
}

export function PlannerCard({ index, PlannerName, PlannerSelected }: PlannerCardProps) {
  const { Planners } = useUserContext();
  const { setPlannerSelected } = useOutletDataContext();

  const [isModalVisible, setIsModalVisible] = useState(false);

  function handlePlannerSelector(planner: 1 | 2 | 3) {
    if (Planners === undefined) return;
    switch (planner) {
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

  const PlannerSelectedName = PlannerSelected?.name;
  const IfPlannerSelected = !!PlannerSelected && PlannerSelectedName === PlannerName ? true : false;

  return (
    <>
      {PlannerName ? (
        <button
          onClick={() => handlePlannerSelector(index)}
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
              {index}
            </span>

            <p className="pl-2 truncate max-w-[240px]">
              {PlannerName}
            </p>
          </div>

          <PlannerModal
            PlannerName={PlannerName}
            visible={isModalVisible}
            setVisible={setIsModalVisible}
          />
        </button>
      ) : (
        <PlannerModal
          index={index}
          visible={isModalVisible}
          setVisible={setIsModalVisible}
        />

        // <button
        //   onClick={() => handlePlannerSelector(index)}
        //   className="
        //   bg-gray-100 h-10 rounded-lg px-4 flex items-center justify-between
        //   font-semibold text-sm leading-4 text-gray-800 cursor-pointer select-none"
        // >
        //   <div className="flex items-center">
        //     <span >
        //       {index}
        //     </span>

        //     <p className="font-medium text-gray-400 pl-2">
        //       {"Add a New Planner"}
        //     </p>
        //   </div>

        //   <PlannerModal
        //     PlannerName={PlannerName}
        //     visible={isModalVisible}
        //     setVisible={setIsModalVisible}
        //   />
        // </button>
      )}

    </>

  );
}
