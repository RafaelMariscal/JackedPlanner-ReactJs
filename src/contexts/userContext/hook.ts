import { useContext } from "react";
import { UserContext } from ".";

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
