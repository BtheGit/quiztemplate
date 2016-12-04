const quiz = {
		questions: [
			{
				question: "What would you save from a burning building?",
				answers: [
					{
						text: "The painting of Mona Lisa",
						result: "A",
						points: 1
					},
					{
						text: "The last existing photography with my grandma",
						result: "B",
						points: 1
					}
				],
				type: "singleAnswer"
			},
			{
				question: "Which sandwich is the most disgusting?",
				answers: [
					{
						text: "Tuna & Blue Cheese",
						result: "A",
						points: 1
					},
					{
						text: "Peanut Butter + Nutella",
						result: "B",
						points: 1
					},
					{
						text: "Garlic spread with onion rings",
						result: "C",
						points: 1
					},
					{
						text: "Mustard + Ketchup",
						result: "D",
						points: 1
					}
				],
				type: "singleAnswer"
			},
		],
		results: {
			"A": "The most important number in your life is...",
			"B": "The most important number in your life is...",
			"C": "The most important number in your life is...",
			"D": "The most important number in your life is...",
		}

}

export default quiz;
