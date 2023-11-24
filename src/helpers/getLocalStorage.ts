import { LocalStorageData } from "../Types";

export const getLocalStorage = (key: string): LocalStorageData | void => {
  // TODO: temp fix "localStorage" is not available during server-side rendering
  const storedData =
    typeof window !== "undefined" ? localStorage.getItem(key) : null;

  if (storedData) return JSON.parse(storedData);

  // if no key in localStorage, something has gone wrong
  console.error(`Failed to get local storage data: no such key`);
};
