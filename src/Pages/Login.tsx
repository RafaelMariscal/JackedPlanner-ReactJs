import { ContactLinks } from "../components/LoginPage/ContactLinks";
import { LoginForm } from "../components/LoginPage/LoginForm";

export function Login() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col gap-12 items-center justify-center">
      <LoginForm />
      <ContactLinks />
    </div>
  )
}
