/* =====================================================
   QUICKMARCH PRACTICE
   WRITING TEST 01
   Pearson VS Gia su Minh Tri Thu Duc
===================================================== */


/* =====================================================
   TEST DATA
===================================================== */

const TEST_DATA = {

    title: "Writing Test 01",


    /* =================================================
       TASK 3
       Anna Talks to Cindy Barr
       15 marks
    ================================================= */

    task3: [

        {
            answer: "I won the competition in 2007.",

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

    ],


    /* =================================================
       TASK 5
       Anna Sends an Email
       15 marks
    ================================================= */

    task5: [

        {
            answer: "came",

            explanation:
                "1. **came** = quá khứ của **come**.<br>" +
                "2. **came to it** = **đã đến tham dự cuộc thi**."
        },

        {
            answer: "sang",

            explanation:
                "1. **sang** = quá khứ của **sing**.<br>" +
                "2. **sang the song** = **đã hát bài hát**."
        },

        {
            answer: "felt",

            explanation:
                "1. **felt** = quá khứ của **feel**.<br>" +
                "2. **felt nervous** = **cảm thấy lo lắng**."
        },

        {
            answer: "fell",

            explanation:
                "1. **fell** = quá khứ của **fall**.<br>" +
                "2. **fell over** = **ngã xuống**."
        },

        {
            answer: "thought",

            explanation:
                "1. **thought** = quá khứ của **think**.<br>" +
                "2. **thought** = **đã nghĩ**."
        },

        {
            answer: "sat",

            explanation:
                "1. **sat** = quá khứ của **sit**.<br>" +
                "2. **sat down** = **đã ngồi xuống**."
        },

        {
            answer: "clapped",

            explanation:
                "1. **clapped** = quá khứ của **clap**.<br>" +
                "2. **clapped loudly** = **vỗ tay lớn**."
        },

        {
            answer: "won",

            explanation:
                "1. **won** = quá khứ của **win**.<br>" +
                "2. **won the competition** = **đã thắng cuộc thi**."
        },

        {
            answer: "took",

            explanation:
                "1. **took** = quá khứ của **take**.<br>" +
                "2. **took me out for a meal** = **đưa tôi đi ăn**."
        },

        {
            answer: "slept",

            explanation:
                "1. **slept** = quá khứ của **sleep**.<br>" +
                "2. **slept for ten hours** = **đã ngủ mười tiếng**."
        }

    ],


    /* =================================================
       TASK 6
       Music and Me
       10 marks
    ================================================= */

    task6: [

        {
            starter: "My favourite music is...",

            hint:
                "What kind of music? When do you usually listen to it?"
        },

        {
            starter: "I like it because...",

            hint:
                "Why do you like it? How does it make you feel?"
        },

        {
            starter: "Our music teacher...",

            hint:
                "What does your teacher usually do? Can he/she sing well? What songs does he/she sing or teach you?"
        },

        {
            starter: "In my last music lesson...",

            hint:
                "What song did you learn? What is it about? Did you like it?"
        },

        {
            starter: "In the future...",

            hint:
                "Do you want to become a singer? Do you want to learn more songs or play an instrument?"
        }

    ]

};


/* =====================================================
   NORMALIZE TEXT
===================================================== */

function normalizeWritingText(text) {

    return text
        .toLowerCase()
        .trim()
        .replace(/[’‘]/g, "'")
        .replace(/[.,!?;:"]/g, "")
        .replace(/\s+/g, " ");

}


/* =====================================================
   TASK 3 — CUSTOM RENDER
===================================================== */

function renderWritingTask3() {

    let html = `

        <div class="task-box">

            <h2 class="task-title">
                Task 3 — Anna Talks to Cindy Barr
            </h2>

            <p class="task-description">

                Cindy Barr sings songs for her job.
                Anna asks her questions for the school magazine.
                Write the questions in the spaces.
                The first one is an example.

            </p>


            <div class="example-box">

                <strong>Example</strong>

                <p style="margin-top:8px;">
                    <strong>Anna:</strong>
                    Did you have a singing competition at your school?
                </p>

                <p>
                    <strong>Cindy:</strong>
                    Yes. We had a singing competition every year.
                </p>

            </div>

    `;


    TEST_DATA.task3.forEach(
        (item, index) => {

            html += `

                <div class="question-box">

                    <div class="question-number">
                        Question ${index + 1}
                    </div>


                    <p>
                        <strong>Anna:</strong>
                    </p>


                    <input
                        id="writing3-${index}"
                        class="question-input"
                        type="text"
                        placeholder="Write the question here..."
                    >


                    <p style="
                        margin-top:10px;
                        font-weight:bold;
                    ">
                        ?
                    </p>


                    <div class="given-answer">

                        <strong>
                            Cindy:
                        </strong>

                        ${item.answer}

                    </div>


                    <button
                        class="button"
                        style="margin-top:15px;"
                        onclick="
                            submitWriting3(${index})
                        "
                    >
                        Check
                    </button>


                    <div
                        id="writing3-feedback-${index}"
                        class="feedback"
                    ></div>

                </div>

            `;

        }
    );


    html += `

        </div>

    `;

    return html;

}


/* =====================================================
   TASK 3 — CHECK
===================================================== */

window.submitWriting3 = function(index) {

    const input =
        document.getElementById(
            `writing3-${index}`
        );

    const feedback =
        document.getElementById(
            `writing3-feedback-${index}`
        );


    if (!input || !feedback) {
        return;
    }


    const userAnswer =
        normalizeWritingText(
            input.value
        );


    if (userAnswer === "") {

        feedback.textContent =
            "Please write a question.";

        feedback.className =
            "feedback wrong";

        return;

    }


    const question =
        TEST_DATA.task3[index];


    const accepted =
        question.acceptedQuestions.map(
            normalizeWritingText
        );


    if (
        accepted.includes(userAnswer)
    ) {

        feedback.innerHTML =
            "✓ Correct! <strong>3/3 marks</strong>";

        feedback.className =
            "feedback correct";

        input.style.borderColor =
            "#16803c";

    } else {

        feedback.innerHTML =
            `✗ Try again.<br>
             <strong>Suggested answer:</strong>
             ${question.acceptedQuestions[0]}?`;

        feedback.className =
            "feedback wrong";

        input.style.borderColor =
            "#c62828";

    }

};


/* =====================================================
   TASK 5 — FULL EMAIL
===================================================== */

function renderWritingTask5() {

    return `

        <div class="task-box">

            <h2 class="task-title">
                Task 5 — Anna Sends an Email
            </h2>


            <p class="task-description">

                Anna sends an email to her friend Kerry
                about the singing competition.
                Fill in the missing words.
                Use the verbs in the box below but don't
                forget to change them to the PAST TENSE
                because the competition is finished.
                The first one is an example.

            </p>


            <div class="example-box">

                <strong>
                    💡 Remember:
                </strong>

                Change the verbs into the
                <strong>PAST TENSE</strong>.

            </div>


            <div class="question-box">

                <strong>Word bank:</strong>

                <p style="
                    margin-top:10px;
                    line-height:2;
                ">

                    <span class="given-answer">
                        take
                    </span>

                    <span class="given-answer">
                        think
                    </span>

                    <span class="given-answer">
                        come
                    </span>

                    <span class="given-answer">
                        sing
                    </span>

                    <span class="given-answer">
                        clap
                    </span>

                    <span class="given-answer">
                        feel
                    </span>

                    <span class="given-answer">
                        have
                    </span>

                    <span class="given-answer">
                        sit
                    </span>

                    <span class="given-answer">
                        win
                    </span>

                    <span class="given-answer">
                        sleep
                    </span>

                    <span class="given-answer">
                        fall
                    </span>

                </p>

            </div>


            <div class="question-box">

                <p><strong>Hi Kerry,</strong></p>

                <p style="margin-top:15px;">

                    My school
                    <strong>(example)</strong>
                    <strong>had</strong>
                    a singing competition last Saturday.

                </p>


                ${createEmailBlank(
                    0,
                    "Lots of people",
                    "to it and it was really good fun."
                )}


                ${createEmailBlank(
                    1,
                    "I",
                    'the song "Night Jungle".'
                )}


                ${createEmailBlank(
                    2,
                    "When it was my turn to sing I suddenly",
                    "very nervous."
                )}


                ${createEmailBlank(
                    3,
                    "My mouth was so dry and I nearly",
                    "over on the floor!"
                )}


                <p style="margin-top:15px;">

                    “I can’t do it”, I

                    <input
                        id="writing5-4"
                        class="answer-input"
                        style="width:180px;"
                        type="text"
                        placeholder="(5)"
                    >

                    .

                </p>


                <p style="margin-top:15px;">

                    But it was OK.
                    I drank a glass of water and

                    <input
                        id="writing5-5"
                        class="answer-input"
                        style="width:180px;"
                        type="text"
                        placeholder="(6)"
                    >

                    down for a little bit.

                </p>


                <p style="margin-top:15px;">

                    When I finished, everyone

                    <input
                        id="writing5-6"
                        class="answer-input"
                        style="width:180px;"
                        type="text"
                        placeholder="(7)"
                    >

                    really loudly.

                </p>


                <p style="margin-top:15px;">

                    And Kerry, this is the best news.
                    I

                    <input
                        id="writing5-7"
                        class="answer-input"
                        style="width:180px;"
                        type="text"
                        placeholder="(8)"
                    >

                    the competition!

                </p>


                <p style="margin-top:15px;">

                    After the competition, my family

                    <input
                        id="writing5-8"
                        class="answer-input"
                        style="width:180px;"
                        type="text"
                        placeholder="(9)"
                    >

                    me out for a meal.

                </p>


                <p style="margin-top:15px;">

                    I got into bed at midnight and

                    <input
                        id="writing5-9"
                        class="answer-input"
                        style="width:180px;"
                        type="text"
                        placeholder="(10)"
                    >

                    for ten hours!

                </p>


                <p style="margin-top:20px;">
                    <strong>Love Anna</strong>
                </p>

            </div>


            <button
                class="button"
                onclick="checkWritingTask5()"
            >
                Check Task 5
            </button>


            <div
                id="writing5-total-feedback"
                class="feedback"
                style="margin-top:20px;"
            ></div>

        </div>

    `;

}


/* =====================================================
   CREATE EMAIL BLANK
===================================================== */

function createEmailBlank(
    index,
    before,
    after
) {

    const number =
        index + 1;

    return `

        <p style="margin-top:15px;">

            ${before}

            <input
                id="writing5-${index}"
                class="answer-input"
                style="width:180px;"
                type="text"
                placeholder="(${number})"
            >

            ${after}

        </p>

        <div
            id="writing5-explanation-${index}"
            class="feedback"
        ></div>

    `;

}


/* =====================================================
   TASK 5 — CHECK ALL
===================================================== */

window.checkWritingTask5 = function() {

    let score = 0;


    TEST_DATA.task5.forEach(
        (item, index) => {

            const input =
                document.getElementById(
                    `writing5-${index}`
                );

            const explanation =
                document.getElementById(
                    `writing5-explanation-${index}`
                );


            if (!input || !explanation) {
                return;
            }


            const user =
                normalizeWritingText(
                    input.value
                );


            const correct =
                normalizeWritingText(
                    item.answer
                );


            if (user === correct) {

                score += 1.5;

                explanation.innerHTML =
                    `✓ Correct! <strong>1.5/1.5 marks</strong>
                    <br>
                    <strong>💡 Explanation:</strong>
                    ${item.explanation}`;

                explanation.className =
                    "feedback correct";

                input.style.borderColor =
                    "#16803c";

            } else {

                explanation.innerHTML =
                    `✗ Try again.
                    <br>
                    <strong>Answer:</strong>
                    ${item.answer}
                    <br>
                    <strong>💡 Explanation:</strong>
                    ${item.explanation}`;

                explanation.className =
                    "feedback wrong";

                input.style.borderColor =
                    "#c62828";

            }

        }
    );


    const total =
        document.getElementById(
            "writing5-total-feedback"
        );


    if (total) {

        total.innerHTML =
            `<strong>Task 5 Score: ${score}/15 marks</strong>`;

        total.className =
            "feedback correct";

    }

};


/* =====================================================
   TASK 6 — MUSIC AND ME
===================================================== */

function renderWritingTask6() {

    let html = `

        <div class="task-box">

            <h2 class="task-title">
                Task 6 — Music and Me
            </h2>


            <p class="task-description">

                Now write about music and you.
                Use the ideas below to help you.

            </p>

    `;


    TEST_DATA.task6.forEach(
        (item, index) => {

            html += `

                <div class="question-box">

                    <div class="question-number">

                        ${index + 1}.
                        ${item.starter}

                    </div>


                    <div class="example-box">

                        <strong>
                            💡 Gợi ý:
                        </strong>

                        <br>

                        ${item.hint}

                    </div>


                    <textarea
                        id="writing6-${index}"
                        class="answer-input"
                        rows="4"
                        placeholder="Write your answer here..."
                        style="resize:vertical;"
                    ></textarea>

                </div>

            `;

        }
    );


    html += `

            <button
                class="button"
                onclick="checkWritingTask6()"
            >
                Submit Writing
            </button>


            <div
                id="writing6-feedback"
                class="feedback"
                style="margin-top:20px;"
            ></div>

        </div>

    `;


    return html;

}


/* =====================================================
   TASK 6 — CHECK
===================================================== */

window.checkWritingTask6 = function() {

    const inputs =
        TEST_DATA.task6.map(
            (_, index) =>
                document.getElementById(
                    `writing6-${index}`
                )
        );


    let completed = 0;


    inputs.forEach(input => {

        if (
            input &&
            input.value.trim() !== ""
        ) {

            completed++;

        }

    });


    const feedback =
        document.getElementById(
            "writing6-feedback"
        );


    if (!feedback) {
        return;
    }


    if (completed < 5) {

        feedback.innerHTML =
            `Please complete all 5 sections.
            (${completed}/5 completed)`;

        feedback.className =
            "feedback wrong";

        return;

    }


    /*
       Task 6 is personal writing.
       Each completed section = 2 marks.
    */

    const score =
        completed * 2;


    feedback.innerHTML =
        `✓ Writing submitted!
        <br>
        <strong>Task 6 Score: ${score}/10 marks</strong>
        <br><br>
        💡 Your answers are personal, so there is
        no single correct answer.`;

    feedback.className =
        "feedback correct";

};


/* =====================================================
   CUSTOM WRITING RENDER
===================================================== */

const originalRenderWriting =
    window.renderWriting;


/*
   Override renderWriting so that
   Test 01 uses the new Task 3,
   Task 5 and Task 6 layout.
*/

window.renderWriting = function(data) {

    const content =
        document.getElementById(
            "writingContent"
        );


    if (!content) {
        return;
    }


    let html = `

        <h2 class="current-test-title">
            ${data.title || "Writing Test 01"}
        </h2>

    `;


    html += renderWritingTask3();

    html += renderWritingTask5();

    html += renderWritingTask6();


    content.innerHTML =
        html;

};


/* =====================================================
   TEST INFORMATION
===================================================== */

window.WRITING_TEST_INFO = {

    testNumber: 1,

    title: "Writing Test 01",

    totalMarks: 40,

    tasks: {

        task3: {
            title:
                "Task 3 — Anna Talks to Cindy Barr",
            marks: 15
        },

        task5: {
            title:
                "Task 5 — Anna Sends an Email",
            marks: 15
        },

        task6: {
            title:
                "Task 6 — Music and Me",
            marks: 10
        }

    }

};
