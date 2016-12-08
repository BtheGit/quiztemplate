//this is just to visualize the question layout. The real magic will be in the results type calculation (and
//possibly the CSS styling of the question component)


const quiz = {
		questions: [
			{
				question: "Is math more fun than sex?",
				questionImg: '',
				answers: [
					{
						text: "True",
						img: '',
						result: {"A": 1}
					},
					{
						text: "False",
						img: '',
						result: {"A": -1}
					}					
				],
				type: "trueFalse"
			}
		],
		results: {
			"A": "Nice Try.",
			"B": "Good Try.",
			"C": "Excellent effort.",
			"D": "Jump off a cliff and die.",
			"E": "A for effort.",
			"F": "You have a beautiful soul.",
			"G": "Perfect!",
			"H": "Don't change a thing about yourself.",
		},
		resultsType: 'VERT_CHART'

}

export default quiz;
