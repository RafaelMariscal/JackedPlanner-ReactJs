import { ContactLinks } from "./ContactLinks";

export function Footer() {
  return (
    <div className="bg-gray-800 w-full py-9 flex items-center justify-between">
      <div className="flex justify-center gap-20 w-full max-w-[1020px] m-auto">
        <div className=" flex flex-col gap-1">
          <img src="/src/assets/Logo.png" alt=""
            className="w-[282px]"
          />
          <div className="w-[283px]">
            <p className="font-medium text-gray-100 text-[1.375rem] leading-tight"
            >
              MAKE YOUR BEST VERSION
            </p>

            <p className="font-medium text-gray-100 text-[1.625rem] leading-tight"
            >
              A <span className="font-semibold text-orange-500"
              >
                SUPER JACKED
              </span>  ONE!
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-medium text-lg text-gray-100 max-w-lg">
            Webapp build using React, Tailwind and Firebase tools. Check it out my portfolio for more projects!
          </p>
          <ContactLinks />
        </div>
      </div>
    </div>
  )
}
