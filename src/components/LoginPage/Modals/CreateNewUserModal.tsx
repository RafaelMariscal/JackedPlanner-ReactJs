import { FormEvent, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../Button";
import { useUserContext } from "../../../contexts/userContext/hook";

interface CreateNewUserModalProps {
  IsCreateAccModalOpen: boolean;
  setIsCreateAccModalOpen: (a: boolean) => void;
}

export function CreateNewUserModal({ IsCreateAccModalOpen, setIsCreateAccModalOpen }: CreateNewUserModalProps) {
  const { createNewUser } = useUserContext();

  const NameInput = useRef<HTMLInputElement>(null);
  const EmailInput = useRef<HTMLInputElement>(null);
  const PasswordInput = useRef<HTMLInputElement>(null);
  const ConfirmPasswordInput = useRef<HTMLInputElement>(null);

  const [IsLoading, setIsLoading] = useState(false);
  const [Message, setMessage] = useState("");

  const handleCreateNewUser = async (e: FormEvent) => {
    e.preventDefault();
    const name = String(NameInput.current?.value);
    const email = String(EmailInput.current?.value);
    const password = String(PasswordInput.current?.value);
    const confirmPassword = String(ConfirmPasswordInput.current?.value);

    if (password != confirmPassword) {
      return setMessage("Passwords don't match");
    }

    setIsLoading(true);
    const response = await createNewUser({ email, password, name });
    if (response === "New user created") {
      setIsCreateAccModalOpen(false);
    } else {
      setMessage(`Sign up failed: ${response}`);
    }
    setIsLoading(false);
  };

  return (
    <Dialog.Root open={IsCreateAccModalOpen} modal
      onOpenChange={() => {
        setIsCreateAccModalOpen(!IsCreateAccModalOpen);
        setMessage("");
      }} >

      <Dialog.Trigger asChild>
        <span className="font-medium text-xs text-gray-100 underline
          cursor-pointer transition-all duration-150 ease-in-out
          hover:text-cyan-500 hover:scale-[104%]
          "
        >
          Sing up!
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="
              bg-gray-opac-35 fixed inset-0 flex items-center justify-center
              "
        >
          <Dialog.Content className="
                w-full max-w-sm p-6 pt-4 bg-gray-800 border border-gray-900 rounded-lg
                drop-shadow-[0_0_.25rem_#000] flex flex-col items-center
                justify-center animate-appear duration-50
                "
          >
            <div className="w-full mb-6 flex items-center justify-between">
              <Dialog.Title className="text-gray-100 font-medium leading-tight">
                Create new account
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

            <form onSubmit={handleCreateNewUser} className="
                w-full flex flex-col gap-4

                [&_input]:h-11 [&_input]:rounded-md [&_input]:bg-gray-100 [&_input]:pl-4
                [&_input]:text-gray-800 [&_input]:text-sm [&_input]:font-medium
                [&_input]:outline-none focus:[&_input]:outline-1
                focus:[&_input]:outline-orange-500
                focus:[&_input]:outline-offset-2

                [&_label]:flex [&_label]:flex-col [&_label]:gap-1
                [&_label]:text-gray-100 [&_label]:text-sm
              "
            >
              <label htmlFor="userName">
                <span className="ml-1">Name</span>
                <input type="text" name="userName" id="userName"
                  placeholder="John Wick" required ref={NameInput}
                />
              </label>
              <label htmlFor="userEmail">
                <span className="ml-1">Email</span>
                <input type="email" name="userEmail" id="userEmail"
                  placeholder="john_wick@tarasov.com" required ref={EmailInput}
                />
              </label>
              <label htmlFor="userPassword">
                <span className="ml-1">Password</span>
                <input type="password" name="userPassword" id="userPassword"
                  placeholder="**********" minLength={6} required ref={PasswordInput}
                />
              </label>
              <label htmlFor="confirmPassword">
                <span className="ml-1">Confirm password</span>
                <input type="password" name="confirmPassword" id="confirmPassword"
                  placeholder="**********" minLength={6} required ref={ConfirmPasswordInput}
                />
                {Message && <span className="text-xs ml-2 text-gray-200">{Message}</span>}
              </label>

              <Button size="lg" variant="orange" login
                className="mt-2 outline-none focus:outline-orange-500 focus:outline-1"
              >
                <button className="text-md disabled:bg-orange-700" disabled={IsLoading}>
                  Create account
                </button>
              </Button>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
