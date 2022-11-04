import clsx from "clsx";
import DashboardCard from "./DashboardCard";
interface ImageCardProps {
  variant: 'girl' | 'guy'
}
export function ImageCard({ variant }: ImageCardProps) {
  return (
    <DashboardCard title="hidden" hideTittle className="w-full relative"
      classNameCard={clsx(
        "w-full max-w-[440px] w-full overflow-hidden bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center gap-1 rounded-lg border-2 border-orange-500",
        {
          'bg-crossfitGirl': variant === "girl",
          'bg-crossfitGuy': variant === 'guy'
        }
      )}
    >
      <span className="
            text-gray-100 text-[4.5rem] font-semibold leading-none
            drop-shadow-[.15rem_.15rem_.1rem_rgba(0,0,0,0.85)] -translate-x-[30%]
            "
      >
        SHAPE
      </span>

      <span className="relative
            text-gray-100 text-[4.5rem] font-semibold leading-none
            drop-shadow-[.15rem_.15rem_.1rem_rgba(0,0,0,0.85)]
            before:absolute before:content-[''] before:bg-orange-500
            before:h-2 before:w-[5ch] before:-left-[125%] before:top-[50%]
            before:drop-shadow-lg
            after:absolute after:content-[''] after:bg-orange-500
            after:h-2 after:w-[5ch] after:-right-[125%] after:top-[50%]
            after:drop-shadow-lg
            
            "
      >
        YOUR
      </span>

      <span className="
            text-gray-100 text-[4.5rem] font-semibold leading-none
            drop-shadow-[.15rem_.15rem_.1rem_rgba(0,0,0,0.85)] translate-x-[30%]
            "
      >
        BODY
      </span>
    </DashboardCard>
  )
}
