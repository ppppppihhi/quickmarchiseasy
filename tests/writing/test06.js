
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
            .qm-task-instruction {
                color: rgb(0, 0, 238);
                margin-bottom: 16px;
            }

            .qm-task-instruction strong {
                color: rgb(0, 0, 238);
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

            /* Phần giải thích sau Check */
            .qm-task5-feedback {
                margin-top: 12px;
                padding: 13px 15px;
                background: #f8f5f1;
                border: 1px solid #e4d8cd;
                border-radius: 8px;
                color: #37443d;
                line-height: 1.7;
            }

            .qm-task5-feedback .keyword {
                color: #990000;
                font-weight: 700;
            }

            .qm-feedback-label {
                color: #37443d;
                font-weight: 400;
            }

            .qm-clue {
                margin-top: 7px;
                padding: 8px 10px;
                background: #f3eee9;
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

            /* =================================================
               TASK 5 — NỘI DUNG BỨC THƯ MÀU XANH
            ================================================= */

            .qm-letter {
                color: rgb(0, 0, 238);
                line-height: 1.8;
            }

            .qm-letter p {
                color: rgb(0, 0, 238);
            }

            .qm-letter strong {
                color: rgb(0, 0, 238);
            }

            .qm-letter .qm-input {
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
                    "I went to Fox Wood to take them.",

                acceptedQuestions: [
                    "Where did you go to take them?",
                    "Where did you go to take the photos?",
                    "Where did you go to take these photos?"
                ],

                explanation: `
                    <p>
                        Lily nói: “I went to Fox Wood to take them.”
                    </p>

                    <p>
                        → Câu trả lời cho biết <strong>địa điểm</strong>
                        Lily đi chụp ảnh.
                    </p>

                    <p>
                        → Khi hỏi về địa điểm, dùng dạng câu hỏi
                        <strong>Where did...?</strong>
                    </p>

                    <p>
                        → Đáp án: <strong>Where did you go to take them?</strong>
                    </p>
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
                    <p>
                        Lily nói: “I like this photo the best.”
                    </p>

                    <p>
                        → Câu trả lời cho biết <strong>bức ảnh Lily thích nhất</strong>.
                    </p>

                    <p>
                        → Khi hỏi lựa chọn một bức ảnh,
                        dùng <strong>Which photo...?</strong>
                    </p>

                    <p>
                        → Đáp án: <strong>Which photo do you like best?</strong>
                    </p>
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
                    <p>
                        Lily nói: “I’m going to put it into a photography competition.”
                    </p>

                    <p>
                        → Câu trả lời cho biết Lily sẽ <strong>làm gì với bức ảnh</strong>.
                    </p>

                    <p>
                        → Khi hỏi về hành động hoặc việc sẽ làm,
                        dùng <strong>What are you going to...?</strong>
                    </p>

                    <p>
                        → Đáp án: <strong>What are you going to do with it?</strong>
                    </p>
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
                    <p>
                        Lily nói: “The competition? It’s going to be at school.”
                    </p>

                    <p>
                        → Câu trả lời cho biết <strong>địa điểm tổ chức cuộc thi</strong>.
                    </p>

                    <p>
                        → Khi hỏi về địa điểm, dùng <strong>Where...?</strong>
                    </p>

                    <p>
                        → Đáp án: <strong>Where is the competition going to be?</strong>
                    </p>
                `
            },

            {
                answer:
                    "The other photos? Of course you can. Here they are.",

                acceptedQuestions: [
                    "Can I see the other photos?",
                    "Can I see your other photos?"
                ],

                explanation: `
                    <p>
                        Lily nói: “Of course you can. Here they are.”
                    </p>

                    <p>
                        → Lily đang cho phép Ben <strong>xem những bức ảnh khác</strong>.
                    </p>

                    <p>
                        → Khi hỏi xin phép, dùng <strong>Can I...?</strong>
                    </p>

                    <p>
                        → Đáp án: <strong>Can I see the other photos?</strong>
                    </p>
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

                clue:
                    "Sau chỗ trống là “a really nice weekend at Amy’s house”.",

                why:
                    "Câu đang nói Anna và gia đình đã trải qua một cuối tuần rất vui ở nhà Amy. Động từ phù hợp là “spend”. Vì chuyến thăm đã kết thúc nên dùng Past Simple: spend → spent.",

                phrase:
                    "spent a really nice weekend = đã trải qua một cuối tuần rất vui."
            },

            {
                answer: "arrived",
                verb: "arrive",

                clue:
                    "Có cụm “at their home about 7.00 pm on Friday night”.",

                why:
                    "Câu cho biết họ đến nhà Amy vào lúc 7 giờ tối thứ Sáu. Cụm “arrive at + địa điểm” rất phù hợp với ngữ cảnh này. Vì sự việc đã xảy ra nên dùng Past Simple: arrive → arrived.",

                phrase:
                    "arrived at their home = đã đến nhà họ."
            },

            {
                answer: "had",
                verb: "have",

                clue:
                    "Sau chỗ trống là “dinner with Amy’s family”.",

                why:
                    "Khi nói ăn tối, ta thường dùng cụm “have dinner”. Đây là một hoạt động đã xảy ra vào tối thứ Sáu nên have chuyển sang dạng quá khứ bất quy tắc: have → had.",

                phrase:
                    "had dinner = đã ăn tối."
            },

            {
                answer: "slept",
                verb: "sleep",

                clue:
                    "Sau chỗ trống là “in Lily’s bedroom”.",

                why:
                    "Câu cho biết Sophie và Anna ngủ trong phòng của Lily. Động từ phù hợp là “sleep”. Vì câu chuyện kể lại cuối tuần đã qua nên dùng Past Simple: sleep → slept.",

                phrase:
                    "slept in Lily’s bedroom = đã ngủ trong phòng của Lily."
            },

            {
                answer: "woke up",
                verb: "wake up",

                clue:
                    "Sau chỗ trống là “early and then...”.",

                why:
                    "Cụm “wake up” có nghĩa là thức dậy. Từ “early” cho biết họ thức dậy sớm. Vì đây là hành động đã xảy ra vào thứ Bảy nên dùng Past Simple: wake → woke.",

                phrase:
                    "woke up early = đã thức dậy sớm."
            },

            {
                answer: "took",
                verb: "take",

                clue:
                    "Sau chỗ trống là “the bus into town”.",

                why:
                    "Ta thường dùng cụm “take the bus” khi nói đi bằng xe buýt. Câu kể lại một việc đã xảy ra nên take phải chuyển sang Past Simple: take → took.",

                phrase:
                    "took the bus into town = đã đi xe buýt vào thị trấn."
            },

            {
                answer: "did",
                verb: "do",

                clue:
                    "Có cụm “some shopping at the market”.",

                why:
                    "Trong tiếng Anh, ta dùng cụm “do some shopping” để nói đi mua sắm. Vì hoạt động đã xảy ra vào thứ Bảy nên do → did.",

                phrase:
                    "did some shopping = đã đi mua sắm."
            },

            {
                answer: "liked",
                verb: "like",

                clue:
                    "Sau chỗ trống là “a great wool jacket”.",

                why:
                    "Anna nói rằng cô ấy rất thích một chiếc áo len. Động từ phù hợp là “like”. Vì câu chuyện đang kể về chuyến đi đã qua nên like → liked.",

                phrase:
                    "liked a great wool jacket = rất thích một chiếc áo len đẹp."
            },

            {
                answer: "met",
                verb: "meet",

                clue:
                    "Sau chỗ trống là “the others outside the restaurant”.",

                why:
                    "Anna, Lily và Amy gặp những người khác ở bên ngoài nhà hàng. Động từ phù hợp là “meet”. Đây là động từ bất quy tắc: meet → met.",

                phrase:
                    "met the others = đã gặp những người khác."
            },

            {
                answer: "fell",
                verb: "fall",

                clue:
                    "Cụm “on the floor” cho biết kem rơi xuống sàn.",

                why:
                    "Kem của Jack rơi xuống sàn nên động từ phù hợp là “fall”. Đây là hành động đã xảy ra trong quá khứ và fall là động từ bất quy tắc: fall → fell.",

                phrase:
                    "fell on the floor = đã rơi xuống sàn."
            },

            {
                answer: "laughed",
                verb: "laugh",

                clue:
                    "Ngay sau đó có câu “Usually he cries!” và ngữ cảnh nói rằng mọi người thấy buồn cười.",

                why:
                    "Mọi người bật cười vì kem của Jack rơi xuống sàn. Động từ phù hợp là “laugh”. Vì sự việc đã xảy ra nên laugh → laughed.",

                phrase:
                    "laughed = đã cười."
            }

        ];


        /* =================================================
           TASK 6 DATA
        ================================================= */

        const task6 = [

            {
                starter:
                    "Sometimes I...",

                hint:
                    "What do you sometimes do when you visit your friends? Where do you go?",

                sample:
                    "Sometimes I visit my friends at the weekend. We play games and talk together.",

                explanation:
                    "Em có thể nói về một hoạt động em thỉnh thoảng làm khi gặp bạn bè."
            },

            {
                starter:
                    "At school...",

                hint:
                    "What do you usually do with your friends at school?",

                sample:
                    "At school I usually talk to my friends during the break. We often play together.",

                explanation:
                    "Em có thể nói về những việc em và bạn bè thường làm ở trường."
            },

            {
                starter:
                    "Last week...",

                hint:
                    "What did you do when you visited a friend last week? Use the past tense.",

                sample:
                    "Last week I visited my best friend. We watched a film and played computer games.",

                explanation:
                    "Vì “last week” nói về thời gian đã qua nên chú ý sử dụng Past Simple."
            },

            {
                starter:
                    "Tomorrow...",

                hint:
                    "What are you going to do tomorrow when you visit your friends?",

                sample:
                    "Tomorrow I am going to visit my friend after school. We are going to play football.",

                explanation:
                    "“Tomorrow” nói về tương lai. Em có thể dùng “be going to” để nói về kế hoạch."
            },

            {
                starter:
                    "The best thing about...",

                hint:
                    "What do you like best about visiting your friends?",

                sample:
                    "The best thing about visiting my friends is having fun and talking together.",

                explanation:
                    "Em hãy nói điều em thích nhất khi đến thăm bạn bè."
            }

        ];


        /* =================================================
           RENDER HTML
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

                    <p class="qm-task-instruction">
                        <strong>Task Three: Ben talks to Lily (15 marks)</strong><br>
                        Ben is talking to Lily about her photographs.
                        Write Ben’s questions in the spaces.
                        The first one is an example.
                    </p>

                    <div class="qm-example">

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

                    <div class="qm-answer">

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

                    <p class="qm-task-instruction">
                        <strong>Task Five: Anna Emails Gran (15 marks)</strong><br>
                        Anna decides to send Gran an email.
                        Fill in the missing words.
                        Use the verbs in the box below but don’t forget
                        to change them to the <strong>PAST TENSE</strong>
                        because the visit to Amy’s house is finished.
                        The first one is an example.
                    </p>

                    <div class="qm-example">

                        <strong>💡 Cách làm Task 5</strong>

                        <p>
                            Hãy đọc cả câu trước khi chọn đáp án.
                            Quan sát từ ngay bên cạnh chỗ trống,
                            chú ý ngữ cảnh và đặc biệt tìm các
                            cụm động từ quen thuộc.
                        </p>

                        <p>
                            Sau khi xác định được động từ phù hợp,
                            nhớ đổi động từ sang Past Simple vì
                            chuyến thăm đã kết thúc.
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


                    <!-- BỨC THƯ / EMAIL MÀU XANH -->

                    <div class="qm-question qm-letter">

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
                        </p>

                        <p>
                            I really
                            <input
                                id="t6-task5-6"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(7)"
                            >
                            a great wool jacket,
                            but I didn’t buy it – too expensive!
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
                            ! Usually he cries!
                        </p>

                        <p>
                            Hope you’re well<br>
                            Love<br>
                            Anna xxx
                        </p>

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

                    <p class="qm-task-instruction">
                        <strong>Task Six: Visiting Friends (10 marks)</strong><br>
                        Now write about visiting your friends.
                        Write about 50 words.
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

                    <div
                        id="t6-task6-feedback"
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
            .querySelectorAll('[data-action="check-task3"]')
            .forEach(function(button) {

                button.addEventListener(
                    "click",
                    function() {

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
                                    3/3 marks

                                    <div class="qm-task5-feedback">

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

                                    <span class="qm-feedback-label">
                                        Suggested answer:
                                    </span><br>

                                    ${task3[index]
                                        .acceptedQuestions[0]}

                                    <div class="qm-task5-feedback">

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
            .addEventListener(
                "click",
                function() {

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


                        feedback.className =
                            "qm-task5-feedback";


                        if (user === correct) {

                            score += 1.5;

                            feedback.innerHTML = `

                                ✓ Correct! 1.5/1.5 marks

                                <br><br>

                                <span class="qm-feedback-label">
                                    Đáp án:
                                </span>
                                ${item.answer}

                                <div class="qm-clue">

                                    <span class="qm-feedback-label">
                                        Gợi ý:
                                    </span><br>

                                    ${item.clue}

                                </div>

                                <p>

                                    <span class="qm-feedback-label">
                                        Giải thích:
                                    </span><br>

                                    ${item.verb}
                                    → V2/ed:
                                    <strong class="keyword">
                                        ${item.answer}
                                    </strong>.
                                    ${item.why}

                                </p>

                                <p>

                                    <span class="qm-feedback-label">
                                        Cụm từ quan trọng:
                                    </span><br>

                                    ${highlightPhrase(item.phrase)}

                                </p>

                            `;

                        } else {

                            feedback.innerHTML = `

                                ✗ Try again.

                                <br><br>

                                <span class="qm-feedback-label">
                                    Đáp án:
                                </span>
                                ${item.answer}

                                <div class="qm-clue">

                                    <span class="qm-feedback-label">
                                        Gợi ý:
                                    </span><br>

                                    ${item.clue}

                                </div>

                                <p>

                                    <span class="qm-feedback-label">
                                        Giải thích:
                                    </span><br>

                                    ${item.verb}
                                    → V2/ed:
                                    <strong class="keyword">
                                        ${item.answer}
                                    </strong>.
                                    ${item.why}

                                </p>

                                <p>

                                    <span class="qm-feedback-label">
                                        Cụm từ quan trọng:
                                    </span><br>

                                    ${highlightPhrase(item.phrase)}

                                </p>

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

                }
            );


        /* =================================================
           HIGHLIGHT IMPORTANT ENGLISH PHRASES
        ================================================= */

        function highlightPhrase(text) {

            const phrases = [
                "spent a really nice weekend",
                "arrived at their home",
                "had dinner",
                "slept in Lily’s bedroom",
                "woke up early",
                "took the bus into town",
                "did some shopping",
                "liked a great wool jacket",
                "met the others",
                "fell on the floor",
                "laughed"
            ];


            let result = text;


            phrases.forEach(function(phrase) {

                const escaped =
                    phrase.replace(
                        /[.*+?^${}()|[\]\\]/g,
                        "\\$&"
                    );

                const regex =
                    new RegExp(escaped, "gi");


                result =
                    result.replace(
                        regex,
                        function(match) {

                            return `
                                <strong class="keyword">
                                    ${match}
                                </strong>
                            `;

                        }
                    );

            });


            return result;

        }


        /* =================================================
           TASK 6 CHECK
        ================================================= */

        container
            .querySelector("#t6-check-task6")
            .addEventListener(
                "click",
                function() {

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

