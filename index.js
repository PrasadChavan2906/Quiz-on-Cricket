const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log("Welcome to PRASAD's Cricket Quiz");

const queBank = [
	{
		question: `
  1. The first official international match of cricket was held in 1844 between …
	
   A: India and Afghanistan

   B: England and Australia

   C: The United States and Canada\n`,
		answer: "C"
	},
	{
		question: `
  2. In cricket, the Duckworth-Lewis method is …
   
   A: The awarding system for victory in matches interrupted by the weather

   B: A training schedule in which the batsmen practice blindfolded

   C: A tactic that requires every fielder to be placed on a side\n`,
		answer: "A"
	},
	{
		question: `
  3. … has the most record partnerships in the history of ICC Cricket World cup?

   A: Australia

   B: India

   C: England\n`,
		answer: "B"
	},
	{
		question: `
  4. … is not an official way of being dismissed in a cricket match
	 
   A: Hit Wicket

    B: Timed Out

    C: Six & Out

\n`,
		answer: "C"
	}
];

let questionIndex = 0;

function question() {
	rl.question(queBank[questionIndex].question, (answer) => {
		console.log(`You answered: ${answer}`);

		if (answer.toLowerCase() == queBank[questionIndex].answer.toLowerCase()) {
			console.log("right answer");
			questionIndex++;
			serve();
		} else {
			console.log("wrong answer");
			console.log("try again");
			question();
		}
	});
}

function serve() {
	if (isQuestionBankExhausted()) {
		console.log("thanks for playing....");
		rl.close();
	} else {
		rl.question("what do you want to do? \n Press e to exit, any other key to continue....  ", (choice) => {
			console.log(`You selected ${choice}`);

			if (choice.toLowerCase() !== "e") {
				question();
			} else {
				console.log("thanks for playing....");
				rl.close();
			}
		});
	}
}

/**
 * checks array length with index and exits game
 */
function isQuestionBankExhausted() {
	if (queBank.length == questionIndex) {
		return true;
	}
}

serve();