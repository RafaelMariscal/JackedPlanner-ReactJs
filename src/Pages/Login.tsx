import { ContactLinks } from "../components/LoginPage/ContactLinks";
import { FormHeader } from "../components/LoginPage/FormHeader";
import { Header } from "../components/LoginPage/Header";
import { LoginForm } from "../components/LoginPage/LoginForm";

export function Login() {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <div className="
        w-screen h-fit pt-12 pb-12 overflow-hidden 
        bg-background-polygons bg-no-repeat bg-cover bg-center 
        flex flex-col items-center justify-start gap-12
      ">
        <div className="
        bg-gray-800 bg-opacity-80 
        w-screen max-w-screen-2xl rounded-xl 
        pt-16 pb-6 
        flex flex-col gap-12 items-center justify-center
        ">
          <FormHeader />
          <LoginForm />
          <ContactLinks />
        </div>
      </div>
    </div>
  )
}
