import { ImageCard } from "../../components/Dashboard/ImageCard";
import { AccountSettings } from "../../components/Dashboard/SettingsPage/AccountSettings";
import { PasswordSettigns } from "../../components/Dashboard/SettingsPage/PasswordSettigns";
import { SubscriptionSettings } from "../../components/Dashboard/SettingsPage/SubscriptionSettings";

export interface AccountProps {
  userName: string;
  email: string;
  gender: "male" | "female" | "Prefer not to respond";
  subscription: "Subscribed" | "Not subscribed"
  altEmail?: string;
  birthday?: Date;
}

const accountSettings: AccountProps = {
  userName: "Rafael Mariscal",
  email: "rafael@teste.com",
  gender: "male",
  subscription: "Subscribed",
  altEmail: "rafael_alt@teste.com",
  birthday: new Date(),
};

export function Settings() {
  return (
    <div className="h-full flex gap-4" >

      <div className="h-full w-full max-w-3xl flex flex-col gap-2 relative" >
        <AccountSettings user={accountSettings} />

        <PasswordSettigns />

        <SubscriptionSettings user={accountSettings} />
      </div>

      <ImageCard variant="girl" />

    </div>
  );
}
