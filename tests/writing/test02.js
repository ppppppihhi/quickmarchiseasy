```javascript
/* =====================================================
   QUICKMARCH PRACTICE
   WRITING TEST 02
   Pearson VS Gia su Minh Tri Thu Duc
===================================================== */

const TEST_DATA = {

    title: "Writing Test 02",

    /* =================================================
       TASK 3 — Sophie Asks Mike Some Questions
    ================================================= */

    task3: [

        {
            answer: "I think living in the country is better than living in the city.",

            acceptedQuestions: [
                "Do you think living in the country is better than living in the city?",
                "Do you think living in the country is better than living in a city?"
            ]
        },

        {
            answer: "For me, the best thing about living here is fishing in the lake.",

            acceptedQuestions: [
                "What is the best thing about living here?",
                "What's the best thing about living here?"
            ]
        },

        {
            answer: "I usually go fishing two or three times a week.",

            acceptedQuestions: [
                "How often do you go fishing?"
            ]
        },

        {
            answer: "This weekend? Yes, I’m going to go fishing on Saturday.",

            acceptedQuestions: [
                "Are you going to go fishing this weekend?",
                "Are you going fishing this weekend?",
                "Will you go fishing this weekend?"
            ]
        },

        {
            answer: "Of course I can, Sophie. I’d love to teach you to fish!",

            acceptedQuestions: [
                "Can you teach me to fish?",
                "Could you teach me to fish?"
            ]
        }

    ],


    /* =================================================
       TASK 5 — Ben Writes to Grandpa
    ================================================= */

    task5: [

        {
            answer: "woke",

            explanation:
                "wake → V2/ed: woke.<br>" +
                "woke up = đã thức dậy.<br>" +
                "Trong bài: woke up this morning = đã thức dậy vào sáng nay."
        },

        {
            answer: "ate",

            explanation:
                "eat → V2/ed: ate.<br>" +
                "ate + food = đã ăn thức ăn gì đó.<br>" +
                "Trong bài: ate them at the table = đã ăn chúng tại bàn."
        },

        {
            answer: "took",

            explanation:
                "take → V2/ed: took.<br>" +
                "took + something = đã mang/lấy một thứ gì đó.<br>" +
                "Trong bài: took our swimming things = đã mang đồ bơi của chúng tôi."
        },

        {
            answer: "wore",

            explanation:
                "wear → V2/ed: wore.<br>" +
                "wore + clothes = đã mặc/đeo một thứ gì đó.<br>" +
                "Trong bài: wore a hat = đã đội mũ."
        },

        {
            answer: "knocked",

            explanation:
                "knock → V2/ed: knocked.<br>" +
                "knocked on + something = đã gõ vào thứ gì đó.<br>" +
                "Trong bài: knocked on Mike’s door = đã gõ cửa nhà Mike."
        },

        {
            answer: "swam",

            explanation:
                "swim → V2/ed: swam.<br>" +
                "swam to + nơi chốn = đã bơi đến nơi nào đó.<br>" +
                "Trong bài: swam to the middle of the lake = đã bơi ra giữa hồ."
        },

        {
            answer: "put",

            explanation:
                "put → V2/ed: put.<br>" +
                "put + something + onto/in + nơi chốn = đã đặt/đưa một thứ gì đó vào hoặc lên đâu đó.<br>" +
                "Trong bài: put a sailing boat onto the lake = đã đưa một chiếc thuyền buồm xuống hồ."
        },

        {
            answer: "gave",

            explanation:
                "give → V2/ed: gave.<br>" +
                "gave + someone + something = đã đưa/cho ai đó một thứ gì.<br>" +
                "Trong bài: gave us a lesson = đã dạy chúng tôi một bài học."
        },

        {
            answer: "showed",

            explanation:
                "show → V2/ed: showed.<br>" +
                "showed someone how to + verb = đã chỉ cho ai cách làm gì.<br>" +
                "Trong bài: showed us how to turn the boat around = đã chỉ cho chúng tôi cách quay thuyền."
        },

        {
            answer: "caught",

            explanation:
                "catch → V2/ed: caught.<br>" +
                "caught + something = đã bắt được một thứ gì đó.<br>" +
                "Trong bài: caught some fish = đã bắt được một số con cá."
        }

    ],


    /* =================================================
       TASK 6 — My Weekends
    ================================================= */

    task6: [

        {
            starter: "At the weekend, I like...",

            hint:
                "What do you like doing? Where do you go? Who do you go with?",

            sample:
                "At the weekend, I like playing football with my friends in the park.",

            explanation:
                "Nêu hoạt động em thích làm vào cuối tuần, có thể thêm địa điểm và người đi cùng."
        },

        {
            starter: "Sometimes my friends and I...",

            hint:
                "What do you do with your friends? Do you play games, go shopping or play sports?",

            sample:
                "Sometimes my friends and I go shopping and eat lunch together.",

            explanation:
                "Nêu một hoạt động em thường làm cùng bạn bè."
        },

        {
            starter: "Every weekend, my family...",

            hint:
                "What does your family usually do together?",

            sample:
                "Every weekend, my family goes to the park and has lunch together.",

            explanation:
                "Nói về một hoạt động mà gia đình em thường làm cùng nhau vào mỗi cuối tuần."
        },

        {
            starter: "Last weekend,...",

            hint:
                "What did you do? Where did you go? Who did you go with?",

            sample:
                "Last weekend, I went to the beach with my family and played in the sea.",

            explanation:
                "Vì có Last weekend nên dùng thì quá khứ để kể về hoạt động đã xảy ra."
        },

        {
            starter: "Next Saturday,...",

            hint:
                "What are you going to do? Where are you going to go?",

            sample:
                "Next Saturday, I am going to visit my grandparents and have lunch with them.",

            explanation:
                "Nói về kế hoạch trong tương lai. Có thể dùng be going to để diễn tả dự định."
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
        document.getElementById(`writing3-${index}`);

    const feedback =
        document.getElementById(`writing3-feedback-${index}`);


    if (!input || !feedback) {
        return;
    }


    const userAnswer =
        normalizeWritingText(input.value);


    if (userAnswer === "") {

        feedback.innerHTML =
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


    if (accepted.includes(userAnswer)) {

        feedback.innerHTML = `

            ✓ Correct!

            <strong>3/3 marks</strong>

            <br><br>

            <strong>Suggested answer:</strong>

            ${question.acceptedQuestions[0]}

        `;

        feedback.className =
            "feedback correct";

        input.style.borderColor =
            "#16803c";

    } else {

        feedback.innerHTML = `

            ✗ Try again.

            <br><br>

            <strong>Suggested answer:</strong>

            ${question.acceptedQuestions[0]}

        `;

        feedback.className =
            "feedback wrong";

        input.style.borderColor =
            "#c62828";

    }

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
                family’s day by the lake.
                Fill in the missing words.
                Use the verbs in the box below but don't
                forget to change them to the PAST TENSE
                because the day is finished.
                The first one is an example.

            </p>

            <div class="example-box">

                <strong>Remember</strong>

                <br>

                The day is finished, so change the verbs
                into the PAST TENSE.

            </div>

            <div class="question-box">

                <strong>Word bank:</strong>

                <p style="margin-top:10px; line-height:2.2;">

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


    TEST_DATA.task5.forEach((item, index) => {

        const input =
            document.getElementById(
                `writing5-${index + 1}`
            );


        if (!input) {
            return;
        }


        const user =
            normalizeWritingText(input.value);


        const correct =
            normalizeWritingText(item.answer);


        let explanation =
            document.getElementById(
                `writing5-explanation-${index}`
            );


        if (!explanation) {

            explanation =
                document.createElement("div");

            explanation.id =
                `writing5-explanation-${index}`;

            explanation.style.marginTop =
                "10px";

            input.parentNode.appendChild(
                explanation
            );

        }


        if (user === "") {

            explanation.innerHTML = `
                Please write an answer.
            `;

            explanation.className =
                "feedback wrong";

            input.style.borderColor =
                "#c62828";

            return;

        }


        if (user === correct) {

            score += 1.5;

            explanation.innerHTML = `

                ✓ Correct!

                <strong>1.5/1.5 marks</strong>

                <br><br>

                <strong>Answer:</strong>
                ${item.answer}

                <br><br>

                <strong>Giải thích:</strong>

                <br>

                ${item.explanation}

            `;

            explanation.className =
                "feedback correct";

            input.style.borderColor =
                "#16803c";

        } else {

            explanation.innerHTML = `

                ✗ Try again.

                <br><br>

                <strong>Answer:</strong>
                ${item.answer}

                <br><br>

                <strong>Giải thích:</strong>

                <br>

                ${item.explanation}

            `;

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
   TASK 6 — RENDER
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

                    ${index + 1}. ${item.starter}

                </div>

                <div class="example-box">

                    <strong>
                        Gợi ý:
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
                    style="display:none; margin-top:15px;"
                ></div>

            </div>

        `;

    });


    html += `

        <button
            class="button"
            onclick="checkWritingTask6()"
        >
            Submit Task 6
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
   HIỆN SAMPLE ANSWER + GIẢI THÍCH
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
                        line-height:1.6;
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


    if (!feedback) {
        return;
    }


    if (
        completed ===
        TEST_DATA.task6.length
    ) {

        feedback.innerHTML = `

            ✓ Writing submitted!

            <br><br>

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

            Please complete all
            ${TEST_DATA.task6.length}
            sections.

            <br>

            Completed:
            ${completed}/${TEST_DATA.task6.length}

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
