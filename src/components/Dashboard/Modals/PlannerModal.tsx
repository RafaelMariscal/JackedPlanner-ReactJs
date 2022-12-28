import { FormEvent, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useUserContext } from "../../../contexts/userContext/hook";
import { Button } from "../../LoginPage/Button";
import clsx from "clsx";
import { EditIcon } from "../../../assets/icons/Dashboard/Edit";
import { useOutletDataContext } from "../../../Pages/Dashboard";

interface PlannerModalProps {
  PlannerName?: string | undefined
  index?: number
  visible: boolean
  setVisible: (boolean: boolean) => void
}

export default function PlannerModal({ visible, setVisible, PlannerName, index }: PlannerModalProps) {
  const { isLoading } = useUserContext();
  const { PlannerSelected } = useOutletDataContext();

  const [PlannerNameInput, setPlannerNameInput] = useState<string>("");

  const EmailInput = useRef<HTMLInputElement>(null);
  const PasswordInput = useRef<HTMLInputElement>(null);
  const ConfirmPasswordInput = useRef<HTMLInputElement>(null);

  const [Message, setMessage] = useState("");

  const handleCreateNewPlanner = async (e: FormEvent) => {
    e.preventDefault();
    return;
  };

  return (
    <Dialog.Root open={visible} modal
      onOpenChange={() => {
        setVisible(!visible);
        setMessage("");
      }} >

      <Dialog.Trigger asChild>
        {PlannerName ? (
          <div className={PlannerName ? "w-[1.125rem] hover:animate-wiggle" : "hidden"}>
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
                w-full max-w-sm p-6 pt-4 bg-gray-800 border border-gray-900 rounded-lg
                drop-shadow-[0_0_.25rem_#000] flex flex-col items-center
                justify-center animate-appear duration-50
                "
          >
            <div className="w-full mb-4 p-0">
              <div className="w-full flex items-center justify-between">
                <Dialog.Title className="text-gray-100 font-medium leading-tight">
                  {PlannerName ? "Edit Planner" : "Create new account"}
                </Dialog.Title>
                <Dialog.Close asChild
                  className="w-6 h-6 rounded-sm outline-none
                  focus:outline-orange-500"
                >
                  <button aria-label="Close"
                    className="text-gray-100 font-medium text-lg select-none
                    leading-tight hover:text-orange-500"
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

            <form onSubmit={handleCreateNewPlanner} className="
                w-full flex flex-col gap-4

                [&_input]:h-10 [&_input]:rounded-md [&_input]:bg-gray-100
                [&_input]:text-gray-800 [&_input]:text-sm [&_input]:font-medium
                [&_input]:outline-none focus:[&_input]:outline-1
                focus:[&_input]:outline-orange-500
                focus:[&_input]:outline-offset-2

                [&_label]:flex [&_label]:flex-col [&_label]:gap-1
                [&_label]:text-gray-100 [&_label]:text-sm
              "
            >
              {/*
                    NOW, ITS ONLY SET ALL THE INPUTS FOR BOTH CREATE AND UPDATE PLANNERS MODAL
              */}

              <label htmlFor="PlannerName">
                <span className="ml-1">Planner Name:</span>
                <input type="text" name="PlannerName" id="PlannerName"
                  placeholder="Planner name..." className="pl-4" required
                  value={PlannerNameInput} onChange={(e) => setPlannerNameInput(e.target.value)}
                />
              </label>

              <div>
                <div className="flex gap-3 items-end">
                  <label htmlFor="QtyOfSplits" className="text-center">
                    <span>Qty of <span className="text-orange-500 font-medium">Splits</span> :</span>
                    <input type="number" name="QtyOfSplits" id="QtyOfSplits"
                      className="w-24 text-center"
                      placeholder="0" required
                      value={PlannerNameInput} onChange={(e) => setPlannerNameInput(e.target.value)}
                    />
                  </label>
                  <label htmlFor="QtyOfSplits" className="text-center">
                    <span><span className="text-orange-500 font-medium">Rest Days</span> :</span>
                    <input type="number" name="QtyOfSplits" id="QtyOfSplits"
                      className="w-24 text-center"
                      placeholder="0" required
                      value={PlannerNameInput} onChange={(e) => setPlannerNameInput(e.target.value)}
                    />
                  </label>

                  <button
                    type="button"
                    className="bg-cyan-500 w-full h-10 rounded-lg font-semibold text-gray-800"
                    onClick={() => null}
                  >
                    Set inputs
                  </button>
                </div>
                <span className=" text-[10px] text-gray-200">
                  {"Click on \"Set split inputs\" button to generate the inputs."}
                </span>
              </div>

              <label htmlFor="SpltX">
                <span className="ml-1">
                  Name for split
                  <span className="text-orange-500 font-medium">
                    {" \"x\" "}
                  </span>
                  :
                </span>
                <input type="text" name="SpltX" id="SpltX"
                  placeholder="Split name..." className="pl-4" required
                  value={PlannerNameInput} onChange={(e) => setPlannerNameInput(e.target.value)}
                />
              </label>

              <label htmlFor="SpltX">
                <span className="ml-1">
                  Name for split
                  <span className="text-orange-500 font-medium">
                    {" \"x\" "}
                  </span>
                  :
                </span>
                <input type="text" name="SpltX" id="SpltX"
                  placeholder="Split name..." className="pl-4" required
                  value={PlannerNameInput} onChange={(e) => setPlannerNameInput(e.target.value)}
                />
              </label>

              <label htmlFor="SpltX">
                <span className="ml-1">
                  Name for split
                  <span className="text-orange-500 font-medium">
                    {" \"x\" "}
                  </span>
                  :
                </span>
                <input type="text" name="SpltX" id="SpltX"
                  placeholder="Split name..." className="pl-4" required
                  value={PlannerNameInput} onChange={(e) => setPlannerNameInput(e.target.value)}
                />
              </label>

              <label htmlFor="SplitSchedule">
                <span className="ml-1">
                  Splits
                  <span className="text-orange-500 font-medium">
                    Schedule
                  </span>
                  :
                </span>

                <div className="flex gap-2 items-end">
                  <label htmlFor="Day1" className="text-center">
                    <span>Day
                      <span className="text-orange-500 font-medium">
                        {" 1"}
                      </span>
                    </span>

                    <select id="Day1" name="Day1"
                      className="w-14 h-10 rounded-md text-gray-800 font-semibold [&_option]:font-semibold"
                    >
                      <option value="splitA" className="text-center">{"a"}</option>
                      <option value="splitB" className="text-center">{"b"}</option>
                      <option value="splitC" className="text-center">{"c"}</option>
                      <option value="splitD" className="text-center">{"d"}</option>
                    </select>
                  </label>

                  <label htmlFor="Day2" className="text-center">
                    <span>Day
                      <span className="text-orange-500 font-medium">
                        {" 2"}
                      </span>
                    </span>
                    <select id="Day2" name="Day2"
                      className="w-14 h-10 rounded-md text-gray-800 font-semibold [&_option]:font-semibold"
                    >
                      <option value="splitA" className="text-center">{"a"}</option>
                      <option value="splitB" className="text-center">{"b"}</option>
                      <option value="splitC" className="text-center">{"c"}</option>
                      <option value="splitD" className="text-center">{"d"}</option>
                    </select>
                  </label>

                  <label htmlFor="Day3" className="text-center">
                    <span>Day
                      <span className="text-orange-500 font-medium">
                        {" 2"}
                      </span>
                    </span>
                    <select id="Day3" name="Day3"
                      className="w-14 h-10 rounded-md text-gray-800 font-semibold [&_option]:font-semibold"
                    >
                      <option value="splitA" className="text-center">{"a"}</option>
                      <option value="splitB" className="text-center">{"b"}</option>
                      <option value="splitC" className="text-center">{"c"}</option>
                      <option value="splitD" className="text-center">{"d"}</option>
                    </select>
                  </label>
                </div>

              </label>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="
                    w-full h-10 rounded-lg text-gray-100 text-sm
                    border-2 border-cyan-500 shadow-[0_0_.25rem_#72D6FD]
                    transition-all duration-150 hover:shadow-[0_0_.5rem_#72D6FD]
                  "
                >
                  Add new day
                </button>

                <button
                  type="button"
                  className="
                    w-full h-10 rounded-lg text-gray-100 text-sm
                    border-2 border-red shadow-[0_0_.25rem_#FF463A]
                    transition-all duration-150 hover:shadow-[0_0_.5rem_#FF463A]
                  "
                >
                  Remove last day
                </button>
              </div>

              <label htmlFor="SpltX">
                <span className="ml-1">
                  Start Date
                  <span className="text-orange-500 font-medium">
                    {" \"x\" "}
                  </span>
                  :
                </span>
                <input type="date" name="SpltX" id="SpltX"
                  placeholder="Split name..." className="p-4" required
                />
              </label>

              <Button size="custom" variant="orange" login
                className="mt-2 outline-none focus:outline-orange-500 focus:outline-1"
              >
                <button className="text-sm disabled:bg-orange-700" disabled={isLoading}>
                  Create new planner
                </button>
              </Button>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
