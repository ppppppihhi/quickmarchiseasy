/* =====================================================
   QUICKMARCH PRACTICE
   WRITING TEST 09
===================================================== */

window.QUICKMARCH_TEST = {

    title: "Writing Test 09",

    render: function(container) {

        /* =================================================
           CSS
        ================================================= */

        const style = document.createElement("style");

        style.textContent = `

            .qm-writing {
                color: #37443d;
                font-family: "Segoe UI", Arial, sans-serif;
                line-height: 1.6;
            }

            .qm-writing * {
                box-sizing: border-box;
            }

            .qm-task {
                background: #ffffff;
                border: 1px solid #dce7df;
                border-radius: 12px;
                padding: 20px;
                margin-bottom: 18px;
            }

            .qm-task-title {
                color: #315b45;
                font-size: 22px;
                margin-bottom: 8px;
            }

            .qm-instruction {
                color: rgb(0, 0, 238);
                font-size: 15px;
                margin-bottom: 16px;
            }

            .qm-example {
                background: #f1f7f3;
                border-left: 4px solid #8db59b;
                border-radius: 8px;
                padding: 12px 15px;
                margin: 12px 0 16px;
            }

            .qm-question {
                border: 1px solid #dce7df;
                border-radius: 10px;
                padding: 15px;
                margin-top: 12px;
                background: #fbfdfc;
            }

            .qm-number {
                color: #315b45;
                font-weight: 700;
                margin-bottom: 8px;
            }

            .qm-answer {
                background: #f5f8f6;
                border-radius: 8px;
                padding: 10px 12px;
                margin: 10px 0;
            }

            .qm-input {
                width: 100%;
                border: 1px solid #cbdad0;
                border-radius: 7px;
                padding: 10px 12px;
                font-family: inherit;
                font-size: 15px;
                outline: none;
                background: #ffffff;
            }

            .qm-input:focus {
                border-color: #82a992;
                box-shadow: 0 0 0 2px rgba(130,169,146,.15);
            }

            .qm-inline-input {
                width: 170px;
                display: inline-block;
                margin: 0 5px;
            }

            .qm-textarea {
                min-height: 110px;
                resize: vertical;
            }

            .qm-button {
                border: none;
                background: #8db59b;
                color: #ffffff;
                border-radius: 8px;
                padding: 9px 16px;
                font-family: inherit;
                font-size: 15px;
                font-weight: 700;
                cursor: pointer;
                margin-top: 10px;
            }

            .qm-button:hover {
                background: #729b82;
            }

            .qm-feedback {
                margin-top: 12px;
                padding: 12px 14px;
                border-radius: 8px;
                line-height: 1.65;
            }

            .qm-correct {
                background: #eef8f0;
                border: 1px solid #c8e1ce;
                color: #315b45;
            }

            .qm-wrong {
                background: #fff5f2;
                border: 1px solid #ecd3cc;
                color: #754d45;
            }

            .qm-explanation {
                margin-top: 10px;
                padding: 12px;
                background: #f7faf8;
                border-radius: 8px;
                color: #53655b;
            }

            .qm-keyword {
                color: #990000;
                font-weight: 700;
            }

            .qm-clue {
                margin-top: 8px;
                padding: 9px 11px;
                background: #f5f1ee;
                border-radius: 7px;
            }

            .qm-word-bank {
                background: #f1f7f3;
                border: 1px solid #d8e6dc;
                border-radius: 9px;
                padding: 13px 15px;
                margin: 12px 0 16px;
                line-height: 2;
            }

            .qm-letter {
                color: rgb(0, 0, 238);
                line-height: 1.8;
            }

            .qm-letter input {
                color: #37443d;
            }

            .qm-total {
                margin-top: 15px;
                padding: 13px 15px;
                border-radius: 9px;
                background: #eaf4ed;
                color: #315b45;
                font-weight: 700;
            }

            .qm-sample {
                margin-top: 12px;
                padding: 13px 15px;
                background: #f0f7ff;
                border-left: 4px solid #8aa9c7;
                border-radius: 8px;
            }

            .qm-small-note {
                color: #748179;
                font-size: 14px;
            }

            @media (max-width: 600px) {

                .qm-task {
                    padding: 15px;
                }

                .qm-task-title {
                    font-size: 19px;
                }

                .qm-inline-input {
                    width: 140px;
                }

            }

        `;

        document.head.appendChild(style);


        /* =================================================
           HELPERS
        ================================================= */

        function normalize(text) {

            return String(text || "")
                .toLowerCase()
                .trim()
                .replace(/[’‘]/g, "'")
                .replace(/[.,!?;:"]/g, "")
                .replace(/\s+/g, " ");

        }


        /* =================================================
           TASK 3 DATA
        ================================================= */

        const task3 = [

            {
                answer:
                    "At school? No, I play tennis at a club.",

                acceptedQuestions: [
                    "Where do you play tennis?",
                    "Where do you play tennis, Andy?",
                    "Where do you play tennis Andy?"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>

                    Andy nói:
                    “No, I play tennis at a club.”
                    → Andy đang nói về
                    <span class="qm-keyword">nơi</span>
                    bạn ấy chơi tennis.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>

                    Khi muốn hỏi
                    <span class="qm-keyword">“Bạn chơi tennis ở đâu?”</span>,
                    ta dùng từ để hỏi
                    <span class="qm-keyword">Where</span>.
                    <br><br>

                    Cấu trúc:
                    <span class="qm-keyword">
                        Where do you + verb...?
                    </span>
                    <br><br>

                    Đáp án:
                    <span class="qm-keyword">
                        Where do you play tennis?
                    </span>
                `
            },


            {
                answer:
                    "I chose tennis because it looked fun to play.",

                acceptedQuestions: [
                    "Why did you choose tennis?",
                    "Why did you choose tennis, Andy?",
                    "Why did you choose tennis Andy?"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>

                    Andy nói:
                    “I chose tennis because it looked fun to play.”
                    → Andy đang nói về
                    <span class="qm-keyword">lý do</span>
                    chọn tennis.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>

                    Khi muốn hỏi
                    <span class="qm-keyword">“Tại sao bạn chọn tennis?”</span>,
                    ta dùng
                    <span class="qm-keyword">Why</span>.
                    <br><br>

                    Vì việc chọn tennis đã xảy ra trong quá khứ,
                    dùng
                    <span class="qm-keyword">Why did you...?</span>
                    <br><br>

                    choose → V2/ed:
                    <span class="qm-keyword">chose</span>.
                    <br><br>

                    Đáp án:
                    <span class="qm-keyword">
                        Why did you choose tennis?
                    </span>
                `
            },


            {
                answer:
                    "Tennis competitions? I play in them twice a year.",

                acceptedQuestions: [
                    "How often do you play in tennis competitions?",
                    "How often do you play in tennis competitions, Andy?",
                    "How often do you play in tennis competitions Andy?"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>

                    Andy nói:
                    “I play in them twice a year.”
                    → Andy đang nói về
                    <span class="qm-keyword">
                        số lần / tần suất
                    </span>
                    tham gia các cuộc thi tennis.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>

                    Khi hỏi
                    <span class="qm-keyword">
                        “bao lâu một lần?”
                    </span>,
                    ta dùng
                    <span class="qm-keyword">How often</span>.
                    <br><br>

                    Cấu trúc:
                    <span class="qm-keyword">
                        How often do you + verb...?
                    </span>
                    <br><br>

                    Đáp án:
                    <span class="qm-keyword">
                        How often do you play in tennis competitions?
                    </span>
                `
            },


            {
                answer:
                    "Tennis competitions? No, I lost but I played quite well.",

                acceptedQuestions: [
                    "Did you win your last competition?",
                    "Did you win your last competition, Andy?",
                    "Did you win your last competition Andy?"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>

                    Andy nói:
                    “No, I lost but I played quite well.”
                    → Andy đang nói về
                    <span class="qm-keyword">
                        kết quả cuộc thi gần nhất
                    </span>.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>

                    Câu trả lời bắt đầu bằng
                    <span class="qm-keyword">No</span>,
                    vì vậy đây là câu hỏi Yes/No.
                    <br><br>

                    Hỏi về một sự việc đã xảy ra trong quá khứ,
                    ta dùng:
                    <span class="qm-keyword">
                        Did you + verb...?
                    </span>
                    <br><br>

                    win → V2/ed:
                    <span class="qm-keyword">won</span>.
                    <br><br>

                    Đáp án:
                    <span class="qm-keyword">
                        Did you win your last competition?
                    </span>
                `
            },


            {
                answer:
                    "Next weekend. I’m playing against my friend Jack.",

                acceptedQuestions: [
                    "When are you playing your next match?",
                    "When are you playing your next match, Andy?",
                    "When are you playing your next match Andy?",
                    "When are you playing your next game?",
                    "When are you playing your next game, Andy?",
                    "When are you playing your next game Andy?"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>

                    Andy nói:
                    “Next weekend. I’m playing against my friend Jack.”
                    → Andy đang nói về
                    <span class="qm-keyword">
                        thời gian của trận đấu tiếp theo
                    </span>.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>

                    Khi muốn hỏi
                    <span class="qm-keyword">
                        “Khi nào bạn chơi trận tiếp theo?”
                    </span>,
                    ta dùng
                    <span class="qm-keyword">When</span>.
                    <br><br>

                    Vì Andy đã có kế hoạch,
                    có thể dùng:
                    <span class="qm-keyword">
                        When are you playing...?
                    </span>
                    <br><br>

                    Đáp án:
                    <span class="qm-keyword">
                        When are you playing your next match?
                    </span>
                `
            }

        ];


        /* =================================================
           TASK 5 DATA
        ================================================= */

        const task5 = [

            {
                answer: "slept",
                verb: "sleep",
                clue:
                    "Anna was on a school trip, so Andy stayed in her bedroom.",

                why:
                    "Andy cần một nơi để ngủ. Vì cuối tuần đã kết thúc nên động từ “sleep” phải chuyển sang Past Simple.",

                phrase:
                    "slept in her bedroom = đã ngủ trong phòng ngủ của Anna."
            },


            {
                answer: "woke",
                verb: "wake",
                clue:
                    "Sau chỗ trống là “up early”.",

                why:
                    "Cụm “wake up early” có nghĩa là thức dậy sớm. Past Simple của “wake” là “woke”.",

                phrase:
                    "woke up early = đã thức dậy sớm."
            },


            {
                answer: "ate",
                verb: "eat",
                clue:
                    "Sau chỗ trống là “cereals for breakfast”.",

                why:
                    "Câu nói về việc ăn ngũ cốc vào bữa sáng. Past Simple của “eat” là “ate”.",

                phrase:
                    "ate cereals for breakfast = đã ăn ngũ cốc vào bữa sáng."
            },


            {
                answer: "took",
                verb: "take",
                clue:
                    "Mum đưa mọi người đến công viên cho trận bóng đá.",

                why:
                    "Cụm “take someone to a place” có nghĩa là đưa ai đó đến một nơi. Past Simple của “take” là “took”.",

                phrase:
                    "took us to the park = đã đưa chúng tôi đến công viên."
            },


            {
                answer: "won",
                verb: "win",
                clue:
                    "Ben’s team were really good and the match was fantastic.",

                why:
                    "Đội của Ben thắng trận với tỷ số 3–0. Past Simple của “win” là “won”.",

                phrase:
                    "won 3–0 = đã thắng với tỷ số 3–0."
            },


            {
                answer: "visited",
                verb: "visit",
                clue:
                    "Sau chỗ trống là “Grandma and Grandad”.",

                why:
                    "Câu nói về việc đến thăm ông bà. “Visit” chuyển sang Past Simple thành “visited”.",

                phrase:
                    "visited Grandma and Grandad = đã đến thăm ông bà."
            },


            {
                answer: "gave",
                verb: "give",
                clue:
                    "Grandma cho mọi người một ít kem đặc biệt.",

                why:
                    "Cụm “give someone something” có nghĩa là cho ai đó thứ gì. Past Simple của “give” là “gave”.",

                phrase:
                    "gave us some ice cream = đã cho chúng tôi một ít kem."
            },


            {
                answer: "rained",
                verb: "rain",
                clue:
                    "Câu nói về thời tiết vào Sunday afternoon.",

                why:
                    "Câu nói “it rained a lot” diễn tả trời mưa rất nhiều. “Rain” chuyển sang Past Simple thành “rained”.",

                phrase:
                    "rained a lot = đã mưa rất nhiều."
            },


            {
                answer: "sat",
                verb: "sit",
                clue:
                    "Sau chỗ trống là “on the sofa”.",

                why:
                    "Cụm “sit on the sofa” có nghĩa là ngồi trên ghế sofa. Past Simple của “sit” là “sat”.",

                phrase:
                    "sat on the sofa = đã ngồi trên ghế sofa."
            },


            {
                answer: "watched",
                verb: "watch",
                clue:
                    "Sau chỗ trống là “them” và trước đó có “good films on TV”.",

                why:
                    "“Them” ở đây chỉ những bộ phim hay trên TV. Vì vậy động từ phù hợp là “watch”. “Watch” chuyển sang Past Simple thành “watched”.",

                phrase:
                    "watched them = đã xem chúng."
            }

        ];


        /* =================================================
           TASK 6 DATA
        ================================================= */

        const task6 = [

            {
                starter: "At the weekend I usually",

                hint:
                    "What do you usually do at the weekend? Think about playing sports, watching TV, meeting friends or relaxing.",

                sample:
                    "At the weekend I usually play football with my friends and watch films with my family.",

                explanation:
                    "Em có thể viết về những hoạt động em thường làm vào cuối tuần."
            },


            {
                starter: "Sometimes,",

                hint:
                    "What do you sometimes do at the weekend? Think about going somewhere, visiting relatives or doing something special.",

                sample:
                    "Sometimes, I visit my grandparents or go shopping with my parents.",

                explanation:
                    "Em có thể viết về một hoạt động thỉnh thoảng em làm vào cuối tuần."
            },


            {
                starter: "The best thing about the weekend",

                hint:
                    "What do you like most about weekends? Think about having free time, sleeping late, playing with friends or relaxing.",

                sample:
                    "The best thing about the weekend is having lots of free time to relax and play with my friends.",

                explanation:
                    "Em có thể nói về điều em thích nhất ở cuối tuần và giải thích ngắn gọn lý do."
            },


            {
                starter: "Last weekend,",

                hint:
                    "What did you do last weekend? Remember to use the past tense.",

                sample:
                    "Last weekend, I played football with my friends and visited my grandparents.",

                explanation:
                    "Câu này nói về cuối tuần đã qua, vì vậy em nên chú ý sử dụng Past Simple."
            },


            {
                starter: "Next weekend,",

                hint:
                    "What are you going to do next weekend? Think about your plans for the future.",

                sample:
                    "Next weekend, I am going to visit my grandparents and play tennis with my friends.",

                explanation:
                    "Em có thể viết về kế hoạch của em cho cuối tuần tới."
            }

        ];


        /* =================================================
           RENDER
        ================================================= */

        let html = `

            <div class="qm-writing">

                <!-- =====================================
                     TASK 3
                ====================================== -->

                <section class="qm-task">

                    <h2 class="qm-task-title">
                        Task 3 — Sophie Talks to Andy
                    </h2>

                    <div class="qm-instruction">

                        At Ben’s football match Sophie talks to Andy.
                        Sophie asks him some questions.
                        Write the questions in the spaces.
                        The first one is an example.

                    </div>


                    <div class="qm-example">

                        <strong>Example</strong>

                        <p>
                            <strong>Sophie:</strong>
                            Do you like playing football Andy?
                        </p>

                        <p>
                            <strong>Andy:</strong>
                            Football? Yes I do but I like playing tennis more.
                        </p>

                    </div>

        `;


        task3.forEach(function(item, index) {

            html += `

                <div class="qm-question">

                    <div class="qm-number">
                        Question ${index + 1} — 3 marks
                    </div>

                    <p>
                        <strong>Sophie:</strong>
                    </p>

                    <input
                        id="qm09-task3-${index}"
                        class="qm-input"
                        type="text"
                        placeholder="Write Sophie's question here..."
                    >

                    <div class="qm-answer">

                        <strong>Andy:</strong>
                        ${item.answer}

                    </div>

                    <button
                        type="button"
                        class="qm-button"
                        data-task3-index="${index}"
                    >
                        Check
                    </button>

                    <div
                        id="qm09-task3-feedback-${index}"
                    ></div>

                </div>

            `;

        });


        html += `

                    <div
                        id="qm09-task3-total"
                        class="qm-total"
                    >
                        Task 3 Score: 0/15 marks
                    </div>

                </section>


                <!-- =====================================
                     TASK 5
                ====================================== -->

                <section class="qm-task">

                    <h2 class="qm-task-title">
                        Task 5 — A Great Weekend with my Cousin
                    </h2>

                    <div class="qm-instruction">

                        Ben writes an email to his friend Gary about his
                        weekend with Andy. Fill in the missing words.
                        Use the verbs in the box below but don’t forget
                        to change them to PAST TENSE because the weekend
                        is finished. The first one is an example.

                    </div>


                    <div class="qm-word-bank">

                        <strong>Word bank:</strong><br>

                        eat &nbsp;&nbsp;
                        come &nbsp;&nbsp;
                        give &nbsp;&nbsp;
                        rain &nbsp;&nbsp;
                        sit &nbsp;&nbsp;
                        sleep &nbsp;&nbsp;
                        take &nbsp;&nbsp;
                        visit &nbsp;&nbsp;
                        wake &nbsp;&nbsp;
                        watch &nbsp;&nbsp;
                        win

                    </div>


                    <div class="qm-question">

                        <div class="qm-letter">

                            <p>

                                On Friday evening my cousin Andy
                                (example)

                                <strong>came</strong>

                                to our house for the weekend.
                                Anna was on a school trip so Andy

                                <input
                                    id="qm09-task5-1"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(1)"
                                >

                                in her bedroom.

                            </p>


                            <p>

                                In the morning we all

                                <input
                                    id="qm09-task5-2"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(2)"
                                >

                                up early because of Ben’s football match.

                                We

                                <input
                                    id="qm09-task5-3"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(3)"
                                >

                                cereals for breakfast

                                and then Mum

                                <input
                                    id="qm09-task5-4"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(4)"
                                >

                                us to the park for the football match.

                            </p>


                            <p>

                                Ben’s team were really good and the match
                                was fantastic. They

                                <input
                                    id="qm09-task5-5"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(5)"
                                >

                                3 – 0.

                            </p>


                            <p>

                                After the football we

                                <input
                                    id="qm09-task5-6"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(6)"
                                >

                                Grandma and Grandad.

                                They were very happy to see us all.

                                As usual Grandma

                                <input
                                    id="qm09-task5-7"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(7)"
                                >

                                us all some of her special ice cream.

                            </p>


                            <p>

                                On Sunday afternoon it

                                <input
                                    id="qm09-task5-8"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(8)"
                                >

                                a lot.

                                There were some good films on TV so we just

                                <input
                                    id="qm09-task5-9"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(9)"
                                >

                                on the sofa and

                                <input
                                    id="qm09-task5-10"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(10)"
                                >

                                them – we were really lazy!

                            </p>


                            <p>
                                What a great weekend!
                            </p>

                        </div>

                    </div>


                    <button
                        type="button"
                        id="qm09-check-task5"
                        class="qm-button"
                    >
                        Check Task 5
                    </button>


                    <div
                        id="qm09-task5-total"
                        class="qm-total"
                    >
                        Task 5 Score: 0/15 marks
                    </div>

                </section>


                <!-- =====================================
                     TASK 6
                ====================================== -->

                <section class="qm-task">

                    <h2 class="qm-task-title">
                        Task 6 — Weekends
                    </h2>

                    <div class="qm-instruction">

                        Now write about your weekends.
                        Write about ten words in each space.

                    </div>

        `;


        task6.forEach(function(item, index) {

            html += `

                <div class="qm-question">

                    <div class="qm-number">
                        ${index + 1}. ${item.starter}
                    </div>

                    <div class="qm-example">

                        <strong>💡 Gợi ý:</strong><br>

                        ${item.hint}

                    </div>

                    <textarea
                        id="qm09-task6-${index}"
                        class="qm-input qm-textarea"
                        placeholder="Write your answer here..."
                    ></textarea>

                    <div
                        id="qm09-task6-sample-${index}"
                    ></div>

                </div>

            `;

        });


        html += `

                    <button
                        type="button"
                        id="qm09-check-task6"
                        class="qm-button"
                    >
                        Check Task 6
                    </button>

                    <div
                        id="qm09-task6-feedback"
                    ></div>

                </section>

            </div>

        `;


        container.innerHTML = html;


        /* =================================================
           TASK 3 CHECK
        ================================================= */

        const task3Scores =
            new Array(task3.length).fill(false);


        container
            .querySelectorAll("[data-task3-index]")
            .forEach(function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        const index =
                            Number(button.dataset.task3Index);

                        const input =
                            container.querySelector(
                                `#qm09-task3-${index}`
                            );

                        const feedback =
                            container.querySelector(
                                `#qm09-task3-feedback-${index}`
                            );

                        const user =
                            normalize(input.value);

                        const accepted =
                            task3[index]
                                .acceptedQuestions
                                .map(normalize);


                        if (!user) {

                            task3Scores[index] = false;

                            feedback.innerHTML = `

                                <div class="qm-feedback qm-wrong">

                                    Please write a question.

                                </div>

                            `;

                            updateTask3Total();

                            return;
                        }


                        if (accepted.includes(user)) {

                            task3Scores[index] = true;

                            feedback.innerHTML = `

                                <div class="qm-feedback qm-correct">

                                    ✓ Correct!
                                    <span>3/3 marks</span>

                                    <div class="qm-explanation">

                                        ${task3[index].explanation}

                                    </div>

                                </div>

                            `;

                        } else {

                            task3Scores[index] = false;

                            feedback.innerHTML = `

                                <div class="qm-feedback qm-wrong">

                                    ✗ Try again.

                                    <br><br>

                                    Suggested answer:
                                    ${task3[index].acceptedQuestions[0]}

                                    <div class="qm-explanation">

                                        ${task3[index].explanation}

                                    </div>

                                </div>

                            `;

                        }

                        updateTask3Total();

                    }
                );

            });


        function updateTask3Total() {

            const score =
                task3Scores.filter(Boolean).length * 3;

            const total =
                container.querySelector(
                    "#qm09-task3-total"
                );

            total.textContent =
                `Task 3 Score: ${score}/15 marks`;

        }


        /* =================================================
           TASK 5 CHECK
        ================================================= */

        container
            .querySelector("#qm09-check-task5")
            .addEventListener(
                "click",
                function() {

                    let score = 0;


                    task5.forEach(function(item, index) {

                        const input =
                            container.querySelector(
                                `#qm09-task5-${index + 1}`
                            );


                        const oldFeedback =
                            container.querySelector(
                                `#qm09-task5-feedback-${index + 1}`
                            );


                        if (oldFeedback) {
                            oldFeedback.remove();
                        }


                        const user =
                            normalize(input.value);

                        const correct =
                            normalize(item.answer);


                        const feedback =
                            document.createElement("div");


                        feedback.id =
                            `qm09-task5-feedback-${index + 1}`;


                        if (user === correct) {

                            score += 1.5;

                            feedback.className =
                                "qm-feedback qm-correct";

                            feedback.innerHTML = `

                                ✓ Correct!
                                <span>1.5/1.5 marks</span>

                                <div class="qm-explanation">

                                    Đáp án:
                                    ${item.answer}

                                    <div class="qm-clue">

                                        Gợi ý:
                                        ${item.clue}

                                    </div>

                                    <p>

                                        Giải thích:

                                        ${item.verb}
                                        →
                                        V2/ed:

                                        <span class="qm-keyword">
                                            ${item.answer}
                                        </span>.

                                        ${item.why}

                                    </p>

                                    <p>

                                        Cụm từ quan trọng:

                                        <span class="qm-keyword">
                                            ${item.phrase}
                                        </span>

                                    </p>

                                </div>

                            `;

                        } else {

                            feedback.className =
                                "qm-feedback qm-wrong";

                            feedback.innerHTML = `

                                ✗ Try again.

                                <div class="qm-explanation">

                                    Đáp án:
                                    ${item.answer}

                                    <div class="qm-clue">

                                        Gợi ý:
                                        ${item.clue}

                                    </div>

                                    <p>

                                        Giải thích:

                                        ${item.verb}
                                        →
                                        V2/ed:

                                        <span class="qm-keyword">
                                            ${item.answer}
                                        </span>.

                                        ${item.why}

                                    </p>

                                    <p>

                                        Cụm từ quan trọng:

                                        <span class="qm-keyword">
                                            ${item.phrase}
                                        </span>

                                    </p>

                                </div>

                            `;

                        }


                        input.parentNode.appendChild(feedback);

                    });


                    const total =
                        container.querySelector(
                            "#qm09-task5-total"
                        );


                    total.innerHTML =
                        `Task 5 Score: ${score}/15 marks`;

                }
            );


        /* =================================================
           TASK 6 CHECK
        ================================================= */

        container
            .querySelector("#qm09-check-task6")
            .addEventListener(
                "click",
                function() {

                    let completed = 0;


                    task6.forEach(function(item, index) {

                        const input =
                            container.querySelector(
                                `#qm09-task6-${index}`
                            );

                        const sample =
                            container.querySelector(
                                `#qm09-task6-sample-${index}`
                            );


                        if (
                            input.value.trim() !== ""
                        ) {

                            completed++;

                        }


                        sample.innerHTML = `

                            <div class="qm-sample">

                                <strong>
                                    💡 Sample answer:
                                </strong>

                                <p>
                                    ${item.sample}
                                </p>

                                <p class="qm-small-note">

                                    <strong>
                                        Giải thích:
                                    </strong>

                                    ${item.explanation}

                                </p>

                            </div>

                        `;

                    });


                    const feedback =
                        container.querySelector(
                            "#qm09-task6-feedback"
                        );


                    if (completed === task6.length) {

                        feedback.innerHTML = `

                            <div class="qm-feedback qm-correct">

                                ✓ Writing submitted!

                                <br><br>

                                <strong>
                                    Task 6 Score: 10/10 marks
                                </strong>

                                <br><br>

                                💡 Đây là bài viết cá nhân.
                                Sample answer chỉ là câu trả lời
                                tham khảo.

                            </div>

                        `;

                    } else {

                        feedback.innerHTML = `

                            <div class="qm-feedback qm-wrong">

                                Please complete all 5 sections.

                                <br><br>

                                (${completed}/5 completed)

                                <br><br>

                                💡 Sample answers have been shown
                                to help you.

                            </div>

                        `;

                    }

                }
            );

    }

};
