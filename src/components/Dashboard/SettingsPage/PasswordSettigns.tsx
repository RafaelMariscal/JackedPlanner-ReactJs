import clsx from "clsx";
import { FormEvent, useState } from "react";

import DashboardCard from "../DashboardCard";

export function PasswordSettigns() {
  const [isUserEditingPassword, setIsUserEditingPassword] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <DashboardCard title="Password:">
      <form onSubmit={handleSubmit} className="text-sm text-gray-100
        flex flex-col gap-4 [&_span]:w-[140px]
        [&_input]:flex-1 [&_input]:h-full [&_input]:rounded-md
        [&_input]:px-4 [&_input]:text-gray-800 [&_input]:font-medium
        "
      >
        <div className="flex items-center gap-4 w-fit">
          <p className="block">
            Do you want to <strong className="font-medium">CHANGE</strong> your password?
          </p>
          <button type="button" onClick={() => setIsUserEditingPassword(!isUserEditingPassword)} className={clsx(
            "w-28 h-9 rounded-md border-2 border-orange-500 text-gray-800 font-semibold transition-all duration-150 hover:bg-opacity-95",
            {
              "bg-gray-100": isUserEditingPassword === false,
              "bg-cyan-500 border-transparent": isUserEditingPassword === true,
            }
          )}
          >
            Reset
          </button>

        </div>
        <label htmlFor="id_current_password" className="w-full h-9 flex items-center gap-2">
          <span>Current Password:</span>
          <input type="password" name="password" id="id_current_password"
            placeholder="********" required disabled={!isUserEditingPassword}
            className="h-full rounded-md px-4 text-gray-800 disabled:bg-gray-200" />
        </label>

        <label htmlFor="id_new_password" className="w-full h-9 flex items-center gap-2">
          <span>New Password:</span>
          <input type="password" name="new_password" id="id_new_password"
            placeholder="********" required disabled={!isUserEditingPassword}
            className="w-full h-full rounded-md px-4 text-gray-800 disabled:bg-gray-200" />
        </label>

        <label htmlFor="id_confirm_password" className="w-full h-9 flex items-center gap-2">
          <span>Confirm Password:</span>
          <input type="password" name="password" id="id_confirm_password"
            placeholder="********" required disabled={!isUserEditingPassword}
            className="w-full h-full rounded-md px-4 text-gray-800 disabled:bg-gray-200" />
        </label>

        <button className="w-full h-9 bg-orange-500 rounded-md text-gray-800 font-semibold
          transition-all duration-150 hover:bg-opacity-95
          "
        >
          Confirm password changes
        </button>
      </form>
    </DashboardCard>
  );
}
