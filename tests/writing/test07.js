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

            /*
                Phần giải thích:
                không dùng màu xanh dương.
                Keyword tiếng Anh dùng màu nâu đất.
            */

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

            /* Nội dung email / thư */
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
                    "No, is Jane older than you?",

                acceptedQuestions: [
                    "Is Jane older than you?",
                    "Is Jane older than you"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>
                    Maisie nói:
                    “Jane’s older than me, by two years.”
                    → Maisie đang nói về <span class="qm-keyword">tuổi</span>
                    của Jane so với mình.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>
                    Câu trả lời cho biết Jane lớn tuổi hơn Maisie.
                    Vì đây là câu hỏi Yes/No về trạng thái,
                    ta dùng cấu trúc
                    <span class="qm-keyword">Is Jane older than you?</span>
                    <br><br>

                    Đáp án:
                    <span class="qm-keyword">Is Jane older than you?</span>
                `
            },

            {
                answer:
                    "Mike? I met him about a year ago.",

                acceptedQuestions: [
                    "When did you meet Mike?",
                    "When did you meet him?"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>
                    Maisie nói:
                    “I met him about a year ago.”
                    → Câu trả lời cho biết
                    <span class="qm-keyword">about a year ago</span>,
                    tức là một khoảng thời gian trong quá khứ.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>
                    Khi muốn hỏi một hành động xảy ra
                    <span class="qm-keyword">khi nào</span>,
                    ta dùng <span class="qm-keyword">When</span>.
                    Vì hành động “met” đã xảy ra trong quá khứ,
                    dùng <span class="qm-keyword">When did...?</span>
                    <br><br>

                    Đáp án:
                    <span class="qm-keyword">When did you meet Mike?</span>
                `
            },

            {
                answer:
                    "Yes, I like Mike. I think he’s great.",

                acceptedQuestions: [
                    "Do you like Mike?",
                    "Do you like Mike"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>
                    Maisie trả lời:
                    “Yes, I like Mike.”
                    → Câu trả lời bắt đầu bằng
                    <span class="qm-keyword">Yes</span>,
                    vì vậy đây là câu trả lời cho câu hỏi Yes/No.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>
                    Động từ chính là
                    <span class="qm-keyword">like</span>
                    và chủ ngữ là “you” trong câu hỏi.
                    Vì vậy dùng trợ động từ
                    <span class="qm-keyword">Do</span>.
                    <br><br>

                    Đáp án:
                    <span class="qm-keyword">Do you like Mike?</span>
                `
            },

            {
                answer:
                    "In this town? No, Jane and Mike are going to live in London.",

                acceptedQuestions: [
                    "Are Jane and Mike going to live in this town?",
                    "Are Jane and Mike going to live here?"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>
                    Maisie nói:
                    “Jane and Mike are going to live in London.”
                    → Câu trả lời cho biết
                    <span class="qm-keyword">nơi họ sẽ sống</span>.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>
                    Ở đây Maisie trả lời câu hỏi Yes/No:
                    “In this town?”
                    Vì câu hỏi hỏi về dự định trong tương lai,
                    ta dùng cấu trúc
                    <span class="qm-keyword">Are ... going to...?</span>
                    <br><br>

                    Đáp án:
                    <span class="qm-keyword">Are Jane and Mike going to live in this town?</span>
                `
            },

            {
                answer:
                    "Jane? She’s going to work in the hospital.",

                acceptedQuestions: [
                    "What is Jane going to do?",
                    "What is Jane going to do"
                ],

                explanation: `
                    <strong>💡 Gợi ý:</strong><br>
                    Maisie nói:
                    “She’s going to work in the hospital.”
                    → Câu trả lời nói về
                    <span class="qm-keyword">công việc / hoạt động</span>
                    Jane sẽ làm.
                    <br><br>

                    <strong>👉 Hướng dẫn:</strong><br>
                    Khi hỏi Jane sẽ làm gì,
                    dùng từ để hỏi
                    <span class="qm-keyword">What</span>.
                    Vì câu nói về kế hoạch tương lai,
                    dùng <span class="qm-keyword">What is ... going to do?</span>
                    <br><br>

                    Đáp án:
                    <span class="qm-keyword">What is Jane going to do?</span>
                `
            }

        ];


        /* =================================================
           TASK 5 DATA
        ================================================= */

        const task5 = [

            {
                answer: "went",
                verb: "go",
                clue:
                    "Cụm “to a wedding” đứng ngay sau chỗ trống.",
                why:
                    "Câu kể về một đám cưới đã kết thúc vào cuối tuần trước. Vì vậy động từ “go” phải chuyển sang Past Simple.",
                phrase:
                    "went to a wedding = đã đi dự một đám cưới."
            },

            {
                answer: "took",
                verb: "take",
                clue:
                    "Chủ ngữ là “The journey” và phía sau cần một động từ chỉ thời gian kéo dài.",
                why:
                    "Câu cho biết chuyến đi kéo dài ba giờ. Trong ngữ cảnh này, “took three hours” có nghĩa là mất ba giờ.",
                phrase:
                    "took three hours = mất ba giờ."
            },

            {
                answer: "arrived",
                verb: "arrive",
                clue:
                    "Sau chỗ trống là “there”.",
                why:
                    "“There” chỉ địa điểm tổ chức đám cưới. Cụm “arrive there” có nghĩa là đến đó. Vì chuyến đi đã xảy ra nên dùng Past Simple.",
                phrase:
                    "arrived there = đã đến đó."
            },

            {
                answer: "started",
                verb: "start",
                clue:
                    "Sau chủ ngữ “it” là “to rain”.",
                why:
                    "Cụm “it started to rain” diễn tả trời bắt đầu mưa. Sự việc xảy ra trong quá khứ nên “start” đổi thành “started”.",
                phrase:
                    "started to rain = bắt đầu mưa."
            },

            {
                answer: "sat",
                verb: "sit",
                clue:
                    "Sau chỗ trống là “down at our tables”.",
                why:
                    "Cụm “sit down” có nghĩa là ngồi xuống. Vì mọi người đã ngồi xuống bàn để ăn trưa nên dùng Past Simple của “sit”.",
                phrase:
                    "sat down = đã ngồi xuống."
            },

            {
                answer: "talked",
                verb: "talk",
                clue:
                    "Sau chỗ trống là “to Maisie”.",
                why:
                    "Cụm “talk to someone” có nghĩa là nói chuyện với ai. Anna kể lại việc đã xảy ra nên dùng Past Simple.",
                phrase:
                    "talked to Maisie = đã nói chuyện với Maisie."
            },

            {
                answer: "danced",
                verb: "dance",
                clue:
                    "Câu nói đến “music in the disco area”.",
                why:
                    "Ngữ cảnh có âm nhạc và khu vực disco, vì vậy hoạt động phù hợp là nhảy. “Dance” chuyển sang Past Simple thành “danced”.",
                phrase:
                    "danced to music = đã nhảy theo nhạc."
            },

            {
                answer: "ate",
                verb: "eat",
                clue:
                    "Sau chỗ trống là “more food”.",
                why:
                    "Sau khi nhảy, mọi người ăn thêm thức ăn. Động từ phù hợp là “eat”, và Past Simple của “eat” là “ate”.",
                phrase:
                    "ate more food = đã ăn thêm thức ăn."
            },

            {
                answer: "laughed",
                verb: "laugh",
                clue:
                    "Ngay sau chỗ trống là “a lot” và nguyên nhân là Uncle Joe rất hài hước.",
                why:
                    "Uncle Joe rất hài hước nên mọi người cười rất nhiều. Cụm “laugh a lot” phù hợp với ngữ cảnh. Vì sự việc đã xảy ra nên dùng “laughed”.",
                phrase:
                    "laughed a lot = đã cười rất nhiều."
            },

            {
                answer: "told",
                verb: "tell",
                clue:
                    "Sau chỗ trống là “a lot of funny stories”.",
                why:
                    "Cụm “tell stories” có nghĩa là kể chuyện. Uncle Joe kể nhiều câu chuyện hài hước, vì vậy dùng “tell”. Past Simple của “tell” là “told”.",
                phrase:
                    "told funny stories = đã kể những câu chuyện hài hước."
            },

            {
                answer: "left",
                verb: "leave",
                clue:
                    "Sau chỗ trống là “the wedding at midnight”.",
                why:
                    "Câu nói về việc rời khỏi đám cưới lúc nửa đêm. Cụm “leave the wedding” phù hợp với ngữ cảnh. Past Simple của “leave” là “left”.",
                phrase:
                    "left the wedding = đã rời khỏi đám cưới."
            }

        ];


        /* =================================================
           TASK 6 DATA
        ================================================= */

        const task6 = [

            {
                starter: "At weddings in my country,",

                hint:
                    "What do people usually do at weddings? Think about clothes, music, guests or traditions.",

                sample:
                    "At weddings in my country, families celebrate together and guests wear smart clothes.",

                explanation:
                    "Em có thể viết về những hoạt động hoặc phong tục thường thấy trong các đám cưới."
            },

            {
                starter: "At weddings in my country, the food",

                hint:
                    "What food do people usually eat at weddings?",

                sample:
                    "At weddings in my country, the food is delicious and there are many different dishes.",

                explanation:
                    "Em có thể mô tả món ăn, số lượng món hoặc cảm nhận của em về đồ ăn trong đám cưới."
            },

            {
                starter: "At weddings, I",

                hint:
                    "What do you usually do at a wedding? Think about eating, talking, dancing or taking photos.",

                sample:
                    "At weddings, I usually talk to my relatives, eat delicious food and take photos.",

                explanation:
                    "Em có thể viết về những việc em thường làm khi tham dự một đám cưới."
            },

            {
                starter: "At my last family wedding,",

                hint:
                    "What happened at the last wedding you attended? Use the past tense.",

                sample:
                    "At my last family wedding, I met many relatives and enjoyed a big meal with them.",

                explanation:
                    "Câu này nói về một đám cưới đã xảy ra trong quá khứ, vì vậy em nên chú ý sử dụng Past Simple."
            },

            {
                starter: "In the future,",

                hint:
                    "What do you think weddings will be like in the future?",

                sample:
                    "In the future, weddings may become more modern, but families will still celebrate together.",

                explanation:
                    "Em có thể đưa ra dự đoán hoặc ý tưởng về những đám cưới trong tương lai."
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
                        Task 3 — At the Wedding
                    </h2>

                    <div class="qm-instruction">

                        At Jane and Mike’s wedding, Anna talks to Maisie.
                        Write Anna’s questions.
                        Write the questions in the spaces.
                        The first one is an example.

                    </div>

                    <div class="qm-example">

                        <strong>Example</strong>

                        <p>
                            <strong>Anna:</strong>
                            Are you Jane’s sister?
                        </p>

                        <p>
                            <strong>Maisie:</strong>
                            Yes, I am Jane’s sister.
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
                        <strong>Anna:</strong>
                    </p>

                    <input
                        id="qm06-task3-${index}"
                        class="qm-input"
                        type="text"
                        placeholder="Write Anna's question here..."
                    >

                    <div class="qm-answer">

                        <strong>Maisie:</strong>
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
                        id="qm06-task3-feedback-${index}"
                    ></div>

                </div>

            `;

        });


        html += `

                    <div
                        id="qm06-task3-total"
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
                        Task 5 — Anna Writes about the Wedding
                    </h2>

                    <div class="qm-instruction">

                        Anna is writing to her friend about the wedding.
                        Fill in the missing words.
                        Use the verbs in the box below but don’t forget
                        to change them to PAST TENSE because the wedding
                        is finished. The first one is an example.

                    </div>

                    <div class="qm-word-bank">

                        <strong>Word bank:</strong><br>

                        arrive &nbsp;&nbsp;
                        dance &nbsp;&nbsp;
                        eat &nbsp;&nbsp;
                        go &nbsp;&nbsp;
                        laugh &nbsp;&nbsp;
                        leave &nbsp;&nbsp;
                        sit &nbsp;&nbsp;
                        start &nbsp;&nbsp;
                        take &nbsp;&nbsp;
                        talk &nbsp;&nbsp;
                        tell

                    </div>


                    <div class="qm-question">

                        <div class="qm-letter">

                            <p>
                                We (example)
                                <strong>went</strong>
                                to a wedding at the weekend.
                                The journey
                                <input
                                    id="qm06-task5-1"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(1)"
                                >
                                three hours and Jack was very tired when we
                                <input
                                    id="qm06-task5-2"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(2)"
                                >
                                there.
                            </p>

                            <p>
                                Everyone at the wedding was very happy,
                                but then it
                                <input
                                    id="qm06-task5-3"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(3)"
                                >
                                to rain,
                                so we ran quickly into the house.
                                It was nice and dry.
                            </p>

                            <p>
                                Later, it was time to have lunch so we all
                                <input
                                    id="qm06-task5-4"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(4)"
                                >
                                down at our tables.
                                I
                                <input
                                    id="qm06-task5-5"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(5)"
                                >
                                to Maisie, do you remember her?
                            </p>

                            <p>
                                After lunch, the sun came out so we went
                                outside and spoke to more people.
                                Later on, we
                                <input
                                    id="qm06-task5-6"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(6)"
                                >
                                to music in the disco area and then
                                <input
                                    id="qm06-task5-7"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(7)"
                                >
                                more food.
                            </p>

                            <p>
                                Everyone
                                <input
                                    id="qm06-task5-8"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(8)"
                                >
                                a lot
                                because Uncle Joe was very funny.
                                He
                                <input
                                    id="qm06-task5-9"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(9)"
                                >
                                a lot of funny stories.
                            </p>

                            <p>
                                We
                                <input
                                    id="qm06-task5-10"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(10)"
                                >
                                the wedding at midnight
                                and I slept peacefully all the way home.
                            </p>

                        </div>

                    </div>


                    <button
                        type="button"
                        id="qm06-check-task5"
                        class="qm-button"
                    >
                        Check Task 5
                    </button>


                    <div
                        id="qm06-task5-total"
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
                        Task 6 — Weddings
                    </h2>

                    <div class="qm-instruction">

                        Now write about weddings in your country.
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
                        id="qm06-task6-${index}"
                        class="qm-input qm-textarea"
                        placeholder="Write your answer here..."
                    ></textarea>

                    <div
                        id="qm06-task6-sample-${index}"
                    ></div>

                </div>

            `;

        });


        html += `

                    <button
                        type="button"
                        id="qm06-check-task6"
                        class="qm-button"
                    >
                        Check Task 6
                    </button>

                    <div
                        id="qm06-task6-feedback"
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
                                `#qm06-task3-${index}`
                            );

                        const feedback =
                            container.querySelector(
                                `#qm06-task3-feedback-${index}`
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
                container.querySelector("#qm06-task3-total");

            total.textContent =
                `Task 3 Score: ${score}/15 marks`;

        }


        /* =================================================
           TASK 5 CHECK
        ================================================= */

        container
            .querySelector("#qm06-check-task5")
            .addEventListener(
                "click",
                function() {

                    let score = 0;


                    task5.forEach(function(item, index) {

                        const input =
                            container.querySelector(
                                `#qm06-task5-${index + 1}`
                            );


                        const oldFeedback =
                            container.querySelector(
                                `#qm06-task5-feedback-${index + 1}`
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
                            `qm06-task5-feedback-${index + 1}`;


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
                            "#qm06-task5-total"
                        );


                    total.innerHTML =
                        `Task 5 Score: ${score}/15 marks`;

                }
            );


        /* =================================================
           TASK 6 CHECK
        ================================================= */

        container
            .querySelector("#qm06-check-task6")
            .addEventListener(
                "click",
                function() {

                    let completed = 0;


                    task6.forEach(function(item, index) {

                        const input =
                            container.querySelector(
                                `#qm06-task6-${index}`
                            );

                        const sample =
                            container.querySelector(
                                `#qm06-task6-sample-${index}`
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
                            "#qm06-task6-feedback"
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
