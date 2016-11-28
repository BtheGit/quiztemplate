const quiz = { 
		type: "TF", 
		questions: [ 
			{
				question: "The first woman in space was Buddhist.",
				answer: false,
				reveal: "False. Women aren't allowed in space."

			},
			{
				question: "Neil Armstrong was the first man to pee on the moon.",
				answer: false,
				reveal: "Buzz Aldrin was the first person to urinate on the moon."

			},
			{
				question: "D-Day stands for Day-Day.",
				answer: true,
				reveal: "True. D-Day and H-Hour were used to represent variable times in miliary terminology to designate the beginning of an operation."

			},
			{
				question: "Napoleon was attacked by a bunch of rabbits.",
				answer: true,
				reveal: "True. He was also attacked by a much bigger bunch of Englishmen."

			},
			{
				question: "The first person to operate a man-made instrument to break the sound barrier was Chuck Yeager.",
				answer: false,
				reveal: "False. Whips are the first man-made instruments that travel faster than the speed of sound. Indiana Jones did it before Chuck Yeager."

			}

		],
		results: {
			'0': "You suck.",
			'1': "You must have gone to public school.",
			'2': "Life has no meaning. Kill yourself.",
			'3': "You remind me of my ex-wife's ex-husband. I mean me.",
			'4': "Have you met my friend Ted? He sucks too.",
			'5': "Congratulations. You don't completely suck."
		}

}

export default quiz;