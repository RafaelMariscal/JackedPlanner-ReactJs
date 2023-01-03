import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import { EditIcon } from "../../../../assets/icons/Dashboard/Edit";
import { PlannerProps } from "../../../../@types/PlannerProps";
import { ModalHeader } from "./ModalHeader";
import { ModalForm } from "./ModalForm";

interface PlannerModalProps {
  planner?: PlannerProps
  index?: number
  visible: boolean
  setVisible: (boolean: boolean) => void
}

export default function PlannerModal({ planner, index, visible, setVisible }: PlannerModalProps) {
  return (
    <Dialog.Root open={visible} modal
      onOpenChange={() => {
        setVisible(!visible);
      }} >

      <Dialog.Trigger asChild>
        {planner ? (
          <div className={"w-[1.125rem] hover:animate-wiggle"}>
            <EditIcon />
          </div>
        ) : (
          <button
            className="
          bg-gray-100 h-10 rounded-lg px-4 flex items-center justify-between
          font-semibold text-sm leading-4 text-gray-800 cursor-pointer select-none"
          >
            <div className="flex items-center">
              <span >
                {index}
              </span>

              <p className="font-medium text-gray-400 pl-2">
                {"Add a New Planner"}
              </p>
            </div>
          </button>
        )}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={clsx(
          "bg-gray-900 bg-opacity-75 fixed inset-0 flex items-center justify-center",
          {
            "hidden": visible === false,
          }
        )}
        >
          <Dialog.Content className="
                w-full max-w-sm  p-6 pt-4 max-h-[80%] overflow-y-auto
                bg-gray-800 border border-gray-900 rounded-lg
                drop-shadow-[0_0_.25rem_#000] flex flex-col items-center
                animate-appear duration-50
                "
          >
            <ModalHeader planner={planner} />

            <ModalForm planner={planner} />

          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
