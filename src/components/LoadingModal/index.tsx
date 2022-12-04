import "./styles.css";
import clsx from "clsx";

interface LoadingModalProps{
  visible: boolean
  fade?: boolean
}

export default function LoadingModal({visible, fade}:LoadingModalProps) {

  return (
    <div className={clsx(
      "absolute z-10 w-screen h-screen flex items-center justify-center bg-gray-800 select-none",
      {
        "hidden": visible === false,
        "bg-gray-800 bg-opacity-75 -top-7 pb-9": fade === true,
      }
    )}
    >

      <span className="loader"><span className="loader-inner"></span></span>
      <span className="text-xl ml-4 text-gray-100 font-medium drop-shadow-xl">
        Loading...
      </span>
    </div>
  );
}
