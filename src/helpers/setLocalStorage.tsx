import { LocalStorageData } from "../Types";

export const setLocalStorage = (key: string, data: LocalStorageData): void => {
  try {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem(key, stringifiedData);
  } catch (error) {
    console.error(`Failed to set local storage data: ${error}`);
  }
};
