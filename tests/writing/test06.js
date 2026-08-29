/* =====================================================
   QUICKMARCH PRACTICE
   WRITING TEST 05
===================================================== */

window.QUICKMARCH_TEST = {

    title: "Writing Test 05",

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
            .qm-problem {
                color: rgb(0, 0, 238);
            }

            .qm-problem strong {
                color: rgb(0, 0, 238);
            }

            /* Keyword cần chú ý */
            .qm-keyword {
                color: #990000;
                font-weight: 700;
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
                margin-bottom: 10px;
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
                width: 175px;
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

            /* Feedback Task 5 */
            .qm-task5-feedback {
                margin-top: 10px;
                padding: 13px 15px;
                border-radius: 8px;
                background: #f7faf8;
                color: #53655b;
                border-left: 4px solid #8db59b;
            }

            .qm-task5-feedback .feedback-keyword {
                color: #990000;
                font-weight: 700;
            }

            .qm-task5-feedback .feedback-english {
                color: #37443d;
                font-weight: 700;
            }

            .qm-task5-section {
                margin-top: 8px;
            }

            .qm-task5-section-title {
                font-weight: 400;
                color: #53655b;
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


        function escapeHTML(value) {

            return String(value || "")
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");

        }


        /* =================================================
           TASK 3 DATA
        ================================================= */

        const task3 = [

            {
                answer:
                    "Leonardo da Vinci is my favourite. I like Picasso, too.",

                acceptedQuestions: [
                    "Who is your favourite painter?",
                    "Who is your favorite painter?",
                    "Who is your favourite artist?",
                    "Who is your favorite artist?"
                ],

                explanation: `
                    <span class="qm-keyword">Anna nói: “Leonardo da Vinci is my favourite. I like Picasso, too.”</span>
                    <br>
                    Anna đang nói về người mà cô ấy yêu thích.
                    Vì câu trả lời là tên một người nên ta cần hỏi “Ai?”.
                    <br><br>
                    Dạng câu hỏi: Hỏi về người → <strong>Who is...?</strong>
                    <br>
                    Đáp án: <strong>Who is your favourite painter?</strong>
                `
            },

            {
                answer:
                    "I last went to an art museum about a month ago.",

                acceptedQuestions: [
                    "When did you last go to an art museum?",
                    "When did you last go to the art museum?"
                ],

                explanation: `
                    <span class="qm-keyword">Anna nói: “I last went to an art museum about a month ago.”</span>
                    <br>
                    Cụm “about a month ago” cho biết thời gian Anna đến bảo tàng lần cuối.
                    <br><br>
                    Dạng câu hỏi: Hỏi về thời gian → <strong>When did...?</strong>
                    <br>
                    Đáp án: <strong>When did you last go to an art museum?</strong>
                `
            },

            {
                answer:
                    "I went with Mum, Dad and Sophie.",

                acceptedQuestions: [
                    "Who did you go with?"
                ],

                explanation: `
                    <span class="qm-keyword">Anna nói: “I went with Mum, Dad and Sophie.”</span>
                    <br>
                    Câu trả lời cho biết những người đã đi cùng Anna.
                    <br><br>
                    Dạng câu hỏi: Hỏi về người → <strong>Who did...?</strong>
                    <br>
                    Đáp án: <strong>Who did you go with?</strong>
                `
            },

            {
                answer:
                    "Yes, I would. It would be great to go with you.",

                acceptedQuestions: [
                    "Would you like to go with me?",
                    "Would you like to go with me, Linda?"
                ],

                explanation: `
                    <span class="qm-keyword">Anna nói: “Yes, I would. It would be great to go with you.”</span>
                    <br>
                    Câu trả lời “Yes, I would” cho thấy Linda đang hỏi Anna có muốn làm một việc gì đó hay không.
                    <br><br>
                    Dạng câu hỏi: Đề nghị / hỏi mong muốn → <strong>Would you like...?</strong>
                    <br>
                    Đáp án: <strong>Would you like to go with me?</strong>
                `
            },

            {
                answer:
                    "Because I like visiting them and looking at old pictures there.",

                acceptedQuestions: [
                    "Why do you like visiting art museums?",
                    "Why do you like visiting art museums, Anna?"
                ],

                explanation: `
                    <span class="qm-keyword">Anna nói: “Because I like visiting them and looking at old pictures there.”</span>
                    <br>
                    Câu trả lời bắt đầu bằng <strong>Because</strong>, vì vậy Anna đang đưa ra lý do.
                    <br><br>
                    Dạng câu hỏi: Hỏi lý do → <strong>Why...?</strong>
                    <br>
                    Đáp án: <strong>Why do you like visiting art museums?</strong>
                `
            }

        ];


        /* =================================================
           TASK 5 DATA
        ================================================= */

        const task5 = [

            {
                answer: "arrived",
                verb: "arrive",

                clue:
                    "Sau chỗ trống là “at the gallery just after nine”.",

                why:
                    "Câu cho biết Anna đến phòng tranh ngay sau 9 giờ. Cụm “arrive at the gallery” có nghĩa là đến phòng tranh. Vì ngày làm việc đã kết thúc nên dùng Past Simple: arrive → arrived.",

                phrase:
                    "<strong>arrived at the gallery</strong> = đã đến phòng tranh."
            },

            {
                answer: "could",
                verb: "can",

                clue:
                    "Ngay sau chỗ trống là “not find it at first”.",

                why:
                    "Anna nói cô ấy không thể tìm thấy phòng tranh lúc đầu. Vì toàn bộ câu chuyện kể về ngày đã qua, “can” phải chuyển sang dạng quá khứ “could”.",

                phrase:
                    "<strong>could not find it</strong> = đã không thể tìm thấy nó."
            },

            {
                answer: "worked",
                verb: "work",

                clue:
                    "Sau chỗ trống là “very hard”.",

                why:
                    "Cụm “work very hard” có nghĩa là làm việc rất chăm chỉ. Anna đang kể về công việc cô ấy đã làm tại phòng tranh, vì vậy dùng Past Simple: work → worked.",

                phrase:
                    "<strong>worked very hard</strong> = đã làm việc rất chăm chỉ."
            },

            {
                answer: "told",
                verb: "tell",

                clue:
                    "Sau chỗ trống là “them about the pictures”.",

                why:
                    "Anna nói chuyện và cung cấp thông tin cho những người khách về các bức tranh. Cấu trúc “tell someone about something” phù hợp với câu. tell là động từ bất quy tắc: tell → told.",

                phrase:
                    "<strong>told them about the pictures</strong> = đã nói/giới thiệu cho họ về các bức tranh."
            },

            {
                answer: "put",
                verb: "put",

                clue:
                    "Sau chỗ trống là “pictures on the wall”.",

                why:
                    "Ngữ cảnh nói Anna đặt các bức tranh lên tường cho Linda. Cụm “put pictures on the wall” phù hợp với nghĩa của câu. put là động từ đặc biệt: V1 và V2 giống nhau, nên put → put.",

                phrase:
                    "<strong>put pictures on the wall</strong> = đã đặt các bức tranh lên tường."
            },

            {
                answer: "sold",
                verb: "sell",

                clue:
                    "Ngay sau chỗ trống là “eight pictures during the day”.",

                why:
                    "Linda làm việc tại phòng tranh và trong ngày cô ấy bán tám bức tranh. Câu nói về một việc đã hoàn thành nên dùng Past Simple. sell là động từ bất quy tắc: sell → sold.",

                phrase:
                    "<strong>sold eight pictures</strong> = đã bán tám bức tranh."
            },

            {
                answer: "left",
                verb: "leave",

                clue:
                    "Câu nói “At five o’clock the last visitors ___”.",

                why:
                    "Lúc 5 giờ, những vị khách cuối cùng rời khỏi phòng tranh và sau đó họ đóng cửa. Vì vậy động từ phù hợp là “leave”. Đây là động từ bất quy tắc: leave → left.",

                phrase:
                    "<strong>the last visitors left</strong> = những vị khách cuối cùng đã rời đi."
            },

            {
                answer: "had",
                verb: "have",

                clue:
                    "Sau chỗ trống là “a cup of tea”.",

                why:
                    "Cụm “have a cup of tea” có nghĩa là uống một tách trà. Vì đây là hành động đã xảy ra sau khi đóng cửa phòng tranh, have phải chuyển sang Past Simple: have → had.",

                phrase:
                    "<strong>had a cup of tea</strong> = đã uống một tách trà."
            },

            {
                answer: "said",
                verb: "say",

                clue:
                    "Sau chỗ trống là “goodbye”.",

                why:
                    "Cụm “say goodbye” có nghĩa là nói lời tạm biệt. Vì Anna và Linda đã nói lời tạm biệt vào cuối ngày nên dùng Past Simple: say → said.",

                phrase:
                    "<strong>said goodbye</strong> = đã nói lời tạm biệt."
            },

            {
                answer: "rode",
                verb: "ride",

                clue:
                    "Sau chỗ trống là “home on my bike”.",

                why:
                    "Anna đi về nhà bằng xe đạp. Cụm “ride home on my bike” phù hợp với ngữ cảnh. Vì hành động đã xảy ra nên dùng Past Simple. ride là động từ bất quy tắc: ride → rode.",

                phrase:
                    "<strong>rode home on my bike</strong> = đã đạp xe về nhà."
            }

        ];


        /* =================================================
           TASK 6 DATA
        ================================================= */

        const task6 = [

            {
                starter:
                    "After I leave school, I want to...",

                hint:
                    "What job would you like to do after school? Why?",

                sample:
                    "After I leave school, I want to become a teacher because I enjoy helping children learn.",

                explanation:
                    "Nói về công việc em muốn làm sau khi rời trường. Có thể nêu thêm lý do em thích công việc đó."
            },

            {
                starter:
                    "In my country...",

                hint:
                    "What jobs are popular or important in your country?",

                sample:
                    "In my country, many people work as teachers, doctors, engineers and business owners.",

                explanation:
                    "Nêu một số nghề phổ biến hoặc quan trọng ở đất nước của em."
            },

            {
                starter:
                    "The best job for me...",

                hint:
                    "What job suits you best? Think about your interests and abilities.",

                sample:
                    "The best job for me is being a teacher because I like working with children.",

                explanation:
                    "Chọn một công việc phù hợp với bản thân và giải thích ngắn gọn vì sao."
            },

            {
                starter:
                    "This job is good because...",

                hint:
                    "Why is this job good for you?",

                sample:
                    "This job is good because it is interesting and I can help other people every day.",

                explanation:
                    "Giải thích những điểm tốt của công việc mà em đã chọn."
            },

            {
                starter:
                    "In my family...",

                hint:
                    "What jobs do people in your family do?",

                sample:
                    "In my family, my father is an engineer and my mother works in a school.",

                explanation:
                    "Nói về nghề nghiệp của một hoặc vài người trong gia đình em."
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
                        Task 3 — Linda Meets Anna
                    </h2>

                    <div class="qm-problem">

                        <p>
                            Linda meets Anna at the Brown’s house before Anna
                            goes to work at Bridge Street Gallery.
                            Linda asks Anna some questions.
                            Write her questions in the spaces.
                            The first one is an example.
                        </p>

                    </div>

                    <div class="qm-example">

                        <strong>Example</strong>

                        <p>
                            <strong>Linda:</strong>
                            Do you like painting?
                        </p>

                        <p>
                            <strong>Anna:</strong>
                            Yes, I love painting.
                            I like looking at pictures, too.
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
                        <strong>Linda:</strong>
                    </p>

                    <input
                        id="t5-task3-${index}"
                        class="qm-input"
                        type="text"
                        placeholder="Write Linda's question here..."
                    >

                    <div class="qm-answer">

                        <strong>Anna:</strong>
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

                    <div
                        id="t5-task3-feedback-${index}"
                    ></div>

                </div>

            `;

        });


        html += `

                    <div
                        id="t5-task3-total"
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
                        Task 5 — Anna Writes about her Day at the Art Gallery
                    </h2>

                    <div class="qm-problem">

                        <p>
                            The next day, Anna writes about Bridge House Gallery
                            for her teacher. Fill in the missing words.
                            Use the verbs in the box below but don’t forget
                            to change them to the <strong>PAST TENSE</strong>
                            because the day at the gallery is finished.
                            The first one is an example.
                        </p>

                    </div>

                    <div class="qm-example">

                        <strong>💡 How to do Task 5</strong>

                        <p>
                            Đọc cả câu trước khi chọn từ.
                            Quan sát từ ngay bên cạnh chỗ trống,
                            chú ý ngữ cảnh và tìm các cụm động từ quen thuộc.
                        </p>

                        <p>
                            Sau đó xác định động từ phù hợp trong Word Bank
                            và đổi động từ sang <strong>Past Simple</strong>.
                        </p>

                    </div>

                    <div class="qm-word-bank">

                        <strong>Word bank:</strong><br>

                        arrive &nbsp;&nbsp;
                        be &nbsp;&nbsp;
                        can &nbsp;&nbsp;
                        have &nbsp;&nbsp;
                        leave &nbsp;&nbsp;
                        ride &nbsp;&nbsp;
                        put &nbsp;&nbsp;
                        say &nbsp;&nbsp;
                        sell &nbsp;&nbsp;
                        tell &nbsp;&nbsp;
                        work

                    </div>


                    <div class="qm-question">

                        <p>
                            <strong>Dear Teacher</strong>
                        </p>

                        <p>
                            Yesterday I (example)
                            <span class="qm-keyword">was</span>
                            at Bridge House Gallery.
                            I
                            <input
                                id="t5-task5-0"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(1)"
                            >
                            at the gallery just after nine.
                            I was late because I
                            <input
                                id="t5-task5-1"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(2)"
                            >
                            not find it at first – but Linda was not cross with me.
                        </p>

                        <p>
                            I
                            <input
                                id="t5-task5-2"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(3)"
                            >
                            very hard.
                            I met some of the visitors.
                            I
                            <input
                                id="t5-task5-3"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(4)"
                            >
                            them about the pictures in the gallery.
                        </p>

                        <p>
                            I also cleaned some of the windows and
                            <input
                                id="t5-task5-4"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(5)"
                            >
                            pictures on the wall for Linda.
                            Linda was very happy because she
                            <input
                                id="t5-task5-5"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(6)"
                            >
                            eight pictures during the day.
                        </p>

                        <p>
                            At five o’clock the last visitors
                            <input
                                id="t5-task5-6"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(7)"
                            >
                            and we closed the gallery.
                            Linda thanked me for my work.
                            Then we
                            <input
                                id="t5-task5-7"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(8)"
                            >
                            a cup of tea.
                        </p>

                        <p>
                            At half past five, Linda and I
                            <input
                                id="t5-task5-8"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(9)"
                            >
                            goodbye and I
                            <input
                                id="t5-task5-9"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(10)"
                            >
                            home on my bike.
                            I enjoyed my day at the gallery very much.
                        </p>

                        <p>
                            <strong>Love<br>Anna xxx</strong>
                        </p>

                    </div>


                    <button
                        type="button"
                        id="t5-check-task5"
                        class="qm-button"
                    >
                        Check Task 5
                    </button>


                    <div
                        id="t5-task5-total"
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
                        Task 6 — Jobs in My Country
                    </h2>

                    <div class="qm-problem">

                        <p>
                            Now write about jobs in your country.
                            Write about 50 words — about 10 words in each space.
                        </p>

                    </div>

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
                        id="t5-task6-${index}"
                        class="qm-input qm-textarea"
                        placeholder="Write your answer here..."
                    ></textarea>

                    <div
                        id="t5-task6-sample-${index}"
                        style="display:none;"
                    ></div>

                </div>

            `;

        });


        html += `

                    <button
                        type="button"
                        id="t5-check-task6"
                        class="qm-button"
                    >
                        Check Task 6
                    </button>

                    <div
                        id="t5-task6-feedback"
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
                                `#t5-task3-${index}`
                            );

                        const feedback =
                            container.querySelector(
                                `#t5-task3-feedback-${index}`
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

                                    <div class="qm-example">

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

                                    <strong>Suggested answer:</strong>
                                    ${task3[index]
                                        .acceptedQuestions[0]}

                                    <div class="qm-example">

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
                    "#t5-task3-total"
                );

            total.textContent =
                `Task 3 Score: ${score}/15 marks`;

        }


        /* =================================================
           TASK 5 CHECK
        ================================================= */

        container
            .querySelector("#t5-check-task5")
            .addEventListener(
                "click",
                function() {

                    let score = 0;


                    task5.forEach(
                        function(item, index) {

                            const input =
                                container.querySelector(
                                    `#t5-task5-${index}`
                                );


                            const old =
                                container.querySelector(
                                    `#t5-task5-feedback-${index}`
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
                                `t5-task5-feedback-${index}`;

                            feedback.className =
                                "qm-task5-feedback";


                            if (user === correct) {

                                score += 1.5;

                                feedback.innerHTML = `

                                    <div class="qm-task5-section">

                                        Đáp án:
                                        <span class="feedback-english">
                                            ${escapeHTML(item.answer)}
                                        </span>

                                    </div>

                                    <div class="qm-task5-section">

                                        Gợi ý:
                                        ${item.clue}

                                    </div>

                                    <div class="qm-task5-section">

                                        Giải thích:
                                        ${item.why}

                                    </div>

                                    <div class="qm-task5-section">

                                        Cụm từ quan trọng:
                                        ${item.phrase}

                                    </div>

                                `;

                            } else {

                                feedback.innerHTML = `

                                    <div class="qm-task5-section">

                                        Đáp án:
                                        <span class="feedback-english">
                                            ${escapeHTML(item.answer)}
                                        </span>

                                    </div>

                                    <div class="qm-task5-section">

                                        Gợi ý:
                                        ${item.clue}

                                    </div>

                                    <div class="qm-task5-section">

                                        Giải thích:
                                        ${item.why}

                                    </div>

                                    <div class="qm-task5-section">

                                        Cụm từ quan trọng:
                                        ${item.phrase}

                                    </div>

                                `;

                            }


                            input.parentNode.appendChild(feedback);

                        }
                    );


                    const total =
                        container.querySelector(
                            "#t5-task5-total"
                        );


                    total.innerHTML =
                        `Task 5 Score: ${score}/15 marks`;

                }
            );


        /* =================================================
           TASK 6 CHECK
        ================================================= */

        container
            .querySelector("#t5-check-task6")
            .addEventListener(
                "click",
                function() {

                    let completed = 0;


                    task6.forEach(
                        function(item, index) {

                            const input =
                                container.querySelector(
                                    `#t5-task6-${index}`
                                );

                            const sample =
                                container.querySelector(
                                    `#t5-task6-sample-${index}`
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

                            sample.style.display =
                                "block";

                        }
                    );


                    const feedback =
                        container.querySelector(
                            "#t5-task6-feedback"
                        );


                    if (
                        completed === task6.length
                    ) {

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
