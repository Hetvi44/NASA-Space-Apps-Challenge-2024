const questions = [
    {
        question: "Which planet is known as the 'Red Planet'?",
        optionA: "Mercury",
        optionB: "Venus",
        optionC: "Mars",
        optionD: "Jupiter",
        correctOption: "optionC"
    },

    {
        question: "Which planet has the most moons?",
        optionA: "Earth",
        optionB: "Saturn",
        optionC: "Jupiter",
        optionD: "Uranus",
        correctOption: "optionB"
    },

    {
        question: "What is the hottest planet in our solar system",
        optionA: "Mercury",
        optionB: "Venus",
        optionC: "Mars",
        optionD: "Jupiter",
        correctOption: "optionB"
    },

    {
        question: "Which planet is known for having a 'Great Dark Spot'?",
        optionA: "Saturn",
        optionB: "Neptune",
        optionC: "Jupiter",
        optionD: "Uranus",
        correctOption: "optionB"
    },

    {
        question: "What are the two moons of Mars called?",
        optionA: "Titan and Rhea",
        optionB: "Deimos and Phobos",
        optionC: " Europa and Ganymede",
        optionD: "Triton and Nereid",
        correctOption: "optionB"
    },

    {
        question: "Which planet is known for its strong magnetic field?",
        optionA: "Earth",
        optionB: "Venus",
        optionC: "Mars",
        optionD: "Jupiter",
        correctOption: "optionD"
    },

    {
        question: "Which planet is often referred to as Earth's 'sister planet'?",
        optionA: "Mars",
        optionB: "Venus",
        optionC: "Mercury",
        optionD: "Jupiter",
        correctOption: "optionB"
    },

    {
        question: "Which celestial body is known for its tail when it approaches the Sun?",
        optionA: "Asteroid",
        optionB: "Comet",
        optionC: "Planet",
        optionD: "Moon",
        correctOption: "optionB"
    },

    {
        question: "Which planet has the fastest winds in the solar system?",
        optionA: "Saturn",
        optionB: "Neptune",
        optionC: "Jupiter",
        optionD: "Earth",
        correctOption: "optionB"
    },

    {
        question: `What is the name of Earth's natural satellite?`,
        optionA: "Phobos",
        optionB: "Titan",
        optionC: "Moon",
        optionD: "Europa",
        correctOption: "optionC"
    },

    {
        question: "Which planet is known for its extreme axial tilt?",
        optionA: "Mercury",
        optionB: "Mars",
        optionC: "Uranus",
        optionD: "Neptune",
        correctOption: "optionC"
    },

    {
        question: "What is the primary gas in the atmosphere of Jupiter?",
        optionA: "Oxygen",
        optionB: "Hydrogen",
        optionC: "Carbon dioxide",
        optionD: "Nitrogen",
        correctOption: "optionB"
    },


    {
        question: "Which planet has a day longer than its year?",
        optionA: "Venus",
        optionB: "Mars",
        optionC: "Jupiter",
        optionD: "Saturn",
        correctOption: "optionA"
    },

    {
        question: "Which planet is known for its prominent ring system?",
        optionA: "Jupiter",
        optionB: "Saturn",
        optionC: "Neptune",
        optionD: "Uranus",
        correctOption: "optionB"
    },

    {
        question: "Which planet is known for having a significant greenhouse effect?",
        optionA: "Earth",
        optionB: "Venus",
        optionC: "Mars",
        optionD: "Mercury",
        correctOption: "optionB"
    },

    {
        question: "Which planet can be seen from Earth with the naked eye and is often referred to as the 'Evening Star'?",
        optionA: "Neptune",
        optionB: "Mars",
        optionC: "Venus",
        optionD: "Earth",
        correctOption: "optionC"
    },

    {
        question: "What is the main difference between asteroids and comets?",
        optionA: "Composition",
        optionB: "Size",
        optionC: "Orbit",
        optionD: "All of the above",
        correctOption: "optionA"
    },

    {
        question: "Which of the following is the most massive object in the solar system?",
        optionA: "Jupiter",
        optionB: "The Sun",
        optionC: "Saturn",
        optionD: "Earth",
        correctOption: "optionB"
    },

    {
        question: "What is the average distance of 1 astronomical unit (AU)?",
        optionA: "93 million miles",
        optionB: "150 million kilometers",
        optionC: "400 million kilometers",
        optionD: "20 million miles",
        correctOption: "optionA"
    },

    {
        question: "What phenomenon is responsible for the occurrence of auroras on Earth?",
        optionA: "Solar flares",
        optionB: "Comet tails",
        optionC: "Interaction of solar wind with Earth’s magnetic field",
        optionD: "Planetary alignment",
        correctOption: "optionC"
    },

    {
        question: "Which of the following is the largest moon of Neptune?",
        optionA: "Titan",
        optionB: "Triton",
        optionC: "Europa",
        optionD: "Ganymede",
        correctOption: "optionB"
    },

    {
        question: "Which planet is known for its 'screaming winds' that can reach speeds of over 1,500 km/h?",
        optionA: "Uranus",
        optionB: "Neptune",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionB"
    },

    {
        question: "How far away is the Earth from the Sun?",
        optionA: "123.6 million km",
        optionB: "133.2 million km",
        optionC: "149.6 million km",
        optionD: "151.7 million km",
        correctOption: "optionC"
    },

    {
        question: "The Sun makes up ___ of all mass in the solar system.",
        optionA: "49%",
        optionB: "91%",
        optionC: "99%",
        optionD: "55%",
        correctOption: "optionC"
    },

    {
        question: "What is actually the Great Red Spot on Jupiter?",
        optionA: "An Ocean",
        optionB: "A storm",
        optionC: "Volcano",
        optionD: "Gas",
        correctOption: "optionB"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    const cheerSound = document.getElementById("cheer"); 
    const wrongSound = document.getElementById("wrong");

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            cheerSound.play();
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            wrongSound.play();
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}