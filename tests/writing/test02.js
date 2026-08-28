/* =====================================================
   QUICKMARCH PRACTICE
   WRITING TEST 02
   Pearson VS Gia su Minh Tri Thu Duc
===================================================== */

const TEST_DATA = {

    title: "Writing Test 02",


    /* =================================================
       TASK 3
       Sophie Asks Mike Some Questions
       15 marks
    ================================================= */

    task3: [

        {
            answer:
                "I think living in the country is better than living in the city.",

            acceptedQuestions: [
                "Do you think living in the country is better than living in the city?",
                "Do you think living in the country is better than living in a city?"
            ]
        },

        {
            answer:
                "For me, the best thing about living here is fishing in the lake.",

            acceptedQuestions: [
                "What is the best thing about living here?",
                "What's the best thing about living here?"
            ]
        },

        {
            answer:
                "I usually go fishing two or three times a week.",

            acceptedQuestions: [
                "How often do you go fishing?"
            ]
        },

        {
            answer:
                "This weekend? Yes, I’m going to go fishing on Saturday.",

            acceptedQuestions: [
                "Are you going to go fishing this weekend?",
                "Are you going fishing this weekend?",
                "Will you go fishing this weekend?"
            ]
        },

        {
            answer:
                "Of course I can, Sophie. I’d love to teach you to fish!",

            acceptedQuestions: [
                "Can you teach me to fish?",
                "Could you teach me to fish?"
            ]
        }

    ],


    /* =================================================
       TASK 5
       Ben Writes to Grandpa
       15 marks
    ================================================= */

    task5: [

        {
            answer: "slept",

            explanation:
                "1. **slept** = quá khứ của **sleep**.<br>" +
                "2. **slept in Danny’s house** = **đã ngủ ở nhà Danny**."
        },

        {
            answer: "woke",

            explanation:
                "1. **woke** = quá khứ của **wake**.<br>" +
                "2. **woke up** = **đã thức dậy**."
        },

        {
            answer: "ate",

            explanation:
                "1. **ate** = quá khứ của **eat**.<br>" +
                "2. **ate them** = **đã ăn chúng**."
        },

        {
            answer: "took",

            explanation:
                "1. **took** = quá khứ của **take**.<br>" +
                "2. **took our swimming things** = **đã mang đồ bơi**."
        },

        {
            answer: "wore",

            explanation:
                "1. **wore** = quá khứ của **wear**.<br>" +
                "2. **wore a hat** = **đã đội mũ**."
        },

        {
            answer: "knocked",

            explanation:
                "1. **knocked** = quá khứ của **knock**.<br>" +
                "2. **knocked on the door** = **đã gõ cửa**."
        },

        {
            answer: "swam",

            explanation:
                "1. **swam** = quá khứ của **swim**.<br>" +
                "2. **swam to the middle** = **đã bơi ra giữa**."
        },

        {
            answer: "put",

            explanation:
                "1. **put** = quá khứ của **put**.<br>" +
                "2. **put a sailing boat onto the lake** = **đưa/thả thuyền buồm xuống hồ**."
        },

        {
            answer: "gave",

            explanation:
                "1. **gave** = quá khứ của **give**.<br>" +
                "2. **gave us a lesson** = **đã dạy chúng tôi một bài học**."
        },

        {
            answer: "showed",

            explanation:
                "1. **showed** = quá khứ của **show**.<br>" +
                "2. **showed us how to turn** = **đã chỉ cho chúng tôi cách quay thuyền**."
        },

        {
            answer: "caught",

            explanation:
                "1. **caught** = quá khứ của **catch**.<br>" +
                "2. **caught some fish** = **đã bắt được một số con cá**."
        }

    ],


    /* =================================================
       TASK 6
       My Weekends
       10 marks
    ================================================= */

    task6: [

        {
            starter:
                "At the weekend, I like...",

            hint:
                "What do you like doing? Where do you go? Who do you go with?",

            sample:
                "At the weekend, I like playing football with my friends. We usually play in the park near my house.",

            explanation:
                "Nêu hoạt động em thích làm vào cuối tuần và nói thêm nơi chốn hoặc người đi cùng."
        },

        {
            starter:
                "Sometimes my friends and I...",

            hint:
                "What do you do with your friends? Do you play games, go shopping or play sports?",

            sample:
                "Sometimes my friends and I go shopping or play games together. We always have a lot of fun.",

            explanation:
                "Nêu một hoặc hai hoạt động em thường làm cùng bạn bè."
        },

        {
            starter:
                "Every weekend, my family...",

            hint:
                "What does your family usually do together?",

            sample:
                "Every weekend, my family has a meal together. Sometimes we go to the park or visit our grandparents.",

            explanation:
                "Nêu hoạt động gia đình thường làm vào mỗi cuối tuần."
        },

        {
            starter:
                "Last weekend,...",

            hint:
                "What did you do? Where did you go? Who did you go with?",

            sample:
                "Last weekend I went to the park with my family. We had a picnic and played some games together.",

            explanation:
                "Kể về hoạt động đã xảy ra cuối tuần trước. Chú ý dùng quá khứ đơn."
        },

        {
            starter:
                "Next Saturday,...",

            hint:
                "What are you going to do? Where are you going to go?",

            sample:
                "Next Saturday, I am going to visit my grandparents. We are going to have lunch together and watch a movie.",

            explanation:
                "Nói về kế hoạch cuối tuần tới. Có thể dùng **be going to + verb**."
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
   TASK 3 — RENDER
===================================================== */

function renderWritingTask3() {

    let html = `

        <div class="task-box">

            <h2 class="task-title">
                Task 3 — Sophie Asks Mike Some Questions
            </h2>

            <p class="task-description">

                The Brown family are staying in Danny’s house.
                Sophie talks to the neighbour, Mike.
                She asks him some questions.
                Write her questions in the spaces.
                The first one is an example.

            </p>


            <div class="example-box">

                <strong>Example</strong>

                <p style="margin-top:8px;">

                    <strong>Sophie:</strong>
                    When did you move into your house, Mike?

                </p>

                <p>

                    <strong>Mike:</strong>
                    Into this house? I moved here last year.

                </p>

            </div>

    `;


    TEST_DATA.task3.forEach((item, index) => {

        html += `

            <div class="question-box">

                <div class="question-number">

                    Question ${index + 1}

                </div>


                <p>

                    <strong>Sophie:</strong>

                </p>


                <input

                    id="writing3-${index}"

                    class="question-input"

                    type="text"

                    placeholder="Write Sophie's question here..."

                >


                <div class="given-answer">

                    <strong>Mike:</strong>

                    ${item.answer}

                </div>


                <button

                    class="button"

                    style="margin-top:15px;"

                    onclick="submitWriting3(${index})"

                >

                    Check

                </button>


                <div

                    id="writing3-feedback-${index}"

                    class="feedback"

                ></div>

            </div>

        `;

    });


    html += `</div>`;

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
            `✗ Try again.
            <br>
            <strong>Suggested answer:</strong>
            ${question.acceptedQuestions[0]}?`;

        feedback.className =
            "feedback wrong";

        input.style.borderColor =
            "#c62828";

    }

};


/* =====================================================
   TASK 5 — FULL CARD
===================================================== */

function renderWritingTask5() {

    return `

        <div class="task-box">

            <h2 class="task-title">

                Task 5 — Ben Writes to Grandpa

            </h2>


            <p class="task-description">

                Ben writes a card to Grandpa about the
                family’s day by the lake.
                Fill in the missing words.
                Use the verbs in the box below but don't
                forget to change them to the PAST TENSE
                because the day is finished.
                The first one is an example.

            </p>


            <div class="example-box">

                <strong>
                    💡 Remember:
                </strong>

                <br>

                The day is finished, so change the verbs
                into the <strong>PAST TENSE</strong>.

            </div>


            <div class="question-box">

                <strong>Word bank:</strong>

                <p style="
                    margin-top:10px;
                    line-height:2.2;
                ">

                    put &nbsp;
                    swim &nbsp;
                    wake &nbsp;
                    give &nbsp;
                    catch &nbsp;
                    sleep &nbsp;
                    eat &nbsp;
                    take &nbsp;
                    knock &nbsp;
                    show &nbsp;
                    wear

                </p>

            </div>


            <div class="question-box">

                <p>

                    <strong>Dear Grandpa</strong>

                </p>


                <p style="margin-top:15px;">

                    We <strong>(example)</strong>
                    <strong>slept</strong>
                    in Danny’s house last night.
                    It was lovely and sunny when we all

                    <input
                        id="writing5-1"
                        class="answer-input"
                        style="width:130px;"
                        type="text"
                        placeholder="(1)"
                    >

                    up this morning.

                </p>


                <p style="margin-top:15px;">

                    Mum cooked sausage and eggs for breakfast
                    and we

                    <input
                        id="writing5-2"
                        class="answer-input"
                        style="width:130px;"
                        type="text"
                        placeholder="(2)"
                    >

                    them at the table in the garden.

                </p>


                <p style="margin-top:15px;">

                    Then we

                    <input
                        id="writing5-3"
                        class="answer-input"
                        style="width:130px;"
                        type="text"
                        placeholder="(3)"
                    >

                    our swimming things and a picnic
                    into our bags.

                </p>


                <p style="margin-top:15px;">

                    Jack

                    <input
                        id="writing5-4"
                        class="answer-input"
                        style="width:130px;"
                        type="text"
                        placeholder="(4)"
                    >

                    a hat all the time because
                    the sun was quite hot.

                </p>


                <p style="margin-top:15px;">

                    We

                    <input
                        id="writing5-5"
                        class="answer-input"
                        style="width:130px;"
                        type="text"
                        placeholder="(5)"
                    >

                    on Mike’s door, and then we all
                    walked to the lake.

                </p>


                <p style="margin-top:15px;">

                    Dad

                    <input
                        id="writing5-6"
                        class="answer-input"
                        style="width:130px;"
                        type="text"
                        placeholder="(6)"
                    >

                    to the middle of the lake.

                </p>


                <p style="margin-top:15px;">

                    Anna and I

                    <input
                        id="writing5-7"
                        class="answer-input"
                        style="width:130px;"
                        type="text"
                        placeholder="(7)"
                    >

                    a sailing boat onto the lake
                    with a sailing teacher, Sarah.

                </p>


                <p style="margin-top:15px;">

                    She

                    <input
                        id="writing5-8"
                        class="answer-input"
                        style="width:130px;"
                        type="text"
                        placeholder="(8)"
                    >

                    us a lesson for an hour.

                </p>


                <p style="margin-top:15px;">

                    She

                    <input
                        id="writing5-9"
                        class="answer-input"
                        style="width:130px;"
                        type="text"
                        placeholder="(9)"
                    >

                    us how to turn the boat around.

                </p>


                <p style="margin-top:15px;">

                    Sophie and Mike

                    <input
                        id="writing5-10"
                        class="answer-input"
                        style="width:130px;"
                        type="text"
                        placeholder="(10)"
                    >

                    some fish and we are going
                    to cook them for dinner.

                </p>


                <p style="margin-top:20px;">

                    <strong>Love</strong>

                </p>

                <p>

                    <strong>Ben</strong>

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
   TASK 5 — CHECK
===================================================== */

window.checkWritingTask5 = function() {

    let score = 0;


    /*
       Task 5 has 10 questions.
       15 marks total.
       Each question = 1.5 marks.
    */


    TEST_DATA.task5.forEach((item, index) => {

        const input =
            document.getElementById(
                `writing5-${index + 1}`
            );


        if (!input) {
            return;
        }


        let explanation =
            document.getElementById(
                `writing5-explanation-${index}`
            );


        if (!explanation) {

            explanation =
                document.createElement("div");

            explanation.id =
                `writing5-explanation-${index}`;

            explanation.className =
                "feedback";

            input.parentNode.appendChild(
                explanation
            );

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
                `✓ Correct!
                <strong>1.5/1.5 marks</strong>
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

    });


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
   TASK 6 — MY WEEKENDS
===================================================== */

function renderWritingTask6() {

    let html = `

        <div class="task-box">

            <h2 class="task-title">

                Task 6 — My Weekends

            </h2>


            <p class="task-description">

                Now write about your weekends.
                Write about 50 words —
                about 10 words in each space.

            </p>

    `;


    TEST_DATA.task6.forEach((item, index) => {

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


                <div

                    id="writing6-sample-${index}"

                    style="
                        display:none;
                        margin-top:15px;
                    "

                ></div>

            </div>

        `;

    });


    html += `

        <button

            class="button"

            onclick="checkWritingTask6()"

        >

            Check Task 6

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

    let completed = 0;


    TEST_DATA.task6.forEach((item, index) => {

        const input =
            document.getElementById(
                `writing6-${index}`
            );


        const sample =
            document.getElementById(
                `writing6-sample-${index}`
            );


        if (
            input &&
            input.value.trim() !== ""
        ) {

            completed++;

        }


        if (sample) {

            sample.innerHTML = `

                <div style="
                    background:#f0f7ff;
                    border-left:5px solid #3949ab;
                    padding:15px;
                    border-radius:10px;
                ">

                    <strong>
                        💡 Sample answer:
                    </strong>


                    <p style="
                        margin-top:8px;
                        line-height:1.6;
                    ">

                        ${item.sample}

                    </p>


                    <p style="
                        margin-top:10px;
                        color:#555;
                    ">

                        <strong>
                            Giải thích:
                        </strong>

                        ${item.explanation}

                    </p>

                </div>

            `;


            sample.style.display =
                "block";

        }

    });


    const feedback =
        document.getElementById(
            "writing6-feedback"
        );


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
            "feedback correct";

    } else {

        feedback.innerHTML = `

            Please complete all 5 sections.
            (${completed}/5 completed)

            <br><br>

            💡 Sample answers have been shown
            to help you.

        `;

        feedback.className =
            "feedback wrong";

    }

};


/* =====================================================
   MAIN WRITING RENDER
===================================================== */

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

            ${data.title || "Writing Test 02"}

        </h2>

    `;


    html +=
        renderWritingTask3();


    html +=
        renderWritingTask5();


    html +=
        renderWritingTask6();


    content.innerHTML =
        html;

};


/* =====================================================
   TEST INFORMATION
===================================================== */

window.WRITING_TEST_INFO = {

    testNumber: 2,

    title: "Writing Test 02",

    totalMarks: 40,

    tasks: {

        task3: {

            title:
                "Task 3 — Sophie Asks Mike Some Questions",

            marks: 15

        },

        task5: {

            title:
                "Task 5 — Ben Writes to Grandpa",

            marks: 15

        },

        task6: {

            title:
                "Task 6 — My Weekends",

            marks: 10

        }

    }

};
