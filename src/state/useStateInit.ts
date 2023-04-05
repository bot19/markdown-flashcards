import { useEffect, useReducer, useRef } from "react";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

const initialStateDefault = initialState;

// TODO: fix TS errors
export const useStateInit = (data) => {
  const isInit = useRef(true);

  // TODO: 1: setup state obj from localStorage OR default
  const initialState = null || initialStateDefault;

  // 2: initialise state
  const [state, dispatch] = useReducer(reducer, initialState);

  // 3: update initial state with new data/content
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
