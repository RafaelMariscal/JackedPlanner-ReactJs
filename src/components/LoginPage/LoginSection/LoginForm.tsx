import { FormEvent, useState } from "react";
import { FacebookLogo } from "../../../assets/icons/FacebookLogo";
import { GithubLogo } from "../../../assets/icons/GithubLogo";
import { GoogleLogo } from "../../../assets/icons/GoogleLogo";
import { Button } from "../Button";
import TextInput from "../TextInput";
import { BrandButton } from "./BrandButton";
import { useUserContext } from "../../../contexts/userContext/hook";
import { CreateNewUserModal } from "../Modals/CreateNewUserModal";
import { ForgotPasswordModal } from "../Modals/ForgotPasswordModal";


type ProviderProps = "emailAndPassword" | "github" | "google" | "facebook" | "anonymous"

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
    signInWithFacebook,
    signInAnonymously,
  } = useUserContext()

  const handleAuthLogin = async (provider: ProviderProps) => {
    setMessage("");
    setIsLoading(true);
    let promiseResultMessage = ''
    switch (provider) {
      case "emailAndPassword":
        promiseResultMessage = await signInWithEmail({ email, password })
        break;
      case "github":
        promiseResultMessage = await signInWithGithub();
        break;
      case "google":
        promiseResultMessage = await signInWithGoogle();
        break;
      case "facebook":
        promiseResultMessage = await signInWithFacebook();
        break;
      default:
        promiseResultMessage = await signInAnonymously();
        break;
    };
    promiseResultMessage !== "sign in successfull" ?
      setMessage(`Login Failed: ${String(promiseResultMessage)}`) : null
    setIsLoading(false);
  }

  return (
    <div id="loginForm"
      className="w-full max-w-[22.5rem] flex flex-col gap-4 items-center justify-center"
    >
      <form onSubmit={(e: FormEvent) => {
        e.preventDefault();
        handleAuthLogin("emailAndPassword");
      }}
        className="w-full flex flex-col gap-4 items-center justify-center"
      >

        <TextInput type="email" label="Email" placeholder="email@exemple.com"
          required value={email} setInputValue={setEmail} />

        <TextInput type="password" label="Password" placeholder="********"
          required value={password} setInputValue={setPassword} />

        <div className="w-full">
          <Button variant="orange" size="lg" login
            className="disabled:bg-orange-700 disabled:border-transparent">
            <button disabled={IsLoading} >Login</button>
          </Button>

          {Message &&
            <div className="mt-2 ml-2 flex items-center gap-1">
              <img src="/src/assets/icons/Info.png" alt="" className="w-5" />
              <span className="text-xs text-gray-200">{Message}</span>
            </div>}
        </div>

      </form>

      <div className="flex justify-around w-full tracking-wide underline-offset-2">
        <ForgotPasswordModal
          IsForgotAccModalOpen={IsForgotAccModalOpen}
          setIsForgotAccModalOpen={setIsForgotAccModalOpen}
        />

        <div className="flex gap-1">
          <span className="text-xs text-gray-100">Need a new account? </span>
          <CreateNewUserModal
            IsCreateAccModalOpen={IsCreateAccModalOpen}
            setIsCreateAccModalOpen={setIsCreateAccModalOpen}
          />
        </div>
      </div>

      <BrandButton.Root disabled={IsLoading} variant="Github"
        onClick={() => { handleAuthLogin("github") }}
      >
        <BrandButton.Icon>
          <GithubLogo />
        </BrandButton.Icon>
      </BrandButton.Root>

      <BrandButton.Root disabled={IsLoading} variant="Google"
        onClick={() => { handleAuthLogin("google") }}
      >
        <BrandButton.Icon>
          <GoogleLogo />
        </BrandButton.Icon>
      </BrandButton.Root>

      <BrandButton.Root disabled={IsLoading} variant="Facebook"
        onClick={() => { handleAuthLogin('facebook') }}
      >
        <BrandButton.Icon>
          <FacebookLogo />
        </BrandButton.Icon>
      </BrandButton.Root>

      <BrandButton.Root disabled={IsLoading} variant="Anonymous"
        onClick={() => { handleAuthLogin("anonymous") }}
      >
        <BrandButton.Icon>
          <img src="/src/assets/icons/Anonymous.png" alt="" className="w-6" />
        </BrandButton.Icon>
      </BrandButton.Root>
    </div>
  )
}