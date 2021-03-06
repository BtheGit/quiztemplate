const initialState = {
  type: '',
  questions: [],
  results: {},
  result: '',
  quesCounter: 0,
  quizFinished: false,
  quizStarted: false,
  answerRecord: [],
  scoreRecord: {},
  correctAnswerCount: 0,
  animatingQuestion: false
};

const quiz = (state = initialState, action) => {
  switch(action.type) {
    case 'RESET_QUIZ':
      return ({
        ...state,
        quesCounter: 0,
        correctAnswerCount: 0,
        answerRecord: [],
        quizFinished: false,
        quizStarted: true,
        questions: action.questions,
        results: action.results,
        scoreRecord: {}
      })
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
    case 'FINISH_QUIZ':
      return (Object.assign({}, state, {
        quizFinished: true
      }))
    case 'UPDATE_SCORE':
      return ({
        ...state,
        scoreRecord: action.payload
      })
    case 'ANIMATE_QUESTION_START':
      return ({
        ...state,
        animatingQuestion: true
      })
    case 'ANIMATE_QUESTION_END':
      return ({
        ...state,
        animatingQuestion: false
      })
    default:
      return state;
  }
}

export default quiz;
