
/* =========================================================
   QUICKMARCH PRACTICE
   SPEAKING TEST 01
   ONE QUESTION PER PAGE
   ========================================================= */

window.QUICKMARCH_TEST = {

    title: "Speaking Test 01",

    render: function(container) {

        const answers = [

            "I like sunny weather most.",

            "My mum is good at swimming, and my dad is good at football.",

            "My school started at eight o’clock today.",

            "I’m going to do my homework and watch TV tonight.",

            "My family is going to go to Da Nang this year."

        ];

        let currentQuestion = 0;


        /* =================================================
           MAIN HTML
        ================================================= */

        container.innerHTML = `

            <div style="
                width:100%;
                max-width:900px;
                margin:0 auto;
            ">

                <!-- QUESTION NUMBER -->

                <div
                    id="questionNumber"
                    style="
                        text-align:center;
                        color:#315b45;
                        font-size:19px;
                        font-weight:800;
                        margin-bottom:6px;
                    "
                >
                    Question 1 / 5
                </div>


                <!-- IMAGE AREA -->

                <div style="
                    position:relative;
                    width:100%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                ">


                    <!-- PREVIOUS -->

                    <button
                        id="prevButton"
                        type="button"
                        aria-label="Previous question"
                        style="
                            position:absolute;
                            left:0;
                            top:50%;
                            transform:translateY(-50%);

                            width:46px;
                            height:60px;

                            border:1px solid #cfddd3;
                            background:#f7faf8;
                            color:#315b45;

                            border-radius:8px;

                            font-size:30px;
                            font-weight:700;

                            cursor:pointer;
                            z-index:5;
                        "
                    >‹</button>


                    <!-- QUESTION IMAGE -->

                    <img
                        id="questionImage"
                        src="tests/speaking/images/test01/1.png"
                        alt="Speaking Question 1"
                        style="
                            display:block;
                            width:100%;
                            max-width:700px;
                            height:17.5vh;
                            object-fit:contain;
                            border-radius:8px;
                        "
                    >


                    <!-- NEXT -->

                    <button
                        id="nextButton"
                        type="button"
                        aria-label="Next question"
                        style="
                            position:absolute;
                            right:0;
                            top:50%;
                            transform:translateY(-50%);

                            width:46px;
                            height:60px;

                            border:1px solid #cfddd3;
                            background:#f7faf8;
                            color:#315b45;

                            border-radius:8px;

                            font-size:30px;
                            font-weight:700;

                            cursor:pointer;
                            z-index:5;
                        "
                    >›</button>

                </div>


                <!-- ANSWER -->

                <div style="
                    text-align:center;
                    margin-top:6px;
                ">

                    <button
                        id="answerButton"
                        type="button"
                        style="
                            border:1px solid #cfddd3;
                            background:#f7faf8;
                            color:#315b45;

                            border-radius:7px;

                            padding:6px 20px;

                            font-family:inherit;
                            font-size:16px;
                            font-weight:700;

                            cursor:pointer;
                        "
                    >
                        Show Answer
                    </button>


                    <div
                        id="answerBox"
                        style="
                            display:none;

                            margin:8px auto 0;

                            max-width:700px;

                            padding:9px 14px;

                            background:#edf5ef;
                            border:1px solid #cfdfd4;

                            border-radius:7px;

                            color:#456053;

                            font-size:16px;
                            line-height:1.4;

                            text-align:left;
                        "
                    ></div>

                </div>

            </div>

        `;


        /* =================================================
           ELEMENTS
        ================================================= */

        const image =
            document.getElementById(
                "questionImage"
            );

        const questionNumber =
            document.getElementById(
                "questionNumber"
            );

        const answerButton =
            document.getElementById(
                "answerButton"
            );

        const answerBox =
            document.getElementById(
                "answerBox"
            );

        const prevButton =
            document.getElementById(
                "prevButton"
            );

        const nextButton =
            document.getElementById(
                "nextButton"
            );


        /* =================================================
           UPDATE QUESTION
        ================================================= */

        function updateQuestion() {

            const number =
                currentQuestion + 1;


            questionNumber.textContent =
                "Question " +
                number +
                " / 5";


            image.src =
                "tests/speaking/images/test01/" +
                number +
                ".png";


            image.alt =
                "Speaking Question " +
                number;


            answerBox.textContent =
                answers[currentQuestion];


            answerBox.style.display =
                "none";


            answerButton.textContent =
                "Show Answer";


            /* ---------------------------------------------
               PREVIOUS BUTTON
            --------------------------------------------- */

            if (
                currentQuestion === 0
            ) {

                prevButton.style.opacity =
                    "0.4";

                prevButton.style.cursor =
                    "default";

            } else {

                prevButton.style.opacity =
                    "1";

                prevButton.style.cursor =
                    "pointer";

            }


            /* ---------------------------------------------
               NEXT BUTTON
            --------------------------------------------- */

            if (
                currentQuestion ===
                answers.length - 1
            ) {

                nextButton.style.opacity =
                    "0.4";

                nextButton.style.cursor =
                    "default";

            } else {

                nextButton.style.opacity =
                    "1";

                nextButton.style.cursor =
                    "pointer";

            }

        }


        /* =================================================
           PREVIOUS QUESTION
        ================================================= */

        prevButton.addEventListener(
            "click",
            function() {

                if (
                    currentQuestion > 0
                ) {

                    currentQuestion--;

                    updateQuestion();

                }

            }
        );


        /* =================================================
           NEXT QUESTION
        ================================================= */

        nextButton.addEventListener(
            "click",
            function() {

                if (
                    currentQuestion <
                    answers.length - 1
                ) {

                    currentQuestion++;

                    updateQuestion();

                }

            }
        );


        /* =================================================
           SHOW / HIDE ANSWER
        ================================================= */

        answerButton.addEventListener(
            "click",
            function() {

                if (
                    answerBox.style.display ===
                    "none"
                ) {

                    answerBox.style.display =
                        "block";

                    answerButton.textContent =
                        "Hide Answer";

                } else {

                    answerBox.style.display =
                        "none";

                    answerButton.textContent =
                        "Show Answer";

                }

            }
        );


        /* =================================================
           START
        ================================================= */

        updateQuestion();

    }

};

