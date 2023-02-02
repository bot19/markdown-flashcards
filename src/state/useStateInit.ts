import { useEffect, useReducer, useRef } from "react";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

const initialStateDefault = initialState;

export const useStateInit = (data) => {
  const isInit = useRef(true);

  // TODO: 1: check if state in localStorage, use that
  const initialState = null || initialStateDefault;

  // 1b: otherwise, initialise state
  const [state, dispatch] = useReducer(reducer, initialState);

  // 2: update initial state with new data/content
  useEffect(() => {
    if (isInit.current) {
      dispatch({
        type: "UPDATE_QUIZ_INIT",
        value: data?.allFile?.nodes || [],
      });
      isInit.current = false; // app initialised
    }
  }, [data]);

  return { state, dispatch };
};
