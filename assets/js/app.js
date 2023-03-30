let timerInterval
let timeLeft = 30
let score = 0
const usersArray = []

// display elements
const welcomeElement = document.getElementById("welcome")
const questionsElement = document.getElementById("questions")
const scoreBoardElement = document.getElementById("score-board")
const startButtonElement = document.getElementById("start-button")
const timeElement = document.getElementById("time")
const scoreElement = document.getElementById("score")
const initialsElement = document.getElementById("initials")
const saveBtnElement = document.getElementById("saveBtn")

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
        },

        {
            question: "What is 1 + 2?", answerA: "3", answerB: "2", answerC: "1", correctAnswer: "3"
        },

        {
            question: "What is 2 + 3?", answerA: "4", answerB: "5", answerC: "1", correctAnswer: "5"
        },

        {
            question: "What is 2 + 6?", answerA: "4", answerB: "2", answerC: "8", correctAnswer: "8"
        },

        {
            question: "What is 3 + 3?", answerA: "4", answerB: "6", answerC: "1", correctAnswer: "6"
        },

        {
            question: "What is 2 + 5?", answerA: "4", answerB: "2", answerC: "7", correctAnswer: "7"
        },

        {
            question: "What is 5 + 4?", answerA: "9", answerB: "2", answerC: "1", correctAnswer: "9"
        },

        {
            question: "What is 2 + 8?", answerA: "4", answerB: "10", answerC: "1", correctAnswer: "10"
        },

        {
            question: "What is 4 + 7?", answerA: "4", answerB: "2", answerC: "11", correctAnswer: "11"
        },
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
function endGame() {
    console.log("Game Over")
}

function checkAnswer(e) {
    if (currentQuestionIndex > allQuestions.length) {
        endGame()
    }

    const currentQuestion = allQuestions[currentQuestionIndex]
    const currentAnswer = e.target.innerText
    console.log(currentAnswer)

    if (currentAnswer === currentQuestion.correctAnswer) {
        console.log("Correct")
        currentQuestionIndex += 1
        score += 1
        scoreElement.innerText = score
        displayQuestion()
    }

    else {
        console.log("Incorrect")
        currentQuestionIndex += 1
        timeLeft - 10
        score += -1
        scoreElement.innerText = score
        displayQuestion()
    }
}

function startQuiz() {
    displayQuestion()
    timerInterval = setInterval(
        function () {
            timeLeft--
            timeElement.innerText = timeLeft
            if (timeLeft <= 0) {
                clearInterval (timerInterval)
                endGame ()
            }
        }, 1000
    )
}

function saveScores () {
    const previousScores = JSON.parse(localStorage.getItem ("scoreObjects"))
    previousScores?.forEach(entry => usersArray.push(entry))
    const initials = initialsElement.value
    const hsObject = {
        score: score, initials: initials
    }
    usersArray.push (hsObject)
    localStorage.setItem ("scoreObjects", JSON.stringify(usersArray))
}

startButtonElement.addEventListener("click", startQuiz)
questionsElement.addEventListener("click", (e) => checkAnswer(e))
saveBtnElement.addEventListener("click", saveScores)

