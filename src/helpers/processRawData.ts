import { ProcessedQsData, RawQsData } from "../Types";

/**
 * data shape might change over time, but logic is kind of fixed
 * might need to re-shape the data
 */
export const processRawData = (data: RawQsData): ProcessedQsData => {
  // add in root key field that is name of file without spaces
  return [
    ...data.map((rawQ) => {
      return {
        ...rawQ,
        // add key field to Q data obj, where name of file is without spaces
        key: rawQ.parent.name.replaceAll(" ", "-"),
      };
    }),
  ];
};
