import quizdata from '../api/quizdata';

export function fetchQuestions() {
  return {
    type: 'FETCH_QUESTIONS',
    payload: quizdata.questions /* it would be nice to remake this for API ajax calls in the future instead of hardcoding the quizdata json file */
  }
}

export function nextQuestion() {
  return {
    type: 'NEXT_QUESTION'
  }
}

export function finishQuiz() {
  return {
    type: 'FINISH_QUIZ'
  }
}

export function correctAnswer(answer) {
  return {
    type: 'CORRECT_ANSWER',
    payload: answer
  }
}

export function addAnswered(answer) {
  return {
    type: 'ADD_ANSWERED',
    payload: answer
  }
}
