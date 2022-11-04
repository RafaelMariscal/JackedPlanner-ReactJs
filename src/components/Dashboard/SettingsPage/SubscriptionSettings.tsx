import clsx from "clsx";
import { AccountProps } from "../../../Pages/Dashboard/Settings";
import DashboardCard from "../DashboardCard";

interface SubscriptionSettingsProps {
  user: AccountProps
}

export function SubscriptionSettings({ user }: SubscriptionSettingsProps) {
  return (
    <DashboardCard title="Subscription:" className="h-full">

      <div className="flex flex-col gap-4 max-w-md">

        <div className="w-full flex items-center justify-between gap-4">
          <span className="text-gray-100 text-sm w-20">Status:</span>

          <div className="flex gap-2">
            <img src="/src/assets/LogoPRO.png" alt="" className="h-9 object-contain" />
            <div className={clsx(
              "h-9 w-48 px-4 rounded-md font-semibold text-gray-800 flex items-center justify-center",
              {
                'bg-cyan-500': user.subscription === "Subscribed",
                'bg-gray-100': user.subscription === "Not subscribed"
              }
            )}>
              {user.subscription}
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-4">
          <span className="text-gray-100 text-sm w-20">
            {user.subscription === "Subscribed" ? `To Expire: ${new Intl.DateTimeFormat('pt-BR').format(new Date())}` : ""}
          </span>

          <div className="flex-1 flex gap-2">

            <button className="
              h-9 w-full rounded-md border-2 bg-gray-800 border-orange-500
              text-gray-100 font-normal drop-shadow-[0_0_.15rem_#FE9016]
              "
            >
              {user.subscription === "Subscribed" ? 'Renew Subscription' : "Get Pro"}
            </button>
          </div>
        </div>
      </div>
    </DashboardCard>
  )
}
