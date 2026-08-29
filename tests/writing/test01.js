/* =====================================================
QUICKMARCH PRACTICE
WRITING TEST 01
Pearson VS Giasu Minh Tri Thu Duc

IMPORTANT:
This file is independent.
index.html only loads this file.

Required structure:
window.QUICKMARCH_TEST = {
title: "...",
render: function(container) { ... }
};
===================================================== */

/* =====================================================
TEST DATA
===================================================== */

const WRITING_TEST_01_DATA = {

```
title: "Writing Test 01",


/* =================================================
   TASK 3
================================================= */

task3: [

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

],


/* =================================================
   TASK 5
================================================= */

task5: [

    {
        answer: "came",

        explanation:
            "come → V2/ed: came.<br>" +
            "came to it = đã đến tham dự cuộc thi."
    },


    {
        answer: "sang",

        explanation:
            "sing → V2/ed: sang.<br>" +
            "sang the song = đã hát bài hát."
    },


    {
        answer: "felt",

        explanation:
            "feel → V2/ed: felt.<br>" +
            "felt nervous = cảm thấy lo lắng."
    },


    {
        answer: "fell",

        explanation:
            "fall → V2/ed: fell.<br>" +
            "fell over = ngã xuống."
    },


    {
        answer: "thought",

        explanation:
            "think → V2/ed: thought.<br>" +
            "thought = đã nghĩ."
    },


    {
        answer: "sat",

        explanation:
            "sit → V2/ed: sat.<br>" +
            "sat down = đã ngồi xuống."
    },


    {
        answer: "clapped",

        explanation:
            "clap → V2/ed: clapped.<br>" +
            "clapped loudly = vỗ tay lớn."
    },


    {
        answer: "won",

        explanation:
            "win → V2/ed: won.<br>" +
            "won the competition = đã thắng cuộc thi."
    },


    {
        answer: "took",

        explanation:
            "take → V2/ed: took.<br>" +
            "took me out for a meal = đưa tôi đi ăn."
    },


    {
        answer: "slept",

        explanation:
            "sleep → V2/ed: slept.<br>" +
            "slept for ten hours = đã ngủ mười tiếng."
    }

],


/* =================================================
   TASK 6
================================================= */

task6: [

    {
        starter:
            "My favourite music is...",

        hint:
            "What kind of music? When do you usually listen to it?",

        sample:
            "My favourite music is pop music. I usually listen to it in the evening.",

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
            "What does your teacher usually do? Can he/she sing well? What songs does he/she sing or teach you?",

        sample:
            "Our music teacher sings very well. She often sings English songs and teaches us new songs.",

        explanation:
            "Mô tả giáo viên âm nhạc và những bài hát cô/thầy thường hát hoặc dạy."
    },


    {
        starter:
            "In my last music lesson...",

        hint:
            "What song did you learn? What is it about? Did you like it?",

        sample:
            "In my last music lesson, I learned a song about friendship. It was very beautiful and I liked it.",

        explanation:
            "Nêu tên/chủ đề bài hát, nội dung và cảm nhận của em."
    },


    {
        starter:
            "In the future...",

        hint:
            "Do you want to become a singer? Do you want to learn more songs or play an instrument?",

        sample:
            "In the future, I want to learn more songs and play the guitar. I would also like to become a singer.",

        explanation:
            "Nói về mong muốn của em trong tương lai liên quan đến âm nhạc."
    }

]
```

};

/* =====================================================
NORMALIZE
===================================================== */

function normalizeWritingText01(text) {

```
return String(text || "")

    .toLowerCase()

    .trim()

    .replace(/[’‘]/g, "'")

    .replace(/[.,!?;:"]/g, "")

    .replace(/\s+/g, " ");
```

}

/* =====================================================
ESCAPE HTML
===================================================== */

function escapeWritingHTML01(value) {

```
return String(value || "")

    .replace(/&/g, "&amp;")

    .replace(/</g, "&lt;")

    .replace(/>/g, "&gt;")

    .replace(/"/g, "&quot;")

    .replace(/'/g, "&#039;");
```

}

/* =====================================================
TASK 3 RENDER
===================================================== */

function renderWriting01Task3(container) {

```
let html = `

    <div class="qm-task-box">

        <h2 class="qm-task-title">
            Task 3 — Anna Talks to Cindy Barr
        </h2>

        <p class="qm-task-description">

            Cindy Barr sings songs for her job.
            Anna asks her questions for the school magazine.
            Write the questions in the spaces.
            The first one is an example.

        </p>


        <div class="qm-example-box">

            <strong>Example</strong>

            <p>
                <strong>Anna:</strong>
                Did you have a singing competition at your school?
            </p>

            <p>
                <strong>Cindy:</strong>
                Yes. We had a singing competition every year.
            </p>

        </div>

`;


WRITING_TEST_01_DATA.task3.forEach(
    function(item, index) {

        html += `

            <div class="qm-question-box">

                <div class="qm-question-number">
                    Question ${index + 1}
                </div>

                <p>
                    <strong>Anna:</strong>
                </p>

                <input
                    id="qm-w01-t3-${index}"
                    class="qm-question-input"
                    type="text"
                    placeholder="Write the question here..."
                >

                <div class="qm-given-answer">

                    <strong>Cindy:</strong>

                    ${escapeWritingHTML01(item.answer)}

                </div>

                <button
                    type="button"
                    class="qm-button"
                    onclick="window.checkWriting01Task3(${index})"
                >
                    Check
                </button>

                <div
                    id="qm-w01-t3-feedback-${index}"
                    class="qm-feedback"
                ></div>

            </div>

        `;

    }
);


html += `

    </div>

`;


container.innerHTML += html;
```

}

/* =====================================================
TASK 3 CHECK
===================================================== */

window.checkWriting01Task3 =
function(index) {

```
const input =
    document.getElementById(
        `qm-w01-t3-${index}`
    );


const feedback =
    document.getElementById(
        `qm-w01-t3-feedback-${index}`
    );


if (!input || !feedback) {
    return;
}


const userAnswer =
    normalizeWritingText01(
        input.value
    );


if (userAnswer === "") {

    feedback.innerHTML =
        "Please write a question.";

    feedback.className =
        "qm-feedback qm-wrong";

    return;

}


const question =
    WRITING_TEST_01_DATA.task3[index];


const accepted =
    question.acceptedQuestions.map(
        normalizeWritingText01
    );


if (
    accepted.includes(userAnswer)
) {

    feedback.innerHTML =
        "✓ Correct! <strong>3/3 marks</strong>";

    feedback.className =
        "qm-feedback qm-correct";

} else {

    feedback.innerHTML =

        "✗ Try again." +

        "<br>" +

        "<strong>Suggested answer:</strong> " +

        escapeWritingHTML01(
            question.acceptedQuestions[0]
        ) +

        "?";

    feedback.className =
        "qm-feedback qm-wrong";

}
```

};

/* =====================================================
TASK 5 RENDER
===================================================== */

function renderWriting01Task5(container) {

```
let html = `

    <div class="qm-task-box">

        <h2 class="qm-task-title">
            Task 5 — Anna Sends an Email
        </h2>

        <p class="qm-task-description">

            Anna sends an email to her friend Kerry
            about the singing competition.
            Fill in the missing words.
            Use the verbs in the box below but don't forget
            to change them to the PAST TENSE because the
            competition is finished.

        </p>


        <div class="qm-example-box">

            <strong>
                💡 Remember:
            </strong>

            Change the verbs into the
            <strong>PAST TENSE</strong>.

        </div>


        <div class="qm-question-box">

            <strong>Word bank:</strong>

            <p class="qm-word-bank">

                take &nbsp;
                think &nbsp;
                come &nbsp;
                sing &nbsp;
                clap &nbsp;
                feel &nbsp;
                have &nbsp;
                sit &nbsp;
                win &nbsp;
                sleep &nbsp;
                fall

            </p>

        </div>


        <div class="qm-question-box">

            <p>
                <strong>Hi Kerry</strong>
            </p>


            <p>
                My school <strong>(example)</strong>
                <strong>had</strong>
                a singing competition last Saturday.
            </p>


            ${createWriting01Blank(
                0,
                "Lots of people",
                "to it and it was really good fun."
            )}


            ${createWriting01Blank(
                1,
                "I",
                'the song "Night Jungle".'
            )}


            ${createWriting01Blank(
                2,
                "When it was my turn to sing I suddenly",
                "very nervous."
            )}


            ${createWriting01Blank(
                3,
                "My mouth was so dry and I nearly",
                "over on the floor!"
            )}


            <p>
                “I can’t do it”, I

                <input
                    id="qm-w01-t5-4"
                    class="qm-answer-input"
                    type="text"
                    placeholder="(5)"
                >

                .
            </p>


            <p>
                But it was OK. I drank a glass of water
                and

                <input
                    id="qm-w01-t5-5"
                    class="qm-answer-input"
                    type="text"
                    placeholder="(6)"
                >

                down for a little bit.
            </p>


            <p>
                When I finished, everyone

                <input
                    id="qm-w01-t5-6"
                    class="qm-answer-input"
                    type="text"
                    placeholder="(7)"
                >

                really loudly.
            </p>


            <p>
                And Kerry, this is the best news.
                I

                <input
                    id="qm-w01-t5-7"
                    class="qm-answer-input"
                    type="text"
                    placeholder="(8)"
                >

                the competition!
            </p>


            <p>
                After the competition, my family

                <input
                    id="qm-w01-t5-8"
                    class="qm-answer-input"
                    type="text"
                    placeholder="(9)"
                >

                me out for a meal.
            </p>


            <p>
                I got into bed at midnight and

                <input
                    id="qm-w01-t5-9"
                    class="qm-answer-input"
                    type="text"
                    placeholder="(10)"
                >

                for ten hours!
            </p>


            <p>
                <strong>Love Anna</strong>
            </p>

        </div>


        <button
            type="button"
            class="qm-button"
            onclick="window.checkWriting01Task5()"
        >
            Check Task 5
        </button>


        <div
            id="qm-w01-t5-total"
            class="qm-feedback"
        ></div>

    </div>

`;


container.innerHTML += html;
```

}

/* =====================================================
TASK 5 BLANK
===================================================== */

function createWriting01Blank(
index,
before,
after
) {

```
const number =
    index + 1;


return `

    <p>

        ${escapeWritingHTML01(before)}

        <input
            id="qm-w01-t5-${index}"
            class="qm-answer-input"
            type="text"
            placeholder="(${number})"
        >

        ${escapeWritingHTML01(after)}

    </p>

    <div
        id="qm-w01-t5-explanation-${index}"
        class="qm-feedback"
    ></div>

`;
```

}

/* =====================================================
TASK 5 CHECK
===================================================== */

window.checkWriting01Task5 =
function() {

```
let score = 0;


WRITING_TEST_01_DATA.task5.forEach(
    function(item, index) {

        const input =
            document.getElementById(
                `qm-w01-t5-${index}`
            );


        const explanation =
            document.getElementById(
                `qm-w01-t5-explanation-${index}`
            );


        if (!input || !explanation) {
            return;
        }


        const user =
            normalizeWritingText01(
                input.value
            );


        const correct =
            normalizeWritingText01(
                item.answer
            );


        if (user === correct) {

            score += 1.5;


            explanation.innerHTML =

                "✓ Correct! " +

                "<strong>1.5/1.5 marks</strong>" +

                "<br>" +

                "<strong>💡 Explanation:</strong> " +

                item.explanation;


            explanation.className =
                "qm-feedback qm-correct";

        } else {

            explanation.innerHTML =

                "✗ Try again." +

                "<br>" +

                "<strong>Answer:</strong> " +

                escapeWritingHTML01(
                    item.answer
                ) +

                "<br>" +

                "<strong>💡 Explanation:</strong> " +

                item.explanation;


            explanation.className =
                "qm-feedback qm-wrong";

        }

    }
);


const total =
    document.getElementById(
        "qm-w01-t5-total"
    );


if (total) {

    total.innerHTML =

        `<strong>
            Task 5 Score: ${score}/15 marks
        </strong>`;

    total.className =
        "qm-feedback qm-score";

}
```

};

/* =====================================================
TASK 6 RENDER
===================================================== */

function renderWriting01Task6(container) {

```
let html = `

    <div class="qm-task-box">

        <h2 class="qm-task-title">
            Task 6 — Music and Me
        </h2>

        <p class="qm-task-description">

            Now write about music and you.
            Use the ideas below to help you.

        </p>

`;


WRITING_TEST_01_DATA.task6.forEach(
    function(item, index) {

        html += `

            <div class="qm-question-box">

                <div class="qm-question-number">

                    ${index + 1}.
                    ${escapeWritingHTML01(
                        item.starter
                    )}

                </div>


                <div class="qm-example-box">

                    <strong>
                        💡 Gợi ý:
                    </strong>

                    <br>

                    ${escapeWritingHTML01(
                        item.hint
                    )}

                </div>


                <textarea
                    id="qm-w01-t6-${index}"
                    class="qm-answer-textarea"
                    rows="3"
                    placeholder="Write your answer here..."
                ></textarea>


                <div
                    id="qm-w01-t6-sample-${index}"
                    class="qm-sample"
                    style="display:none;"
                ></div>

            </div>

        `;

    }
);


html += `

        <button
            type="button"
            class="qm-button"
            onclick="window.checkWriting01Task6()"
        >
            Check Task 6
        </button>


        <div
            id="qm-w01-t6-feedback"
            class="qm-feedback"
        ></div>

    </div>

`;


container.innerHTML += html;
```

}

/* =====================================================
TASK 6 CHECK
===================================================== */

window.checkWriting01Task6 =
function() {

```
let completed = 0;


WRITING_TEST_01_DATA.task6.forEach(
    function(item, index) {

        const input =
            document.getElementById(
                `qm-w01-t6-${index}`
            );


        const sample =
            document.getElementById(
                `qm-w01-t6-sample-${index}`
            );


        if (
            input &&
            input.value.trim() !== ""
        ) {

            completed++;

        }


        if (sample) {

            sample.innerHTML = `

                <strong>
                    💡 Sample answer:
                </strong>

                <p>
                    ${escapeWritingHTML01(
                        item.sample
                    )}
                </p>

                <p>
                    <strong>
                        Giải thích:
                    </strong>

                    ${escapeWritingHTML01(
                        item.explanation
                    )}

                </p>

            `;

            sample.style.display =
                "block";

        }

    }
);


const feedback =
    document.getElementById(
        "qm-w01-t6-feedback"
    );


if (!feedback) {
    return;
}


if (completed === 5) {

    feedback.innerHTML = `

        ✓ Writing submitted!

        <br>

        <strong>
            Task 6 Score: 10/10 marks
        </strong>

        <br><br>

        💡 Đây là bài viết cá nhân.
        Sample answer chỉ là câu trả lời tham khảo.

    `;

    feedback.className =
        "qm-feedback qm-correct";

} else {

    feedback.innerHTML = `

        Please complete all 5 sections.

        (${completed}/5 completed)

        <br><br>

        💡 Sample answers have been shown
        to help you.

    `;

    feedback.className =
        "qm-feedback qm-wrong";

}
```

};

/* =====================================================
WRITING TEST CSS
===================================================== */

function addWriting01Styles() {

```
if (
    document.getElementById(
        "quickmarch-writing01-style"
    )
) {

    return;

}


const style =
    document.createElement("style");


style.id =
    "quickmarch-writing01-style";


style.textContent = `

    .qm-task-box {

        margin-bottom: 18px;

    }


    .qm-task-title {

        color: #315b45;

        font-size: 21px;

        margin-bottom: 8px;

    }


    .qm-task-description {

        color: #5f7067;

        font-size: 16px;

        margin-bottom: 10px;

    }


    .qm-example-box {

        background: #eef6f0;

        border: 1px solid #d2e2d6;

        border-radius: 8px;

        padding: 11px 14px;

        margin: 10px 0;

    }


    .qm-example-box p {

        margin-top: 6px;

    }


    .qm-question-box {

        background: #fafcfb;

        border: 1px solid #dce7df;

        border-radius: 9px;

        padding: 13px;

        margin: 10px 0;

    }


    .qm-question-number {

        color: #315b45;

        font-weight: 700;

        margin-bottom: 7px;

    }


    .qm-given-answer {

        margin-top: 9px;

        padding: 9px 11px;

        background: #f0f5f1;

        border-radius: 7px;

    }


    .qm-question-input {

        width: 100%;

        padding: 10px;

        border: 1px solid #c9d8ce;

        border-radius: 7px;

        font-family: inherit;

        font-size: 16px;

    }


    .qm-answer-input {

        width: 155px;

        max-width: 100%;

        padding: 7px 9px;

        margin: 0 4px;

        border: 1px solid #c9d8ce;

        border-radius: 6px;

        font-family: inherit;

        font-size: 16px;

    }


    .qm-answer-textarea {

        width: 100%;

        padding: 10px;

        border: 1px solid #c9d8ce;

        border-radius: 7px;

        font-family: inherit;

        font-size: 16px;

        resize: vertical;

        min-height: 80px;

    }


    .qm-word-bank {

        line-height: 2;

        margin-top: 5px;

    }


    .qm-button {

        border: none;

        background: #a9c9b3;

        color: #294f39;

        border-radius: 7px;

        padding: 8px 14px;

        font-family: inherit;

        font-size: 16px;

        font-weight: 700;

        cursor: pointer;

        margin-top: 7px;

    }


    .qm-button:hover {

        background: #96bca2;

    }


    .qm-feedback {

        margin-top: 9px;

        padding: 9px 11px;

        border-radius: 7px;

        display: block;

    }


    .qm-correct {

        background: #edf7ef;

        border: 1px solid #c9e0ce;

        color: #356344;

    }


    .qm-wrong {

        background: #fff4f2;

        border: 1px solid #edd4cf;

        color: #805047;

    }


    .qm-score {

        background: #e8f2eb;

        border: 1px solid #c7dccd;

        color: #315b45;

        font-weight: 700;

    }


    .qm-sample {

        margin-top: 10px;

        padding: 11px 13px;

        background: #f0f7ff;

        border-left: 4px solid #8caec5;

        border-radius: 7px;

    }


    .qm-sample p {

        margin-top: 6px;

    }


    @media (max-width: 600px) {

        .qm-answer-input {

            width: 130px;

        }

    }

`;


document.head.appendChild(style);
```

}

/* =====================================================
MAIN RENDER FUNCTION
===================================================== */

function renderWritingTest01(container) {

```
addWriting01Styles();


container.innerHTML = "";


renderWriting01Task3(container);

renderWriting01Task5(container);

renderWriting01Task6(container);
```

}

/* =====================================================
QUICKMARCH TEST CONTRACT
===================================================== */

/*
THIS IS THE MOST IMPORTANT PART.

index.html looks for:

```
   window.QUICKMARCH_TEST
```

and then calls:

```
   QUICKMARCH_TEST.render(container)
```

*/

window.QUICKMARCH_TEST = {

```
title:
    WRITING_TEST_01_DATA.title,

testNumber: 1,

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

},


render: function(container) {

    renderWritingTest01(container);

}
```

};
