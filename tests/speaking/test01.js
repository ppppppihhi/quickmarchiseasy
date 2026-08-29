/* =========================================================
   QUICKMARCH PRACTICE
   SPEAKING TEST 01
   EASY + MEDIUM
   ========================================================= */

window.QUICKMARCH_TEST = {

    title: "Speaking Test 01",

    render: function(container) {

        let level = "easy";

        const easyAnswers = [
            "I like sunny weather most.",
            "My mum is good at swimming, and my dad is good at football.",
            "My school started at eight o’clock today.",
            "I’m going to do my homework and watch TV tonight.",
            "My family is going to go to Da Nang this year."
        ];

        const mediumAnswers = [
            "I like sunny weather most because I enjoy playing outside.",
            "My mum is good at swimming, and my dad is good at football. They both enjoy sports.",
            "My school started at eight o’clock today, so I got up early in the morning.",
            "I’m going to do my homework and watch TV tonight. I think I’ll relax after I finish my homework.",
            "My family is going to go to Da Nang this year. We are going to enjoy the beach and have a great time together."
        ];


        function renderPage() {

            const answers =
                level === "easy"
                    ? easyAnswers
                    : mediumAnswers;


            container.innerHTML = `

                <div style="
                    width:100%;
                    max-width:1000px;
                    margin:0 auto;
                ">

                    <!-- LEVEL BUTTONS -->

                    <div style="
                        display:flex;
                        justify-content:center;
                        gap:10px;
                        margin-bottom:18px;
                    ">

                        <button
                            id="easyBtn"
                            type="button"
                            style="
                                padding:10px 28px;
                                border-radius:8px;
                                border:1px solid #a7c5af;
                                background:#b9d4c1;
                                color:#294f39;
                                font-family:inherit;
                                font-size:17px;
                                font-weight:700;
                                cursor:pointer;
                            "
                        >
                            Easy
                        </button>

                        <button
                            id="mediumBtn"
                            type="button"
                            style="
                                padding:10px 28px;
                                border-radius:8px;
                                border:1px solid #cfddd3;
                                background:#f7faf8;
                                color:#456053;
                                font-family:inherit;
                                font-size:17px;
                                font-weight:700;
                                cursor:pointer;
                            "
                        >
                            Medium
                        </button>

                    </div>


                    <!-- QUESTIONS -->

                    <div id="speakingQuestions"></div>

                </div>

            `;


            const questions =
                document.getElementById(
                    "speakingQuestions"
                );


            for (
                let i = 0;
                i < 5;
                i++
            ) {

                const card =
                    document.createElement("div");


                card.style.cssText = `
                    background:#ffffff;
                    border:1px solid #d8e4dc;
                    border-radius:10px;
                    padding:16px;
                    margin-bottom:16px;
                `;


                card.innerHTML = `

                    <div style="
                        font-size:18px;
                        font-weight:800;
                        color:#315b45;
                        margin-bottom:10px;
                    ">
                        Question ${i + 1}
                    </div>


                    <div style="
                        width:100%;
                        text-align:center;
                        margin-bottom:14px;
                    ">

                        <img
                            src="tests/speaking/images/test01/${i + 1}.png"
                            alt="Speaking Question ${i + 1}"
                            style="
                                display:block;
                                width:100%;
                                max-width:850px;
                                height:auto;
                                margin:0 auto;
                                border-radius:8px;
                            "
                        >

                    </div>


                    <div style="
                        text-align:center;
                    ">

                        <button
                            type="button"
                            class="answer-btn"
                            style="
                                padding:8px 20px;
                                border:1px solid #cfddd3;
                                background:#f7faf8;
                                color:#315b45;
                                border-radius:7px;
                                font-family:inherit;
                                font-size:16px;
                                font-weight:700;
                                cursor:pointer;
                            "
                        >
                            Show Answer
                        </button>

                    </div>


                    <div
                        class="answer-box"
                        style="
                            display:none;
                            margin-top:12px;
                            padding:12px 15px;
                            background:#edf5ef;
                            border:1px solid #cfdfd4;
                            border-radius:8px;
                            color:#456053;
                            font-size:17px;
                        "
                    >
                        ${answers[i]}
                    </div>

                `;


                questions.appendChild(card);


                const answerButton =
                    card.querySelector(
                        ".answer-btn"
                    );


                const answerBox =
                    card.querySelector(
                        ".answer-box"
                    );


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

                        }

                        else {

                            answerBox.style.display =
                                "none";

                            answerButton.textContent =
                                "Show Answer";

                        }

                    }
                );

            }


            document
                .getElementById("easyBtn")
                .addEventListener(
                    "click",
                    function() {

                        level = "easy";

                        renderPage();

                    }
                );


            document
                .getElementById("mediumBtn")
                .addEventListener(
                    "click",
                    function() {

                        level = "medium";

                        renderPage();

                    }
                );


            if (level === "medium") {

                document
                    .getElementById("easyBtn")
                    .style.background =
                    "#f7faf8";

                document
                    .getElementById("easyBtn")
                    .style.color =
                    "#456053";

                document
                    .getElementById("mediumBtn")
                    .style.background =
                    "#b9d4c1";

                document
                    .getElementById("mediumBtn")
                    .style.color =
                    "#294f39";

            }

        }


        renderPage();

    }

};

