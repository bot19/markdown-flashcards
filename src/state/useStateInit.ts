import { useEffect, useReducer, useRef } from "react";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import { getLocalStorage } from "../helpers";
import { KEYS_LOCAL_STORAGE } from "../constants";
import { ReducerState } from "../state/Types";
import { AllQuestions } from "../Types";

const initialStateDefault = initialState;

// TODO: fix TS data
export const useStateInit = (data: AllQuestions) => {
  // 1: setup state obj from localStorage OR default
  const appState = getLocalStorage(KEYS_LOCAL_STORAGE.APP_STATE);
  const initialState = (appState || initialStateDefault) as ReducerState;

  // 2: initialise state
  const [state, dispatch] = useReducer(reducer, initialState);

  // if resuming from localStorage, already have Qs data, don't need to do (3)
  const isInit = useRef(appState ? false : true);

  // 3: update initial state with new data/content
  useEffect(() => {
    if (isInit.current) {
      dispatch({
        type: "UPDATE_QUIZ_INIT",
        value: data?.questionsData?.nodes || [],
      });
      isInit.current = false; // app initialised
    }
  }, [data]);

  return { state, dispatch };
};
