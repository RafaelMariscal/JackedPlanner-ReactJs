import { FormEvent, useState } from "react";
import { AppleLogo } from "../../../assets/icons/AppleLogo";
import { FacebookLogo } from "../../../assets/icons/FacebookLogo";
import { GithubLogo } from "../../../assets/icons/GithubLogo";
import { GoogleLogo } from "../../../assets/icons/GoogleLogo";
import { Button } from "../Button";
import TextInput from "../TextInput";
import { BrandButton } from "./BrandButton";
import { useUserContext } from "../../../contexts/userContext/hook";
import { CreateNewUserModal } from "../Modals/CreateNewUserModal";



export function LoginForm() {
  const [IsCreateAccModalOpen, setIsCreateAccModalOpen] = useState(false)
  const [IsForgotAccModalOpen, setIsForgotAccModalOpen] = useState(false)
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const { signInWithEmail } = useUserContext()

  const {
    signInWithGoogle,
    signInWithGithub,
    signInWithApple,
    signInWithFacebook
  } = useUserContext()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    signInWithEmail(Email, Password)
  };

  return (
    <div id="loginForm"
      className="w-full max-w-[22.5rem] flex flex-col gap-4 items-center justify-center"
    >
      <form onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 items-center justify-center"
      >

        <TextInput type="email" label="Email" placeholder="email@exemple.com"
          required value={Email} setInputValue={setEmail}
        />

        <TextInput type="password" label="Password" placeholder="********"
          required value={Password} setInputValue={setPassword}
        />

        <Button variant="orange" size="lg" login>
          <button>Login</button>
        </Button>
      </form>

      <div className="flex gap-4">
        <span
          className="
          font-medium text-xs text-orange-500 underline cursor-pointer transition-all duration-150 ease-in-out
          hover:text-cyan-500 hover:scale-[104%]
          "
        >
          Forgot password
        </span>


        <CreateNewUserModal
          IsCreateAccModalOpen={IsCreateAccModalOpen}
          setIsCreateAccModalOpen={setIsCreateAccModalOpen}
        />


      </div>

      <BrandButton.Root variant="Github" onClick={signInWithGithub}>
        <BrandButton.Icon>
          <GithubLogo />
        </BrandButton.Icon>
      </BrandButton.Root>
      <BrandButton.Root variant="Apple" onClick={signInWithApple}>
        <BrandButton.Icon>
          <AppleLogo />
        </BrandButton.Icon>
      </BrandButton.Root>
      <BrandButton.Root variant="Google" onClick={signInWithGoogle}>
        <BrandButton.Icon>
          <GoogleLogo />
        </BrandButton.Icon>
      </BrandButton.Root>
      <BrandButton.Root variant="Facebook" onClick={signInWithFacebook}>
        <BrandButton.Icon>
          <FacebookLogo />
        </BrandButton.Icon>
      </BrandButton.Root>
    </div>
  )
}