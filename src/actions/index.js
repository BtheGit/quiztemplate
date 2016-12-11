import quizdata from '../api/quizdata_whatami';

export function resetQuiz() {
  return {
    type: 'RESET_QUIZ',
    questions: quizdata.questions,
    results: quizdata.results
  }
}

export function nextQuestion() {
  return {
    type: 'NEXT_QUESTION'
  }
}

export function animateQuestionStart() {
  return {
    type: 'ANIMATE_QUESTION_START'
  }
}

export function animateQuestionEnd() {
  return {
    type: 'ANIMATE_QUESTION_END'
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
