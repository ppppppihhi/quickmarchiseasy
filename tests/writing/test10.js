/* =====================================================
   QUICKMARCH PRACTICE
   WRITING TEST 10
===================================================== */

window.QUICKMARCH_TEST = {

    title: "Writing Test 10",

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
                    "I come to this park a lot, almost every day.",

                acceptedQuestions: [
                    "How often do you come to this park?",
                    "How often do you come to this park"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>
                    Penny nói:
                    “I come to this park a lot, almost every day.”
                    → Penny đang nói về <span class="qm-keyword">tần suất</span>
                    cô ấy đến công viên.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>
                    Khi hỏi “bao lâu một lần”, dùng
                    <span class="qm-keyword">How often</span>.
                    <br><br>

                    Đáp án:
                    <span class="qm-keyword">How often do you come to this park?</span>
                `
            },

            {
                answer:
                    "I first came here six months ago.",

                acceptedQuestions: [
                    "When did you first come here?",
                    "When did you first come here"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>
                    Penny nói:
                    “I first came here six months ago.”
                    → Câu trả lời cho biết <span class="qm-keyword">thời gian</span>
                    cô ấy đến đây lần đầu.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>
                    Khi hỏi “khi nào”, dùng
                    <span class="qm-keyword">When</span>.
                    Vì “came” là hành động trong quá khứ,
                    dùng <span class="qm-keyword">When did...?</span>
                    <br><br>

                    Đáp án:
                    <span class="qm-keyword">When did you first come here?</span>
                `
            },

            {
                answer:
                    "Not very. This park is only two hundred metres from my house.",

                acceptedQuestions: [
                    "Is the park far from your house?",
                    "Is the park far from your house"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>
                    Penny nói:
                    “This park is only two hundred metres from my house.”
                    → Penny đang nói về <span class="qm-keyword">khoảng cách</span>
                    từ nhà đến công viên.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>
                    Câu trả lời “Not very” cho thấy câu hỏi là câu
                    <span class="qm-keyword">Yes/No</span>
                    về việc công viên có xa nhà hay không.
                    <br><br>

                    Đáp án:
                    <span class="qm-keyword">Is the park far from your house?</span>
                `
            },

            {
                answer:
                    "A café? Of course, there’s a lovely one over there.",

                acceptedQuestions: [
                    "Is there a café here?",
                    "Is there a cafe here?",
                    "Is there a café here",
                    "Is there a cafe here"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>
                    Penny nói:
                    “Of course, there’s a lovely one over there.”
                    → Penny đang nói rằng có một
                    <span class="qm-keyword">café</span>
                    ở đó.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>
                    Khi hỏi “Có ... ở đây không?”, dùng cấu trúc
                    <span class="qm-keyword">Is there...?</span>
                    <br><br>

                    Đáp án:
                    <span class="qm-keyword">Is there a café here?</span>
                `
            },

            {
                answer:
                    "Yes, I’m going to be here tomorrow.",

                acceptedQuestions: [
                    "Are you going to be here tomorrow?",
                    "Are you going to be here tomorrow"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>
                    Penny nói:
                    “Yes, I’m going to be here tomorrow.”
                    → Penny đang nói về
                    <span class="qm-keyword">kế hoạch ngày mai</span>.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>
                    Đây là câu hỏi Yes/No về kế hoạch tương lai.
                    Dùng cấu trúc
                    <span class="qm-keyword">Are you going to...?</span>
                    <br><br>

                    Đáp án:
                    <span class="qm-keyword">Are you going to be here tomorrow?</span>
                `
            }

        ];


        /* =================================================
           TASK 5 DATA
        ================================================= */

        const task5 = [

            {
                answer: "woke",
                verb: "wake",
                clue:
                    "Sau chỗ trống là “up early”.",
                why:
                    "Cụm “wake up” có nghĩa là thức dậy. Vì Sophie kể lại việc đã xảy ra hôm qua nên dùng Past Simple.",
                phrase:
                    "woke up = đã thức dậy."
            },

            {
                answer: "wore",
                verb: "wear",
                clue:
                    "Sau chỗ trống là “our T-shirts and shorts”.",
                why:
                    "Câu nói về quần áo mọi người mặc trong một ngày nóng. Past Simple của “wear” là “wore”.",
                phrase:
                    "wore T-shirts and shorts = đã mặc áo phông và quần short."
            },

            {
                answer: "took",
                verb: "take",
                clue:
                    "Sau chỗ trống là “a bat and ball with us”.",
                why:
                    "Cụm “take something with us” có nghĩa là mang thứ gì đó theo. Past Simple của “take” là “took”.",
                phrase:
                    "took a bat and ball with us = đã mang theo gậy và bóng."
            },

            {
                answer: "arrived",
                verb: "arrive",
                clue:
                    "Sau chỗ trống là “at the park”.",
                why:
                    "Cụm “arrive at the park” có nghĩa là đến công viên. Sự việc đã xảy ra nên dùng Past Simple.",
                phrase:
                    "arrived at the park = đã đến công viên."
            },

            {
                answer: "found",
                verb: "find",
                clue:
                    "Sau chỗ trống là “a fantastic place under the trees”.",
                why:
                    "Sophie và mọi người tìm được một chỗ rất đẹp dưới những tán cây. Past Simple của “find” là “found”.",
                phrase:
                    "found a fantastic place = đã tìm được một chỗ tuyệt vời."
            },

            {
                answer: "ate",
                verb: "eat",
                clue:
                    "Sau chỗ trống là “our sandwiches and cakes”.",
                why:
                    "Sau khi chơi bóng chày, mọi người ăn bánh mì kẹp và bánh ngọt. Past Simple của “eat” là “ate”.",
                phrase:
                    "ate our sandwiches and cakes = đã ăn bánh mì kẹp và bánh ngọt."
            },

            {
                answer: "bought",
                verb: "buy",
                clue:
                    "Sau chỗ trống là “us some ice cream”.",
                why:
                    "Mum mua kem cho mọi người từ quán café. Past Simple của “buy” là “bought”.",
                phrase:
                    "bought us some ice cream = đã mua kem cho chúng tôi."
            },

            {
                answer: "flew",
                verb: "fly",
                clue:
                    "Sau chỗ trống là “his new kite”.",
                why:
                    "Ben thả chiếc diều mới của mình. Past Simple của “fly” là “flew”.",
                phrase:
                    "flew his new kite = đã thả diều."
            },

            {
                answer: "lost",
                verb: "lose",
                clue:
                    "Sau chỗ trống là “it in a tree”.",
                why:
                    "Ben làm mất chiếc diều vì nó mắc trên cây. Past Simple của “lose” là “lost”.",
                phrase:
                    "lost it in a tree = đã làm mất nó trên cây."
            },

            {
                answer: "climbed",
                verb: "climb",
                clue:
                    "Sau chỗ trống là “the tree”.",
                why:
                    "Anna trèo lên cây để lấy chiếc diều cho Ben. Past Simple của “climb” là “climbed”.",
                phrase:
                    "climbed the tree = đã trèo lên cây."
            }

        ];


        /* =================================================
           TASK 6 DATA
        ================================================= */

        const task6 = [

            {
                starter: "I like parks because",

                hint:
                    "Why do you like parks? Think about fresh air, trees, games, walking or relaxing.",

                sample:
                    "I like parks because they are green, peaceful and good places to relax.",

                explanation:
                    "Em có thể viết về những lý do em thích công viên, chẳng hạn như không khí trong lành, cây xanh hoặc không gian thư giãn."
            },

            {
                starter: "The park in my town is",

                hint:
                    "Describe the park in your town. Think about its size, trees, people, playgrounds or cafés.",

                sample:
                    "The park in my town is large and beautiful, with many trees and a children's playground.",

                explanation:
                    "Em có thể mô tả công viên ở nơi em sống bằng cách nói về kích thước, cây cối, khu vui chơi hoặc các tiện ích."
            },

            {
                starter: "Last week in the park,",

                hint:
                    "What happened when you were in the park last week? Use the past tense.",

                sample:
                    "Last week in the park, I played football with my friends and ate some ice cream.",

                explanation:
                    "Câu này nói về một sự việc đã xảy ra trong quá khứ, vì vậy em nên sử dụng Past Simple."
            },

            {
                starter: "My family usually",

                hint:
                    "What does your family usually do in a park? Think about walking, playing, eating or relaxing.",

                sample:
                    "My family usually walks around the park, takes photos and enjoys a picnic together.",

                explanation:
                    "Em có thể viết về những hoạt động mà gia đình em thường làm khi đến công viên."
            },

            {
                starter: "During the next holidays,",

                hint:
                    "What are you going to do in a park during your next holidays?",

                sample:
                    "During the next holidays, I am going to visit the park with my friends and play some games.",

                explanation:
                    "Câu này nói về kế hoạch trong tương lai. Em có thể dùng “be going to” hoặc các cấu trúc tương lai phù hợp."
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
                        Task 3 — At the Park
                    </h2>

                    <div class="qm-instruction">

                        At the park, Mrs Brown sees her friend, Penny.
                        Mrs Brown asks Penny some questions.
                        What are Mrs Brown’s questions?
                        Write them in the spaces.
                        The first one is an example.

                    </div>

                    <div class="qm-example">

                        <strong>Example</strong>

                        <p>
                            <strong>Mrs Brown:</strong>
                            What are you doing here at the park?
                        </p>

                        <p>
                            <strong>Penny:</strong>
                            I’m meeting my husband here at 3.00.
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
                        <strong>Mrs Brown:</strong>
                    </p>

                    <input
                        id="qm10-task3-${index}"
                        class="qm-input"
                        type="text"
                        placeholder="Write Mrs Brown's question here..."
                    >

                    <div class="qm-answer">

                        <strong>Penny:</strong>
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
                        id="qm10-task3-feedback-${index}"
                    ></div>

                </div>

            `;

        });


        html += `

                    <div
                        id="qm10-task3-total"
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
                        Task 5 — Sophie Writes to her Grandma
                    </h2>

                    <div class="qm-instruction">

                        The next day Sophie writes to her grandma.
                        Fill in the missing words.
                        Use the verbs in the box below but don’t forget
                        to change them to the PAST TENSE because the park visit
                        is finished. The first answer is an example.

                    </div>

                    <div class="qm-word-bank">

                        <strong>Word bank:</strong><br>

                        arrive &nbsp;&nbsp;
                        buy &nbsp;&nbsp;
                        climb &nbsp;&nbsp;
                        eat &nbsp;&nbsp;
                        find &nbsp;&nbsp;
                        fly &nbsp;&nbsp;
                        go &nbsp;&nbsp;
                        lose &nbsp;&nbsp;
                        take &nbsp;&nbsp;
                        wake &nbsp;&nbsp;
                        wear

                    </div>


                    <div class="qm-question">

                        <div class="qm-letter">

                            <p>
                                Yesterday we all (example)
                                <strong>went</strong>
                                to the park.
                                I
                                <input
                                    id="qm10-task5-1"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(1)"
                                >
                                up early to help Mum to make the picnic.
                                It was a hot day so we
                                <input
                                    id="qm10-task5-2"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(2)"
                                >
                                our T-shirts and shorts.
                            </p>


                            <p>
                                We
                                <input
                                    id="qm10-task5-3"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(3)"
                                >
                                a bat and ball with us for a baseball game.
                                When we
                                <input
                                    id="qm10-task5-4"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(4)"
                                >
                                at the park, it was already full of people.
                                We
                                <input
                                    id="qm10-task5-5"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(5)"
                                >
                                a fantastic place under the trees for our picnic.
                            </p>


                            <p>
                                After our game of baseball we
                                <input
                                    id="qm10-task5-6"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(6)"
                                >
                                our sandwiches and cakes and everyone enjoyed them.
                            </p>


                            <p>
                                After lunch Mum
                                <input
                                    id="qm10-task5-7"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(7)"
                                >
                                us some ice cream from the café.
                                Ben
                                <input
                                    id="qm10-task5-8"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(8)"
                                >
                                his new kite, but Mum wasn’t happy because he
                                <input
                                    id="qm10-task5-9"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(9)"
                                >
                                it in a tree.
                                Anna
                                <input
                                    id="qm10-task5-10"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(10)"
                                >
                                the tree to get it for him.
                            </p>


                            <p>
                                It was a great day.
                            </p>

                            <p>
                                Love,<br>
                                Sophie
                            </p>

                        </div>

                    </div>


                    <button
                        type="button"
                        id="qm10-check-task5"
                        class="qm-button"
                    >
                        Check Task 5
                    </button>


                    <div
                        id="qm10-task5-total"
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
                        Task 6 — Parks
                    </h2>

                    <div class="qm-instruction">

                        Now write about parks in your town.
                        Write about 10 words in each space.

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
                        id="qm10-task6-${index}"
                        class="qm-input qm-textarea"
                        placeholder="Write your answer here..."
                    ></textarea>

                    <div
                        id="qm10-task6-sample-${index}"
                    ></div>

                </div>

            `;

        });


        html += `

                    <button
                        type="button"
                        id="qm10-check-task6"
                        class="qm-button"
                    >
                        Check Task 6
                    </button>

                    <div
                        id="qm10-task6-feedback"
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
                                `#qm10-task3-${index}`
                            );

                        const feedback =
                            container.querySelector(
                                `#qm10-task3-feedback-${index}`
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
                    "#qm10-task3-total"
                );

            total.textContent =
                `Task 3 Score: ${score}/15 marks`;

        }


        /* =================================================
           TASK 5 CHECK
        ================================================= */

        container
            .querySelector("#qm10-check-task5")
            .addEventListener(
                "click",
                function() {

                    let score = 0;


                    task5.forEach(function(item, index) {

                        const input =
                            container.querySelector(
                                `#qm10-task5-${index + 1}`
                            );


                        const oldFeedback =
                            container.querySelector(
                                `#qm10-task5-feedback-${index + 1}`
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
                            `qm10-task5-feedback-${index + 1}`;


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
                                        → V2/ed:
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
                                        → V2/ed:
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
                            "#qm10-task5-total"
                        );


                    total.innerHTML =
                        `Task 5 Score: ${score}/15 marks`;

                }
            );


        /* =================================================
           TASK 6 CHECK
        ================================================= */

        container
            .querySelector("#qm10-check-task6")
            .addEventListener(
                "click",
                function() {

                    let completed = 0;


                    task6.forEach(function(item, index) {

                        const input =
                            container.querySelector(
                                `#qm10-task6-${index}`
                            );


                        const sample =
                            container.querySelector(
                                `#qm10-task6-sample-${index}`
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
                            "#qm10-task6-feedback"
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
