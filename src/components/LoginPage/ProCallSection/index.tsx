import { Button } from "../Button";

interface ProCallSectionProps {
  price: number
}

export function ProCallSection({ price }: ProCallSectionProps) {
  const acessList = [
    'All the Jacked Planners in the community',
    'Save unlimited Training Slips',
    'Track your workout progress',
    'Get workout data, section by section!',
  ]

  return (
    <div className="relative">
      <div className="
      px-4 mt-9 m-auto h-[17.5rem] w-full max-w-[1020px] bg-gray-800
      flex items-center justify-around
      before:content-[''] before:block before:absolute
      before:w-full before:h-[15.625rem] before:bg-orange-500
      before:z-[-1] before:top-[50%] before:-translate-y-[50%]
    "
      >
        <div className="flex flex-col items-center justify-center">
          <img src="/src/assets/LogoPro.png" alt="" className="w-[18.75rem]" />
          <p className="font-medium text-gray-100 text-4xl relative"
          >
            Only ${price}<span
              className="
            text-gray-100 text-sm ml-3
            before:content-['......'] before:text-transparent before:bg-price-slash 
            before:bg-contain before:bg-no-repeat before:absolute
            before:bottom-4 before:right-[2.45rem]
            "
            >
              month
            </span>
          </p>
          <Button variant="dark" size="lg" className="font-normal hover:drop-shadow-[0rem_0rem_.2rem_#FE9016]">
            Get <span className="font-semibold text-orange-500">PRO</span>
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-gray-100 text-lg">With <span className="font-semibold text-orange-500">Jacked Planner PRO</span> you can access:</h2>
          <ul className=" text-gray-100 flex flex-col gap-4"
          >
            {
              acessList.map((item) => {
                return (
                  <li className="leading-tight ml-5  relative
                    before:content-[''] before:block before:absolute 
                    before:w-2 before:h-2 before:bg-orange-500 
                    before:-left-5 before:top-[50%] before:-translate-y-[50%]
                    "
                  >
                    {item}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
