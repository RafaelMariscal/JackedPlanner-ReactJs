import * as Dialog from "@radix-ui/react-dialog";
import { PlannerProps } from "../../../../@types/PlannerProps";

interface ModalHeaderProps {
  planner?: PlannerProps
}

export function ModalHeader({ planner }: ModalHeaderProps) {
  return (
    <div className="w-full mb-4 p-0">
      <div className="w-full flex items-center justify-between">
        <Dialog.Title className="text-gray-100 font-medium leading-tight">
          {planner ? "Edit Planner" : "Create new planner"}
        </Dialog.Title>
        <Dialog.Close
          asChild
          className="
            w-6 h-6 rounded-sm outline-none
            focus:outline-orange-500
          "
        >
          <button
            aria-label="Close"
            className="
              text-gray-100 font-medium text-lg select-none
              leading-snug hover:text-orange-500
            "
          >
            x
          </button>
        </Dialog.Close>
      </div>
      <Dialog.Description>
        <span className="text-[10px] text-gray-200 leading-tight">
          Your new planner will be created by submitting this formulary.
        </span>
      </Dialog.Description>
    </div>
  );
}
