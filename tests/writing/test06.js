
/* =====================================================
   QUICKMARCH PRACTICE
   WRITING TEST 06
===================================================== */

window.QUICKMARCH_TEST = {

    title: "Writing Test 06",

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

            /* Nội dung đề bài */
            .qm-question-text {
                color: rgb(0, 0, 238);
            }

            /* Nội dung bức thư */
            .qm-letter {
                color: rgb(0, 0, 238);
                line-height: 1.8;
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

            .qm-task-description {
                color: #5f7067;
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
                min-height: 100px;
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

            /* Keyword trong phần giải thích */
            .qm-keyword {
                color: #990000;
                font-weight: 700;
            }

            .qm-clue {
                margin-top: 7px;
                padding: 8px 10px;
                background: #eef5f0;
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

        container.appendChild(style);


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
                    "I went to Fox Wood to take them.",

                acceptedQuestions: [
                    "Where did you go to take them?",
                    "Where did you go to take the photos?"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>
                    Lily nói:
                    “I went to Fox Wood to take them.”
                    → Lily đang nói về <span class="qm-keyword">nơi</span>
                    bạn ấy chụp ảnh.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>
                    Hỏi về địa điểm → dùng
                    <span class="qm-keyword">Where did...?</span>
                    <br>
                    “Bạn đã đi đâu để chụp ảnh?”
                    <br>
                    → <span class="qm-keyword">Where did you go to take them?</span>
                `
            },

            {
                answer:
                    "I like this photo the best.",

                acceptedQuestions: [
                    "Which photo do you like best?",
                    "Which photo do you like the best?"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>
                    Lily nói:
                    “I like this photo the best.”
                    → Lily đang nói về
                    <span class="qm-keyword">bức ảnh yêu thích nhất</span>.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>
                    Hỏi về lựa chọn giữa các bức ảnh →
                    <span class="qm-keyword">Which photo...?</span>
                    <br>
                    “Bạn thích bức ảnh nào nhất?”
                    <br>
                    → <span class="qm-keyword">Which photo do you like best?</span>
                `
            },

            {
                answer:
                    "I’m going to put it into a photography competition.",

                acceptedQuestions: [
                    "What are you going to do with it?",
                    "What are you going to do with the photo?"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>
                    Lily nói:
                    “I’m going to put it into a photography competition.”
                    → Lily đang nói về
                    <span class="qm-keyword">việc sẽ làm với bức ảnh</span>.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>
                    Hỏi về hành động hoặc kế hoạch →
                    <span class="qm-keyword">What are you going to...?</span>
                    <br>
                    “Bạn sẽ làm gì với nó?”
                    <br>
                    → <span class="qm-keyword">What are you going to do with it?</span>
                `
            },

            {
                answer:
                    "The competition? It’s going to be at school.",

                acceptedQuestions: [
                    "Where is the competition going to be?",
                    "Where is the competition?"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>
                    Lily nói:
                    “It’s going to be at school.”
                    → Lily đang nói về
                    <span class="qm-keyword">địa điểm tổ chức cuộc thi</span>.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>
                    Hỏi địa điểm → dùng
                    <span class="qm-keyword">Where...?</span>
                    <br>
                    “Cuộc thi sẽ diễn ra ở đâu?”
                    <br>
                    → <span class="qm-keyword">Where is the competition going to be?</span>
                `
            },

            {
                answer:
                    "The other photos? Of course you can. Here they are.",

                acceptedQuestions: [
                    "Can I see the other photos?",
                    "Can I look at the other photos?"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>
                    Lily nói:
                    “Of course you can. Here they are.”
                    → Lily đồng ý cho Ben
                    <span class="qm-keyword">xem những bức ảnh khác</span>.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>
                    Khi câu trả lời là “Yes, you can” hoặc
                    “Of course you can”, câu hỏi thường dùng
                    <span class="qm-keyword">Can I...?</span>
                    <br>
                    “Mình có thể xem những bức ảnh khác không?”
                    <br>
                    → <span class="qm-keyword">Can I see the other photos?</span>
                `
            }

        ];


        /* =================================================
           TASK 5 DATA
        ================================================= */

        const task5 = [

            {
                answer: "spent",
                verb: "spend",
                clue: "Trong câu có cụm “a really nice weekend at Amy’s house”.",
                why: "Câu nói về một cuối tuần đã kết thúc. Động từ phù hợp là “spend” vì ta nói “spend a weekend”. Vì vậy spend chuyển sang Past Simple: spent.",
                phrase: "spent a really nice weekend = đã trải qua một cuối tuần rất vui."
            },

            {
                answer: "arrived",
                verb: "arrive",
                clue: "Sau chỗ trống là “at their home about 7.00 pm”.",
                why: "Cụm “arrive at their home” dùng để nói đến nơi nào đó. Vì việc đến nhà đã xảy ra vào tối thứ Sáu nên dùng Past Simple.",
                phrase: "arrived at their home = đã đến nhà họ."
            },

            {
                answer: "had",
                verb: "have",
                clue: "Sau chỗ trống là “dinner with Amy’s family”.",
                why: "Ta thường dùng cụm “have dinner”. Vì bữa tối đã xảy ra nên have chuyển sang dạng quá khứ bất quy tắc: had.",
                phrase: "had dinner = đã ăn tối."
            },

            {
                answer: "slept",
                verb: "sleep",
                clue: "Câu nói “in Lily’s bedroom” cho biết nơi Sophie và người kể chuyện ngủ.",
                why: "Ngữ cảnh đang kể lại việc họ ngủ ở các phòng khác nhau. Động từ phù hợp là sleep và cần chuyển sang Past Simple.",
                phrase: "slept in Lily’s bedroom = đã ngủ trong phòng Lily."
            },

            {
                answer: "woke up",
                verb: "wake up",
                clue: "Sau chỗ trống là “early”.",
                why: "Cụm “wake up early” có nghĩa là thức dậy sớm. Đây là hành động đã xảy ra vào sáng thứ Bảy nên dùng Past Simple: wake → woke.",
                phrase: "woke up early = đã thức dậy sớm."
            },

            {
                answer: "took",
                verb: "take",
                clue: "Sau chỗ trống là “the bus into town”.",
                why: "Ta dùng cụm “take the bus” khi nói đi bằng xe buýt. Vì hành động đã xảy ra nên take chuyển sang Past Simple: took.",
                phrase: "took the bus into town = đã đi xe buýt vào thị trấn."
            },

            {
                answer: "did",
                verb: "do",
                clue: "Sau chỗ trống là “some shopping at the market”.",
                why: "Cụm “do some shopping” có nghĩa là đi mua sắm. Vì việc mua sắm đã xảy ra nên do → did.",
                phrase: "did some shopping = đã đi mua sắm."
            },

            {
                answer: "liked",
                verb: "like",
                clue: "Sau chỗ trống là “a great wool jacket”.",
                why: "Anna nói cô ấy rất thích một chiếc áo khoác len. Động từ phù hợp là like và vì câu chuyện ở quá khứ nên like → liked.",
                phrase: "liked a great wool jacket = đã thích một chiếc áo khoác rất đẹp."
            },

            {
                answer: "met",
                verb: "meet",
                clue: "Sau chỗ trống là “the others outside the restaurant”.",
                why: "Câu cho biết Anna, Amy và Lily gặp những người khác bên ngoài nhà hàng. Động từ meet là bất quy tắc: meet → met.",
                phrase: "met the others = đã gặp những người khác."
            },

            {
                answer: "fell",
                verb: "fall",
                clue: "Câu có “ice-cream ... on the floor”.",
                why: "Kem của Jack rơi xuống sàn. Động từ phù hợp là fall. Đây là động từ bất quy tắc: fall → fell.",
                phrase: "fell on the floor = đã rơi xuống sàn."
            },

            {
                answer: "laughed",
                verb: "laugh",
                clue: "Sau đó có dấu “!” và câu “Usually he cries!”, cho thấy mọi người thấy tình huống buồn cười.",
                why: "Ngữ cảnh cho biết Jack làm rơi kem và mọi người cười. Động từ phù hợp là laugh và cần dùng Past Simple: laughed.",
                phrase: "laughed = đã cười."
            }

        ];


        /* =================================================
           TASK 6 DATA
        ================================================= */

        const task6 = [

            {
                starter: "Sometimes I...",

                hint:
                    "What do you sometimes do when you visit your friends?",

                sample:
                    "Sometimes I visit my friends at their homes and play games together.",

                explanation:
                    "Em có thể nói về một hoạt động thỉnh thoảng em làm khi gặp hoặc đến thăm bạn bè."
            },

            {
                starter: "At school...",

                hint:
                    "What do you usually do with your friends at school?",

                sample:
                    "At school I usually talk to my friends and play together during break time.",

                explanation:
                    "Nêu một hoạt động em thường làm cùng bạn bè ở trường."
            },

            {
                starter: "Last week...",

                hint:
                    "What did you do with your friends last week? Use the past tense.",

                sample:
                    "Last week I visited my best friend and we watched a film together.",

                explanation:
                    "Vì có “Last week”, em đang nói về một sự việc đã xảy ra nên chú ý sử dụng Past Simple."
            },

            {
                starter: "Tomorrow...",

                hint:
                    "What are you going to do with your friends tomorrow?",

                sample:
                    "Tomorrow I am going to visit my friend and we are going to play football.",

                explanation:
                    "“Tomorrow” nói về tương lai. Em có thể dùng “be going to” để nói về kế hoạch hoặc dự định."
            },

            {
                starter: "The best thing about...",

                hint:
                    "What do you like best about visiting your friends?",

                sample:
                    "The best thing about visiting my friends is that we always have fun together.",

                explanation:
                    "Nêu điều em thích nhất khi đến thăm hoặc dành thời gian với bạn bè."
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
                        Task 3 — Ben talks to Lily
                    </h2>

                    <p class="qm-task-description qm-question-text">
                        Ben is talking to Lily about her photographs.
                        Write Ben’s questions in the spaces.
                        The first one is an example.
                    </p>

                    <div class="qm-example qm-question-text">

                        <strong>Example</strong>

                        <p>
                            <strong>Ben:</strong>
                            Did you take all these photos yourself?
                        </p>

                        <p>
                            <strong>Lily:</strong>
                            Yes, I took all the photos myself.
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
                        <strong>Ben:</strong>
                    </p>

                    <input
                        id="t6-task3-${index}"
                        class="qm-input"
                        type="text"
                        placeholder="Write Ben's question here..."
                    >

                    <div class="qm-answer qm-question-text">

                        <strong>Lily:</strong>
                        ${item.answer}

                    </div>

                    <button
                        type="button"
                        class="qm-button"
                        data-action="check-task3"
                        data-index="${index}"
                    >
                        Check
                    </button>

                    <div id="t6-task3-feedback-${index}"></div>

                </div>

            `;

        });


        html += `

                    <div
                        id="t6-task3-total"
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
                        Task 5 — Anna Emails Gran
                    </h2>

                    <p class="qm-task-description qm-question-text">
                        Anna decides to send Gran an email.
                        Fill in the missing words. Use the verbs in the box
                        below but don’t forget to change them to the PAST TENSE
                        because the visit to Amy’s house is finished.
                        The first one is an example.
                    </p>

                    <div class="qm-example">

                        <p>
                            Hãy quan sát từ ngay bên cạnh chỗ trống,
                            đọc ngữ cảnh của cả câu và chú ý các cụm động từ.
                        </p>

                        <p>
                            Sau đó xác định động từ phù hợp và đổi sang
                            Past Simple.
                        </p>

                    </div>

                    <div class="qm-word-bank">

                        <strong>Word bank:</strong><br>

                        sleep &nbsp;&nbsp;
                        like &nbsp;&nbsp;
                        laugh &nbsp;&nbsp;
                        spend &nbsp;&nbsp;
                        do &nbsp;&nbsp;
                        fall &nbsp;&nbsp;
                        arrive &nbsp;&nbsp;
                        have &nbsp;&nbsp;
                        take &nbsp;&nbsp;
                        meet &nbsp;&nbsp;
                        wake up

                    </div>


                    <div class="qm-question">

                        <div class="qm-letter">

                            <p>
                                Hi Gran
                            </p>

                            <p>
                                We (example)
                                <strong>spent</strong>
                                a really nice weekend at Amy’s house.
                            </p>

                            <p>
                                We
                                <input
                                    id="t6-task5-0"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(1)"
                                >
                                at their home about 7.00 pm on Friday night
                                and
                                <input
                                    id="t6-task5-1"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(2)"
                                >
                                dinner with Amy’s family.
                            </p>

                            <p>
                                Sophie and I
                                <input
                                    id="t6-task5-2"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(3)"
                                >
                                in Lily’s bedroom and Jack and Ben were in Oscar’s room.
                            </p>

                            <p>
                                On Saturday, everybody
                                <input
                                    id="t6-task5-3"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(4)"
                                >
                                early and then we all
                                <input
                                    id="t6-task5-4"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(5)"
                                >
                                the bus into town.
                            </p>

                            <p>
                                Amy, Lily and I
                                <input
                                    id="t6-task5-5"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(6)"
                                >
                                some shopping at the market.
                                I really
                                <input
                                    id="t6-task5-6"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(7)"
                                >
                                a great wool jacket, but I didn’t buy it –
                                too expensive!
                            </p>

                            <p>
                                Then we
                                <input
                                    id="t6-task5-7"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(8)"
                                >
                                the others outside the restaurant.
                            </p>

                            <p>
                                It was funny in the restaurant because
                                Jack’s ice-cream
                                <input
                                    id="t6-task5-8"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(9)"
                                >
                                on the floor and he
                                <input
                                    id="t6-task5-9"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(10)"
                                >
                                !
                                Usually he cries!
                            </p>

                            <p>
                                Hope you’re well
                            </p>

                            <p>
                                Love<br>
                                Anna xxx
                            </p>

                        </div>

                    </div>


                    <button
                        type="button"
                        id="t6-check-task5"
                        class="qm-button"
                    >
                        Check Task 5
                    </button>


                    <div
                        id="t6-task5-total"
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
                        Task 6 — Visiting Friends
                    </h2>

                    <p class="qm-task-description qm-question-text">
                        Now write about visiting your friends.
                    </p>

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
                        id="t6-task6-${index}"
                        class="qm-input qm-textarea"
                        placeholder="Write your answer here..."
                    ></textarea>

                    <div
                        id="t6-task6-sample-${index}"
                        style="display:none;"
                    ></div>

                </div>

            `;

        });


        html += `

                    <button
                        type="button"
                        id="t6-check-task6"
                        class="qm-button"
                    >
                        Check Task 6
                    </button>

                    <div id="t6-task6-feedback"></div>

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
            .querySelectorAll('[data-action="check-task3"]')
            .forEach(function(button) {

                button.addEventListener("click", function() {

                    const index =
                        Number(button.dataset.index);

                    const input =
                        container.querySelector(
                            `#t6-task3-${index}`
                        );

                    const feedback =
                        container.querySelector(
                            `#t6-task3-feedback-${index}`
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
                                <strong>3/3 marks</strong>

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

                                Suggested answer:<br>

                                ${task3[index]
                                    .acceptedQuestions[0]}

                                <div class="qm-explanation">

                                    ${task3[index].explanation}

                                </div>

                            </div>

                        `;

                    }

                    updateTask3Total();

                });

            });


        function updateTask3Total() {

            const score =
                task3Scores.filter(Boolean).length * 3;

            const total =
                container.querySelector(
                    "#t6-task3-total"
                );

            total.textContent =
                `Task 3 Score: ${score}/15 marks`;

        }


        /* =================================================
           TASK 5 CHECK
        ================================================= */

        container
            .querySelector("#t6-check-task5")
            .addEventListener("click", function() {

                let score = 0;


                task5.forEach(function(item, index) {

                    const input =
                        container.querySelector(
                            `#t6-task5-${index}`
                        );

                    const old =
                        container.querySelector(
                            `#t6-task5-feedback-${index}`
                        );

                    if (old) {
                        old.remove();
                    }


                    const user =
                        normalize(input.value);

                    const correct =
                        normalize(item.answer);


                    const feedback =
                        document.createElement("div");

                    feedback.id =
                        `t6-task5-feedback-${index}`;


                    if (user === correct) {

                        score += 1.5;

                        feedback.className =
                            "qm-feedback qm-correct";

                        feedback.innerHTML = `

                            ✓ Correct!
                            <strong>1.5/1.5 marks</strong>

                            <div class="qm-explanation">

                                Đáp án:
                                ${item.answer}

                                <div class="qm-clue">

                                    Gợi ý:
                                    ${item.clue}

                                </div>

                                <p>
                                    Giải thích:
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
                        "#t6-task5-total"
                    );

                total.innerHTML =
                    `Task 5 Score: ${score}/15 marks`;

            });


        /* =================================================
           TASK 6 CHECK
        ================================================= */

        container
            .querySelector("#t6-check-task6")
            .addEventListener("click", function() {

                let completed = 0;


                task6.forEach(function(item, index) {

                    const input =
                        container.querySelector(
                            `#t6-task6-${index}`
                        );

                    const sample =
                        container.querySelector(
                            `#t6-task6-sample-${index}`
                        );


                    if (input.value.trim() !== "") {
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

                    sample.style.display = "block";

                });


                const feedback =
                    container.querySelector(
                        "#t6-task6-feedback"
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
                            Sample answer chỉ là câu trả lời tham khảo.

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

            });

    }

};

