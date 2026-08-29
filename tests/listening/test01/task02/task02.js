
/* =====================================================
   QUICKMARCH LISTENING TEST 01
   TASK 2: THE TRIP
   8 QUESTIONS × 2 MARKS = 16 MARKS
===================================================== */

window.QUICKMARCH_TEST = {

    title: "Task Two: The Trip",

    render: function(container) {

        container.innerHTML = `

            <div style="
                max-width:900px;
                margin:0 auto;
            ">

                <!-- =================================================
                     INSTRUCTION
                ================================================== -->

                <div style="
                    background:#f4f8f5;
                    border:1px solid #d8e4dc;
                    border-radius:10px;
                    padding:14px 16px;
                    margin-bottom:15px;
                ">

                    <h3 style="
                        color:#315b45;
                        margin-bottom:5px;
                    ">
                        Task Two: The Trip
                    </h3>

                    <p style="
                        color:#5f7067;
                        margin-bottom:4px;
                    ">
                        Listen to the conversation. After each part
                        of the conversation, write a short answer
                        to the question.
                    </p>

                    <p style="
                        color:#718078;
                        font-size:14px;
                    ">
                        You will hear the conversation twice.
                    </p>

                </div>


                <!-- =================================================
                     AUDIO
                ================================================== -->

                <div style="
                    background:#e3eee6;
                    border:1px solid #cfdfd4;
                    border-radius:10px;
                    padding:14px;
                    margin-bottom:18px;
                    text-align:center;
                ">

                    <div style="
                        color:#315b45;
                        font-weight:800;
                        margin-bottom:8px;
                    ">
                        🎧 Listen to the recording
                    </div>

                    <audio
                        controls
                        preload="metadata"
                        style="
                            width:100%;
                            max-width:700px;
                        "
                    >

                        <!-- FIXED AUDIO PATH -->
                        <source
                            src="listening/test01/audio/task2.mp3"
                            type="audio/mpeg"
                        >

                        Your browser does not support
                        the audio element.

                    </audio>

                </div>


                <!-- =================================================
                     QUESTIONS
                ================================================== -->

                <div id="task2Questions"></div>


                <!-- =================================================
                     CHECK BUTTON
                ================================================== -->

                <div style="
                    text-align:center;
                    margin-top:20px;
                ">

                    <button
                        id="task2CheckBtn"
                        type="button"
                        style="
                            background:#b9d4c1;
                            border:1px solid #a7c5af;
                            color:#294f39;
                            border-radius:8px;
                            padding:10px 28px;
                            font-family:inherit;
                            font-size:17px;
                            font-weight:800;
                            cursor:pointer;
                        "
                    >
                        Check Answers
                    </button>

                </div>


                <!-- =================================================
                     SCORE
                ================================================== -->

                <div
                    id="task2Score"
                    style="
                        margin-top:15px;
                        text-align:center;
                    "
                ></div>

            </div>

        `;


        /* =====================================================
           QUESTION DATA
        ===================================================== */

        const questions = [

            {
                number: 1,

                question:
                    "Who owned the boat first?",

                answers: [
                    "Bill",
                    "Uncle Bill"
                ],

                answerDisplay:
                    "Bill",

                explanation: `
                    Đọc câu hỏi họ hỏi
                    <b>Who owned ... first?</b>:
                    Ai sở hữu ... đầu tiên?

                    <br><br>

                    Nghe trong băng:

                    <br>

                    - ....big boat. Whose.....

                    <br>

                    - .....<b>uncle Bill</b>....Then..sold
                    (đã bán đi)

                    <br>

                    - Who...

                    <br>

                    - To Bob...

                    <br><br>

                    Do đó người đầu tiên là
                    <b>Bill / uncle Bill</b>.
                `
            },


            {
                number: 2,

                question:
                    "Which beach are the Browns going to?",

                answers: [
                    "Whorley",
                    "Whorley Beach",
                    "W-H-O-R-L-E-Y"
                ],

                answerDisplay:
                    "WHORLEY",

                explanation: `
                    Đọc câu hỏi họ hỏi
                    <b>Which beach?</b>:
                    Bãi biển nào?

                    <br><br>

                    Nghe trong băng:

                    <br>

                    - What's the name of the beach...

                    <br>

                    - <b>Whorley Beach</b>...

                    <br>

                    - How do you spell it?

                    <br>

                    - <b>W-H-O-R-L-E-Y</b>

                    <br><br>

                    Do đó đáp án là
                    <b>WHORLEY</b>.
                `
            },


            {
                number: 3,

                question:
                    "When did Sophie’s friend go on the boat?",

                answers: [
                    "Last year"
                ],

                answerDisplay:
                    "Last year",

                explanation: `
                    Đọc câu hỏi họ hỏi
                    <b>When?</b>:
                    Khi nào?

                    <br><br>

                    Nghe trong băng:

                    <br>

                    - My friend Bridget went...

                    <br>

                    - When did she go?

                    <br>

                    - <b>Last year</b>...

                    <br><br>

                    Do đó đáp án là
                    <b>Last year</b>.
                `
            },


            {
                number: 4,

                question:
                    "What is Sophie going to do next?",

                answers: [
                    "Take photos",
                    "Take some photos"
                ],

                answerDisplay:
                    "Take some photos",

                explanation: `
                    Đọc câu hỏi họ hỏi
                    <b>What ... do next?</b>:
                    Sẽ làm gì tiếp theo?

                    <br><br>

                    Nghe trong băng:

                    <br>

                    - I'd like to draw it...

                    <br>

                    - The boat's going too fast.

                    <br>

                    - Why not <b>take some photos</b>?

                    <br>

                    - Good idea. I will.

                    <br><br>

                    Keyword:
                    <b>Good idea → take some photos</b>.
                `
            },


            {
                number: 5,

                question:
                    "Why does Ben catch more fish?",

                answers: [
                    "He has a long fishing line",
                    "Ben has a long fishing line",
                    "A long fishing line"
                ],

                answerDisplay:
                    "Ben has a long fishing line",

                explanation: `
                    Đọc câu hỏi họ hỏi
                    <b>Why?</b>:
                    Tại sao?

                    <br><br>

                    Nghe trong băng:

                    <br>

                    - Ben's catching lots of fish...

                    <br>

                    - He's got a
                    <b>long fishing line</b>.

                    <br>

                    - Dad's is much shorter.

                    <br><br>

                    Keyword:
                    <b>long fishing line → more fish</b>.
                `
            },


            {
                number: 6,

                question:
                    "Where did Sophie leave her sunglasses?",

                answers: [
                    "On the seat",
                    "On a seat",
                    "On that seat"
                ],

                answerDisplay:
                    "On the seat",

                explanation: `
                    Đọc câu hỏi họ hỏi
                    <b>Where?</b>:
                    Ở đâu?

                    <br><br>

                    Nghe trong băng:

                    <br>

                    - Can't find my
                    <b>sunglasses</b>...

                    <br>

                    - On at the table downstairs.

                    <br>

                    - Oh, look!

                    <br>

                    - They're
                    <b>on that seat</b>!

                    <br><br>

                    Keyword:
                    <b>sunglasses → on that seat</b>.
                `
            },


            {
                number: 7,

                question:
                    "Which is the best place for the picnic?",

                answers: [
                    "By the rocks",
                    "The rocks"
                ],

                answerDisplay:
                    "By the rocks",

                explanation: `
                    Đọc câu hỏi họ hỏi
                    <b>Which is the best place?</b>:
                    Địa điểm nào tốt nhất?

                    <br><br>

                    Nghe trong băng:

                    <br>

                    - Tables at that café...

                    <br>

                    - Or we can go over there,
                    <b>by the rocks</b>.

                    <br>

                    - Yes, that's better...

                    <br><br>

                    Keyword:
                    <b>better → by the rocks</b>.
                `
            },


            {
                number: 8,

                question:
                    "What are the Browns going to do first after lunch?",

                answers: [
                    "Walk along the beach",
                    "Walk on the beach",
                    "Walk along the beach before swimming"
                ],

                answerDisplay:
                    "Walk along the beach",

                explanation: `
                    Đọc câu hỏi họ hỏi
                    <b>What ... do first after lunch?</b>:
                    Làm gì đầu tiên sau bữa trưa?

                    <br><br>

                    Nghe trong băng:

                    <br>

                    - Can Ben and I go swimming...

                    <br>

                    - <b>Later</b>, yes...

                    <br>

                    - <b>Walk along the beach</b>
                    before that.

                    <br>

                    - Straight after our picnic.

                    <br><br>

                    Keyword:
                    <b>first → walk along the beach</b>.
                `
            }

        ];


        /* =====================================================
           RENDER QUESTIONS
        ===================================================== */

        const questionArea =
            document.getElementById(
                "task2Questions"
            );


        questions.forEach(function(item) {

            const box =
                document.createElement("div");


            box.style.cssText = `
                border:1px solid #d8e4dc;
                border-radius:10px;
                padding:14px 16px;
                margin-bottom:12px;
                background:#ffffff;
            `;


            box.innerHTML = `

                <div style="
                    font-weight:800;
                    color:#315b45;
                    margin-bottom:8px;
                ">
                    ${item.number}.
                    ${item.question}
                </div>


                <input
                    type="text"
                    id="task2-answer-${item.number}"
                    autocomplete="off"
                    placeholder="Write your answer..."
                    style="
                        width:100%;
                        padding:9px 11px;
                        border:1px solid #cfded4;
                        border-radius:7px;
                        font-family:inherit;
                        font-size:16px;
                        outline:none;
                    "
                >


                <div
                    id="task2-feedback-${item.number}"
                    style="
                        margin-top:9px;
                        display:none;
                    "
                ></div>

            `;


            questionArea.appendChild(box);

        });


        /* =====================================================
           CHECK ANSWERS
        ===================================================== */

        document
            .getElementById("task2CheckBtn")
            .addEventListener(
                "click",
                function() {

                    let score = 0;


                    questions.forEach(function(item) {

                        const input =
                            document.getElementById(
                                "task2-answer-" +
                                item.number
                            );


                        const feedback =
                            document.getElementById(
                                "task2-feedback-" +
                                item.number
                            );


                        const studentAnswer =
                            input.value
                                .trim()
                                .toLowerCase()
                                .replace(
                                    /[.!?,]/g,
                                    ""
                                );


                        const correct =
                            item.answers.some(
                                function(answer) {

                                    return (
                                        studentAnswer ===
                                        answer
                                            .toLowerCase()
                                            .replace(
                                                /[.!?,]/g,
                                                ""
                                            )
                                    );

                                }
                            );


                        feedback.style.display =
                            "block";


                        if (correct) {

                            score += 2;


                            feedback.innerHTML = `

                                <div style="
                                    background:#edf7ef;
                                    border:1px solid #c8dfce;
                                    color:#315b45;
                                    border-radius:7px;
                                    padding:9px 11px;
                                ">

                                    <b>✓ Correct — 2 marks</b>

                                    <br><br>

                                    <b>Answer:</b>
                                    ${item.answerDisplay}

                                    <br><br>

                                    <b>Explanation:</b>
                                    ${item.explanation}

                                </div>

                            `;

                        }

                        else {

                            feedback.innerHTML = `

                                <div style="
                                    background:#fff5f3;
                                    border:1px solid #edd5d0;
                                    color:#805047;
                                    border-radius:7px;
                                    padding:9px 11px;
                                ">

                                    <b>✗ Incorrect — 0 marks</b>

                                    <br><br>

                                    <b>Answer:</b>
                                    ${item.answerDisplay}

                                    <br><br>

                                    <b>Explanation:</b>
                                    ${item.explanation}

                                </div>

                            `;

                        }

                    });


                    /* =================================================
                       SCORE
                    ================================================== */

                    document.getElementById(
                        "task2Score"
                    ).innerHTML = `

                        <div style="
                            display:inline-block;
                            background:#e3eee6;
                            border:1px solid #cfdfd4;
                            border-radius:10px;
                            padding:12px 25px;
                            color:#315b45;
                            font-size:19px;
                            font-weight:800;
                        ">

                            Score:
                            ${score} / 16

                        </div>

                    `;


                    document.getElementById(
                        "task2Score"
                    ).scrollIntoView({

                        behavior:"smooth",

                        block:"center"

                    });

                }
            );

    }

};
