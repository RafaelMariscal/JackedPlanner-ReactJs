import { ReactNode } from "react"

interface DashboardCardProps {
  title: string
  subtitle?: string
  children: ReactNode
}

export default function DashboardCard({ title, subtitle, children }: DashboardCardProps) {
  return (
    <div className="flex-1 flex flex-col gap-1'">
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
      <div className="w-full h-full rounded-lg px-6 py-4 bg-gray-800 
        drop-shadow-[0_4px_.5rem_rgba(0,0,0,0.25)] border border-orange-500
      "
      >
        {children}
      </div>
    </div>

  )
}
