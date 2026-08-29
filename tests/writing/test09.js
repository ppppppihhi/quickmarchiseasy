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

            /* Nội dung đề bài màu xanh dương */
            .qm-instruction {
                color: rgb(0, 0, 238);
            }

            .qm-task-description {
                color: rgb(0, 0, 238);
                font-size: 15px;
                margin-bottom: 16px;
            }

            /* Email / đoạn văn đề bài */
            .qm-letter {
                color: rgb(0, 0, 238);
                line-height: 1.9;
            }

            .qm-letter strong {
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
                width: 175px;
                display: inline-block;
                margin: 0 5px;
            }

            .qm-textarea {
                min-height: 115px;
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

            /* Phần giải thích KHÔNG dùng màu xanh */
            .qm-explanation {
                margin-top: 12px;
                padding: 12px 14px;
                background: #f7f3ef;
                border-radius: 8px;
                color: #37443d;
            }

            /* Chỉ keyword tiếng Anh dùng màu nâu đất */
            .qm-keyword {
                color: #990000;
                font-weight: 700;
            }

            .qm-clue {
                margin-top: 8px;
                padding: 9px 11px;
                background: #f5f1ed;
                border-radius: 7px;
                color: #37443d;
            }

            .qm-word-bank {
                background: #f1f7f3;
                border: 1px solid #d8e6dc;
                border-radius: 9px;
                padding: 13px 15px;
                margin: 12px 0 16px;
                line-height: 2;
                color: rgb(0, 0, 238);
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
                    "At school? No, I play tennis at a club.",

                acceptedQuestions: [
                    "Where do you play tennis?",
                    "Where do you play tennis, Andy?"
                ],

                explanation: `
                    Andy nói <span class="qm-keyword">“at a club”</span>.
                    Đây là thông tin về <span class="qm-keyword">địa điểm</span>
                    Andy chơi tennis.
                    <br><br>
                    Khi muốn hỏi một người chơi một môn thể thao ở đâu,
                    ta dùng <span class="qm-keyword">Where do...?</span>
                    <br><br>
                    Đáp án:
                    <span class="qm-keyword">Where do you play tennis?</span>
                `
            },

            {
                answer:
                    "I chose tennis because it looked fun to play.",

                acceptedQuestions: [
                    "Why did you choose tennis?",
                    "Why did you choose tennis, Andy?"
                ],

                explanation: `
                    Andy nói <span class="qm-keyword">“because it looked fun to play”</span>.
                    Đây là lý do Andy chọn tennis.
                    <br><br>
                    Khi hỏi lý do của một hành động đã xảy ra,
                    ta dùng <span class="qm-keyword">Why did...?</span>
                    <br><br>
                    Đáp án:
                    <span class="qm-keyword">Why did you choose tennis?</span>
                `
            },

            {
                answer:
                    "Tennis competitions? I play in them twice a year.",

                acceptedQuestions: [
                    "How often do you play in tennis competitions?",
                    "How often do you play in tennis competitions, Andy?"
                ],

                explanation: `
                    Andy nói <span class="qm-keyword">“twice a year”</span>.
                    Cụm này cho biết <span class="qm-keyword">tần suất</span>
                    Andy tham gia các cuộc thi tennis.
                    <br><br>
                    Khi hỏi một hoạt động xảy ra bao lâu một lần,
                    ta dùng <span class="qm-keyword">How often</span>.
                    <br><br>
                    Đáp án:
                    <span class="qm-keyword">How often do you play in tennis competitions?</span>
                `
            },

            {
                answer:
                    "My last competition? No, I lost but I played quite well.",

                acceptedQuestions: [
                    "Did you win your last competition?",
                    "Did you win your last competition, Andy?"
                ],

                explanation: `
                    Andy trả lời <span class="qm-keyword">“No, I lost”</span>.
                    Điều này cho biết Andy không thắng cuộc thi gần nhất.
                    <br><br>
                    Khi hỏi về một sự việc đã xảy ra trong quá khứ,
                    ta dùng <span class="qm-keyword">Did you...?</span>
                    <br><br>
                    Động từ <span class="qm-keyword">win</span> trong câu hỏi
                    giữ nguyên dạng vì đã có <span class="qm-keyword">Did</span>.
                    <br><br>
                    Đáp án:
                    <span class="qm-keyword">Did you win your last competition?</span>
                `
            },

            {
                answer:
                    "Next weekend. I’m playing against my friend Jack.",

                acceptedQuestions: [
                    "When are you playing your next match?",
                    "When are you playing your next match, Andy?"
                ],

                explanation: `
                    Andy nói <span class="qm-keyword">“Next weekend”</span>.
                    Đây là thông tin về <span class="qm-keyword">thời gian</span>
                    của trận đấu tiếp theo.
                    <br><br>
                    Khi hỏi thời gian của một kế hoạch trong tương lai,
                    ta có thể dùng <span class="qm-keyword">When are you...?</span>
                    <br><br>
                    Đáp án:
                    <span class="qm-keyword">When are you playing your next match?</span>
                `
            }

        ];


        /* =================================================
           TASK 5 DATA
        ================================================= */

        const task5 = [

            {
                answer: "came",
                verb: "come",

                clue: `
                    Chủ ngữ là <span class="qm-keyword">my cousin Andy</span>
                    và sau chỗ trống là
                    <span class="qm-keyword">to our house</span>.
                `,

                why: `
                    Andy đến nhà vào tối thứ Sáu.
                    Động từ phù hợp là
                    <span class="qm-keyword">come</span>.
                    Đây là động từ bất quy tắc:
                    <span class="qm-keyword">come → came</span>.
                `,

                phrase: `
                    <span class="qm-keyword">came to our house</span>
                    = đã đến nhà chúng tôi.
                `
            },

            {
                answer: "slept",
                verb: "sleep",

                clue: `
                    Anna đi chuyến dã ngoại của trường nên Andy
                    <span class="qm-keyword">in her bedroom</span>.
                `,

                why: `
                    Andy ngủ trong phòng của Anna.
                    Động từ phù hợp là
                    <span class="qm-keyword">sleep</span>.
                    Past Simple:
                    <span class="qm-keyword">sleep → slept</span>.
                `,

                phrase: `
                    <span class="qm-keyword">slept in her bedroom</span>
                    = đã ngủ trong phòng của cô ấy.
                `
            },

            {
                answer: "woke",
                verb: "wake",

                clue: `
                    Có cụm <span class="qm-keyword">up early</span>.
                    Cụm này nói về việc thức dậy sớm.
                `,

                why: `
                    Gia đình thức dậy sớm vì trận bóng đá của Ben.
                    Động từ phù hợp là
                    <span class="qm-keyword">wake</span>.
                    Đây là động từ bất quy tắc:
                    <span class="qm-keyword">wake → woke</span>.
                `,

                phrase: `
                    <span class="qm-keyword">woke up early</span>
                    = đã thức dậy sớm.
                `
            },

            {
                answer: "ate",
                verb: "eat",

                clue: `
                    Sau chỗ trống là
                    <span class="qm-keyword">cereals for breakfast</span>.
                `,

                why: `
                    Gia đình ăn ngũ cốc vào bữa sáng.
                    Động từ phù hợp là
                    <span class="qm-keyword">eat</span>.
                    Đây là động từ bất quy tắc:
                    <span class="qm-keyword">eat → ate</span>.
                `,

                phrase: `
                    <span class="qm-keyword">ate cereals for breakfast</span>
                    = đã ăn ngũ cốc vào bữa sáng.
                `
            },

            {
                answer: "took",
                verb: "take",

                clue: `
                    Có cấu trúc
                    <span class="qm-keyword">take someone to the park</span>.
                `,

                why: `
                    Mum đưa mọi người đến công viên để xem trận bóng.
                    Động từ phù hợp là
                    <span class="qm-keyword">take</span>.
                    Đây là động từ bất quy tắc:
                    <span class="qm-keyword">take → took</span>.
                `,

                phrase: `
                    <span class="qm-keyword">took us to the park</span>
                    = đã đưa chúng tôi đến công viên.
                `
            },

            {
                answer: "won",
                verb: "win",

                clue: `
                    Sau chỗ trống là tỉ số
                    <span class="qm-keyword">3 – 0</span>.
                    Đội của Ben chơi rất tốt.
                `,

                why: `
                    Đội của Ben thắng trận với tỉ số 3–0.
                    Động từ phù hợp là
                    <span class="qm-keyword">win</span>.
                    Đây là động từ bất quy tắc:
                    <span class="qm-keyword">win → won</span>.
                `,

                phrase: `
                    <span class="qm-keyword">won 3–0</span>
                    = đã thắng với tỉ số 3–0.
                `
            },

            {
                answer: "visited",
                verb: "visit",

                clue: `
                    Sau trận bóng, gia đình đến gặp
                    <span class="qm-keyword">Grandma and Grandad</span>.
                `,

                why: `
                    Gia đình đến thăm ông bà sau trận bóng.
                    Động từ phù hợp là
                    <span class="qm-keyword">visit</span>.
                    Đây là động từ có quy tắc:
                    <span class="qm-keyword">visit → visited</span>.
                `,

                phrase: `
                    <span class="qm-keyword">visited Grandma and Grandad</span>
                    = đã đến thăm ông bà.
                `
            },

            {
                answer: "gave",
                verb: "give",

                clue: `
                    Có cấu trúc
                    <span class="qm-keyword">give someone some ice cream</span>.
                `,

                why: `
                    Grandma đưa kem đặc biệt cho mọi người.
                    Động từ phù hợp là
                    <span class="qm-keyword">give</span>.
                    Đây là động từ bất quy tắc:
                    <span class="qm-keyword">give → gave</span>.
                `,

                phrase: `
                    <span class="qm-keyword">gave us some ice cream</span>
                    = đã cho chúng tôi một ít kem.
                `
            },

            {
                answer: "rained",
                verb: "rain",

                clue: `
                    Câu nói về thời tiết vào chiều Chủ nhật:
                    <span class="qm-keyword">it ... a lot</span>.
                `,

                why: `
                    Câu nói về việc trời mưa rất nhiều.
                    Động từ phù hợp là
                    <span class="qm-keyword">rain</span>.
                    Đây là động từ có quy tắc:
                    <span class="qm-keyword">rain → rained</span>.
                `,

                phrase: `
                    <span class="qm-keyword">rained a lot</span>
                    = đã mưa rất nhiều.
                `
            },

            {
                answer: "sat",
                verb: "sit",

                clue: `
                    Có cụm
                    <span class="qm-keyword">on the sofa</span>.
                    Gia đình ở trên ghế sofa để xem phim.
                `,

                why: `
                    Mọi người ngồi trên ghế sofa vì trời mưa.
                    Động từ phù hợp là
                    <span class="qm-keyword">sit</span>.
                    Đây là động từ bất quy tắc:
                    <span class="qm-keyword">sit → sat</span>.
                `,

                phrase: `
                    <span class="qm-keyword">sat on the sofa</span>
                    = đã ngồi trên ghế sofa.
                `
            },

            {
                answer: "watched",
                verb: "watch",

                clue: `
                    Sau chỗ trống là
                    <span class="qm-keyword">them</span>.
                    “Them” ở đây chỉ những bộ phim hay trên TV.
                `,

                why: `
                    Gia đình xem những bộ phim trên TV.
                    Động từ phù hợp là
                    <span class="qm-keyword">watch</span>.
                    Đây là động từ có quy tắc:
                    <span class="qm-keyword">watch → watched</span>.
                `,

                phrase: `
                    <span class="qm-keyword">watched them</span>
                    = đã xem chúng.
                `
            }

        ];


        /* =================================================
           TASK 6 DATA
        ================================================= */

        const task6 = [

            {
                starter: "At the weekend I usually...",

                hint:
                    "What do you usually do at the weekend? Think about activities you enjoy doing.",

                sample:
                    "At the weekend I usually play football with my friends and watch TV.",

                explanation:
                    "Em có thể nói về những hoạt động em thường làm vào cuối tuần, chẳng hạn như chơi thể thao, xem TV hoặc đi chơi với bạn bè."
            },

            {
                starter: "Sometimes,...",

                hint:
                    "What do you sometimes do at the weekend? Think about places you visit or things you enjoy.",

                sample:
                    "Sometimes, I go to the park with my family and have a picnic.",

                explanation:
                    "Em có thể viết về một hoạt động không phải lúc nào cũng làm nhưng thỉnh thoảng em thực hiện vào cuối tuần."
            },

            {
                starter: "The best thing about the weekend...",

                hint:
                    "What is your favourite thing about the weekend? Explain why you like it.",

                sample:
                    "The best thing about the weekend is having more time to play with my friends.",

                explanation:
                    "Em hãy nêu điều em thích nhất về cuối tuần và có thể giải thích ngắn gọn lý do."
            },

            {
                starter: "Last weekend,...",

                hint:
                    "What did you do last weekend? Remember to use the past tense.",

                sample:
                    "Last weekend, I visited my grandparents and played football with my cousin.",

                explanation:
                    "Đây là sự việc đã xảy ra trong quá khứ. Em cần chú ý dùng Past Simple khi kể về cuối tuần trước."
            },

            {
                starter: "Next weekend,...",

                hint:
                    "What are you going to do next weekend? Think about your plans.",

                sample:
                    "Next weekend, I am going to visit my cousin and watch a football match.",

                explanation:
                    "Đây là kế hoạch trong tương lai. Em có thể dùng cấu trúc “be going to” để nói về dự định."
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
                        Task 3 — Sophie Talks to Andy
                    </h2>

                    <p class="qm-task-description">
                        At Ben’s football match Sophie talks to Andy.
                        Sophie asks him some questions.
                        Write the questions in the spaces.
                        The first one is an example.
                    </p>

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
                        id="t9-task3-${index}"
                        class="qm-input"
                        type="text"
                        placeholder="Write Sophie's question here..."
                    >

                    <div class="qm-answer">

                        <strong>Andy:</strong>
                        <span class="qm-instruction">
                            ${item.answer}
                        </span>

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
                        id="t9-task3-feedback-${index}"
                    ></div>

                </div>

            `;

        });


        html += `

                    <div
                        id="t9-task3-total"
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

                    <p class="qm-task-description">
                        Ben writes an email to his friend Gary about his weekend with Andy.
                        Fill in the missing words. Use the verbs in the box below
                        but don’t forget to change them to PAST TENSE because
                        the weekend is finished.
                        The first one is an example.
                    </p>

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
                                <strong>(example) came</strong>
                                to our house for the weekend.
                                Anna was on a school trip so Andy
                                <input
                                    id="t9-task5-0"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(1)"
                                >
                                in her bedroom.
                            </p>

                            <p>
                                In the morning we all
                                <input
                                    id="t9-task5-1"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(2)"
                                >
                                up early because of Ben’s football match.
                                We
                                <input
                                    id="t9-task5-2"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(3)"
                                >
                                cereals for breakfast and then Mum
                                <input
                                    id="t9-task5-3"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(4)"
                                >
                                us to the park for the football match.
                            </p>

                            <p>
                                Ben’s team were really good and the match was fantastic.
                                They
                                <input
                                    id="t9-task5-4"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(5)"
                                >
                                3 – 0.
                            </p>

                            <p>
                                After the football we
                                <input
                                    id="t9-task5-5"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(6)"
                                >
                                Grandma and Grandad.
                                They were very happy to see us all.
                                As usual Grandma
                                <input
                                    id="t9-task5-6"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(7)"
                                >
                                us all some of her special ice cream.
                            </p>

                            <p>
                                On Sunday afternoon it
                                <input
                                    id="t9-task5-7"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(8)"
                                >
                                a lot.
                                There were some good films on TV so we just
                                <input
                                    id="t9-task5-8"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(9)"
                                >
                                on the sofa and
                                <input
                                    id="t9-task5-9"
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
                        id="t9-check-task5"
                        class="qm-button"
                    >
                        Check Task 5
                    </button>


                    <div
                        id="t9-task5-total"
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

                    <p class="qm-task-description">
                        Now write about your weekends.
                        Write about ten words in each space.
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
                        id="t9-task6-${index}"
                        class="qm-input qm-textarea"
                        placeholder="Write your answer here..."
                    ></textarea>

                    <div
                        id="t9-task6-sample-${index}"
                        style="display:none;"
                    ></div>

                </div>

            `;

        });


        html += `

                    <button
                        type="button"
                        id="t9-check-task6"
                        class="qm-button"
                    >
                        Check Task 6
                    </button>

                    <div
                        id="t9-task6-feedback"
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
                                `#t9-task3-${index}`
                            );

                        const feedback =
                            container.querySelector(
                                `#t9-task3-feedback-${index}`
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

                                    <span>
                                        Suggested answer:
                                    </span>

                                    ${escapeHTML(
                                        task3[index]
                                            .acceptedQuestions[0]
                                    )}

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
                    "#t9-task3-total"
                );

            total.textContent =
                `Task 3 Score: ${score}/15 marks`;

        }


        /* =================================================
           TASK 5 CHECK
        ================================================= */

        container
            .querySelector("#t9-check-task5")
            .addEventListener(
                "click",
                function() {

                    let score = 0;


                    task5.forEach(
                        function(item, index) {

                            const input =
                                container.querySelector(
                                    `#t9-task5-${index}`
                                );


                            const old =
                                container.querySelector(
                                    `#t9-task5-feedback-${index}`
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
                                `t9-task5-feedback-${index}`;


                            if (user === correct) {

                                score += 1.5;

                                feedback.className =
                                    "qm-feedback qm-correct";

                                feedback.innerHTML = `

                                    ✓ Correct!
                                    <strong>1.5/1.5 marks</strong>

                                    <div class="qm-explanation">

                                        <div>
                                            Đáp án:
                                            ${item.answer}
                                        </div>

                                        <div class="qm-clue">

                                            Gợi ý:
                                            ${item.clue}

                                        </div>

                                        <div style="margin-top:8px;">

                                            Giải thích:
                                            ${item.why}

                                        </div>

                                        <div style="margin-top:8px;">

                                            Cụm từ quan trọng:
                                            ${item.phrase}

                                        </div>

                                    </div>

                                `;

                            } else {

                                feedback.className =
                                    "qm-feedback qm-wrong";

                                feedback.innerHTML = `

                                    ✗ Try again.

                                    <div class="qm-explanation">

                                        <div>
                                            Đáp án:
                                            ${item.answer}
                                        </div>

                                        <div class="qm-clue">

                                            Gợi ý:
                                            ${item.clue}

                                        </div>

                                        <div style="margin-top:8px;">

                                            Giải thích:
                                            ${item.why}

                                        </div>

                                        <div style="margin-top:8px;">

                                            Cụm từ quan trọng:
                                            ${item.phrase}

                                        </div>

                                    </div>

                                `;

                            }


                            input.parentNode.appendChild(
                                feedback
                            );

                        }
                    );


                    const total =
                        container.querySelector(
                            "#t9-task5-total"
                        );


                    total.innerHTML = `
                        Task 5 Score: ${score}/15 marks
                    `;

                }
            );


        /* =================================================
           TASK 6 CHECK
        ================================================= */

        container
            .querySelector("#t9-check-task6")
            .addEventListener(
                "click",
                function() {

                    let completed = 0;


                    task6.forEach(
                        function(item, index) {

                            const input =
                                container.querySelector(
                                    `#t9-task6-${index}`
                                );

                            const sample =
                                container.querySelector(
                                    `#t9-task6-sample-${index}`
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
                            "#t9-task6-feedback"
                        );


                    if (
                        completed ===
                        task6.length
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
