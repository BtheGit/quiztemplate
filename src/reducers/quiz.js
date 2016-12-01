const initialState = {
  type: '',
  questions: [],
  results: [],
  result: '',
  quesCounter: 0,
  quesText: '',
  quesOptions: [],
  quesAnswer: '',
  quesReveal: '',
  quizFinished: false,
  answerRecord: [],
  correctAnswerCount: 0
};

//TEMP NOTE: I refactored this to the more standard Switch style. 
const quiz = (state = initialState, action) => {
  switch(action.type) {
    case 'NEXT_QUESTION':
      return  (Object.assign({}, state, {   //added empty object per docs to avoid mutating state directly
        quesCounter: state.quesCounter + 1
      }));
    case 'CORRECT_ANSWER':
      return (Object.assign({}, state, {
        correctAnswerCount: state.correctAnswerCount + 1
      }))
    case 'ADD_ANSWERED':
      return (Object.assign({}, state, {
        answerRecord: [...state.answerRecord, action.answer]
      }))
    default:
      return state;
  }
}

export default quiz;
