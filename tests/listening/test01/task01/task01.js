/* =====================================================
   QUICKMARCH PRACTICE
   LISTENING TEST 01
   TASK 01 - A BEAUTIFUL DAY

   7 questions × 2 marks = 14 marks
===================================================== */

window.QUICKMARCH_TEST = {

    title: "Listening Test 01 - Task 1",

    render: function(container) {

        const questions = [

            {
                number: 1,
                question: "Which sandwich does Sophie want?",
                image: "listening/test01/images/1.png",
                answer: "B"
            },

            {
                number: 2,
                question: "Where did the Browns go for a picnic last time?",
                image: "listening/test01/images/2.png",
                answer: "A"
            },

            {
                number: 3,
                question: "What sport are they going to play?",
                image: "listening/test01/images/3.png",
                answer: "C"
            },

            {
                number: 4,
                question: "When are they planning to leave for their day out?",
                image: "listening/test01/images/4.png",
                answer: "C"
            },

            {
                number: 5,
                question: "Why is Mr Brown late?",
                image: "listening/test01/images/5.png",
                answer: "B"
            },

            {
                number: 6,
                question: "How is Mr Brown getting home from the airport?",
                image: "listening/test01/images/6.png",
                answer: "A"
            },

            {
                number: 7,
                question: "Where is Ben?",
                image: "listening/test01/images/7.png",
                answer: "B"
            }

        ];

        let score = 0;
        let checked = false;

        /* =================================================
           MAIN HTML
        ================================================= */

        container.innerHTML = `

            <div class="listening-task">

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
                        Sophie is helping her mum get ready for a picnic lunch today.
                        Listen to the conversation. After each part of the conversation,
                        answer the question. Put a cross in the box under the correct picture.
                        You will hear the conversation twice. First, listen to the example.
                    </p>

                    <audio
                        controls
                        preload="metadata"
                        style="
                            width:100%;
                            max-width:700px;
                        "
                    >
                        <source
                            src="listening/test01/audio/task1.mp3"
                            type="audio/mpeg"
                        >
                        Your browser does not support audio.
                    </audio>

                </div>

                <div id="listeningQuestions"></div>

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

                <div
                    id="listeningResult"
                    style="
                        margin-top:16px;
                    "
                ></div>

            </div>

        `;

        const questionArea =
            container.querySelector("#listeningQuestions");

        /* =================================================
           CREATE QUESTIONS
        ================================================= */

        questions.forEach(function(item) {

            const questionBox =
                document.createElement("div");

            questionBox.style.cssText = `
                margin-bottom:24px;
                padding:14px;
                border:1px solid #d8e4dc;
                border-radius:10px;
                background:#ffffff;
            `;

            questionBox.innerHTML = `

                <div style="
                    font-weight:700;
                    color:#315b45;
                    font-size:18px;
                    margin-bottom:12px;
                ">
                    ${item.number}. ${item.question}
                </div>

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

            `;

            questionArea.appendChild(questionBox);

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

                    const answer =
                        button.getAttribute(
                            "data-answer"
                        );

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

                            }

                        }
                    );

                    button.style.background =
                        "#b9d4c1";

                    button.style.color =
                        "#294f39";

                    button.dataset.selected = "true";

                }
            );

        });

        /* =================================================
           CHECK
        ================================================= */

        container
            .querySelector("#checkListening")
            .addEventListener(
                "click",
                function() {

                    if (checked) {
                        return;
                    }

                    checked = true;
                    score = 0;

                    questions.forEach(
                        function(item) {

                            const selected =
                                container.querySelector(
                                    `.answer-button[data-question="${item.number}"][data-selected="true"]`
                                );

                            /*
                               Find selected button another way
                               because data-selected may be
                               stored on the clicked element.
                            */

                            const selectedButton =
                                Array.from(
                                    container.querySelectorAll(
                                        `.answer-button[data-question="${item.number}"]`
                                    )
                                ).find(
                                    function(button) {
                                        return button.dataset.selected === "true";
                                    }
                                );

                            if (
                                selectedButton &&
                                selectedButton.dataset.answer === item.answer
                            ) {

                                score += 2;

                                selectedButton.style.background =
                                    "#b9d4c1";

                                selectedButton.style.color =
                                    "#294f39";

                            }
                            else {

                                if (selectedButton) {

                                    selectedButton.style.background =
                                        "#f4cccc";

                                    selectedButton.style.color =
                                        "#7a3030";

                                }

                            }

                        }
                    );

                    const result =
                        container.querySelector(
                            "#listeningResult"
                        );

                    result.innerHTML = `

                        <div style="
                            padding:16px;
                            border:1px solid #d8e4dc;
                            border-radius:10px;
                            background:#f4f8f5;
                            text-align:center;
                        ">

                            <div style="
                                font-size:22px;
                                font-weight:800;
                                color:#315b45;
                            ">
                                Score: ${score} / 14
                            </div>

                            <div style="
                                margin-top:6px;
                                color:#64756b;
                            ">
                                ${score === 14
                                    ? "Excellent!"
                                    : "Check your answers and try again."
                                }
                            </div>

                        </div>

                    `;

                    container
                        .querySelector(
                            "#checkListening"
                        )
                        .disabled = true;

                }
            );

    }

};

