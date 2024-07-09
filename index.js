#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright("Start Quiz!!!"));
const quizQuestions = [
    {
        question: "Which of the following is a landlocked country?",
        options: ["a. Turkey", "b. Eritrea", "c. Mongolia", "d. Syria"],
        correctAnswer: "c. Mongolia",
    },
    {
        question: "Which is the seventh largest country in the world by land area?",
        options: ["a. India", "b. Brazil", "c. Argentina", "d. Australia"],
        correctAnswer: "a. India",
    },
    {
        question: "Which is the largest lake in the world in terms of surface area?",
        options: [
            "a. Lake Huron",
            "b. Lake Tanganyika",
            "c. Lake Superior",
            "d. Caspian Sea",
        ],
        correctAnswer: "d. Caspian Sea",
    },
    {
        question: "What is the currency of Japan?",
        options: ["a. Yen", "b. Won", "c. Baht", "d. Yuan"],
        correctAnswer: "a.Yen",
    },
    {
        question: "Which currency is associated with the United Kingdom?",
        options: ["a. Dollar", "b. Pound Sterling", "c. Euro", "d. Franc"],
        correctAnswer: "b. Pound Sterling",
    },
    {
        question: "Which currency is associated with Mexico?",
        options: ["a. Peso", "b. Won", "c. Dollar", "d. Shekel"],
        correctAnswer: "a. Peso",
    },
    {
        question: "The river Nile does not flow in which of the following countries?",
        options: ["a. Kenya", "b. Egypt", "c. Algeria", "d.Tanzania"],
        correctAnswer: "c. Algeria",
    },
    {
        question: "The earthquake waves are recorded by an instrument called:",
        options: [
            "a. Seismograph",
            "b. Richter Scale",
            "c. Speedometer",
            "d. Odometer",
        ],
        correctAnswer: "a. Seismograph",
    },
    {
        question: "What is the name of the force with which earth pulls everything towards itself?",
        options: ["a. Thrust", "b. Air Pressure", "c. Gravity", "d. Resistance"],
        correctAnswer: "c. Gravity",
    },
    {
        question: "To which continent of the world do India, China and Japan belong:",
        options: ["a. Asia", "b. Antartica", "c. Africa", "d. Europe"],
        correctAnswer: "a. Asia",
    },
    {
        question: "What is the currency of India?",
        options: ["a. Rupiah", "b. Ringgit", "c. Rupee", "d. Baht"],
        correctAnswer: "c. Rupee",
    },
    {
        question: "Which currency is associated with Turkey?",
        options: ["a. Peso", "b. Lira", "c. Rand", "d. Pound Sterling"],
        correctAnswer: "b. Lira",
    },
    {
        question: "What is the currency of Russia?",
        options: ["a. Ruble", "b. Rupee", "c. Dinar", "d. Lira"],
        correctAnswer: "a. Ruble",
    },
    {
        question: "Which currency is used in Australia?",
        options: [
            "a. Euro",
            "b. Pound Sterling",
            "c. Australian Dollar",
            "d. Rand",
        ],
        correctAnswer: "c. Australian",
    },
    {
        question: "In the context of ocean energy conversion, 'T' in OTEC stands for:",
        options: ["a. Tidal", "b. Thermal", "c. Technological", "d. Thermodynamic"],
        correctAnswer: "b. Thermal",
    },
    {
        question: "Where is the Great Barrier Reef located:",
        options: ["a. Australia", "b. Bahrain", "c. Peru", "d. Mexico"],
        correctAnswer: "a. Australia",
    },
    {
        question: "The rhythmic rise and fall of ocean water twice in a day is called:",
        options: ["a. Wave", "b. Tide", "c. Tsunami", "d. Current"],
        correctAnswer: "b. Tide",
    },
    {
        question: "What is the currency of Brazil?",
        options: ["a. Real", "b. Rupiah", "c. Ringgit", "d. Peso"],
        correctAnswer: "a. Real",
    },
    {
        question: "Which currency is used in Switzerland?",
        options: ["a. Euro", "b. Dollar", "c. Franc", "d. Krona"],
        correctAnswer: "c. Franc",
    },
    {
        question: "What is the curency of South Africa?",
        options: ["a. Rand", "b. Real", "c. Peso", "d. Baht"],
        correctAnswer: "a. Rand",
    },
];
async function askQuestion(question) {
    const choices = question.options.map((option) => ({
        name: option,
        value: option,
    }));
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "selectedAnswer",
            message: question.question,
            choices: choices,
        },
    ]);
    const selectedAnswer = answers.selectedAnswer;
    if (selectedAnswer === question.correctAnswer) {
        console.log(chalk.greenBright("Correct!!!"));
    }
    else {
        console.log(chalk.redBright(`Incorrect!! The correct answer is ${question.correctAnswer}`));
    }
}
async function startQuiz() {
    for (const questions of quizQuestions) {
        await askQuestion(questions);
    }
    console.log(chalk.yellowBright("Quiz Completed!!!"));
}
startQuiz();
