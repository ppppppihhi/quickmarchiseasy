/* =====================================================
   QUICKMARCH PRACTICE
   LISTENING TEST 01
   TASK 01 - A BEAUTIFUL DAY

   7 questions × 2 marks = 14 marks

   REVIEW FORMAT:
   After Check:
   - Show correct answer
   - Show keyword script immediately
     below each question
   - Do NOT show full transcript
===================================================== */

window.QUICKMARCH_TEST = {

    title: "Listening Test 01 - Task 1",

    render: function(container) {

        /* =================================================
           QUESTIONS
        ================================================= */

        const questions = [

            {
                number: 1,

                question:
                    "Which sandwich does Sophie want?",

                image:
                    "listening/test01/images/1.png",

                answer:
                    "B",

                keywords: `
                    <strong>Sophie:</strong>
                    ......had cheese yesterday......
                    have cheese and tomato today?

                    <br><br>

                    <strong>Mom:</strong>
                    Yes, ok...... want some onion too?

                    <br><br>

                    <strong>Sophie:</strong>
                    No,...... don’t like......
                `
            },


            {
                number: 2,

                question:
                    "Where did the Browns go for a picnic last time?",

                image:
                    "listening/test01/images/2.png",

                answer:
                    "A",

                keywords: `
                    <strong>Mom:</strong>
                    ......picnic at the beach last month......

                    <br><br>

                    <strong>Sophie:</strong>
                    ......woods last year......

                    <br><br>

                    <strong>Sophie:</strong>
                    ......mountains......
                `
            },


            {
                number: 3,

                question:
                    "What sport are they going to play?",

                image:
                    "listening/test01/images/3.png",

                answer:
                    "C",

                keywords: `
                    <strong>Mom:</strong>
                    ......play some games......

                    <br><br>

                    <strong>Sophie:</strong>
                    ......Not tennis again......

                    <br><br>

                    <strong>Mom:</strong>
                    ......What about volleyball?

                    <br><br>

                    <strong>Sophie:</strong>
                    ......badminton the most!

                    <br><br>

                    <strong>Mom:</strong>
                    ......let’s do that......
                `
            },


            {
                number: 4,

                question:
                    "When are they planning to leave for their day out?",

                image:
                    "listening/test01/images/4.png",

                answer:
                    "C",

                keywords: `
                    <strong>Sophie:</strong>
                    What time are we leaving......

                    <br><br>

                    <strong>Mom:</strong>
                    ......back from her dance class
                    at 10 o’clock......

                    <br><br>

                    <strong>Sophie:</strong>
                    ......go at about 11?

                    <br><br>

                    <strong>Mom:</strong>
                    That’s the idea......
                    ......home from work at 10.30.
                `
            },


            {
                number: 5,

                question:
                    "Why is Mr Brown late?",

                image:
                    "listening/test01/images/5.png",

                answer:
                    "B",

                keywords: `
                    <strong>Sophie:</strong>
                    ......didn’t fly back from Canada
                    last night......

                    <br><br>

                    <strong>Sophie:</strong>
                    Was there a storm?

                    <br><br>

                    <strong>Mom:</strong>
                    No, but ......very foggy......
                `
            },


            {
                number: 6,

                question:
                    "How is Mr Brown getting home from the airport?",

                image:
                    "listening/test01/images/6.png",

                answer:
                    "A",

                keywords: `
                    <strong>Sophie:</strong>
                    ......Dad driving back
                    from the airport?

                    <br><br>

                    <strong>Mom:</strong>
                    ......needed the car......
                    ......he didn’t take it.

                    <br><br>

                    <strong>Sophie:</strong>
                    ......bus or a taxi......

                    <br><br>

                    <strong>Mom:</strong>
                    He’s getting a taxi......
                    ......buses aren’t running today.
                `
            },


            {
                number: 7,

                question:
                    "Where is Ben?",

                image:
                    "listening/test01/images/7.png",

                answer:
                    "B",

                keywords: `
                    <strong>Mom:</strong>
                    Ben, are you ready yet?

                    <br><br>

                    <strong>Sophie:</strong>
                    ......living room earlier......

                    <br><br>

                    <strong>Sophie:</strong>
                    ......bedroom getting dressed?

                    <br><br>

                    <strong>Mom:</strong>
                    ......usually in the bathroom......

                    <br><br>

                    <strong>Sophie:</strong>
                    He’s in there now......
                    ......hear the shower.
                `
            }

        ];


        /* =================================================
           VARIABLES
        ================================================= */

        let score = 0;

        let checked = false;


        /* =================================================
           MAIN HTML
        ================================================= */

        container.innerHTML = `

            <div class="listening-task">


                <!-- =====================================
                     TASK INFORMATION
                ====================================== -->

                <div style="
                    background:#f4f8f5;
                    border:1px solid #d8e4dc;
                    border-radius:10px;
                    padding:14px;
                    margin-bottom:16px;
                ">

                    <h3 style="
                        color:#315b45;
                        margin-bottom:6px;
                    ">
                        Task One: A Beautiful Day
                    </h3>


                    <p style="
                        color:#64756b;
                        margin-bottom:12px;
                    ">
                        Sophie is helping her mum get ready
                        for a picnic lunch today.
                        Listen to the conversation.
                        After each part of the conversation,
                        answer the question.
                        Put a cross in the box under the
                        correct picture.
                        You will hear the conversation twice.
                        First, listen to the example.
                    </p>


                    <!-- =================================
                         AUDIO
                    ================================== -->

                    <audio
                        controls
                        preload="metadata"
                        style="
                            width:100%;
                            max-width:700px;
                        "
                    >

                        <source
                            src="/quickmarchiseasy/listening/test01/audio/task1.mp3"
                            type="audio/mpeg"
                        >

                        Your browser does not support audio.

                    </audio>

                </div>


                <!-- =====================================
                     QUESTIONS
                ====================================== -->

                <div id="listeningQuestions"></div>


                <!-- =====================================
                     CHECK BUTTON
                ====================================== -->

                <div style="
                    text-align:center;
                    margin-top:20px;
                ">

                    <button
                        id="checkListening"
                        type="button"
                        style="
                            background:#315b45;
                            color:white;
                            border:none;
                            border-radius:8px;
                            padding:10px 28px;
                            font-size:17px;
                            font-weight:700;
                            cursor:pointer;
                        "
                    >
                        Check
                    </button>

                </div>


                <!-- =====================================
                     SCORE
                ====================================== -->

                <div
                    id="listeningResult"
                    style="
                        margin-top:16px;
                    "
                ></div>


            </div>

        `;


        /* =================================================
           QUESTION AREA
        ================================================= */

        const questionArea =
            container.querySelector(
                "#listeningQuestions"
            );


        /* =================================================
           CREATE QUESTIONS
        ================================================= */

        questions.forEach(function(item) {

            const questionBox =
                document.createElement("div");


            questionBox.className =
                "listening-question";


            questionBox.style.cssText = `
                margin-bottom:24px;
                padding:14px;
                border:1px solid #d8e4dc;
                border-radius:10px;
                background:#ffffff;
            `;


            questionBox.innerHTML = `

                <!-- QUESTION -->

                <div style="
                    font-weight:700;
                    color:#315b45;
                    font-size:18px;
                    margin-bottom:12px;
                ">

                    ${item.number}.
                    ${item.question}

                </div>


                <!-- PICTURE -->

                <div style="
                    text-align:center;
                    margin-bottom:12px;
                ">

                    <img
                        src="${item.image}"
                        alt="Question ${item.number}"
                        style="
                            display:block;
                            width:100%;
                            max-width:1000px;
                            height:auto;
                            margin:0 auto;
                            border-radius:8px;
                        "
                    >

                </div>


                <!-- ANSWERS -->

                <div style="
                    display:flex;
                    justify-content:center;
                    gap:10px;
                    margin-top:10px;
                ">


                    <button
                        type="button"
                        class="answer-button"
                        data-question="${item.number}"
                        data-answer="A"
                    >
                        A
                    </button>


                    <button
                        type="button"
                        class="answer-button"
                        data-question="${item.number}"
                        data-answer="B"
                    >
                        B
                    </button>


                    <button
                        type="button"
                        class="answer-button"
                        data-question="${item.number}"
                        data-answer="C"
                    >
                        C
                    </button>


                </div>


                <!-- REVIEW AREA
                     HIDDEN UNTIL CHECK -->

                <div
                    class="question-review"
                    style="
                        display:none;
                        margin-top:16px;
                    "
                ></div>

            `;


            questionArea.appendChild(
                questionBox
            );

        });


        /* =================================================
           ANSWER BUTTON STYLE
        ================================================= */

        const buttons =
            container.querySelectorAll(
                ".answer-button"
            );


        buttons.forEach(function(button) {

            button.style.cssText = `
                width:60px;
                height:45px;
                border:1px solid #c5d7ca;
                background:#f7faf8;
                color:#456053;
                border-radius:8px;
                font-size:17px;
                font-weight:700;
                cursor:pointer;
            `;


            /* =============================================
               SELECT ANSWER
            ============================================== */

            button.addEventListener(
                "click",
                function() {

                    if (checked) {
                        return;
                    }


                    const questionNumber =
                        button.getAttribute(
                            "data-question"
                        );


                    /* Reset buttons
                       for this question */

                    buttons.forEach(
                        function(other) {

                            if (
                                other.getAttribute(
                                    "data-question"
                                ) === questionNumber
                            ) {

                                other.style.background =
                                    "#f7faf8";

                                other.style.color =
                                    "#456053";

                                other.dataset.selected =
                                    "false";

                            }

                        }
                    );


                    /* Select clicked button */

                    button.style.background =
                        "#b9d4c1";

                    button.style.color =
                        "#294f39";

                    button.dataset.selected =
                        "true";

                }
            );

        });


        /* =================================================
           CHECK
        ================================================= */

        container
            .querySelector(
                "#checkListening"
            )
            .addEventListener(
                "click",
                function() {

                    if (checked) {
                        return;
                    }


                    checked = true;

                    score = 0;


                    /* =====================================
                       CHECK EACH QUESTION
                    ====================================== */

                    questions.forEach(
                        function(item) {

                            const questionBox =
                                Array.from(
                                    container.querySelectorAll(
                                        ".listening-question"
                                    )
                                ).find(
                                    function(box) {

                                        return box
                                            .querySelector(
                                                ".answer-button"
                                            )
                                            .dataset
                                            .question ===
                                            String(
                                                item.number
                                            );

                                    }
                                );


                            const selectedButton =
                                Array.from(
                                    questionBox.querySelectorAll(
                                        ".answer-button"
                                    )
                                ).find(
                                    function(button) {

                                        return (
                                            button.dataset.selected ===
                                            "true"
                                        );

                                    }
                                );


                            /* =================================
                               CHECK ANSWER
                            ================================== */

                            const isCorrect =
                                selectedButton &&
                                selectedButton.dataset.answer ===
                                item.answer;


                            if (isCorrect) {

                                score += 2;

                            }


                            /* =================================
                               STYLE ANSWER BUTTONS
                            ================================== */

                            questionBox
                                .querySelectorAll(
                                    ".answer-button"
                                )
                                .forEach(
                                    function(button) {

                                        button.disabled =
                                            true;

                                        button.style.cursor =
                                            "default";


                                        /* Correct answer */

                                        if (
                                            button.dataset.answer ===
                                            item.answer
                                        ) {

                                            button.style.background =
                                                "#b9d4c1";

                                            button.style.color =
                                                "#294f39";

                                            button.style.borderColor =
                                                "#9cbea6";

                                        }


                                        /* Student's wrong answer */

                                        else if (
                                            selectedButton &&
                                            button ===
                                            selectedButton
                                        ) {

                                            button.style.background =
                                                "#f4cccc";

                                            button.style.color =
                                                "#7a3030";

                                            button.style.borderColor =
                                                "#dfaaaa";

                                        }

                                    }
                                );


                            /* =================================
                               SHOW REVIEW
                               DIRECTLY UNDER QUESTION
                            ================================== */

                            const review =
                                questionBox.querySelector(
                                    ".question-review"
                                );


                            review.style.display =
                                "block";


                            review.innerHTML = `

                                <div style="
                                    border-top:1px solid #d8e4dc;
                                    padding-top:14px;
                                ">


                                    <!-- RESULT -->

                                    <div style="
                                        font-weight:800;
                                        font-size:17px;
                                        margin-bottom:10px;
                                        color:${
                                            isCorrect
                                                ? "#315b45"
                                                : "#7a3030"
                                        };
                                    ">

                                        ${
                                            isCorrect
                                                ? "✓ Correct"
                                                : "✗ Incorrect"
                                        }

                                        &nbsp;&nbsp;

                                        Correct answer:
                                        <strong>
                                            ${item.answer}
                                        </strong>

                                    </div>


                                    <!-- EXPLANATION -->

                                    <div style="
                                        font-weight:700;
                                        color:#315b45;
                                        margin-bottom:8px;
                                    ">

                                        Giải thích:
                                        <span style="
                                            font-weight:400;
                                        ">
                                            trong bài nghe em sẽ
                                            nghe thấy những từ khóa sau:
                                        </span>

                                    </div>


                                    <!-- KEYWORDS -->

                                    <div style="
                                        background:#f7faf8;
                                        border-left:4px solid #b9d4c1;
                                        border-radius:6px;
                                        padding:12px;
                                        color:#45564d;
                                        line-height:1.7;
                                    ">

                                        ${item.keywords}

                                    </div>


                                </div>

                            `;

                        }
                    );


                    /* =================================================
                       SHOW SCORE
                    ================================================= */

                    const result =
                        container.querySelector(
                            "#listeningResult"
                        );


                    result.innerHTML = `

                        <div style="
                            padding:18px;
                            border:1px solid #d8e4dc;
                            border-radius:10px;
                            background:#f4f8f5;
                            text-align:center;
                        ">

                            <div style="
                                font-size:24px;
                                font-weight:800;
                                color:#315b45;
                            ">

                                Score:
                                ${score} / 14

                            </div>


                            <div style="
                                margin-top:6px;
                                color:#64756b;
                            ">

                                ${
                                    score === 14
                                        ? "Excellent!"
                                        : "Review the keywords below each question."
                                }

                            </div>

                        </div>

                    `;


                    /* =====================================
                       DISABLE CHECK BUTTON
                    ====================================== */

                    const checkButton =
                        container.querySelector(
                            "#checkListening"
                        );


                    checkButton.disabled =
                        true;


                    checkButton.style.opacity =
                        "0.6";


                    checkButton.style.cursor =
                        "default";

                }
            );

    }

};
