// display elements
const welcomeElement = document.getElementById("welcome")
const questionsElement = document.getElementById("questions")
const scoreBoardElement = document.getElementById("score-board")
const startButtonElement = document.getElementById("start-button")

//button elements
const currentQuestionElement = document.getElementById("current-question")
const buttonAElement = document.getElementById("buttonA")
const buttonBElement = document.getElementById("buttonB")
const buttonCElement = document.getElementById("buttonC")

// tracks current question
var currentQuestionIndex = 0

// questions array
const allQuestions =
    [
        {
            question: "What is 1 + 1?", answerA: "4", answerB: "2", answerC: "1", correctAnswer: "2"
        },

        {
            question: "What is 2 + 2?", answerA: "4", answerB: "2", answerC: "1", correctAnswer: "4"
        }

        {
            question: "What is 1 + 2?", answerA: "3", answerB: "2", answerC: "1", correctAnswer: "4"
        }

        {
            question: "What is 2 + 3?", answerA: "4", answerB: "5", answerC: "1", correctAnswer: "4"
        }

        {
            question: "What is 2 + 6?", answerA: "4", answerB: "2", answerC: "8", correctAnswer: "4"
        }

        {
            question: "What is 3 + 3?", answerA: "4", answerB: "6", answerC: "1", correctAnswer: "4"
        }

        {
            question: "What is 2 + 5?", answerA: "4", answerB: "2", answerC: "7", correctAnswer: "4"
        }

        {
            question: "What is 5 + 4?", answerA: "9", answerB: "2", answerC: "1", correctAnswer: "4"
        }

        {
            question: "What is 2 + 8?", answerA: "4", answerB: "10", answerC: "1", correctAnswer: "4"
        }

        {
            question: "What is 4 + 7?", answerA: "4", answerB: "2", answerC: "11", correctAnswer: "4"
        }
    ]

function displayQuestion() {
    const currentQuestion = allQuestions[currentQuestionIndex]
    const answerA = currentQuestion.answerA
    const answerB = currentQuestion.answerB
    const answerC = currentQuestion.answerC
    const question = currentQuestion.question
    const correctAnswer = currentQuestion.correctAnswer

    currentQuestionElement.innerHTML = question
    buttonAElement.innerHTML = answerA
    buttonBElement.innerHTML = answerB
    buttonCElement.innerHTML = answerC
}

function checkAnswer(e) {
    const currentQuestion = allQuestions[currentQuestionIndex]
    const currentAnswer = e.target.innerText
    console.log(currentAnswer)

    if (currentAnswer === currentQuestion.correctAnswer) {
        console.log("Correct")
        currentQuestionIndex += 1
        displayQuestion()
    }
    else {
        console.log("Incorrect")
        currentQuestionIndex += 1
        displayQuestion()
    }
}

startButtonElement.addEventListener("click", displayQuestion)
questionsElement.addEventListener("click", (e) => checkAnswer(e))
