const quiz = {
		questions: [
			{
				question: "What is your first name?",
				answer: false,
				reveal: "The letters in your name represent numbers which then describe your potential talents, abilities, and shortcoming.",
				type: textInput,
				processFunc: "nameLetters"
			},
			{
				question: "What is the date of your birth?",
				extraInfo: "Your birth date is one of the most influential numbers in your personal Numerology. It indicates which skills you possess and challenges you may need to overcome in your life."
				type: "datepicker",
				processFunc: "birthday"
			},
		],
		results: {
			'A': "The most important number in your life is..."
		}

}

export default quiz;
