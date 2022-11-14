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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [IsLoading, setIsLoading] = useState(false)
  const [Message, setMessage] = useState('')

  const [IsCreateAccModalOpen, setIsCreateAccModalOpen] = useState(false)
  const [IsForgotAccModalOpen, setIsForgotAccModalOpen] = useState(false)

  const { signInWithEmail } = useUserContext()

  const {
    signInWithGoogle,
    signInWithGithub,
    signInWithApple,
    signInWithFacebook
  } = useUserContext()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setMessage("");
    setIsLoading(true);
    const result = await signInWithEmail({ email, password })
    result !== "sign in successfull" ?
      setMessage(`Login Failed: ${String(result)}`) : null
    setIsLoading(false);
  };

  return (
    <div id="loginForm"
      className="w-full max-w-[22.5rem] flex flex-col gap-4 items-center justify-center"
    >
      <form onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 items-center justify-center"
      >

        <TextInput type="email" label="Email" placeholder="email@exemple.com"
          required value={email} setInputValue={setEmail}
        />

        <TextInput type="password" label="Password" placeholder="********"
          required value={password} setInputValue={setPassword}
        />
        <div className="w-full text-center">
          <Button variant="orange" size="lg" login
            className="disabled:bg-orange-700 disabled:border-transparent">
            <button disabled={IsLoading} >Login</button>
          </Button>
          {Message && <span className="text-xs ml-2 text-gray-200">{Message}</span>}
        </div>
      </form>

      <div className="flex justify-around w-full tracking-wide underline-offset-2">
        <span
          className="
          text-xs text-gray-100 underline cursor-pointer transition-all duration-150 ease-in-out
          hover:text-cyan-500 hover:scale-[104%]
          "
        >
          Forgot password?
        </span>

        <div className="flex gap-1">
          <span className="text-xs text-gray-100">Need a new account? </span>

          <CreateNewUserModal
            IsCreateAccModalOpen={IsCreateAccModalOpen}
            setIsCreateAccModalOpen={setIsCreateAccModalOpen}
          />
        </div>


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