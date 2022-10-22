import { ContactLinks } from "../components/LoginPage/ContactLinks";
import { GoalsSection } from "../components/LoginPage/GoalsSection";
import { Header } from "../components/LoginPage/Header";
import { LoginSection } from "../components/LoginPage/LoginSection/Index";

export function Login() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <LoginSection />
      <GoalsSection />
    </div>
  )
}
