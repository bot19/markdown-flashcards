import { LocalStorageData } from "../Types";

export const getLocalStorage = (key: string): LocalStorageData | void => {
  const storedData = localStorage.getItem(key);

  if (storedData) return JSON.parse(storedData);

  // if no key in localStorage, something has gone wrong
  console.error(`Failed to get local storage data: no such key`);
};
