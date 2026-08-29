/* =====================================================
   QUICKMARCH PRACTICE
   WRITING TEST
   Ben talks to Lily / Anna Emails Gran / Visiting Friends
===================================================== */

window.QUICKMARCH_TEST = {

    title: "Writing Test",

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

            /* Nội dung đề bài */
            .qm-task-description {
                color: rgb(0, 0, 238);
                font-size: 15px;
                margin-bottom: 16px;
            }

            /* Nội dung hội thoại của Task 3 */
            .qm-task3-content {
                color: rgb(0, 0, 238);
            }

            /* Nội dung email - XANH DƯƠNG */
            .qm-email {
                color: rgb(0, 0, 238);
                background: #ffffff;
                border: 1px solid #d8e0e5;
                border-radius: 10px;
                padding: 18px;
                margin-top: 15px;
                line-height: 1.8;
            }

            .qm-email strong {
                color: rgb(0, 0, 238);
            }

            .qm-email-input {
                color: #37443d;
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
                color: #37443d;
            }

            .qm-wrong {
                background: #fff5f2;
                border: 1px solid #ecd3cc;
                color: #37443d;
            }

            /* Feedback Task 3 */
            .qm-task3-feedback-box {
                margin-top: 12px;
                padding: 12px;
                background: #f7faf8;
                border-radius: 8px;
            }

            /* Feedback Task 5 */
            .qm-task5-feedback {
                margin-top: 12px;
                padding: 14px;
                background: #faf7f4;
                border: 1px solid #e3d7cf;
                border-radius: 9px;
                color: #37443d;
            }

            /* Chỉ keyword tiếng Anh trong feedback */
            .qm-keyword {
                color: #990000;
                font-weight: 700;
            }

            .qm-section-label {
                color: #37443d;
                font-weight: 400;
                margin-top: 8px;
            }

            .qm-clue {
                margin-top: 7px;
                padding: 8px 10px;
                background: #f5eee9;
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
                    "I went to Fox Wood to take them.",

                acceptedQuestions: [
                    "Where did you go to take them?"
                ],

                explanation: `
                    <div>
                        Lily nói: <span class="qm-keyword">“I went to Fox Wood to take them.”</span>
                        → Câu trả lời cho biết <span class="qm-keyword">địa điểm</span> Lily đã đến để chụp ảnh.
                    </div>

                    <div class="qm-section-label">
                        Dạng câu hỏi:
                        hỏi về nơi chốn → dùng <span class="qm-keyword">Where did...?</span>
                    </div>

                    <div class="qm-section-label">
                        Đáp án:
                        Where did you go to take them?
                    </div>
                `
            },

            {
                answer:
                    "I like this photo the best.",

                acceptedQuestions: [
                    "Which photo do you like best?"
                ],

                explanation: `
                    <div>
                        Lily nói: <span class="qm-keyword">“I like this photo the best.”</span>
                        → Câu trả lời nói về <span class="qm-keyword">bức ảnh Lily thích nhất</span>.
                    </div>

                    <div class="qm-section-label">
                        Dạng câu hỏi:
                        hỏi lựa chọn → dùng <span class="qm-keyword">Which photo...?</span>
                    </div>

                    <div class="qm-section-label">
                        Đáp án:
                        Which photo do you like best?
                    </div>
                `
            },

            {
                answer:
                    "I’m going to put it into a photography competition.",

                acceptedQuestions: [
                    "What are you going to do with it?"
                ],

                explanation: `
                    <div>
                        Lily nói: <span class="qm-keyword">“I’m going to put it into a photography competition.”</span>
                        → Câu trả lời cho biết <span class="qm-keyword">Lily sẽ làm gì với bức ảnh</span>.
                    </div>

                    <div class="qm-section-label">
                        Dạng câu hỏi:
                        hỏi về hành động → dùng <span class="qm-keyword">What are you going to...?</span>
                    </div>

                    <div class="qm-section-label">
                        Đáp án:
                        What are you going to do with it?
                    </div>
                `
            },

            {
                answer:
                    "The competition? It’s going to be at school.",

                acceptedQuestions: [
                    "Where is the competition going to be?"
                ],

                explanation: `
                    <div>
                        Lily nói: <span class="qm-keyword">“It’s going to be at school.”</span>
                        → Câu trả lời cho biết <span class="qm-keyword">địa điểm tổ chức cuộc thi</span>.
                    </div>

                    <div class="qm-section-label">
                        Dạng câu hỏi:
                        hỏi về nơi chốn → dùng <span class="qm-keyword">Where is...?</span>
                    </div>

                    <div class="qm-section-label">
                        Đáp án:
                        Where is the competition going to be?
                    </div>
                `
            },

            {
                answer:
                    "The other photos? Of course you can. Here they are.",

                acceptedQuestions: [
                    "Can I see the other photos?"
                ],

                explanation: `
                    <div>
                        Lily nói: <span class="qm-keyword">“Of course you can.”</span>
                        → Lily đồng ý cho Ben xem những bức ảnh khác.
                    </div>

                    <div class="qm-section-label">
                        Dạng câu hỏi:
                        xin phép → dùng <span class="qm-keyword">Can I...?</span>
                    </div>

                    <div class="qm-section-label">
                        Đáp án:
                        Can I see the other photos?
                    </div>
                `
            }

        ];


        /* =================================================
           TASK 5 DATA
        ================================================= */

        const task5 = [

            {
                answer: "had",
                verb: "have",

                clue:
                    "Trước chỗ trống là “a really nice weekend at Amy’s house”.",

                why:
                    "Cụm này nói về việc Anna và gia đình đã trải qua một cuối tuần vui vẻ. Vì chuyến thăm đã kết thúc nên dùng Past Simple: have → had.",

                phrase:
                    "had a really nice weekend = đã có một cuối tuần rất vui."
            },

            {
                answer: "arrived",
                verb: "arrive",

                clue:
                    "Sau chỗ trống là “at their home about 7.00 pm”.",

                why:
                    "Cụm “arrive at their home” có nghĩa là đến nhà của họ. Mốc thời gian Friday night cho biết hành động đã xảy ra trong quá khứ.",

                phrase:
                    "arrived at their home = đã đến nhà họ."
            },

            {
                answer: "had",
                verb: "have",

                clue:
                    "Sau chỗ trống là “dinner with Amy’s family”.",

                why:
                    "Khi nói về việc ăn một bữa ăn, ta dùng cụm “have dinner”. Vì câu chuyện ở quá khứ nên have → had.",

                phrase:
                    "had dinner = đã ăn tối."
            },

            {
                answer: "slept",
                verb: "sleep",

                clue:
                    "Sau chỗ trống là “in Lily’s bedroom”.",

                why:
                    "Câu cho biết Sophie và Anna ngủ trong phòng Lily. Cụm phù hợp là “sleep in a bedroom”. Vì chuyến thăm đã kết thúc nên dùng Past Simple.",

                phrase:
                    "slept in Lily’s bedroom = đã ngủ trong phòng Lily."
            },

            {
                answer: "woke up",
                verb: "wake up",

                clue:
                    "Sau chỗ trống là “early and then...”.",

                why:
                    "Từ “early” cho biết mọi người thức dậy sớm. Cụm động từ cần chú ý là “wake up”. Vì sự việc xảy ra vào Saturday nên dùng Past Simple: wake → woke.",

                phrase:
                    "woke up early = đã thức dậy sớm."
            },

            {
                answer: "took",
                verb: "take",

                clue:
                    "Sau chỗ trống là “the bus into town”.",

                why:
                    "Cụm “take the bus” nghĩa là đi bằng xe buýt. Vì hành động đã xảy ra nên dùng Past Simple: take → took.",

                phrase:
                    "took the bus into town = đã đi xe buýt vào thị trấn."
            },

            {
                answer: "did",
                verb: "do",

                clue:
                    "Sau chỗ trống là “some shopping at the market”.",

                why:
                    "Ta có cụm “do some shopping” = đi mua sắm. Câu chuyện kể về một ngày đã qua nên do → did.",

                phrase:
                    "did some shopping = đã đi mua sắm."
            },

            {
                answer: "liked",
                verb: "like",

                clue:
                    "Sau chỗ trống là “a great wool jacket”.",

                why:
                    "Anna nói rằng cô ấy rất thích một chiếc áo khoác len đẹp. Sau đó cô ấy không mua vì quá đắt. Vì vậy động từ phù hợp là like và dùng Past Simple: like → liked.",

                phrase:
                    "liked a great wool jacket = đã thích một chiếc áo khoác len rất đẹp."
            },

            {
                answer: "met",
                verb: "meet",

                clue:
                    "Sau chỗ trống là “the others outside the restaurant”.",

                why:
                    "Anna, Lily và Amy gặp những người khác bên ngoài nhà hàng. Cụm “meet someone” phù hợp với ngữ cảnh. Meet là động từ bất quy tắc: meet → met.",

                phrase:
                    "met the others = đã gặp những người khác."
            },

            {
                answer: "fell",
                verb: "fall",

                clue:
                    "Sau chỗ trống là “on the floor”.",

                why:
                    "Kem của Jack rơi xuống sàn. Cụm “fall on the floor” phù hợp với ngữ cảnh. Fall là động từ bất quy tắc: fall → fell.",

                phrase:
                    "fell on the floor = đã rơi xuống sàn."
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
                    "Sometimes I visit my friends at their houses and play games with them.",

                explanation:
                    "Nêu một hoạt động em thỉnh thoảng làm khi đến thăm bạn."
            },

            {
                starter: "At school...",

                hint:
                    "What do you do with your friends at school?",

                sample:
                    "At school I talk to my friends during break time and play football together.",

                explanation:
                    "Nói về những hoạt động em thường làm với bạn bè ở trường."
            },

            {
                starter: "Last week...",

                hint:
                    "What did you do when you visited a friend last week? Use the past tense.",

                sample:
                    "Last week I visited my best friend and we watched a funny film together.",

                explanation:
                    "Vì có “Last week” nên nói về sự việc đã xảy ra. Chú ý sử dụng Past Simple."
            },

            {
                starter: "Tomorrow...",

                hint:
                    "What are you going to do tomorrow?",

                sample:
                    "Tomorrow I am going to visit my friend and we are going to play computer games.",

                explanation:
                    "Nói về kế hoạch trong tương lai. Có thể dùng “be going to” để diễn tả dự định."
            },

            {
                starter: "The best thing about...",

                hint:
                    "What do you like most about visiting your friends?",

                sample:
                    "The best thing about visiting my friends is spending time together and having fun.",

                explanation:
                    "Nêu điều em thích nhất khi đến thăm bạn bè."
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

                    <p class="qm-task-description">
                        Ben is talking to Lily about her photographs.
                        Write Ben’s questions in the spaces.
                        The first one is an example.
                    </p>

                    <div class="qm-example qm-task3-content">

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

                    <div class="qm-task3-content">

                        <p>
                            <strong>Ben:</strong>
                        </p>

                    </div>

                    <input
                        id="task3-${index}"
                        class="qm-input"
                        type="text"
                        placeholder="Write Ben's question here..."
                    >

                    <div class="qm-answer qm-task3-content">

                        <strong>Lily:</strong>
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
                        id="task3-feedback-${index}"
                    ></div>

                </div>

            `;

        });


        html += `

                    <div
                        id="task3-total"
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

                    <p class="qm-task-description">
                        Anna decides to send Gran an email.
                        Fill in the missing words.
                        Use the verbs in the box below but don’t forget
                        to change them to the PAST TENSE because the visit
                        to Amy’s house is finished.
                        The first one is an example.
                    </p>

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

                    <!-- EMAIL: CHỈ PHẦN NÀY MÀU XANH -->

                    <div class="qm-email">

                        <p>Hi Gran</p>

                        <p>
                            We (example)
                            <strong>had</strong>
                            a really nice weekend at Amy’s house.
                        </p>

                        <p>
                            We
                            <input
                                id="task5-0"
                                class="qm-input qm-inline-input qm-email-input"
                                type="text"
                                placeholder="(1)"
                            >
                            at their home about 7.00 pm on Friday night
                            and
                            <input
                                id="task5-1"
                                class="qm-input qm-inline-input qm-email-input"
                                type="text"
                                placeholder="(2)"
                            >
                            dinner with Amy’s family.
                        </p>

                        <p>
                            Sophie and I
                            <input
                                id="task5-2"
                                class="qm-input qm-inline-input qm-email-input"
                                type="text"
                                placeholder="(3)"
                            >
                            in Lily’s bedroom and Jack and Ben were in Oscar’s room.
                        </p>

                        <p>
                            On Saturday, everybody
                            <input
                                id="task5-3"
                                class="qm-input qm-inline-input qm-email-input"
                                type="text"
                                placeholder="(4)"
                            >
                            early and then we all
                            <input
                                id="task5-4"
                                class="qm-input qm-inline-input qm-email-input"
                                type="text"
                                placeholder="(5)"
                            >
                            the bus into town.
                        </p>

                        <p>
                            Amy, Lily and I
                            <input
                                id="task5-5"
                                class="qm-input qm-inline-input qm-email-input"
                                type="text"
                                placeholder="(6)"
                            >
                            some shopping at the market.
                        </p>

                        <p>
                            I really
                            <input
                                id="task5-6"
                                class="qm-input qm-inline-input qm-email-input"
                                type="text"
                                placeholder="(7)"
                            >
                            a great wool jacket,
                            but I didn’t buy it – too expensive!
                        </p>

                        <p>
                            Then we
                            <input
                                id="task5-7"
                                class="qm-input qm-inline-input qm-email-input"
                                type="text"
                                placeholder="(8)"
                            >
                            the others outside the restaurant.
                        </p>

                        <p>
                            It was funny in the restaurant because Jack’s ice-cream
                            <input
                                id="task5-8"
                                class="qm-input qm-inline-input qm-email-input"
                                type="text"
                                placeholder="(9)"
                            >
                            on the floor and he
                            <input
                                id="task5-9"
                                class="qm-input qm-inline-input qm-email-input"
                                type="text"
                                placeholder="(10)"
                            >
                            ! Usually he cries!
                        </p>

                        <p>
                            Hope you’re well
                            <br>
                            Love
                            <br>
                            Anna xxx
                        </p>

                    </div>


                    <button
                        type="button"
                        id="check-task5"
                        class="qm-button"
                    >
                        Check Task 5
                    </button>


                    <div
                        id="task5-total"
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

                    <p class="qm-task-description">
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

                        <strong>💡 Gợi ý:</strong>

                        <br>

                        ${item.hint}

                    </div>

                    <textarea
                        id="task6-${index}"
                        class="qm-input qm-textarea"
                        placeholder="Write your answer here..."
                    ></textarea>

                    <div
                        id="task6-sample-${index}"
                        style="display:none;"
                    ></div>

                </div>

            `;

        });


        html += `

                    <button
                        type="button"
                        id="check-task6"
                        class="qm-button"
                    >
                        Check Task 6
                    </button>

                    <div
                        id="task6-feedback"
                    ></div>

                </section>

            </div>

        `;


        container.innerHTML = html;


        /* =================================================
           TASK 3 CHECK
        ================================================= */

        let task3Scores =
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
                                `#task3-${index}`
                            );

                        const feedback =
                            container.querySelector(
                                `#task3-feedback-${index}`
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

                                    <div class="qm-task3-feedback-box">

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

                                    <div class="qm-task3-feedback-box">

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

            container.querySelector(
                "#task3-total"
            ).textContent =
                `Task 3 Score: ${score}/15 marks`;

        }


        /* =================================================
           TASK 5 CHECK
        ================================================= */

        container
            .querySelector("#check-task5")
            .addEventListener(
                "click",
                function() {

                    let score = 0;


                    task5.forEach(
                        function(item, index) {

                            const input =
                                container.querySelector(
                                    `#task5-${index}`
                                );


                            const old =
                                container.querySelector(
                                    `#task5-feedback-${index}`
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
                                `task5-feedback-${index}`;


                            if (user === correct) {

                                score += 1.5;

                                feedback.className =
                                    "qm-task5-feedback";

                                feedback.innerHTML = `

                                    ✓ Correct! 1.5/1.5 marks

                                    <div class="qm-section-label">
                                        Đáp án:
                                        ${item.answer}
                                    </div>

                                    <div class="qm-section-label">
                                        Gợi ý:
                                        ${item.clue}
                                    </div>

                                    <div class="qm-section-label">
                                        Giải thích:
                                        ${item.why}
                                    </div>

                                    <div class="qm-section-label">
                                        Cụm từ quan trọng:
                                        <span class="qm-keyword">
                                            ${item.phrase}
                                        </span>
                                    </div>

                                `;

                            } else {

                                feedback.className =
                                    "qm-task5-feedback";

                                feedback.innerHTML = `

                                    ✗ Try again.

                                    <div class="qm-section-label">
                                        Đáp án:
                                        ${item.answer}
                                    </div>

                                    <div class="qm-section-label">
                                        Gợi ý:
                                        ${item.clue}
                                    </div>

                                    <div class="qm-section-label">
                                        Giải thích:
                                        ${item.why}
                                    </div>

                                    <div class="qm-section-label">
                                        Cụm từ quan trọng:
                                        <span class="qm-keyword">
                                            ${item.phrase}
                                        </span>
                                    </div>

                                `;

                            }


                            input
                                .parentNode
                                .appendChild(feedback);

                        }
                    );


                    container.querySelector(
                        "#task5-total"
                    ).textContent =
                        `Task 5 Score: ${score}/15 marks`;

                }
            );


        /* =================================================
           TASK 6 CHECK
        ================================================= */

        container
            .querySelector("#check-task6")
            .addEventListener(
                "click",
                function() {

                    let completed = 0;


                    task6.forEach(
                        function(item, index) {

                            const input =
                                container.querySelector(
                                    `#task6-${index}`
                                );

                            const sample =
                                container.querySelector(
                                    `#task6-sample-${index}`
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

                            sample.style.display = "block";

                        }
                    );


                    const feedback =
                        container.querySelector(
                            "#task6-feedback"
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

                }
            );

    }

};

