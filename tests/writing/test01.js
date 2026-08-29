
/* =====================================================
   QUICKMARCH PRACTICE
   WRITING TEST 01
   Pearson VS Giasu Minh Tri Thu Duc
===================================================== */

/*
   ARCHITECTURE

   index.html loads this file and expects:

       window.QUICKMARCH_TEST

   The test must contain:

       window.QUICKMARCH_TEST.render(container)

   Therefore this file is completely independent.

   To create Test 02 later, simply create:

       tests/writing/test02.js

   and use the same structure.
===================================================== */


/* =====================================================
   TEST DATA
===================================================== */

window.QUICKMARCH_TEST = {

    title: "Writing Test 01",

    totalMarks: 40,


    /* =================================================
       TASK 3
    ================================================= */

    task3: {

        title: "Task 3 — Anna Talks to Cindy Barr",

        marks: 15,

        description:
            "Cindy Barr sings songs for her job. " +
            "Anna asks her questions for the school magazine. " +
            "Write the questions in the spaces. " +
            "The first one is an example.",

        example: {

            anna:
                "Did you have a singing competition at your school?",

            cindy:
                "Yes. We had a singing competition every year."

        },

        questions: [

            {
                answer:
                    "I won the competition in 2007.",

                acceptedQuestions: [

                    "when did you win the competition",

                    "when did you win the singing competition",

                    "what year did you win the competition",

                    "what year did you win the singing competition"

                ]

            },

            {
                answer:
                    "The song? It was called ‘Lazy Princess’.",

                acceptedQuestions: [

                    "what was the song called",

                    "what was the name of the song",

                    "what was the song's name"

                ]

            },

            {
                answer:
                    "My first singing job? I was seventeen years old.",

                acceptedQuestions: [

                    "how old were you when you got your first singing job",

                    "how old were you when you had your first singing job",

                    "when did you get your first singing job",

                    "when did you have your first singing job"

                ]

            },

            {
                answer:
                    "I’m travelling to the USA next.",

                acceptedQuestions: [

                    "where are you travelling to next",

                    "where are you travelling next",

                    "where are you going next",

                    "where will you travel next"

                ]

            },

            {
                answer:
                    "I’m going to be there for two months.",

                acceptedQuestions: [

                    "how long are you going to be there",

                    "how long will you be there",

                    "how long are you staying there",

                    "how long will you stay there"

                ]

            }

        ]

    },


    /* =================================================
       TASK 5
    ================================================= */

    task5: {

        title: "Task 5 — Anna Sends an Email",

        marks: 15,

        description:
            "Anna sends an email to her friend Kerry " +
            "about the singing competition. " +
            "Fill in the missing words. " +
            "Use the verbs in the box below but don't forget " +
            "to change them to the PAST TENSE because the " +
            "competition is finished.",

        wordBank: [

            "take",
            "think",
            "come",
            "sing",
            "clap",
            "feel",
            "have",
            "sit",
            "win",
            "sleep",
            "fall"

        ],

        example: {

            verb: "have",

            answer: "had",

            sentence:
                "My school had a singing competition last Saturday."

        },

        questions: [

            {
                before: "Lots of people",

                after:
                    "to it and it was really good fun.",

                answer: "came",

                explanation:
                    "come → V2/ed: came.<br>" +
                    "came to it = đã đến tham dự cuộc thi."

            },

            {
                before: "I",

                after:
                    'the song "Night Jungle".',

                answer: "sang",

                explanation:
                    "sing → V2/ed: sang.<br>" +
                    "sang the song = đã hát bài hát."

            },

            {
                before:
                    "When it was my turn to sing I suddenly",

                after:
                    "very nervous.",

                answer: "felt",

                explanation:
                    "feel → V2/ed: felt.<br>" +
                    "felt nervous = cảm thấy lo lắng."

            },

            {
                before:
                    "My mouth was so dry and I nearly",

                after:
                    "over on the floor!",

                answer: "fell",

                explanation:
                    "fall → V2/ed: fell.<br>" +
                    "fell over = ngã xuống."

            },

            {
                before:
                    "“I can’t do it”, I",

                after: ".",

                answer: "thought",

                explanation:
                    "think → V2/ed: thought.<br>" +
                    "thought = đã nghĩ."

            },

            {
                before:
                    "But it was OK. I drank a glass of water and",

                after:
                    "down for a little bit.",

                answer: "sat",

                explanation:
                    "sit → V2/ed: sat.<br>" +
                    "sat down = đã ngồi xuống."

            },

            {
                before:
                    "When I finished, everyone",

                after:
                    "really loudly.",

                answer: "clapped",

                explanation:
                    "clap → V2/ed: clapped.<br>" +
                    "clapped loudly = vỗ tay lớn."

            },

            {
                before:
                    "And Kerry, this is the best news. I",

                after:
                    "the competition!",

                answer: "won",

                explanation:
                    "win → V2/ed: won.<br>" +
                    "won the competition = đã thắng cuộc thi."

            },

            {
                before:
                    "After the competition, my family",

                after:
                    "me out for a meal.",

                answer: "took",

                explanation:
                    "take → V2/ed: took.<br>" +
                    "took me out for a meal = đưa tôi đi ăn."

            },

            {
                before:
                    "I got into bed at midnight and",

                after:
                    "for ten hours!",

                answer: "slept",

                explanation:
                    "sleep → V2/ed: slept.<br>" +
                    "slept for ten hours = đã ngủ mười tiếng."

            }

        ]

    },


    /* =================================================
       TASK 6
    ================================================= */

    task6: {

        title: "Task 6 — Music and Me",

        marks: 10,

        description:
            "Now write about music and you. " +
            "Use the ideas below to help you.",

        questions: [

            {
                starter:
                    "My favourite music is...",

                hint:
                    "What kind of music? When do you usually listen to it?",

                sample:
                    "My favourite music is pop music. " +
                    "I usually listen to it in the evening.",

                explanation:
                    "Nêu loại nhạc em thích và thời gian em thường nghe."

            },

            {
                starter:
                    "I like it because...",

                hint:
                    "Why do you like it? How does it make you feel?",

                sample:
                    "I like it because it is fun and makes me happy.",

                explanation:
                    "Nêu lý do em thích loại nhạc đó và cảm xúc của em."

            },

            {
                starter:
                    "Our music teacher...",

                hint:
                    "What does your teacher usually do? " +
                    "Can he/she sing well? " +
                    "What songs does he/she sing or teach you?",

                sample:
                    "Our music teacher sings very well. " +
                    "She often sings English songs and teaches us new songs.",

                explanation:
                    "Mô tả giáo viên âm nhạc và những bài hát cô/thầy thường hát hoặc dạy."

            },

            {
                starter:
                    "In my last music lesson...",

                hint:
                    "What song did you learn? " +
                    "What is it about? Did you like it?",

                sample:
                    "In my last music lesson, I learned a song about friendship. " +
                    "It was very beautiful and I liked it.",

                explanation:
                    "Nêu tên/chủ đề bài hát, nội dung và cảm nhận của em."

            },

            {
                starter:
                    "In the future...",

                hint:
                    "Do you want to become a singer? " +
                    "Do you want to learn more songs or play an instrument?",

                sample:
                    "In the future, I want to learn more songs and play the guitar. " +
                    "I would also like to become a singer.",

                explanation:
                    "Nói về mong muốn của em trong tương lai liên quan đến âm nhạc."

            }

        ]

    },


    /* =====================================================
       RENDER
    ===================================================== */

    render: function(container) {

        if (!container) {

            return;

        }


        injectStyles();


        container.innerHTML = `

            <div class="qm-writing-test">

                <div class="qm-test-intro">

                    <div class="qm-test-badge">
                        WRITING TEST 01
                    </div>

                    <h1>
                        Writing Test 01
                    </h1>

                    <p>
                        Complete Task 3, Task 5 and Task 6.
                    </p>

                    <div class="qm-total">
                        Total: 40 marks
                    </div>

                </div>


                ${renderTask3()}


                ${renderTask5()}


                ${renderTask6()}

            </div>

        `;


        attachEvents();

    }

};


/* =====================================================
   NORMALIZE TEXT
===================================================== */

function normalizeText(text) {

    return String(text || "")

        .toLowerCase()

        .trim()

        .replace(/[’‘]/g, "'")

        .replace(/[.,!?;:"]/g, "")

        .replace(/\s+/g, " ");

}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(text) {

    return String(text || "")

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}


/* =====================================================
   TASK 3 RENDER
===================================================== */

function renderTask3() {

    const task =
        window.QUICKMARCH_TEST.task3;


    let html = `

        <section class="qm-task">

            <div class="qm-task-header">

                <div>

                    <span class="qm-task-label">
                        TASK 3
                    </span>

                    <h2>
                        ${escapeHTML(task.title)}
                    </h2>

                </div>

                <span class="qm-marks">
                    ${task.marks} marks
                </span>

            </div>


            <p class="qm-description">
                ${task.description}
            </p>


            <div class="qm-example">

                <div class="qm-example-title">
                    Example
                </div>

                <p>
                    <strong>Anna:</strong>
                    ${escapeHTML(task.example.anna)}
                </p>

                <p>
                    <strong>Cindy:</strong>
                    ${escapeHTML(task.example.cindy)}
                </p>

            </div>

    `;


    task.questions.forEach(
        function(item, index) {

            html += `

                <div class="qm-question">

                    <div class="qm-question-number">
                        Question ${index + 1}
                    </div>

                    <div class="qm-anna">
                        <strong>Anna:</strong>
                    </div>

                    <input
                        type="text"
                        id="qm-t3-${index}"
                        class="qm-input"
                        placeholder="Write the question here..."
                        autocomplete="off"
                    >

                    <div class="qm-answer">

                        <strong>Cindy:</strong>

                        ${escapeHTML(item.answer)}

                    </div>

                    <button
                        type="button"
                        class="qm-check-btn"
                        data-action="task3"
                        data-index="${index}"
                    >
                        Check
                    </button>

                    <div
                        id="qm-t3-feedback-${index}"
                        class="qm-feedback"
                    ></div>

                </div>

            `;

        }
    );


    html += `

        </section>

    `;


    return html;

}


/* =====================================================
   TASK 5 RENDER
===================================================== */

function renderTask5() {

    const task =
        window.QUICKMARCH_TEST.task5;


    let html = `

        <section class="qm-task">

            <div class="qm-task-header">

                <div>

                    <span class="qm-task-label">
                        TASK 5
                    </span>

                    <h2>
                        ${escapeHTML(task.title)}
                    </h2>

                </div>

                <span class="qm-marks">
                    ${task.marks} marks
                </span>

            </div>


            <p class="qm-description">
                ${task.description}
            </p>


            <div class="qm-reminder">

                <strong>Remember:</strong>

                Change the verbs into the
                <strong>PAST TENSE</strong>.

            </div>


            <div class="qm-word-bank">

                <div class="qm-word-bank-title">
                    Word bank
                </div>

                <div class="qm-words">
                    ${task.wordBank.map(
                        function(word) {
                            return `
                                <span class="qm-word">
                                    ${escapeHTML(word)}
                                </span>
                            `;
                        }
                    ).join("")}
                </div>

            </div>


            <div class="qm-email">

                <p>
                    <strong>Hi Kerry</strong>
                </p>


                <p>
                    My school
                    <strong>had</strong>
                    a singing competition last Saturday.
                </p>

    `;


    task.questions.forEach(
        function(item, index) {

            html += `

                <div class="qm-email-line">

                    <span>
                        ${item.before}
                    </span>

                    <input
                        type="text"
                        id="qm-t5-${index}"
                        class="qm-answer-input"
                        placeholder="(${index + 1})"
                        autocomplete="off"
                    >

                    <span>
                        ${item.after}
                    </span>

                </div>

                <div
                    id="qm-t5-feedback-${index}"
                    class="qm-feedback"
                ></div>

            `;

        }
    );


    html += `

                <p class="qm-love">
                    <strong>Love Anna</strong>
                </p>

            </div>


            <button
                type="button"
                class="qm-main-check"
                data-action="task5"
            >
                Check Task 5
            </button>


            <div
                id="qm-t5-total"
                class="qm-total-feedback"
            ></div>

        </section>

    `;


    return html;

}


/* =====================================================
   TASK 6 RENDER
===================================================== */

function renderTask6() {

    const task =
        window.QUICKMARCH_TEST.task6;


    let html = `

        <section class="qm-task">

            <div class="qm-task-header">

                <div>

                    <span class="qm-task-label">
                        TASK 6
                    </span>

                    <h2>
                        ${escapeHTML(task.title)}
                    </h2>

                </div>

                <span class="qm-marks">
                    ${task.marks} marks
                </span>

            </div>


            <p class="qm-description">
                ${task.description}
            </p>

    `;


    task.questions.forEach(
        function(item, index) {

            html += `

                <div class="qm-writing-prompt">

                    <div class="qm-prompt-title">

                        ${index + 1}.
                        ${escapeHTML(item.starter)}

                    </div>


                    <div class="qm-hint">

                        <strong>Gợi ý:</strong>

                        ${escapeHTML(item.hint)}

                    </div>


                    <textarea
                        id="qm-t6-${index}"
                        class="qm-textarea"
                        rows="4"
                        placeholder="Write your answer here..."
                    ></textarea>


                    <div
                        id="qm-t6-sample-${index}"
                        class="qm-sample"
                    ></div>

                </div>

            `;

        }
    );


    html += `

            <button
                type="button"
                class="qm-main-check"
                data-action="task6"
            >
                Check Task 6
            </button>


            <div
                id="qm-t6-total"
                class="qm-total-feedback"
            ></div>

        </section>

    `;


    return html;

}


/* =====================================================
   ATTACH EVENTS
===================================================== */

function attachEvents() {

    const buttons =
        document.querySelectorAll(
            ".qm-check-btn, .qm-main-check"
        );


    buttons.forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    const action =
                        button.getAttribute(
                            "data-action"
                        );


                    const index =
                        button.getAttribute(
                            "data-index"
                        );


                    if (action === "task3") {

                        checkTask3(
                            Number(index)
                        );

                    }


                    if (action === "task5") {

                        checkTask5();

                    }


                    if (action === "task6") {

                        checkTask6();

                    }

                }
            );

        }
    );

}


/* =====================================================
   CHECK TASK 3
===================================================== */

function checkTask3(index) {

    const input =
        document.getElementById(
            "qm-t3-" + index
        );


    const feedback =
        document.getElementById(
            "qm-t3-feedback-" + index
        );


    if (!input || !feedback) {

        return;

    }


    const userAnswer =
        normalizeText(
            input.value
        );


    if (!userAnswer) {

        feedback.innerHTML =
            "Please write a question.";

        feedback.className =
            "qm-feedback qm-wrong";

        return;

    }


    const question =
        window.QUICKMARCH_TEST
            .task3
            .questions[index];


    const accepted =
        question.acceptedQuestions.map(
            normalizeText
        );


    if (accepted.includes(userAnswer)) {

        feedback.innerHTML =
            "✓ Correct! <strong>3/3 marks</strong>";

        feedback.className =
            "qm-feedback qm-correct";

        input.classList.add(
            "qm-input-correct"
        );

        input.classList.remove(
            "qm-input-wrong"
        );

    }

    else {

        feedback.innerHTML =

            "✗ Try again." +

            "<br>" +

            "<strong>Suggested answer:</strong> " +

            escapeHTML(
                question.acceptedQuestions[0]
            ) +

            "?";


        feedback.className =
            "qm-feedback qm-wrong";

        input.classList.add(
            "qm-input-wrong"
        );

        input.classList.remove(
            "qm-input-correct"
        );

    }

}


/* =====================================================
   CHECK TASK 5
===================================================== */

function checkTask5() {

    const task =
        window.QUICKMARCH_TEST.task5;


    let score = 0;


    task.questions.forEach(
        function(item, index) {

            const input =
                document.getElementById(
                    "qm-t5-" + index
                );


            const feedback =
                document.getElementById(
                    "qm-t5-feedback-" + index
                );


            if (!input || !feedback) {

                return;

            }


            const user =
                normalizeText(
                    input.value
                );


            const correct =
                normalizeText(
                    item.answer
                );


            if (user === correct) {

                score += 1.5;


                feedback.innerHTML =

                    "✓ Correct! " +

                    "<strong>1.5/1.5 marks</strong>" +

                    "<br>" +

                    "<strong>💡 Explanation:</strong> " +

                    item.explanation;


                feedback.className =
                    "qm-feedback qm-correct";


                input.classList.add(
                    "qm-input-correct"
                );

                input.classList.remove(
                    "qm-input-wrong"
                );

            }

            else {

                feedback.innerHTML =

                    "✗ Try again." +

                    "<br>" +

                    "<strong>Answer:</strong> " +

                    escapeHTML(
                        item.answer
                    ) +

                    "<br>" +

                    "<strong>💡 Explanation:</strong> " +

                    item.explanation;


                feedback.className =
                    "qm-feedback qm-wrong";


                input.classList.add(
                    "qm-input-wrong"
                );

                input.classList.remove(
                    "qm-input-correct"
                );

            }

        }
    );


    const total =
        document.getElementById(
            "qm-t5-total"
        );


    if (!total) {

        return;

    }


    total.innerHTML =

        "<strong>" +

        "Task 5 Score: " +

        score.toFixed(1) +

        "/15 marks" +

        "</strong>";


    total.className =
        "qm-total-feedback qm-score";

}


/* =====================================================
   CHECK TASK 6
===================================================== */

function checkTask6() {

    const task =
        window.QUICKMARCH_TEST.task6;


    let completed = 0;


    task.questions.forEach(
        function(item, index) {

            const input =
                document.getElementById(
                    "qm-t6-" + index
                );


            const sample =
                document.getElementById(
                    "qm-t6-sample-" + index
                );


            if (
                input &&
                input.value.trim() !== ""
            ) {

                completed++;

            }


            if (sample) {

                sample.innerHTML = `

                    <div class="qm-sample-box">

                        <strong>
                            💡 Sample answer:
                        </strong>

                        <p>
                            ${escapeHTML(item.sample)}
                        </p>

                        <p class="qm-explanation">

                            <strong>
                                Giải thích:
                            </strong>

                            ${escapeHTML(item.explanation)}

                        </p>

                    </div>

                `;

            }

        }
    );


    const total =
        document.getElementById(
            "qm-t6-total"
        );


    if (!total) {

        return;

    }


    if (completed === task.questions.length) {

        total.innerHTML = `

            ✓ Writing submitted!

            <br>

            <strong>
                Task 6 Score: 10/10 marks
            </strong>

            <br><br>

            💡 Đây là bài viết cá nhân.
            Sample answer chỉ là câu trả lời tham khảo.

        `;

        total.className =
            "qm-total-feedback qm-score";

    }

    else {

        total.innerHTML = `

            Please complete all 5 sections.

            <br><br>

            Completed:
            ${completed}/${task.questions.length}

            <br><br>

            💡 Sample answers have been shown
            to help you.

        `;

        total.className =
            "qm-total-feedback qm-incomplete";

    }

}


/* =====================================================
   CSS
===================================================== */

function injectStyles() {

    if (
        document.getElementById(
            "qm-writing-test-style"
        )
    ) {

        return;

    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "qm-writing-test-style";


    style.textContent = `

        .qm-writing-test {

            width: 100%;

            color: #37443d;

            font-size: 16px;

            line-height: 1.55;

        }


        .qm-test-intro {

            background: #eef6f0;

            border: 1px solid #d4e4d9;

            border-radius: 10px;

            padding: 15px 18px;

            margin-bottom: 14px;

        }


        .qm-test-badge {

            display: inline-block;

            background: #c4dac9;

            color: #315b45;

            border-radius: 5px;

            padding: 3px 8px;

            font-size: 12px;

            font-weight: 800;

            letter-spacing: .5px;

        }


        .qm-test-intro h1 {

            margin: 5px 0 2px;

            color: #315b45;

            font-size: 25px;

        }


        .qm-test-intro p {

            margin: 0;

            color: #61746a;

            font-size: 15px;

        }


        .qm-total {

            margin-top: 7px;

            color: #456053;

            font-weight: 700;

        }


        .qm-task {

            background: #ffffff;

            border: 1px solid #dce7df;

            border-radius: 10px;

            padding: 16px;

            margin-bottom: 14px;

        }


        .qm-task-header {

            display: flex;

            justify-content: space-between;

            align-items: center;

            gap: 15px;

            border-bottom: 1px solid #e3ebe5;

            padding-bottom: 9px;

            margin-bottom: 10px;

        }


        .qm-task-label {

            display: inline-block;

            color: #527461;

            font-size: 12px;

            font-weight: 800;

            letter-spacing: .6px;

        }


        .qm-task-header h2 {

            margin: 2px 0 0;

            color: #315b45;

            font-size: 21px;

        }


        .qm-marks {

            white-space: nowrap;

            background: #edf5ef;

            color: #456053;

            border-radius: 6px;

            padding: 5px 9px;

            font-size: 13px;

            font-weight: 700;

        }


        .qm-description {

            margin: 8px 0 12px;

            color: #5f7067;

        }


        .qm-example {

            background: #f4f8f5;

            border-left: 4px solid #9fbea9;

            border-radius: 7px;

            padding: 11px 13px;

            margin-bottom: 12px;

        }


        .qm-example-title {

            color: #315b45;

            font-weight: 800;

            margin-bottom: 5px;

        }


        .qm-example p {

            margin: 4px 0;

        }


        .qm-question {

            border: 1px solid #e0e8e2;

            border-radius: 8px;

            padding: 12px;

            margin-top: 9px;

        }


        .qm-question-number {

            color: #456053;

            font-weight: 800;

            margin-bottom: 5px;

        }


        .qm-anna {

            margin-bottom: 5px;

        }


        .qm-input,

        .qm-answer-input,

        .qm-textarea {

            width: 100%;

            border: 1px solid #cbdad0;

            border-radius: 7px;

            background: #fbfdfb;

            color: #37443d;

            font-family: inherit;

            font-size: 16px;

            padding: 9px 11px;

            outline: none;

        }


        .qm-input:focus,

        .qm-answer-input:focus,

        .qm-textarea:focus {

            border-color: #91b59d;

            background: #ffffff;

        }


        .qm-answer {

            margin-top: 9px;

            padding: 9px 11px;

            background: #f7faf8;

            border-radius: 7px;

            color: #52645a;

        }


        .qm-check-btn,

        .qm-main-check {

            border: none;

            border-radius: 7px;

            background: #6d9b7b;

            color: #ffffff;

            font-family: inherit;

            font-size: 15px;

            font-weight: 700;

            cursor: pointer;

            padding: 8px 15px;

            margin-top: 10px;

        }


        .qm-check-btn:hover,

        .qm-main-check:hover {

            background: #5d896b;

        }


        .qm-feedback {

            margin-top: 8px;

            padding: 8px 10px;

            border-radius: 7px;

            font-size: 14px;

            line-height: 1.5;

        }


        .qm-correct {

            background: #edf7ef;

            border: 1px solid #cce3d1;

            color: #356345;

        }


        .qm-wrong {

            background: #fff5f2;

            border: 1px solid #ecd6d0;

            color: #805047;

        }


        .qm-input-correct,

        .qm-answer-input.qm-input-correct {

            border-color: #8eb79a;

            background: #f3faf4;

        }


        .qm-input-wrong,

        .qm-answer-input.qm-input-wrong {

            border-color: #d6a59b;

            background: #fff8f6;

        }


        .qm-reminder {

            background: #f1f7f3;

            border: 1px solid #dce9df;

            border-radius: 7px;

            padding: 10px 12px;

            margin-bottom: 12px;

        }


        .qm-word-bank {

            background: #f8faf8;

            border: 1px solid #dce7df;

            border-radius: 8px;

            padding: 11px 13px;

            margin-bottom: 13px;

        }


        .qm-word-bank-title {

            color: #315b45;

            font-weight: 800;

            margin-bottom: 7px;

        }


        .qm-words {

            display: flex;

            flex-wrap: wrap;

            gap: 6px;

        }


        .qm-word {

            background: #e7f0e9;

            color: #456053;

            border-radius: 5px;

            padding: 4px 8px;

            font-weight: 600;

        }


        .qm-email {

            background: #fffefb;

            border: 1px solid #e4e2d9;

            border-radius: 8px;

            padding: 14px;

        }


        .qm-email-line {

            display: flex;

            align-items: center;

            flex-wrap: wrap;

            gap: 6px;

            margin-top: 12px;

        }


        .qm-email-line .qm-answer-input {

            width: 130px;

            flex: 0 0 130px;

        }


        .qm-love {

            margin-top: 17px;

        }


        .qm-total-feedback {

            margin-top: 12px;

            padding: 11px 13px;

            border-radius: 7px;

            font-size: 15px;

        }


        .qm-score {

            background: #edf7ef;

            border: 1px solid #cce3d1;

            color: #356345;

        }


        .qm-incomplete {

            background: #fff5f2;

            border: 1px solid #ecd6d0;

            color: #805047;

        }


        .qm-writing-prompt {

            border: 1px solid #e0e8e2;

            border-radius: 8px;

            padding: 12px;

            margin-top: 10px;

        }


        .qm-prompt-title {

            color: #315b45;

            font-weight: 800;

            margin-bottom: 8px;

        }


        .qm-hint {

            background: #f2f7f3;

            border-radius: 6px;

            padding: 8px 10px;

            margin-bottom: 9px;

            color: #5d7065;

            font-size: 14px;

        }


        .qm-textarea {

            min-height: 90px;

            resize: vertical;

        }


        .qm-sample {

            margin-top: 9px;

        }


        .qm-sample-box {

            background: #f1f6ff;

            border-left: 4px solid #829fc2;

            border-radius: 7px;

            padding: 10px 12px;

            color: #455466;

        }


        .qm-sample-box p {

            margin: 7px 0 0;

            line-height: 1.6;

        }


        .qm-sample-box .qm-explanation {

            color: #59645f;

            font-size: 14px;

        }


        @media (max-width: 700px) {

            .qm-task {

                padding: 12px;

            }


            .qm-task-header {

                align-items: flex-start;

                flex-direction: column;

                gap: 6px;

            }


            .qm-task-header h2 {

                font-size: 19px;

            }


            .qm-test-intro h1 {

                font-size: 22px;

            }


            .qm-email-line {

                display: block;

            }


            .qm-email-line .qm-answer-input {

                width: 120px;

                margin: 3px 4px;

            }

        }

    `;


    document.head.appendChild(
        style
    );

}


/* =====================================================
   END
===================================================== */

