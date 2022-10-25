import { Button } from "../Button"


interface ProCallSectionProps {
  price: number
}

export function ProUserAdvantages({ price }: ProCallSectionProps) {
  return (
    <div className="max-w-[1020px] m-auto py-10 flex items-center justify-around">
      <img src="/src/assets/DashboardImg2.png" alt="" />

      <div className="flex flex-col gap-[1.125rem] max-w-md">
        <h2 className="font-bold text-xl text-gray-800">
          PRO USER ADVANTEGES
        </h2>

        <div className="flex flex-col gap-4 [&_p]:font-medium">
          <p>
            A propper dashboard, with the most usefull data, providing the best workout management and control.
          </p>
          <p>
            PRO users can access our cummunity, were they can SHARE, VALUATE and SAVE the best workout slips.
          </p>
          <p>
            Also, only the PRO users can TRACK and SHARE YOUR RESULTS during the weeks.
          </p>
        </div>

        <p className="
          font-medium text-gray-800 text-2xl relative"
        >
          Sign up for Only ${price}<span className="
            text-gray-800 text-sm ml-3
            before:content-['......'] before:text-transparent before:bg-price-slash
            before:bg-contain before:bg-no-repeat before:absolute
            before:bottom-3 before:right-[4.75rem]
            "
          >
            month
          </span>
        </p>

        <Button variant="dark" size="lg" className="font-normal max-w-[420px]">
          Get <span className="font-semibold text-orange-500">PRO</span>
        </Button>

      </div>
    </div>
  )
}
