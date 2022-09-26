let $ = document

const time = $.querySelector('.time')
const questionBox = $.querySelector('.question')
const answerCotainer = $.querySelector('.answer-cotainer')
const firstQuez = $.querySelector('.first')
const lastQuez = $.querySelector('.last')
const nextQuestion = $.querySelector('.next-Question')
const statusTime = $.querySelector('.status-time')
const endQuez = $.querySelector('.end-Quez')
const restartQuez = $.querySelector('.restart-quez')
const resultRight = $.querySelector('.result-right')
const ofQuestion = $.querySelector('.of-question')
const containerQuestion = $.querySelector('.container')
const resultBox = $.querySelector('.result-box')
const cupImage = $.querySelector('.cup-image')
const message = $.querySelector('.message-text')


let firstQuezCount = 1
let lastQuezCount = 1
let rightQuez = 0
let timer;
let index = 0
let timeCount = 20

function createTemplate(questions) {
    answerCotainer.innerHTML = ''
    questionBox.innerHTML = ''

    let quezTemplate = `<p>${questions[index].question}</p>`

    let answerOption = `<p class="answer">${questions[index].options[0]}</p>
    <p class="answer">${questions[index].options[1]}</p>
    <p class="answer">${questions[index].options[2]}</p>
    <p class="answer">${questions[index].options[3]}</p>`

    questionBox.insertAdjacentHTML('beforeend', quezTemplate)
    answerCotainer.insertAdjacentHTML('beforeend', answerOption)

    firstQuez.innerHTML = index + 1
    lastQuez.innerHTML = questions.length

    timerContHandler()
    let answer = $.querySelectorAll('.answer')

    for (let i = 0; i < answer.length; i++) {
        answer[i].setAttribute('onclick', 'checkAnswer(this)')
    }
}


function checkAnswer(answer) {

    clearInterval(timer)
    let answerClick = answer.innerHTML
    let answerMain = questions[index].answer
    let allAnswerChild = answerCotainer.children.length
    nextQuestion.classList.add('show-next')

    if (answerClick === answerMain) {
        answer.classList.add('rightAnswer')
        rightQuez++
        updateScore(rightQuez)
    } else {
        answer.classList.add('noAnswer')
        for (let i = 0; i < allAnswerChild; i++) {
            if (answerCotainer.children[i].innerHTML === answerMain) {
                answerCotainer.children[i].classList.add('rightAnswer')
            }
        }
    }
    for (let i = 0; i < allAnswerChild; i++) {
        answerCotainer.children[i].classList.add('disable')
    }
}



function timerContHandler() {
    timer = setInterval(function () {
        timeCount--
        time.innerHTML = timeCount

        if (timeCount < 10) {
            time.innerHTML = '0' + timeCount
        }
        if (timeCount == 0) {
            clearInterval(timer)
            statusTime.style.background = '#a92831'
            nextQuestion.classList.add('show-next')

            let answerMain = questions[index].answer
            let allAnswerChild = answerCotainer.children.length

            for (let i = 0; i < allAnswerChild; i++) {
                if (answerCotainer.children[i].innerHTML === answerMain) {
                    answerCotainer.children[i].classList.add('rightAnswer')
                }
            }

            for (let i = 0; i < allAnswerChild; i++) {
                answerCotainer.children[i].classList.add('disable')
            }

        } else {
            statusTime.style.background = '#2573dd'
        }
    }, 1000)
}

function nextQuestionHandler() {
    index++
    timeCount = 20
    createTemplate(questions)
    setTimeout(timer, 1000)
    // aolfndioauebfiou3bqio2
    if (index == 16) {
        nextQuestion.classList.remove('show-next')
        endQuez.classList.add('show-end')
    } else {
        nextQuestion.classList.remove('show-next')
    }
}

function updateScore(right) {

    if (right > 14) {
        cupImage.setAttribute('src', 'images/trofeo.png')
        message.innerHTML = 'Felicidades!'
    } else if (right <= 13 && right > 10) {
        cupImage.setAttribute('src', 'images/segundopuesto.png')
        message.innerHTML = 'Bien ahi'
    } else if (right <= 9 && right >= 6) {
        cupImage.setAttribute('src', 'images/tercerpuesto.png')
        message.innerHTML = 'Pasaste de suerte!'
    } else if (right == 1) {
        cupImage.setAttribute('src', 'images/sosmalaso.png')
        message.innerHTML = 'A este punto ni estas intentando'
    } else {
        cupImage.setAttribute('src', 'images/zzz.png')
        message.innerHTML = 'Esforzate mas para la proxima!'
    }

    resultRight.innerHTML = rightQuez
    ofQuestion.innerHTML = questions.length

}

function showResultQuez() {
    containerQuestion.classList.add('hide-question')
    resultBox.classList.add('show-result')
}

function restartQuezHandler() {
    location.reload()
}

nextQuestion.addEventListener('click', nextQuestionHandler)
endQuez.addEventListener('click', showResultQuez)
restartQuez.addEventListener('click', restartQuezHandler)
createTemplate(questions)
