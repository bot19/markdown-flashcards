import { ReducerState, ReActionDefault } from "./Types";

export const reducer = (state: ReducerState, action: ReActionDefault) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
