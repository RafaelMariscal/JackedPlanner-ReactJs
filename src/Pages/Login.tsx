import LoadingModal from "../components/LoadingModal";
import { FeaturesSection } from "../components/LoginPage/FeaturesSection";
import { Footer } from "../components/LoginPage/Footer";
import { GoalsSection } from "../components/LoginPage/GoalsSection";
import { GoTop } from "../components/LoginPage/GoTop";
import { Header } from "../components/LoginPage/Header";
import { LoginSection } from "../components/LoginPage/LoginSection/Index";
import { ProCallSection } from "../components/LoginPage/ProCallSection";
import { ProUserAdvantages } from "../components/LoginPage/ProUserAdvantages";
import { useUserContext } from "../contexts/userContext/hook";

export function Login() {
  const { isLoading } = useUserContext();
  return (
    <div className="overflow-x-hidden">
      <LoadingModal visible={isLoading} fade/>

      <GoTop href="#header" />
      <Header />
      <LoginSection />
      <GoalsSection />
      <FeaturesSection />
      <ProCallSection price={4.99} />
      <ProUserAdvantages price={4.99} />
      <Footer />
    </div>
  );
}
