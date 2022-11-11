import { FormEvent, useRef } from "react";
import * as Dialog from '@radix-ui/react-dialog'

import { Button } from "../Button";

interface CreateNewUserModalProps {
  IsCreateAccModalOpen: boolean;
  setIsCreateAccModalOpen: (a: boolean) => void;
}

export function CreateNewUserModal({ IsCreateAccModalOpen, setIsCreateAccModalOpen }: CreateNewUserModalProps) {
  const NameInput = useRef<HTMLInputElement>(null)
  const EmailInput = useRef<HTMLInputElement>(null)
  const PasswordInput = useRef<HTMLInputElement>(null)
  const ConfirmPasswordInput = useRef<HTMLInputElement>(null)

  const handleCreateNewUser = async (e: FormEvent) => {
    e.preventDefault()

    const Name = NameInput.current?.value
    const Email = EmailInput.current?.value
    const Password = PasswordInput.current?.value
    const ConfirmPassword = ConfirmPasswordInput.current?.value

    if (Password != ConfirmPassword) {
      PasswordInput.current?.setCustomValidity("Passwords don't match")
    } else {
      PasswordInput.current?.setCustomValidity("")
      setIsCreateAccModalOpen(false)
    }
  }

  return (
    <Dialog.Root open={IsCreateAccModalOpen} onOpenChange={setIsCreateAccModalOpen} modal>
      <Dialog.Trigger asChild>
        <span className="font-medium text-xs text-orange-500 underline 
          cursor-pointer transition-all duration-150 ease-in-out
          hover:text-cyan-500 hover:scale-[104%]
          "
        >
          Create account
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
              <Dialog.Title className="text-gray-100 font-medium text-lg">
                Create new account
              </Dialog.Title>
              <Dialog.Close asChild
                className="outline-none focus:text-orange-500"
              >
                <button aria-label="Close"
                  className="text-gray-100 font-medium text-lg select-none"
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
                Name
                <input type="text" name="userName" id="userName"
                  placeholder="John Wick" required ref={NameInput}
                />
              </label>
              <label htmlFor="userEmail">
                Email
                <input type="email" name="userEmail" id="userEmail"
                  placeholder="john_wick@tarasov.com" required ref={EmailInput}
                />
              </label>
              <label htmlFor="userPassword">
                Password
                <input type="password" name="userPassword" id="userPassword"
                  placeholder="**********" required ref={PasswordInput}
                />
              </label>
              <label htmlFor="confirmPassword">
                Confirm password
                <input type="password" name="confirmPassword" id="confirmPassword"
                  placeholder="**********" required ref={ConfirmPasswordInput}
                />
              </label>

              <Button size="lg" variant="orange" className="mt-2" login>
                <button className="text-md">
                  Create account
                </button>
              </Button>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}