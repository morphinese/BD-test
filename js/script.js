const span1 = document.getElementById('span1')
const span2 = document.getElementById('span2')
const span3 = document.getElementById('span3')
const span4 = document.getElementById('span4')

const input1 = document.getElementById('y1')
const input2 = document.getElementById('y2')
const input3 = document.getElementById('y3')
const input4 = document.getElementById('y4')

const getAnswerBtn = document.getElementById('get_answer')
const viewAnswerBtn = document.getElementById('view_answer')
const nextQuestionBtn = document.getElementById('next_question')

const inputQuestion = document.getElementById('n_question')
const questionNumber = document.getElementById('question_number')
const rigthQuestionNumber = document.getElementById('number_right_questions')

let n_right_answer = document.getElementById('n_right_answer')

let right_answer_n = 0
let point = 1
let k = Number(inputQuestion.value)

questionNumber.innerHTML = k + 1
rigthQuestionNumber.innerHTML = right_answer_n

fetchAnswers(inputQuestion.value)

getAnswerBtn.addEventListener('click', getAnswer)
viewAnswerBtn.addEventListener('click', viewAnswer)
nextQuestionBtn.addEventListener('click', nextQuestion)

function fetchAnswers(k) {
    let query = 'https://innovations.kh.ua/quiz/list/?author_id=80&n=' + k

    fetch(query)
        .then((response) => response.json())
        .then(function (quiz) {
            question.innerHTML = quiz.question_arr[0]
            title.innerHTML = quiz.title_arr[0]

            span1.innerHTML = quiz.a1_arr[0]
            span2.innerHTML = quiz.a2_arr[0]
            span3.innerHTML = quiz.a3_arr[0]
            span4.innerHTML = quiz.a4_arr[0]

            answer.innerHTML = quiz.answer_arr[0]
            n_right_answer = Number(quiz.n_right_answer_arr[0])

            inputQuestion.value = quiz.total_n
            console.log(quiz)
            console.log(quiz);
        })
}

function getAnswer() {
    if (input1.checked) {
        n_a = 1
    }

    if (input2.checked) {
        n_a = 2
    }

    if (input3.checked) {
        n_a = 3
    }

    if (input4.checked) {
        n_a = 4
    }

    if (n_a === n_right_answer) {
        right_div.classList.remove('hidden')
        wrong_div.classList.add('hidden')

        right_answer_n = right_answer_n + point
        point = 0
    } else {
        right_div.classList.add('hidden')
        wrong_div.classList.remove('hidden')

        point = 0
    }
}

function viewAnswer() {
    answer.classList.toggle('hidden')
    view_answer.classList.toggle('opend')
}

function nextQuestion() {
    if (k < Number(inputQuestion.value) - 1) {
        right_div.classList.add('hidden')
        answer.classList.add('hidden')

        point = 1
        k += 1

        rigthQuestionNumber.innerHTML = right_answer_n
        questionNumber.innerHTML = k + 1
        fetchAnswers(k)
    } else {
        rigthQuestionNumber.innerHTML = right_answer_n

        questions.classList.add('hidden')
    }
}
