/* =========================================================
   QUICKMARCH PRACTICE
   SPEAKING TEST 01
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


        container.innerHTML = `

            <div style="
                width:100%;
                max-width:1000px;
                margin:0 auto;
            ">

                <div style="
                    text-align:center;
                    margin-bottom:20px;
                    color:#315b45;
                    font-size:18px;
                    font-weight:700;
                ">
                    Look at the picture and answer the question.
                </div>


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
                margin-bottom:18px;
            `;


            card.innerHTML = `

                <div style="
                    color:#315b45;
                    font-size:18px;
                    font-weight:800;
                    margin-bottom:12px;
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
                        onerror="
                            this.style.display='none';
                            this.nextElementSibling.style.display='block';
                        "
                    >

                    <div
                        style="
                            display:none;
                            padding:20px;
                            background:#fff5f3;
                            border:1px solid #edd5d0;
                            border-radius:8px;
                            color:#805047;
                        "
                    >
                        Image not found:<br>
                        <code>
                            tests/speaking/images/test01/${i + 1}.png
                        </code>
                    </div>

                </div>


                <div style="
                    text-align:center;
                ">

                    <button
                        type="button"
                        class="answer-button"
                        style="
                            border:1px solid #cfddd3;
                            background:#f7faf8;
                            color:#315b45;
                            border-radius:7px;
                            padding:8px 20px;
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
                        line-height:1.5;
                    "
                >
                    ${answers[i]}
                </div>

            `;


            questions.appendChild(card);


            const button =
                card.querySelector(
                    ".answer-button"
                );


            const answer =
                card.querySelector(
                    ".answer-box"
                );


            button.addEventListener(
                "click",
                function() {

                    if (
                        answer.style.display ===
                        "none"
                    ) {

                        answer.style.display =
                            "block";

                        button.textContent =
                            "Hide Answer";

                    }

                    else {

                        answer.style.display =
                            "none";

                        button.textContent =
                            "Show Answer";

                    }

                }
            );

        }

    }

};

