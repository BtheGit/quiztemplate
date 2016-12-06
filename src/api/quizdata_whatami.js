const quiz = {
		questions: [
			{
				question: "Where were you born?",
				answers: [
					{
						text: "In a car",
						result: {"A": 1, "C": 1}
					},
					{
						text: "On a boat",
						result: {"A": 1}
					},
					{
						text: "In a train",
						result: {"A": 1}
					},
					{
						text: "On a plane",
						result: {"A": 1}
					},
					{
						text: "In space",
						result: {"A": 1}
					},
					{
						text: "In a building",
						result: {"A": 1}
					}

				],
				type: "singleAnswer"
			},
			{
				question: "How many eggs did you eat last week?",
				answers: [
					{
						text: "I'm vegan",
						result: {"A": -1, "C": 2}
					},
					{
						text: "None",
						result: {"A": 1}
					},
					{
						text: "A few",
						result: {"A": 1}
					},
					{
						text: "A few a day",
						result: {"A": 1}
					},
					{
						text: "All of the eggs",
						result: {"A": 1}
					},
					{
						text: "Only Caviar",
						result: {"A": 1}
					}

				],
				type: "singleAnswer"
			},
			{
				question: "Which of these phrases do you dislike the most on a T-shirt?",
				answers: [
					{
						text: "Keep Calm and Carry On",
						result: {"A": -1}
					},
					{
						text: "Make America Great Again",
						result: {"A": 1}
					},
					{
						text: "I'm with stupid'",
						result: {"A": 1}
					},
					{
						text: "I Heart NY",
						result: {"A": 1}
					},
					{
						text: "Save water, drink beer",
						result: {"A": 1}
					},
					{
						text: "Mumford and Sons",
						result: {"A": 1}
					}

				],
				type: "singleAnswer"
			},
			{
				question: "Which of these most reminds you of your mother?",
				answers: [
					{
						text: "Freshly baked cookies",
						result: {"A": -1, "B": 2}
					},
					{
						text: "A belt",
						result: {"A": 1}
					},
					{
						text: "A glass of wine",
						result: {"A": 1}
					},
					{
						text: "Christmas",
						result: {"A": 1}
					},
					{
						text: "Nursery Rhymes",
						result: {"A": 1}
					},
					{
						text: "Myself",
						result: {"A": 1}
					}

				],
				type: "singleAnswer"
			},
			{
				question: "Which of these is the most romantic thing someone can do for you?",
				answers: [
					{
						text: "Serve breakfast in bed",
						result: {"A": -3, "E": 4}
					},
					{
						text: "Take you out for a fancy dinner",
						result: {"A": 1}
					},
					{
						text: "Let you wear sweatpants in public",
						result: {"A": 1}
					},
					{
						text: "Friend your mother on Facebook",
						result: {"A": 1}
					},
					{
						text: "Write a love song for you",
						result: {"A": 1}
					},
					{
						text: "Go down on you",
						result: {"A": 1}
					}

				],
				type: "singleAnswer"
			},
			{
				question: "Where would you build your secret hideout?",
				answers: [
					{
						text: "In Antarctica",
						result: {"A": 1}
					},
					{
						text: "Underwater",
						result: {"A": 1}
					},
					{
						text: "In a cave",
						result: {"A": 1}
					},
					{
						text: "On a mountaintop",
						result: {"A": 1}
					},
					{
						text: "In a desert oasis",
						result: {"A": 1}
					},
					{
						text: "Denmark",
						result: {"A": 1}
					}

				],
				type: "singleAnswer"
			},
			{
				question: "What would you like for your birthday this year?",
				answers: [
					{
						text: "Socks",
						result: {"A": 1}
					},
					{
						text: "A gun",
						result: {"A": 1}
					},
					{
						text: "A smartwatch",
						result: {"A": 1}
					},
					{
						text: "A telescope",
						result: {"A": 1}
					},
					{
						text: "A roomba",
						result: {"A": 1}
					},
					{
						text: "A recount",
						result: {"A": 1}
					}

				],
				type: "singleAnswer"
			}
		],
		results: {
			"A": "You are a hamster. Life is a wheel and you can't stop running.",
			"B": "You are a train. You're noisy, you smoke a lot, and nobody in America likes you.",
			"C": "You are Los Angeles. You're a little crazy, a little racist, and you go on and on forever.",
			"D": "You are Taiwan. Nobody is completely sure whether you are real or not. Also, you look a little like a sweet potato.",
			"E": "You are an anteater. You have a long tongue and you like to stick it in dark places.",
			"F": "You are French. You think you are the greatest thing around and you hate Belgians.",
			"G": "You are a feather. You started your life soaring through the air and now you spend your days dusting shelves.",
			"H": "You are a dad joke. You are sure people would find you funny if they only understood the real you.",
		},

}

export default quiz;
