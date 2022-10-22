import { ContactLinks } from "../components/LoginPage/ContactLinks";
import { FormHeader } from "../components/LoginPage/FormHeader";
import { LoginForm } from "../components/LoginPage/LoginForm";

export function Login() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col gap-12 items-center justify-center">
      <FormHeader />
      <LoginForm />
      <ContactLinks />
    </div>
  )
}
