/**
 * help get the next question's key & handle circumstances if no next question
 *
 * @param sessionQsRemaining question keys in an array
 * as you progress through the session quiz, this array shrinks by the 1 Q you progress
 * so the current Q is array index 0, and next always array index 1
 *
 * when you get to the last question, array.length is only 1
 * there isn't a next question, it will be the end view, so null is appropriate
 *
 * @returns string (Q key) or null
 */
export const getNextQsKey = (sessionQsRemaining: string[]) => {
  if (sessionQsRemaining.length > 1) return sessionQsRemaining[1];

  return null;
};
