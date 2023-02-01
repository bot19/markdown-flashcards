import { useEffect, useReducer } from "react";
import { reducer } from "../state/reducer";
import { initialState } from "../state/initialState";

export const useStateStart = (data) => {
  // TODO: 1: check if state in localStorage, use that

  // 1b: otherwise, initialise state
  const [state, dispatch] = useReducer(reducer, initialState);

  // 2: update initial state with new data from starting quiz
  useEffect(() => {
    dispatch({
      type: "UPDATE_QUIZ_INIT",
      value: data?.allFile?.nodes || [],
    });
  }, [data]);

  return state;
};
