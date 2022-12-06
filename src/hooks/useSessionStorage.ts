import { useCallback, useState } from "react";

export function useSessionStorage<T>(key:string , initalValue: T){
  const [state, setState] = useState(()=>{
    try {
      const storedValue = sessionStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initalValue;
    } catch (error) {
      return initalValue;
    }
  });

  const setValue = useCallback((value:T)=>{
    try {
      setState(value);
      sessionStorage.setItem(key,JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }, [key]);

  return [state, setValue];
}
