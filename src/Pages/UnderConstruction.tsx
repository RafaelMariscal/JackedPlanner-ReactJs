
export function UnderConstruction() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-4/5 h-4/5 flex items-center justify-center relative
        "
      >
        <img src="/src/assets/stripe.png" alt="" className="
          absolute top-0 -translate-y-1/2 w-screen rotate-1 
          "
        />
        <img src="/src/assets/stripe.png" alt="" className="
          absolute bottom-0 translate-y-1/2 w-screen -rotate-1
          "
        />

        <div className="w-4/5 h-full flex items-center justify-center
           bg-gray-800 bg-opacity-60 font-semibold text-4xl text-gray-100
           "
        >
          <p className="max-w-[20ch] text-center drop-shadow-lg">
            Sorry, this session is currently unavailable...
          </p>
        </div>
      </div>
    </div>
  )
}
