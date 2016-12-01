const initialState = {
  type: '',
  questions: [],
  results: [],
  result: '',
  quesCounter: 0,
  quizFinished: false,
  answerRecord: [],
  correctAnswerCount: 0
};

const quiz = (state = initialState, action) => {
  switch(action.type) {
    case 'NEXT_QUESTION':
      return  (Object.assign({}, state, {
        quesCounter: state.quesCounter + 1
      }));
    case 'CORRECT_ANSWER':
      return (Object.assign({}, state, {
        correctAnswerCount: state.correctAnswerCount + 1
      }))
    case 'ADD_ANSWERED':
      return (Object.assign({}, state, {
        answerRecord: [...state.answerRecord, action.payload]
      }))
    case 'FETCH_QUESTIONS':
      return (Object.assign({}, state, {
        questions: action.payload
      }))
    case 'FINISH_QUIZ':
      return (Object.assign({}, state, {
        quizFinished: true
      }))
    case 'CORRECT_ANSWER':
      return (Object.assign({}, state, {
        correctAnswerCount: state.correctAnswerCount + 1
      }))
    default:
      return state;
  }
}

export default quiz;
