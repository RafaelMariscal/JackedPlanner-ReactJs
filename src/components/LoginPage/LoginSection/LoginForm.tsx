import { FormEvent, useEffect, useState } from "react";
import { AppleLogo } from "../../../assets/icons/AppleLogo";
import { FacebookLogo } from "../../../assets/icons/FacebookLogo";
import { GithubLogo } from "../../../assets/icons/GithubLogo";
import { GoogleLogo } from "../../../assets/icons/GoogleLogo copy";
import { Button } from "../Button";
import TextInput from "../TextInput";
import { BrandButton } from "./BrandButton";
import { useUserContext } from "../../../contexts/userContext/hook";

export function LoginForm() {
  const {
    signInWithGoogle,
    signInWithGithub,
    signInWithApple,
    signInWithFacebook
  } = useUserContext()


  const handleSubmit = (event: FormEvent) => { };

  return (
    <form id="loginForm" onSubmit={() => handleSubmit}
      className="max-w-[22.5rem] w-full flex flex-col gap-4 items-center justify-center"
    >
      <TextInput label="Email" type="email" placeholder="email@exemple.com" required
      />

      <TextInput label="Password" type="password" placeholder="********" required />

      <Button variant="orange" size="lg" login>
        <button>Login</button>
      </Button>

      <div className="flex gap-4">
        <span className="font-medium text-xs text-orange-500 underline cursor-pointer transition-all duration-150 hover:brightness-95 ease-in-out">
          Forgot password
        </span>
        <span className="font-medium text-xs text-orange-500 underline cursor-pointer transition-all duration-150 hover:brightness-95 ease-in-out">
          Create account
        </span>
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
    </form>
  )
}