import { FormEvent, useRef } from "react";
import { AccountProps } from "../../../Pages/Dashboard/Settings";
import DashboardCard from "../DashboardCard";

interface AccountSettingsProps {
  user: AccountProps
}

export function AccountSettings({ user }: AccountSettingsProps) {

  // SET THE STATES OR FORM DATA MANAGER

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <DashboardCard title="Account:">
      <form onSubmit={handleSubmit} className="text-sm text-gray-100
        flex flex-col gap-4
        "
      >
        <label htmlFor="id_userName" className="w-full h-9 flex items-center gap-2
          [&_span]:w-24 [&_input]:w-full [&_input]:h-full [&_input]:rounded-md
          [&_input]:px-4 [&_input]:text-gray-800 [&_input]:font-medium
          ">
          <span>User Name:</span>
          <input type="text" name="userName" id="id_userName"
            className="w-full h-full rounded-md px-4 text-gray-800" />
        </label>

        <label htmlFor="id_email" className="w-full h-9 flex items-center gap-2
          [&_span]:w-24 [&_input]:w-full [&_input]:h-full [&_input]:rounded-md
          [&_input]:px-4 [&_input]:text-gray-800 [&_input]:font-medium
          ">
          <span>Email:</span>
          <input type="text" name="email" id="id_email"
            className="w-full h-full rounded-md px-4 text-gray-800" />
        </label>

        <label htmlFor="id_altEmail" className="w-full h-9 flex items-center gap-2
          [&_span]:w-24 [&_input]:w-full [&_input]:h-full [&_input]:rounded-md
          [&_input]:px-4 [&_input]:text-gray-800 [&_input]:font-medium
          ">
          <span>Alt. Email:</span>
          <input type="text" name="altEmail" id="id_altEmail"
            className="w-full h-full rounded-md px-4 text-gray-800" />
        </label>

        <label htmlFor="id_birthday" className="w-full h-9 flex items-center gap-2
          [&_span]:w-24 [&_input]:w-full [&_input]:h-full [&_input]:rounded-md
          [&_input]:px-4 [&_input]:text-gray-800 [&_input]:font-medium
          ">
          <span>Birthday:</span>
          <input type="date" name="birthday" id="id_birthday"
            className="w-full h-full rounded-md px-4 text-gray-800" />
        </label>

        <label htmlFor="id_gender" className="w-full h-9 flex items-center gap-2
          [&_span]:w-24 [&_input]:w-full [&_input]:h-full [&_input]:rounded-md
          [&_input]:px-4 [&_input]:text-gray-800 [&_input]:font-medium
          ">
          <span>Gender:</span>
          <input type="text" name="gender" id="id_gender"
            className="w-full h-full rounded-md px-4 text-gray-800" />
        </label>

        <button className="w-full h-9 bg-orange-500 rounded-md text-gray-800 font-semibold
          transition-all duration-150 hover:bg-opacity-95
          "
        >
          Confirm account changes
        </button>
      </form>
    </DashboardCard>
  );
}
