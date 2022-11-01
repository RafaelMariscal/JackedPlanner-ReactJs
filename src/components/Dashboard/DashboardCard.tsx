import clsx from "clsx";
import { ReactNode } from "react"

interface DashboardCardProps {
  title: string;
  subtitle?: string;
  extend?: boolean
  className?: string;
  classNameCard?: string;
  children: ReactNode;
}

export default function DashboardCard({ title, subtitle, extend, className, classNameCard, children }: DashboardCardProps) {
  return (
    <div className={clsx(
      "flex flex-col gap-1",
      {
        'flex-1': extend
      },

      className
    )}>
      <div className="flex gap-1">
        <h2 className="font-semibold leading-tight underline text-gray-800 ml-2"
        >
          {title}
        </h2>
        <h2 className="font-semibold leading-tight underline text-gray-800 ml-2"
        >
          {subtitle}
        </h2>
      </div>
      <div className={clsx(
        "w-full h-full rounded-lg px-6 py-4 bg-gray-800 drop-shadow-[0_4px_.5rem_rgba(0,0,0,0.25)] border border-orange-500",
        classNameCard
      )}
      >
        {children}
      </div>
    </div>

  )
}
