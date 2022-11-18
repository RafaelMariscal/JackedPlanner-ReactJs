import { ContactLinks } from "../ContactLinks";
import { FormHeader } from "./FormHeader";
import { LoginForm } from "./LoginForm";

export function LoginSection() {
  return (
    <div id="login">
      <div className="
        w-screen h-fit py-6 px-4 overflow-hidden
        bg-background-polygons bg-no-repeat bg-cover bg-center
        flex flex-col items-center justify-start gap-12
        "
      >
        <div className="
          bg-gray-800 bg-opacity-80 backdrop-blur-sm
          border border-gray-800
          w-full max-w-screen-2xl rounded-xl
          pt-16 pb-6 px-2
          flex flex-col gap-12 items-center justify-center
          "
        >
          <FormHeader />
          <LoginForm />
          <ContactLinks />
        </div>
      </div>
      <span className="block w-full h-20 bg-gray-800 border-b-8 border-orange-500" />
    </div>
  );
}
