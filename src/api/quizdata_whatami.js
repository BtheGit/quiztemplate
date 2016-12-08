const quiz = {
		questions: [
			{
				question: "Where were you born?",
				questionImg: '',
				answers: [
					{
						text: "In a car",
						img: '',
						result: {"B": 1, "C": 1, "E":1, "G": 1, "H":1}
					},
					{
						text: "On a yacht",
						img: '',
						result: {"C":2, "E": 1, "F": 1}
					},
					{
						text: "In a train",
						img: '',
						result: {"B": 1, "G":1}
					},
					{
						text: "On a plane",
						img: '',
						result: {"G": 1}
					},
					{
						text: "In space",
						img: '',
						result: {"H": 1}
					},
					{
						text: "In a building",
						img: '',
						result: {"A": 1, "D": 1, "H":1}
					}

				],
				type: "singleAnswer"
			},
			{
				question: "How many eggs did you eat last week?",
				questionImg: '',
				answers: [
					{
						text: "I'm vegan",
						img: '',
						result: {"C": 2, "D": 1, "E": 1, "F":1,"G":2}
					},
					{
						text: "None",
						img: '',
						result: {"A": 1,"D": 1, "G": 1}
					},
					{
						text: "A few",
						img: '',
						result: {"A": 1,"D": 1, "H": 1}
					},
					{
						text: "A few a day",
						img: '',
						result: {"A": 1,"B": 1, "E": 1, "H": 1}
					},
					{
						text: "All of the eggs",
						img: '',
						result: {"B": 1}
					},
					{
						text: "Only Caviar",
						img: '',
						result: {"C": 1,"E": 1,"F": 1}
					}

				],
				type: "singleAnswer"
			},
			{
				question: "Which of these phrases do you dislike the most on a T-shirt?",
				questionImg: '',
				answers: [
					{
						text: "Keep Calm and Carry On",
						img: '',
						result: {"B": 1,"H": 1}
					},
					{
						text: "Make America Great Again",
						img: '',
						result: {"A": 1,"D": 1,"F": 1,"G": 1}
					},
					{
						text: "I'm with stupid",
						img: '',
						result: {"A": 1,"C": 1,"D": 1,"E": 1,"F": 1,"G": 1}
					},
					{
						text: "I Heart NY",
						img: '',
						result: {"B": 1,"C": 1,"G": 1}
					},
					{
						text: "Save water, drink beer",
						img: '',
						result: {"C": 1,"D": 1,"E": 1,"F": 1,"G": 1}
					},
					{
						text: "Mumford and Sons",
						img: '',
						result: {"B": 1}
					}

				],
				type: "singleAnswer"
			},
			{
				question: "Which of these most reminds you of your mother?",
				questionImg: '',
				answers: [
					{
						text: "Freshly baked cookies",
						img: '',
						result: {"H": 1}
					},
					{
						text: "A belt",
						img: '',
						result: {"B": 1}
					},
					{
						text: "A glass of wine",
						img: '',
						result: {"C": 1, "E":1}
					},
					{
						text: "Christmas",
						img: '',
						result: {"F": 1, "H":1}
					},
					{
						text: "Nursery Rhymes",
						img: '',
						result: {"D": 1,"G": 1,"H": 1}
					},
					{
						text: "Myself",
						img: '',
						result: {"A": 1, "G":1}
					}

				],
				type: "singleAnswer"
			},
			{
				question: "Which of these is the most romantic thing someone can do for you?",
				questionImg: '',
				answers: [
					{
						text: "Serve breakfast in bed",
						img: '',
						result: {"D": 1, "H": 1}
					},
					{
						text: "Take you out for a fancy dinner",
						img: '',
						result: {"D": 1, "F":1}
					},
					{
						text: "Let you wear sweatpants in public",
						img: '',
						result: {"B": 1, "H":1}
					},
					{
						text: "Friend your mother on Facebook",
						img: '',
						result: {"D": 1}
					},
					{
						text: "Write a love song for you",
						img: '',
						result: {"E": 1, "F":1}
					},
					{
						text: "Go down on you",
						img: '',
						result: {"E": 1, "G": 1}
					}

				],
				type: "singleAnswer"
			},
			{
				question: "Where would you build your secret hideout?",
				questionImg: '',
				answers: [
					{
						text: "In Antarctica",
						img: '',
						result: {"F": 1, "H":1}
					},
					{
						text: "Underwater",
						img: '',
						result: {"C": 1,"E": 1,"G": 1}
					},
					{
						text: "In a cave",
						img: '',
						result: {"D": 1,"E": 1,"H": 1}
					},
					{
						text: "On a mountaintop",
						img: '',
						result: {"A": 1, "F":1}
					},
					{
						text: "In a desert oasis",
						img: '',
						result: {"B": 1,"C": 1,"G": 1}
					},
					{
						text: "Denmark",
						img: '',
						result: {"A": 1, "D":1}
					}

				],
				type: "singleAnswer"
			},
			{
				question: "What would you like for your birthday this year?",
				questionImg: '',
				answers: [
					{
						text: "Socks",
						img: '',
						result: {"A": 2,"D": 1,"G": 1,"H": 1}
					},
					{
						text: "A gun",
						img: '',
						result: {"B": 2, "C":1,"E":1}
					},
					{
						text: "A smartwatch",
						img: '',
						result: {"A": 1, "C":1, "H":1}
					},
					{
						text: "A telescope",
						img: '',
						result: {"C": 1,"E": 1,"F": 1,"G": 1,"H": 2}
					},
					{
						text: "A roomba",
						img: '',
						result: {"A": 2, "D":1, "H":1}
					},
					{
						text: "A recount",
						img: '',
						result: {"C":2, "F":1, "G":1}
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
			"G": "You are a feather. You started your life soaring through the air on majestic wings and now you spend your days dusting shelves.",
			"H": "You are a dad joke. You are sure people would find you punny if they only understood the real you.",
		},
		resultsType: 'VERT_CHART'

}

export default quiz;
