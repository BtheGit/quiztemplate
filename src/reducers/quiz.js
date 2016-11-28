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

const quiz = (state = initialState, action) => {
  if(action.type === 'NEXT_QUESTION') {
    Object.assign(state, {
      quesCounter: state.quesCounter + 1
    });
  }
  console.log('Question counter increased');
  return state
}

export default quiz;
