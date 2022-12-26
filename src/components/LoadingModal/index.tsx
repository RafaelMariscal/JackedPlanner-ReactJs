import "./styles.css";
import clsx from "clsx";

interface LoadingModalProps {
  visible: boolean
  fade?: boolean
  component?: boolean
}

export default function LoadingModal({ visible, fade, component }: LoadingModalProps) {

  return (
    <div className={clsx(
      "fixed z-10 w-screen h-screen flex items-center justify-center bg-gray-800 select-none",
      {
        "hidden": visible === false,
        "bg-gray-800 bg-opacity-75": fade === true,
        "w-fit h-fit left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2": component === true
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
