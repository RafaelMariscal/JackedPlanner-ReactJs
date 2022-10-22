import { ContactLinks } from "../components/LoginPage/ContactLinks";
import { FormHeader } from "../components/LoginPage/FormHeader";
import { Header } from "../components/LoginPage/Header";
import { LoginForm } from "../components/LoginPage/LoginForm";

export function Login() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col items-center justify-start gap-12">
      <Header />
      <div className="bg-gray-800 bg-opacity-80 w-screen max-w-screen-2xl rounded-xl pt-12 pb-6 flex flex-col gap-12 items-center justify-center">
        <FormHeader />
        <LoginForm />
        <ContactLinks />
      </div>
    </div>
  )
}
