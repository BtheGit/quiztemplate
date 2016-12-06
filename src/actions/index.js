import quizdata from '../api/quizdata_whatami';

// export function fetchQuestions() {                                 //Deprecated ?
//   return {
//     type: 'FETCH_QUESTIONS',
//     payload: quizdata.questions 
//   }
// }
export function resetQuiz() {
  return {
    type: 'RESET_QUIZ',
    payload: quizdata.questions
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

export function updateScore(answer) {
  return {
    type: 'UPDATE_SCORE',
    payload: answer
  }
}

