import { QuestionsArr } from "../Types";
import { ProcessedQsData } from "../../Types";

/**
 * basically to check if localStorage data is avail, YES use that, NO use init data
 * @param arrToCheck could be [] on init, or have data from localStorage
 * @param initArrData the arr also at init, but after data pulled to hydrate
 * @returns (data)[]
 */
export const initArrIfEmpty = (
  arrToCheck: QuestionsArr | ProcessedQsData,
  initArrData: QuestionsArr | ProcessedQsData
) => {
  if (!arrToCheck.length) return [...initArrData];

  return [...arrToCheck];
};
