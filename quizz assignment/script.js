const quizData = [
    {
        question: "What year was the first web browser developed?",
        a: "1995",
        b: "1990",
        c: "2020",
        d: "1980",
        correct: "a",

    },
    {
        question:  "What is a landing page?",
        a: "A page to land webpages",
        b: "The first page a visitor visits on your site",
        c: "none of the above",
        d: "All of the above",
        correct: "b",

    },
    {
        question:  "What does HTML stand for?",
        a: "Hypertext Mark Language",
        b: "Hypertext Makeup Language",
        c: "Hyperloop Machine Language",
        d: "Hypertext Markup Language",
        correct: "d",
    },
    {
        question: "One of this is not a way to link up CSS to HTML?",
        a: "Inline",
        b: "Internal",
        c: "Overline",
        d: "External",
        correct: "c",
    },
    {
        question: "In Flexbox, the parent element is called?",
        a: "Flex parent",
        b: "Flex Family",
        c: "Flex Container",
        d: "All of the above",
        correct: "c",
    },



];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})