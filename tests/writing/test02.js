```javascript
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
            ],

            explanation:
                "<strong>Do you think...?</strong> = Bạn có nghĩ rằng... không?<br>" +
                "Câu trả lời bắt đầu bằng <strong>I think...</strong>, vì vậy Sophie cần hỏi ý kiến bằng <strong>Do you think...?</strong>."
        },

        {
            answer:
                "For me, the best thing about living here is fishing in the lake.",

            acceptedQuestions: [
                "What is the best thing about living here?",
                "What's the best thing about living here?"
            ],

            explanation:
                "<strong>What is...?</strong> = Cái gì...?/Điều gì...?<br>" +
                "Mike nói về <strong>the best thing about living here</strong>, vì vậy Sophie dùng <strong>What is the best thing about living here?</strong>."
        },

        {
            answer:
                "I usually go fishing two or three times a week.",

            acceptedQuestions: [
                "How often do you go fishing?"
            ],

            explanation:
                "<strong>How often...?</strong> = Bao lâu một lần?/Thường xuyên như thế nào?<br>" +
                "Câu trả lời có <strong>two or three times a week</strong>, đây là thông tin về tần suất nên dùng <strong>How often...?</strong>."
        },

        {
            answer:
                "This weekend? Yes, I’m going to go fishing on Saturday.",

            acceptedQuestions: [
                "Are you going to go fishing this weekend?",
                "Are you going fishing this weekend?",
                "Will you go fishing this weekend?"
            ],

            explanation:
                "<strong>Are you going to...?</strong> = Bạn có định... không?<br>" +
                "Mike nói <strong>I'm going to go fishing</strong>, diễn tả một kế hoạch trong tương lai. Vì vậy có thể hỏi bằng <strong>Are you going to...?</strong>."
        },

        {
            answer:
                "Of course I can, Sophie. I’d love to teach you to fish!",

            acceptedQuestions: [
                "Can you teach me to fish?",
                "Could you teach me to fish?"
            ],

            explanation:
                "<strong>Can you...?</strong> = Bạn có thể...?<br>" +
                "Mike trả lời <strong>Of course I can</strong>, cho thấy câu hỏi cần hỏi về khả năng. Vì vậy dùng <strong>Can you teach me to fish?</strong>."
        }

    ],


    /* =================================================
       TASK 5
       Ben Writes to Grandpa
       15 marks
    ================================================= */

    task5: [

        {
            answer: "woke",

            explanation:
                "<strong>woke</strong> = quá khứ của <strong>wake</strong>.<br>" +
                "<strong>woke up</strong> = đã thức dậy."
        },

        {
            answer: "ate",

            explanation:
                "<strong>ate</strong> = quá khứ của <strong>eat</strong>.<br>" +
                "<strong>ate them</strong> = đã ăn chúng."
        },

        {
            answer: "took",

            explanation:
                "<strong>took</strong> = quá khứ của <strong>take</strong>.<br>" +
                "<strong>took our swimming things and a picnic</strong> = đã mang đồ bơi và đồ ăn picnic."
        },

        {
            answer: "wore",

            explanation:
                "<strong>wore</strong> = quá khứ của <strong>wear</strong>.<br>" +
                "<strong>wore a hat</strong> = đã đội mũ."
        },

        {
            answer: "knocked",

            explanation:
                "<strong>knocked</strong> = quá khứ của <strong>knock</strong>.<br>" +
                "<strong>knocked on Mike's door</strong> = đã gõ cửa nhà Mike."
        },

        {
            answer: "swam",

            explanation:
                "<strong>swam</strong> = quá khứ của <strong>swim</strong>.<br>" +
                "<strong>swam to the middle of the lake</strong> = đã bơi ra giữa hồ."
        },

        {
            answer: "put",

            explanation:
                "<strong>put</strong> = quá khứ của <strong>put</strong>.<br>" +
                "<strong>put a sailing boat onto the lake</strong> = đưa/thả thuyền buồm xuống hồ."
        },

        {
            answer: "gave",

            explanation:
                "<strong>gave</strong> = quá khứ của <strong>give</strong>.<br>" +
                "<strong>gave us a lesson</strong> = đã dạy chúng tôi một bài học."
        },

        {
            answer: "showed",

            explanation:
                "<strong>showed</strong> = quá khứ của <strong>show</strong>.<br>" +
                "<strong>showed us how to turn the boat around</strong> = đã chỉ cho chúng tôi cách quay thuyền."
        },

        {
            answer: "caught",

            explanation:
                "<strong>caught</strong> = quá khứ của <strong>catch</strong>.<br>" +
                "<strong>caught some fish</strong> = đã bắt được một số con cá."
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
                "What do you like doing? Where do you go? Who do you go with?"
        },

        {
            starter:
                "Sometimes my friends and I...",

            hint:
                "What do you do with your friends? Do you play games, go shopping or play sports?"
        },

        {
            starter:
                "Every weekend, my family...",

            hint:
                "What does your family usually do together?"
        },

        {
            starter:
                "Last weekend,...",

            hint:
                "What did you do? Where did you go? Who did you go with?"
        },

        {
            starter:
                "Next Saturday,...",

            hint:
                "What are you going to do? Where are you going to go?"
        }

    ]

};


/* =====================================================
   NORMALIZE TEXT
===================================================== */

function normalizeWritingText(text) {

    return String(text)
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

                The Brown family are staying in Danny's house.
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


                <div

                    id="writing3-explanation-${index}"

                    class="answer-explanation"

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


    const explanation =
        document.getElementById(
            `writing3-explanation-${index}`
        );


    if (!input || !feedback || !explanation) {
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

        explanation.classList.remove("show");

        return;

    }


    const question =
        TEST_DATA.task3[index];


    const accepted =
        question.acceptedQuestions || [];


    const normalizedAccepted =
        accepted.map(
            answer => normalizeWritingText(answer)
        );


    const correct =
        normalizedAccepted.includes(
            userAnswer
        );


    if (correct) {

        feedback.innerHTML =
            "✓ Correct! <strong>3/3 marks</strong>";

        feedback.className =
            "feedback correct";

        input.style.borderColor =
            "#16803c";

    } else {

        feedback.innerHTML =
            "✗ Try again.";

        feedback.className =
            "feedback wrong";

        input.style.borderColor =
            "#c62828";

    }


    /*
       Chỉ sau khi học sinh bấm Check
       mới hiển thị đáp án và giải thích.
    */

    explanation.innerHTML = `

        <div class="answer-sample">

            <strong>
                💡 Suggested answer:
            </strong>

            <br>

            ${accepted[0] || ""}

        </div>


        <strong>
            🇻🇳 Giải thích:
        </strong>

        <br>

        ${question.explanation || ""}

    `;


    explanation.classList.add("show");

};


/* =====================================================
   TASK 5 — RENDER
===================================================== */

function renderWritingTask5() {

    return `

        <div class="task-box">

            <h2 class="task-title">

                Task 5 — Ben Writes to Grandpa

            </h2>


            <p class="task-description">

                Ben writes a card to Grandpa about the
                family's day by the lake.
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
                    in Danny's house last night.
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

                    on Mike's door, and then we all
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
       Task 5:
       10 questions × 1.5 marks = 15 marks.
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
                `writing5-explanation-${index + 1}`
            );


        if (!explanation) {

            explanation =
                document.createElement("div");

            explanation.id =
                `writing5-explanation-${index + 1}`;

            explanation.className =
                "answer-explanation";

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


            input.style.borderColor =
                "#16803c";


            explanation.innerHTML = `

                <div class="answer-sample">

                    <strong>
                        ✓ Correct!
                    </strong>

                    <br>

                    <strong>
                        ${item.answer}
                    </strong>

                    <br>

                    1.5/1.5 marks

                </div>


                <strong>
                    🇻🇳 Giải thích:
                </strong>

                <br>

                ${item.explanation}

            `;


            explanation.classList.add("show");

        } else {

            input.style.borderColor =
                "#c62828";


            explanation.innerHTML = `

                <div class="answer-sample">

                    <strong>
                        💡 Correct answer:
                    </strong>

                    <br>

                    <strong>
                        ${item.answer}
                    </strong>

                </div>


                <strong>
                    🇻🇳 Giải thích:
                </strong>

                <br>

                ${item.explanation}

            `;


            explanation.classList.add("show");

        }

    });


    const total =
        document.getElementById(
            "writing5-total-feedback"
        );


    if (total) {

        total.innerHTML = `

            <strong>
                Task 5 Score: ${score}/15 marks
            </strong>

        `;


        total.className =
            score === 15
                ? "feedback correct"
                : "feedback wrong";

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


    if (completed === TEST_DATA.task6.length) {

        feedback.innerHTML = `

            ✓ Writing submitted!

            <br><br>

            <strong>
                Task 6: ${completed}/${TEST_DATA.task6.length}
                sections completed
            </strong>

            <br><br>

            💡 Đây là bài viết cá nhân.
            Không có một đáp án duy nhất.
            Hãy kiểm tra lại ngữ pháp, từ vựng,
            thì của động từ và nội dung câu trả lời.

        `;

        feedback.className =
            "feedback correct";

    } else {

        feedback.innerHTML = `

            Please complete all
            ${TEST_DATA.task6.length} sections.

            <br>

            (${completed}/${TEST_DATA.task6.length}
            completed)

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

            ${TEST_DATA.title}

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
```
