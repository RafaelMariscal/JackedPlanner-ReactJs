/* eslint-disable indent */
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import clsx from "clsx";
import { UserPlannersProps } from "../../../../@types/PlannerProps";
import { useUserContext } from "../../../../contexts/userContext/hook";
import { updatePlannersCollection } from "../../../../utils/updatePlannersCollection";


interface ConfirmationDialogProps {
  plannerIndex: 1 | 2 | 3
  isConfirmationDialogOpen: boolean
  setIsConfirmationDialogOpen: (boolean: boolean) => void
  setVisible: (isVisible: boolean) => void
}

export function ConfirmationDialog(
  { plannerIndex, isConfirmationDialogOpen, setIsConfirmationDialogOpen, setVisible }: ConfirmationDialogProps) {

  const { UserLogged, Planners, setPlanners, isLoading, setIsLoading } = useUserContext();

  function handleDeletePlanner() {
    if (Planners === undefined || UserLogged === undefined) return;
    let plannerToBeUpdated: UserPlannersProps | null = null;
    switch (plannerIndex) {
      case 1:
        plannerToBeUpdated = { ...Planners, planner1: null };
        break;
      case 2:
        plannerToBeUpdated = { ...Planners, planner2: null };
        break;
      case 3:
        plannerToBeUpdated = { ...Planners, planner3: null };
        break;
      default:
        break;
    }
    setIsLoading && setIsLoading(true);
    if (plannerToBeUpdated && setPlanners) updatePlannersCollection(UserLogged, plannerToBeUpdated, setPlanners);
    setIsLoading && setIsLoading(false);
    setVisible(false);
    return;
  }

  return (
    <AlertDialog.Root open={isConfirmationDialogOpen} onOpenChange={setIsConfirmationDialogOpen}>
      <AlertDialog.Trigger asChild>
        <button
          type="button"
          className="
                    w-3/4 h-10 mt-2 rounded-lg text-gray-100 font-medium text-sm
                    select-none bg-dark-red tracking-wide shadow shadow-gray-900
                    outline-none outline-offset-2 transition-all duration-150
                    focus:outline-1 focus:outline-dark-red
                    focus:bg-dark-red hover:outline-dark-red
                  "
        >
          Delete Planner
        </button>

      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay className={clsx(
          "bg-gray-900 bg-opacity-75 fixed inset-0 flex items-center justify-center",
          { "hidden": isConfirmationDialogOpen === false }
        )}
        >
          <AlertDialog.Content className="
              w-full max-w-sm  p-6 pt-4 max-h-[80%] overflow-y-auto
              bg-gray-800 border border-gray-900 rounded-lg
              drop-shadow-[0_0_.25rem_#000] flex flex-col items-center
              animate-appear duration-50
            ">

            <div className="w-full mb-4 p-0">
              <div className="flex flex-col gap-2">
                <AlertDialog.Title className="text-gray-100 font-medium leading-tight">
                  Do you really want to do this?
                </AlertDialog.Title>

                <AlertDialog.Description asChild>
                  <p className="text-xs text-justify text-gray-200 leading-tight">
                    This action cannot be undone. This will permanently delete this planner and remove your data from our servers.
                  </p>
                </AlertDialog.Description>
              </div>
            </div>

            <div className="w-full flex justify-end gap-2">
              <AlertDialog.Cancel asChild>
                <button
                  type="button"
                  className="
                    w-fit px-4 h-9 rounded-lg text-gray-800 font-semibold text-sm
                    leading-tight bg-gray-200 tracking-wide shadow shadow-gray-900
                    outline-none outline-offset-2 select-none transition-all duration-150
                    focus:outline-1 focus:outline-gray-200
                    focus:bg-gray-200 hover:outline-gray-200
                  "
                >
                  Cancel
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={handleDeletePlanner}
                  className="
                    w-fit px-4 h-9 rounded-lg text-gray-100 font-semibold text-sm
                    leading-tight bg-dark-red tracking-wide shadow shadow-gray-900
                    outline-none outline-offset-2 select-none transition-all duration-150
                    focus:outline-1 focus:outline-dark-red hover:outline-dark-red
                  "
                >
                  Yes, Delete this Planner
                </button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Overlay>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
