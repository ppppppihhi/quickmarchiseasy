
window.QUICKMARCH_TEST = {
    render: function(container) {

        container.innerHTML = `
        <style>
            .writing-test {
                max-width: 1000px;
                margin: 0 auto;
                font-family: Arial, Helvetica, sans-serif;
                color: #333;
                line-height: 1.65;
            }

            .writing-test h1 {
                text-align: center;
                color: #990000;
                margin-bottom: 30px;
            }

            .writing-task {
                margin-bottom: 45px;
                padding: 25px;
                background: #fff;
                border: 1px solid #ddd;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.06);
            }

            .task-title {
                color: #990000;
                font-size: 22px;
                font-weight: 700;
                margin-bottom: 8px;
            }

            .task-instruction {
                margin-bottom: 22px;
            }

            .example-box {
                background: #f7f7f7;
                border-left: 4px solid #999;
                padding: 12px 16px;
                margin: 15px 0 22px;
                border-radius: 5px;
            }

            /* =========================
               TASK 3
            ========================= */

            .dialogue {
                margin-top: 20px;
            }

            .dialogue-line {
                margin: 12px 0;
            }

            .speaker {
                font-weight: 700;
                color: #444;
            }

            .answer-input {
                width: 100%;
                max-width: 720px;
                padding: 10px 12px;
                margin: 8px 0;
                border: 1px solid #bbb;
                border-radius: 6px;
                font-size: 15px;
                box-sizing: border-box;
            }

            .check-btn {
                display: inline-block;
                margin-top: 8px;
                padding: 8px 18px;
                border: none;
                border-radius: 6px;
                background: #990000;
                color: white;
                cursor: pointer;
                font-size: 14px;
            }

            .check-btn:hover {
                background: #993333;
            }

            .result-box {
                margin-top: 12px;
                padding: 14px 16px;
                border-radius: 7px;
                background: #f8f8f8;
                border: 1px solid #ddd;
            }

            .result-correct {
                color: #2e7d32;
                font-weight: 600;
            }

            .result-wrong {
                color: #b71c1c;
                font-weight: 600;
            }

            .explanation {
                margin-top: 12px;
                padding: 14px 16px;
                background: #fafafa;
                border-left: 4px solid #993333;
                border-radius: 5px;
                color: #333;
            }

            .keyword {
                color: #990000;
                font-weight: 700;
            }

            /* =========================
               TASK 5
            ========================= */

            .email-box {
                margin-top: 22px;
                padding: 22px;
                background: #fff;
                border: 1px solid #ddd;
                border-radius: 8px;
                line-height: 1.8;
            }

            /* CHỈ NỘI DUNG EMAIL MÀU XANH */
            .email-content {
                color: rgb(0, 0, 238);
            }

            .email-blank {
                display: inline-block;
                width: 180px;
                max-width: 100%;
                padding: 5px 7px;
                margin: 2px 3px;
                border: none;
                border-bottom: 2px solid #777;
                outline: none;
                color: #333;
                background: #fafafa;
                font-size: 15px;
            }

            .email-blank:focus {
                border-bottom-color: #990000;
            }

            .word-bank {
                margin: 22px 0;
                padding: 15px 18px;
                background: #f7f7f7;
                border-radius: 7px;
                border: 1px solid #ddd;
            }

            .word-bank-title {
                color: #990000;
                font-weight: 700;
                margin-bottom: 7px;
            }

            .word-bank-words {
                word-spacing: 12px;
            }

            .task5-check {
                margin-top: 20px;
            }

            .task5-score {
                margin-top: 15px;
                padding: 13px 16px;
                background: #f7f7f7;
                border-radius: 7px;
                border: 1px solid #ddd;
            }

            .feedback-item {
                margin-top: 14px;
                padding: 15px 17px;
                border-radius: 7px;
                background: #fafafa;
                border: 1px solid #ddd;
            }

            .feedback-title {
                font-weight: 400;
                color: #333;
                margin-bottom: 6px;
            }

            .feedback-answer {
                color: #990000;
                font-weight: 700;
            }

            /* =========================
               TASK 6
            ========================= */

            .task6-item {
                margin: 24px 0 30px;
                padding-bottom: 22px;
                border-bottom: 1px solid #e1e1e1;
            }

            .task6-prompt {
                font-weight: 700;
                margin-bottom: 10px;
            }

            .task6-hint {
                margin: 10px 0;
                padding: 12px 15px;
                background: #fafafa;
                border-left: 4px solid #993333;
                border-radius: 5px;
            }

            .sample-answer {
                margin-top: 12px;
                padding: 13px 15px;
                background: #f7f7f7;
                border-radius: 6px;
            }

            .sample-title {
                color: #990000;
                font-weight: 700;
                margin-bottom: 5px;
            }

            .task6-input {
                width: 100%;
                min-height: 85px;
                padding: 10px;
                margin-top: 10px;
                border: 1px solid #bbb;
                border-radius: 6px;
                resize: vertical;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 15px;
                box-sizing: border-box;
            }

            .task6-feedback {
                margin-top: 12px;
                padding: 13px 15px;
                background: #fafafa;
                border-left: 4px solid #993333;
                border-radius: 5px;
            }

            .total-score {
                margin-top: 25px;
                padding: 18px;
                text-align: center;
                background: #f7f7f7;
                border: 1px solid #ddd;
                border-radius: 8px;
                font-size: 18px;
            }

            @media (max-width: 700px) {
                .writing-task {
                    padding: 18px;
                }

                .email-blank {
                    width: 150px;
                }

                .writing-test h1 {
                    font-size: 25px;
                }
            }
        </style>

        <div class="writing-test">

            <h1>Writing Test 09</h1>

            <!-- =====================================================
                 TASK 3
            ====================================================== -->

            <section class="writing-task">

                <div class="task-title">
                    Task Three: Sophie Talks to Andy (15 marks)
                </div>

                <div class="task-instruction">
                    At Ben’s football match Sophie talks to Andy. Sophie asks him some questions.
                    Write the questions in the spaces. The first one is an example.
                </div>

                <div class="example-box">
                    <div><span class="speaker">Sophie:</span> Example: Do you like playing football Andy?</div>
                    <div><span class="speaker">Andy:</span> Football? Yes I do but I like playing tennis more.</div>
                </div>

                <div id="task3-container"></div>

            </section>


            <!-- =====================================================
                 TASK 5
            ====================================================== -->

            <section class="writing-task">

                <div class="task-title">
                    Task Five: A Great Weekend with my Cousin (15 marks)
                </div>

                <div class="task-instruction">
                    Ben writes an email to his friend Gary about his weekend with Andy.
                    Fill in the missing words. Use the verbs in the box below but don’t forget
                    to change them to PAST TENSE because the weekend is finished.
                    The first one is an example.
                </div>

                <div class="word-bank">
                    <div class="word-bank-title">Word Bank</div>
                    <div class="word-bank-words">
                        eat &nbsp; come &nbsp; give &nbsp; rain &nbsp; sit &nbsp; sleep
                        &nbsp; take &nbsp; visit &nbsp; wake &nbsp; watch &nbsp; win
                    </div>
                </div>

                <div class="email-box">
                    <div class="email-content">

                        On Friday evening my cousin Andy
                        <strong>(example)</strong>
                        <span class="feedback-answer">came</span>
                        to our house for the weekend.

                        Anna was on a school trip so Andy
                        <input class="email-blank" id="t5_1" type="text">
                        in her bedroom.

                        In the morning we all
                        <input class="email-blank" id="t5_2" type="text">
                        up early because of Ben’s football match.

                        We
                        <input class="email-blank" id="t5_3" type="text">
                        cereals for breakfast and then Mum
                        <input class="email-blank" id="t5_4" type="text">
                        us to the park for the football match.

                        Ben’s team were really good and the match was fantastic.
                        They
                        <input class="email-blank" id="t5_5" type="text">
                        3 – 0.

                        After the football we
                        <input class="email-blank" id="t5_6" type="text">
                        Grandma and Grandad.

                        They were very happy to see us all. As usual Grandma
                        <input class="email-blank" id="t5_7" type="text">
                        us all some of her special ice cream.

                        On Sunday afternoon it
                        <input class="email-blank" id="t5_8" type="text">
                        a lot.

                        There were some good films on TV so we just
                        <input class="email-blank" id="t5_9" type="text">
                        on the sofa and
                        <input class="email-blank" id="t5_10" type="text">
                        them – we were really lazy!

                        What a great weekend!

                    </div>
                </div>

                <button class="check-btn task5-check" id="task5-check">
                    Check
                </button>

                <div id="task5-feedback"></div>

            </section>


            <!-- =====================================================
                 TASK 6
            ====================================================== -->

            <section class="writing-task">

                <div class="task-title">
                    Task Six: Weekends (10 marks)
                </div>

                <div class="task-instruction">
                    Now write about your weekends.
                    Write about ten words in each space.
                </div>

                <div id="task6-container"></div>

            </section>


            <div class="total-score" id="total-score">
                Score: 0 / 30
            </div>

        </div>
        `;


        /* =========================================================
           TASK 3 DATA
        ========================================================== */

        const task3Data = [
            {
                answer: "Where do you play tennis?",
                answerText: "No, I play tennis at a club.",
                explanation:
                    `Andy nói: “No, I play tennis at a club.”<br>
                    → Andy đang nói về <span class="keyword">nơi</span> bạn ấy chơi tennis.<br><br>
                    Hỏi về nơi chốn → dùng <span class="keyword">Where do...?</span><br>
                    “Bạn chơi tennis ở đâu?”<br>
                    → <span class="keyword">Where do you play tennis?</span>`
            },
            {
                answer: "Why did you choose tennis?",
                answerText: "I chose tennis because it looked fun to play.",
                explanation:
                    `Andy nói: “I chose tennis because it looked fun to play.”<br>
                    → Andy đang nói về <span class="keyword">lý do</span> chọn tennis.<br><br>
                    Hỏi lý do → dùng <span class="keyword">Why did...?</span><br>
                    “Tại sao bạn chọn tennis?”<br>
                    → <span class="keyword">Why did you choose tennis?</span>`
            },
            {
                answer: "How often do you play in tennis competitions?",
                answerText: "I play in them twice a year.",
                explanation:
                    `Andy nói: “I play in them twice a year.”<br>
                    → Andy đang nói về <span class="keyword">tần suất</span> tham gia các cuộc thi tennis.<br><br>
                    Hỏi tần suất → dùng <span class="keyword">How often...?</span><br>
                    “Bạn tham gia các cuộc thi tennis bao lâu một lần?”<br>
                    → <span class="keyword">How often do you play in tennis competitions?</span>`
            },
            {
                answer: "Did you win your last competition?",
                answerText: "My last competition? No, I lost but I played quite well.",
                explanation:
                    `Andy nói: “No, I lost but I played quite well.”<br>
                    → Andy đang nói về <span class="keyword">kết quả</span> của cuộc thi gần nhất.<br><br>
                    Hỏi về một sự việc đã xảy ra → dùng <span class="keyword">Did you...?</span><br>
                    “Bạn có thắng cuộc thi gần nhất không?”<br>
                    → <span class="keyword">Did you win your last competition?</span>`
            },
            {
                answer: "When are you playing your next match?",
                answerText: "Next weekend. I’m playing against my friend Jack.",
                explanation:
                    `Andy nói: “Next weekend. I’m playing against my friend Jack.”<br>
                    → Andy đang nói về <span class="keyword">thời gian</span> của trận đấu tiếp theo.<br><br>
                    Hỏi thời gian → dùng <span class="keyword">When are you...?</span><br>
                    “Bạn sẽ chơi trận tiếp theo khi nào?”<br>
                    → <span class="keyword">When are you playing your next match?</span>`
            }
        ];


        function normalizeText(text) {
            return text
                .toLowerCase()
                .trim()
                .replace(/[?.!,]/g, "")
                .replace(/\s+/g, " ");
        }


        const task3Container = document.getElementById("task3-container");

        task3Data.forEach((item, index) => {

            const number = index + 1;

            const block = document.createElement("div");
            block.className = "dialogue";

            block.innerHTML = `
                <div class="dialogue-line">
                    <span class="speaker">Sophie:</span>
                    <input
                        type="text"
                        class="answer-input"
                        id="task3_${number}"
                        placeholder="Write your question..."
                    >
                    <button class="check-btn" data-task3="${number}">
                        Check
                    </button>
                    <div id="task3_result_${number}"></div>
                </div>

                <div class="dialogue-line">
                    <span class="speaker">Andy:</span>
                    ${item.answerText}
                </div>
            `;

            task3Container.appendChild(block);
        });


        document.querySelectorAll("[data-task3]").forEach(button => {

            button.addEventListener("click", function() {

                const number = Number(this.dataset.task3);
                const item = task3Data[number - 1];

                const input = document.getElementById(`task3_${number}`);
                const result = document.getElementById(`task3_result_${number}`);

                const userAnswer = normalizeText(input.value);
                const correctAnswer = normalizeText(item.answer);

                if (userAnswer === correctAnswer) {

                    result.innerHTML = `
                        <div class="result-box">
                            <div class="result-correct">
                                ✓ Correct! 3 / 3 marks
                            </div>

                            <div class="explanation">
                                ${item.explanation}
                            </div>
                        </div>
                    `;

                } else {

                    result.innerHTML = `
                        <div class="result-box">
                            <div class="result-wrong">
                                ✗ Not quite. 0 / 3 marks
                            </div>

                            <div class="explanation">
                                ${item.explanation}
                            </div>
                        </div>
                    `;
                }

                updateScore();
            });
        });


        /* =========================================================
           TASK 5
        ========================================================== */

        const task5Answers = [
            "slept",
            "woke",
            "ate",
            "took",
            "won",
            "visited",
            "gave",
            "rained",
            "sat",
            "watched"
        ];


        const task5Explanations = [
            {
                hint: "Andy stayed in Anna’s bedroom during the weekend.",
                explanation:
                    `Sau chủ ngữ “Andy”, câu cần một động từ ở Past Simple diễn tả việc ngủ.<br>
                    sleep → V2/ed: <span class="keyword">slept</span>.`
            },
            {
                hint: "The sentence says that everyone got up early.",
                explanation:
                    `Cụm “got up early” diễn tả việc thức dậy sớm.<br>
                    wake up → V2/ed: <span class="keyword">woke up</span>.`
            },
            {
                hint: "They had cereals for breakfast.",
                explanation:
                    `Sau “We”, cần động từ diễn tả việc ăn sáng.<br>
                    eat → V2/ed: <span class="keyword">ate</span>.`
            },
            {
                hint: "Mum took them to the park.",
                explanation:
                    `Câu nói về việc Mum đưa các bạn đến công viên.<br>
                    take → V2/ed: <span class="keyword">took</span>.`
            },
            {
                hint: "Ben’s team won the football match 3–0.",
                explanation:
                    `Câu nói về kết quả trận bóng đá.<br>
                    win → V2/ed: <span class="keyword">won</span>.`
            },
            {
                hint: "After the football, they went to see Grandma and Grandad.",
                explanation:
                    `Câu nói về việc họ đến thăm Grandma và Grandad.<br>
                    visit → V2/ed: <span class="keyword">visited</span>.`
            },
            {
                hint: "Grandma gave everyone some ice cream.",
                explanation:
                    `Câu nói về việc Grandma đưa kem cho mọi người.<br>
                    give → V2/ed: <span class="keyword">gave</span>.`
            },
            {
                hint: "It describes the weather on Sunday afternoon.",
                explanation:
                    `Chủ ngữ “it” nói về thời tiết. Câu cần động từ “mưa”.<br>
                    rain → V2/ed: <span class="keyword">rained</span>.`
            },
            {
                hint: "They stayed on the sofa.",
                explanation:
                    `Câu nói về việc họ ngồi trên ghế sofa.<br>
                    sit → V2/ed: <span class="keyword">sat</span>.`
            },
            {
                hint: "They watched some good films on TV.",
                explanation:
                    `Câu nói về việc xem những bộ phim trên TV.<br>
                    watch → V2/ed: <span class="keyword">watched</span>.`
            }
        ];


        document.getElementById("task5-check").addEventListener("click", function() {

            let correct = 0;
            let feedbackHTML = "";

            task5Answers.forEach((answer, index) => {

                const input = document.getElementById(`t5_${index + 1}`);

                const userAnswer = normalizeText(input.value);
                const correctAnswer = normalizeText(answer);

                const isCorrect = userAnswer === correctAnswer;

                if (isCorrect) {
                    correct++;
                }

                feedbackHTML += `
                    <div class="feedback-item">

                        <div class="feedback-title">
                            Câu ${index + 1}
                        </div>

                        <div>
                            Đáp án:
                            <span class="feedback-answer">${answer}</span>
                        </div>

                        <div style="margin-top:8px;">
                            ${task5Explanations[index].hint}
                        </div>

                        <div style="margin-top:8px;">
                            Giải thích:
                            ${task5Explanations[index].explanation}
                        </div>

                        <div style="margin-top:8px;">
                            Cụm từ quan trọng:
                            <span class="keyword">
                                ${getImportantPhrase(index)}
                            </span>
                        </div>

                        <div style="margin-top:8px;">
                            ${
                                isCorrect
                                ? `<span class="result-correct">✓ Correct</span>`
                                : `<span class="result-wrong">✗ Check the answer above</span>`
                            }
                        </div>

                    </div>
                `;
            });


            const score = correct * 1.5;

            document.getElementById("task5-feedback").innerHTML = `
                <div class="task5-score">
                    <strong>Task 5 score:</strong>
                    ${score} / 15
                </div>

                ${feedbackHTML}
            `;

            updateScore();
        });


        function getImportantPhrase(index) {

            const phrases = [
                "slept in her bedroom",
                "woke up early",
                "ate cereals for breakfast",
                "took us to the park",
                "won 3–0",
                "visited Grandma and Grandad",
                "gave us some ice cream",
                "rained a lot",
                "sat on the sofa",
                "watched them"
            ];

            return phrases[index];
        }


        /* =========================================================
           TASK 6
        ========================================================== */

        const task6Data = [
            {
                prompt: "At the weekend I usually",
                hint: "Gợi ý: Viết về một hoạt động bạn thường làm vào cuối tuần.",
                sample:
                    "At the weekend I usually play football with my friends.",
                explanation:
                    "Em có thể dùng thì hiện tại đơn để nói về hoạt động thường xuyên."
            },
            {
                prompt: "Sometimes,",
                hint: "Gợi ý: Viết về một việc thỉnh thoảng bạn làm vào cuối tuần.",
                sample:
                    "Sometimes, I visit my grandparents with my family.",
                explanation:
                    "Từ “Sometimes” thường dùng để nói về một hoạt động không xảy ra thường xuyên."
            },
            {
                prompt: "The best thing about the weekend",
                hint: "Gợi ý: Viết điều bạn thích nhất ở cuối tuần và giải thích ngắn gọn.",
                sample:
                    "The best thing about the weekend is having more time with my family.",
                explanation:
                    "Em có thể dùng “The best thing about ... is ...” để nêu điều mình thích nhất."
            },
            {
                prompt: "Last weekend,",
                hint: "Gợi ý: Viết về một hoặc hai hoạt động đã xảy ra cuối tuần trước.",
                sample:
                    "Last weekend, I went to the park and played tennis.",
                explanation:
                    "“Last weekend” nói về thời gian trong quá khứ nên có thể dùng Past Simple."
            },
            {
                prompt: "Next weekend,",
                hint: "Gợi ý: Viết về kế hoạch của bạn vào cuối tuần tới.",
                sample:
                    "Next weekend, I am going to visit my cousin and watch a film.",
                explanation:
                    "“Next weekend” nói về tương lai. Em có thể dùng “be going to” để nói về kế hoạch."
            }
        ];


        const task6Container = document.getElementById("task6-container");

        task6Data.forEach((item, index) => {

            const number = index + 1;

            const block = document.createElement("div");
            block.className = "task6-item";

            block.innerHTML = `
                <div class="task6-prompt">
                    ${number}. ${item.prompt}
                </div>

                <textarea
                    class="task6-input"
                    id="task6_${number}"
                    placeholder="Write your answer here..."
                ></textarea>

                <button
                    class="check-btn"
                    data-task6="${number}">
                    Check
                </button>

                <div id="task6_result_${number}"></div>
            `;

            task6Container.appendChild(block);
        });


        document.querySelectorAll("[data-task6]").forEach(button => {

            button.addEventListener("click", function() {

                const number = Number(this.dataset.task6);
                const item = task6Data[number - 1];

                const result = document.getElementById(`task6_result_${number}`);

                result.innerHTML = `
                    <div class="task6-feedback">

                        <div class="task6-hint">
                            ${item.hint}
                        </div>

                        <div class="sample-answer">
                            <div class="sample-title">
                                Sample answer
                            </div>
                            ${item.sample}
                        </div>

                        <div style="margin-top:10px;">
                            Giải thích: ${item.explanation}
                        </div>

                    </div>
                `;
            });
        });


        /* =========================================================
           TOTAL SCORE
        ========================================================== */

        function updateScore() {

            let total = 0;

            /* Task 3 */
            task3Data.forEach((item, index) => {

                const result =
                    document.getElementById(`task3_result_${index + 1}`);

                if (result && result.querySelector(".result-correct")) {
                    total += 3;
                }
            });


            /* Task 5 */
            const task5Score =
                document.querySelector(".task5-score");

            if (task5Score) {

                const text = task5Score.textContent;

                const match = text.match(/Task 5 score:\s*([\d.]+)/);

                if (match) {
                    total += Number(match[1]);
                }
            }


            document.getElementById("total-score").textContent =
                `Score: ${total} / 30`;
        }

    }
};

