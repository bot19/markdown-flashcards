import { ReducerAction, ReducerState } from "./Types";
import { updateQuizInit } from "./actionUpdateQuizInit";
import { updateQuizSessionStart } from "./actionUpdateQuizSessionStart";
import { updateAnswerRight } from "./actionUpdateAnswerRight";
import { updateAnswerWrong } from "./actionUpdateAnswerWrong";
import { updateQuizSessionEnd } from "./actionUpdateQuizSessionEnd";

export const reducer = (
  state: ReducerState,
  action: ReducerAction
): ReducerState => {
  switch (action.type) {
    case "UPDATE_QUIZ_INIT":
      return { ...updateQuizInit(state, action.value) };

    case "UPDATE_QUIZ_SESSION_START":
      return { ...updateQuizSessionStart(state) };

    case "UPDATE_ANSWER_RIGHT":
      return { ...updateAnswerRight(state, action.value) };

    case "UPDATE_ANSWER_WRONG":
      return { ...updateAnswerWrong(state, action.value) };

    case "UPDATE_QUIZ_SESSION_END":
      return { ...updateQuizSessionEnd(state) };

    default:
      return { ...state };
  }
};
