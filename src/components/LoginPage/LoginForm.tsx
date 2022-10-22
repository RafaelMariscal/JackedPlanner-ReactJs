import { AppleLogo } from "../../assets/icons/AppleLogo";
import { FacebookLogo } from "../../assets/icons/FacebookLogo";
import { GithubLogo } from "../../assets/icons/GithubLogo";
import { GoogleLogo } from "../../assets/icons/GoogleLogo copy";
import { BrandButton } from "./BrandButton";
import { Button } from "./Button";
import TextInput from "./TextInput";

export function LoginForm() {
  return (
    <form className="max-w-[22.5rem] w-full flex flex-col gap-4 items-center justify-center">
      <TextInput label="Email" type={"email"} placeholder="email@exemple.com" />

      <TextInput label="Password" type={"password"} placeholder="********" />

      <Button variant="orange" size="lg">
        Login
      </Button>

      <div className="flex gap-4">
        <span className="font-medium text-xs text-orange-500 underline cursor-pointer transition-all duration-150 hover:brightness-95 ease-in-out">
          Forgot password
        </span>
        <span className="font-medium text-xs text-orange-500 underline cursor-pointer transition-all duration-150 hover:brightness-95 ease-in-out">
          Create account
        </span>
      </div>

      <BrandButton.Root variant="Github">
        <BrandButton.Icon>
          <GithubLogo />
        </BrandButton.Icon>
      </BrandButton.Root>
      <BrandButton.Root variant="Apple">
        <BrandButton.Icon>
          <AppleLogo />
        </BrandButton.Icon>
      </BrandButton.Root>
      <BrandButton.Root variant="Google">
        <BrandButton.Icon>
          <GoogleLogo />
        </BrandButton.Icon>
      </BrandButton.Root>
      <BrandButton.Root variant="Facebook">
        <BrandButton.Icon>
          <FacebookLogo />
        </BrandButton.Icon>
      </BrandButton.Root>
    </form>
  )
}