
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

            /* Nội dung đề bài */
            .qm-problem-text {
                color: rgb(0, 0, 238);
            }

            /* Nội dung bức thư Task 5 */
            .qm-letter-content {
                color: rgb(0, 0, 238);
            }

            .qm-letter-content strong {
                color: rgb(0, 0, 238);
            }

            /* Keyword quan trọng trong phần giải thích */
            .qm-keyword {
                color: #990000;
                font-weight: 700;
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
                margin-top: 12px;
                padding: 12px 14px;
                background: #f7faf8;
                border-radius: 8px;
                color: #53655b;
            }

            .qm-clue {
                margin-top: 8px;
                padding: 8px 10px;
                background: #f1f5f2;
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
                    "Leonardo da Vinci is my favourite. I like Picasso, too.",

                acceptedQuestions: [
                    "Who is your favourite painter?",
                    "Who is your favorite painter?"
                ],

                explanation: `
                    Anna nói:
                    <span class="qm-keyword">
                        "Leonardo da Vinci is my favourite."
                    </span>

                    → Anna đang nói về
                    <span class="qm-keyword">
                        họa sĩ mà cô ấy yêu thích
                    </span>.

                    <br><br>

                    Hỏi về người → dùng dạng câu hỏi
                    <span class="qm-keyword">Who is...?</span>

                    <br><br>

                    Who is your favourite painter?
                    = Họa sĩ yêu thích của bạn là ai?
                `
            },

            {
                answer:
                    "I last went to an art museum about a month ago.",

                acceptedQuestions: [
                    "When did you last go to an art museum?"
                ],

                explanation: `
                    Anna nói:
                    <span class="qm-keyword">
                        "about a month ago"
                    </span>

                    → Đây là thông tin về
                    <span class="qm-keyword">thời gian</span>.

                    <br><br>

                    Hỏi về thời gian → dùng
                    <span class="qm-keyword">When did...?</span>

                    <br><br>

                    When did you last go to an art museum?
                    = Bạn đến bảo tàng nghệ thuật lần cuối khi nào?
                `
            },

            {
                answer:
                    "I went with Mum, Dad and Sophie.",

                acceptedQuestions: [
                    "Who did you go with?"
                ],

                explanation: `
                    Anna nói:
                    <span class="qm-keyword">
                        "with Mum, Dad and Sophie"
                    </span>

                    → Câu trả lời cho biết
                    <span class="qm-keyword">
                        những người đi cùng
                    </span> Anna.

                    <br><br>

                    Hỏi về người → dùng
                    <span class="qm-keyword">Who did...?</span>

                    <br><br>

                    Who did you go with?
                    = Bạn đã đi với ai?
                `
            },

            {
                answer:
                    "Yes, I would. It would be great to go with you.",

                acceptedQuestions: [
                    "Would you like to go with me?"
                ],

                explanation: `
                    Anna trả lời:
                    <span class="qm-keyword">
                        "Yes, I would."
                    </span>

                    → Câu trả lời này cho thấy câu hỏi trước đó hỏi về
                    <span class="qm-keyword">
                        mong muốn hoặc lời mời
                    </span>.

                    <br><br>

                    Dùng cấu trúc:
                    <span class="qm-keyword">
                        Would you like to...?
                    </span>

                    <br><br>

                    Would you like to go with me?
                    = Bạn có muốn đi cùng tôi không?
                `
            },

            {
                answer:
                    "Because I like visiting them and looking at old pictures there.",

                acceptedQuestions: [
                    "Why do you like visiting art museums?"
                ],

                explanation: `
                    Anna bắt đầu câu trả lời bằng:
                    <span class="qm-keyword">"Because"</span>

                    → Đây là dấu hiệu rất rõ rằng cô ấy đang đưa ra
                    <span class="qm-keyword">lý do</span>.

                    <br><br>

                    Hỏi lý do → dùng
                    <span class="qm-keyword">Why...?</span>

                    <br><br>

                    Why do you like visiting art museums?
                    = Tại sao bạn thích đến thăm các bảo tàng nghệ thuật?
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

                clue: `
                    Sau chỗ trống là:
                    <span class="qm-keyword">"at the gallery"</span>.
                `,

                why: `
                    Cụm <span class="qm-keyword">arrive at</span>
                    được dùng khi nói đến việc đến một địa điểm.
                    Anna đến phòng tranh sau 9 giờ.
                    Vì ngày làm việc đã kết thúc nên dùng Past Simple:
                    arrive → arrived.
                `,

                phrase: `
                    <span class="qm-keyword">arrived at the gallery</span>
                    = đã đến phòng tranh.
                `
            },

            {
                answer: "could",
                verb: "can",

                clue: `
                    Trong câu có:
                    <span class="qm-keyword">"not find it"</span>.
                `,

                why: `
                    Anna nói cô ấy không thể tìm thấy phòng tranh lúc đầu.
                    Vì câu chuyện kể về quá khứ, <span class="qm-keyword">can</span>
                    chuyển thành <span class="qm-keyword">could</span>.
                `,

                phrase: `
                    <span class="qm-keyword">could not find it</span>
                    = đã không thể tìm thấy nó.
                `
            },

            {
                answer: "worked",
                verb: "work",

                clue: `
                    Sau chủ ngữ "I" là một hành động:
                    <span class="qm-keyword">very hard</span>.
                `,

                why: `
                    Cụm <span class="qm-keyword">work very hard</span>
                    có nghĩa là làm việc rất chăm chỉ.
                    Vì Anna đang kể lại một ngày đã qua nên dùng Past Simple:
                    work → worked.
                `,

                phrase: `
                    <span class="qm-keyword">worked very hard</span>
                    = đã làm việc rất chăm chỉ.
                `
            },

            {
                answer: "told",
                verb: "tell",

                clue: `
                    Sau chỗ trống là:
                    <span class="qm-keyword">"them about the pictures"</span>.
                `,

                why: `
                    Cấu trúc <span class="qm-keyword">tell someone about something</span>
                    có nghĩa là nói/kể cho ai về điều gì.
                    Vì hành động đã xảy ra nên:
                    tell → told.
                `,

                phrase: `
                    <span class="qm-keyword">told them about the pictures</span>
                    = nói cho họ về những bức tranh.
                `
            },

            {
                answer: "put",
                verb: "put",

                clue: `
                    Sau chỗ trống là:
                    <span class="qm-keyword">"pictures on the wall"</span>.
                `,

                why: `
                    Ngữ cảnh cho biết Anna đặt những bức tranh lên tường.
                    Động từ phù hợp là <span class="qm-keyword">put</span>.
                    Đây là động từ bất quy tắc không đổi dạng:
                    put → put.
                `,

                phrase: `
                    <span class="qm-keyword">put pictures on the wall</span>
                    = đặt những bức tranh lên tường.
                `
            },

            {
                answer: "sold",
                verb: "sell",

                clue: `
                    Linda rất vui vì cô ấy đã:
                    <span class="qm-keyword">eight pictures</span>
                    trong ngày.
                `,

                why: `
                    Phòng tranh bán tranh cho khách.
                    Động từ phù hợp là <span class="qm-keyword">sell</span>.
                    Đây là động từ bất quy tắc:
                    sell → sold.
                `,

                phrase: `
                    <span class="qm-keyword">sold eight pictures</span>
                    = đã bán tám bức tranh.
                `
            },

            {
                answer: "left",
                verb: "leave",

                clue: `
                    Câu nói:
                    <span class="qm-keyword">"the last visitors ..."</span>
                    rồi sau đó phòng tranh đóng cửa.
                `,

                why: `
                    Khi khách cuối cùng rời khỏi phòng tranh,
                    ta dùng động từ <span class="qm-keyword">leave</span>.
                    Đây là động từ bất quy tắc:
                    leave → left.
                `,

                phrase: `
                    <span class="qm-keyword">the visitors left</span>
                    = những vị khách đã rời đi.
                `
            },

            {
                answer: "had",
                verb: "have",

                clue: `
                    Sau chỗ trống là:
                    <span class="qm-keyword">"a cup of tea"</span>.
                `,

                why: `
                    Cụm <span class="qm-keyword">have a cup of tea</span>
                    có nghĩa là uống một tách trà.
                    Vì hành động xảy ra trong quá khứ:
                    have → had.
                `,

                phrase: `
                    <span class="qm-keyword">had a cup of tea</span>
                    = đã uống một tách trà.
                `
            },

            {
                answer: "said",
                verb: "say",

                clue: `
                    Sau chỗ trống là:
                    <span class="qm-keyword">"goodbye"</span>.
                `,

                why: `
                    Ta có cụm quen thuộc
                    <span class="qm-keyword">say goodbye</span>.
                    Vì Anna và Linda đã nói lời tạm biệt:
                    say → said.
                `,

                phrase: `
                    <span class="qm-keyword">said goodbye</span>
                    = đã nói lời tạm biệt.
                `
            },

            {
                answer: "rode",
                verb: "ride",

                clue: `
                    Sau chỗ trống là:
                    <span class="qm-keyword">"home on my bike"</span>.
                `,

                why: `
                    Khi nói đi bằng xe đạp, ta dùng
                    <span class="qm-keyword">ride a bike</span>.
                    Đây là hành động trong quá khứ:
                    ride → rode.
                `,

                phrase: `
                    <span class="qm-keyword">rode home on my bike</span>
                    = đã đạp xe về nhà.
                `
            }

        ];


        /* =================================================
           TASK 6 DATA
        ================================================= */

        const task6 = [

            {
                starter: "After I leave school, I want to...",

                hint:
                    "What job would you like to have? What would you like to do?",

                sample:
                    "After I leave school, I want to become a teacher because I enjoy helping children.",

                explanation:
                    "Em có thể nói về công việc em muốn làm sau khi rời trường và nêu một lý do."
            },

            {
                starter: "In my country...",

                hint:
                    "What jobs are popular or important in your country?",

                sample:
                    "In my country, many people work in schools, hospitals, offices and shops.",

                explanation:
                    "Em có thể nói về những công việc phổ biến hoặc quan trọng ở đất nước mình."
            },

            {
                starter: "The best job for me...",

                hint:
                    "What job suits you best? Think about your interests and abilities.",

                sample:
                    "The best job for me is being a teacher because I like working with children.",

                explanation:
                    "Nêu công việc phù hợp nhất với em và giải thích ngắn gọn vì sao."
            },

            {
                starter: "This job is good because...",

                hint:
                    "Why do you think this job is good?",

                sample:
                    "This job is good because it is interesting and I can help other people.",

                explanation:
                    "Nêu những lý do khiến em thích hoặc đánh giá cao công việc đó."
            },

            {
                starter: "In my family...",

                hint:
                    "What jobs do people in your family have?",

                sample:
                    "In my family, my father is an engineer and my mother works in a school.",

                explanation:
                    "Em có thể nói về công việc của bố mẹ hoặc những người thân trong gia đình."
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
                        Task 3 — Linda meets Anna
                    </h2>

                    <p class="qm-task-description qm-problem-text">
                        Linda meets Anna at the Brown’s house before Anna
                        goes to work at Bridge Street Gallery. Linda asks Anna
                        some questions. Write her questions in the spaces.
                        The first one is an example.
                    </p>

                    <div class="qm-example">

                        <strong>Example</strong>

                        <p>
                            <strong>Linda:</strong>
                            Do you like painting?
                        </p>

                        <p>
                            <strong>Anna:</strong>
                            Yes, I love painting. I like looking at pictures, too.
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
                        data-task3-index="${index}"
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

                    <p class="qm-task-description qm-problem-text">
                        The next day, Anna writes about Bridge House Gallery
                        for her teacher. Fill in the missing words. Use the
                        verbs in the box below but don’t forget to change them
                        to the PAST TENSE because the day at the gallery is
                        finished. The first one is an example.
                    </p>

                    <div class="qm-example">

                        <strong>💡 Cách làm Task 5</strong>

                        <p>
                            Hãy quan sát từ ngay bên cạnh chỗ trống,
                            đọc ngữ cảnh của cả câu và chú ý các cụm động từ.
                        </p>

                        <p>
                            Sau đó xác định động từ phù hợp và đổi sang
                            Past Simple.
                        </p>

                    </div>

                    <div class="qm-word-bank qm-problem-text">

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

                        <div class="qm-letter-content">

                            <p>
                                <strong>Dear Granny</strong>
                            </p>

                            <p>
                                Yesterday I (example)
                                <strong>was</strong>
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
                                very hard. I met some of the visitors.
                            </p>

                            <p>
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
                            </p>

                            <p>
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
                            </p>

                            <p>
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
                            </p>

                            <p>
                                I enjoyed my day at the gallery very much.
                            </p>

                            <p>
                                <strong>Love<br>Anna xxx</strong>
                            </p>

                        </div>

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
                        Task 6 — Jobs in my Country
                    </h2>

                    <p class="qm-task-description qm-problem-text">
                        Now write about jobs in your country.
                        Write about 50 words – about 10 words in each space.
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
            .querySelectorAll("[data-task3-index]")
            .forEach(function(button) {

                button.addEventListener("click", function() {

                    const index =
                        Number(button.dataset.task3Index);

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
            .addEventListener("click", function() {

                let score = 0;


                task5.forEach(function(item, index) {

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


                    if (user === correct) {

                        score += 1.5;

                        feedback.className =
                            "qm-feedback qm-correct";

                        feedback.innerHTML = `

                            ✓ Correct!
                            1.5/1.5 marks

                            <div class="qm-explanation">

                                <div>Đáp án</div>

                                <p>
                                    ${item.verb} → V2/ed:
                                    <span class="qm-keyword">
                                        ${item.answer}
                                    </span>.
                                </p>

                                <div>Gợi ý</div>

                                <div class="qm-clue">
                                    ${item.clue}
                                </div>

                                <div>Giải thích</div>

                                <p>
                                    ${item.why}
                                </p>

                                <div>Cụm từ quan trọng</div>

                                <p>
                                    ${item.phrase}
                                </p>

                            </div>

                        `;

                    } else {

                        feedback.className =
                            "qm-feedback qm-wrong";

                        feedback.innerHTML = `

                            ✗ Try again.

                            <div class="qm-explanation">

                                <div>Đáp án</div>

                                <p>
                                    ${item.verb} → V2/ed:
                                    <span class="qm-keyword">
                                        ${item.answer}
                                    </span>.
                                </p>

                                <div>Gợi ý</div>

                                <div class="qm-clue">
                                    ${item.clue}
                                </div>

                                <div>Giải thích</div>

                                <p>
                                    ${item.why}
                                </p>

                                <div>Cụm từ quan trọng</div>

                                <p>
                                    ${item.phrase}
                                </p>

                            </div>

                        `;

                    }


                    input.parentNode.appendChild(feedback);

                });


                const total =
                    container.querySelector(
                        "#t5-task5-total"
                    );


                total.innerHTML =
                    `Task 5 Score: ${score}/15 marks`;

            });


        /* =================================================
           TASK 6 CHECK
        ================================================= */

        container
            .querySelector("#t5-check-task6")
            .addEventListener("click", function() {

                let completed = 0;


                task6.forEach(function(item, index) {

                    const input =
                        container.querySelector(
                            `#t5-task6-${index}`
                        );

                    const sample =
                        container.querySelector(
                            `#t5-task6-sample-${index}`
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
                        "#t5-task6-feedback"
                    );


                if (completed === task6.length) {

                    feedback.innerHTML = `

                        <div class="qm-feedback qm-correct">

                            ✓ Writing submitted!

                            <br><br>

                            Task 6 Score: 10/10 marks

                            <br><br>

                            Đây là bài viết cá nhân.
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

                            Sample answers have been shown to help you.

                        </div>

                    `;

                }

            });

    }

};

