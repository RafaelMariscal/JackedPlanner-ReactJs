import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className='
      w-screen h-screen
      bg-background-polygons bg-no-repeat bg-cover bg-center
      flex items-center justify-center
      '
    >
      <div className="max-w-screen-md mt-[8rem] relative">
        <div className="flex flex-col items-center justify-center gap-4
              w-3/5 px-6 py-4 bg-gray-100 border border-gray-800
              drop-shadow-[1rem_1rem_0_#343C3F] absolute right-[50%] 
              translate-x-1/2 -translate-y-[8rem]
              "
        >
          <div className="flex flex-col items-center justify-center gap-2
                text-gray-800 font-semibold
                "
          >
            <span className="text-[4rem] leading-none">
              404
            </span>
            <p className="text-[2.5rem] leading-none">
              Page not Found...
            </p>
            <p className="text-lg text-center max-w-md mt-[2px] ">
              The page you requested could not be found. Please, go back to home our homepage.
            </p>
          </div>

          <Link to={'dashboard/'} className=" transition-all
                flex items-center justify-center w-full max-w-[240px] h-9 
                rounded-md bg-gray-800 font-medium text-gray-100
                hover:bg-cyan-500 hover:text-gray-800 hover:font-semibold
                "
          >
            Back to Homepage
          </Link>
        </div>

        <img src="/src/assets/pageNotFoundImg.png" alt="" />
      </div>

    </div>
  )
}
