import { ContactLinks } from "../components/LoginPage/ContactLinks";
import { FeaturesSection } from "../components/LoginPage/FeaturesSection";
import { GoalsSection } from "../components/LoginPage/GoalsSection";
import { Header } from "../components/LoginPage/Header";
import { LoginSection } from "../components/LoginPage/LoginSection/Index";
import { ProCallSection } from "../components/LoginPage/ProCallSection";
import { ProUserAdvantages } from "../components/LoginPage/ProUserAdvantages";

export function Login() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <LoginSection />
      <GoalsSection />
      <FeaturesSection />
      <ProCallSection price={4.99} />
      <ProUserAdvantages price={4.99} />
    </div>
  )
}



/////////////       [ ] Pro User Advanteges
/////////////
/////////////       [ ] Footer
/////////////
/////////////       [ ] GoToTop button
/////////////