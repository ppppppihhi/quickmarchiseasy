/* =====================================================
   QUICKMARCH PRACTICE
   WRITING TEST 08
===================================================== */

window.QUICKMARCH_TEST = {

    title: "Writing Test 08",

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
                    "Not often. I come to this food market just twice a year.",

                acceptedQuestions: [
                    "How often do you come to this food market?",
                    "How often do you come to this food market, Luca?"
                ],

                explanation: `
                    Luca nói <span class="qm-keyword">“twice a year”</span>.
                    Cụm này cho biết <span class="qm-keyword">tần suất</span>
                    một hoạt động xảy ra.
                    <br><br>
                    Khi câu trả lời nói về tần suất, ta dùng
                    <span class="qm-keyword">How often</span>.
                    <br><br>
                    Đáp án: <span class="qm-keyword">How often do you come to this food market?</span>
                `
            },

            {
                answer:
                    "Usually? In an Italian restaurant in London. It’s a great job.",

                acceptedQuestions: [
                    "Where do you usually work?",
                    "Where do you usually work, Luca?"
                ],

                explanation: `
                    Luca trả lời <span class="qm-keyword">“In an Italian restaurant in London.”</span>
                    Đây là thông tin về <span class="qm-keyword">địa điểm</span>.
                    <br><br>
                    Khi muốn hỏi một người làm việc ở đâu, ta dùng
                    <span class="qm-keyword">Where</span>.
                    <br><br>
                    Đáp án: <span class="qm-keyword">Where do you usually work?</span>
                `
            },

            {
                answer:
                    "I started working there twenty years ago.",

                acceptedQuestions: [
                    "When did you start working there?",
                    "When did you start working there, Luca?"
                ],

                explanation: `
                    Luca nói <span class="qm-keyword">“twenty years ago”</span>.
                    Cụm này cho biết <span class="qm-keyword">thời điểm trong quá khứ</span>.
                    <br><br>
                    Khi hỏi một hành động xảy ra khi nào trong quá khứ,
                    ta dùng <span class="qm-keyword">When did...?</span>
                    <br><br>
                    Đáp án: <span class="qm-keyword">When did you start working there?</span>
                `
            },

            {
                answer:
                    "A waiter? No, not anymore. I’m the cook now.",

                acceptedQuestions: [
                    "Are you a waiter?",
                    "Are you a waiter, Luca?"
                ],

                explanation: `
                    Luca nói <span class="qm-keyword">“A waiter? No, not anymore.”</span>
                    và sau đó cho biết công việc hiện tại là
                    <span class="qm-keyword">the cook</span>.
                    <br><br>
                    Câu trả lời bắt đầu bằng <span class="qm-keyword">No</span>,
                    vì vậy câu hỏi đang kiểm tra xem Luca có phải là
                    người phục vụ hay không.
                    <br><br>
                    Đáp án: <span class="qm-keyword">Are you a waiter?</span>
                `
            },

            {
                answer:
                    "Back to London? Next week when the food market finishes.",

                acceptedQuestions: [
                    "When are you going back to London?",
                    "When are you going back to London, Luca?"
                ],

                explanation: `
                    Luca nói <span class="qm-keyword">“Next week”</span>.
                    Đây là thông tin về <span class="qm-keyword">thời gian</span>.
                    <br><br>
                    Khi hỏi khi nào một người sẽ làm một việc trong tương lai,
                    ta dùng <span class="qm-keyword">When</span>.
                    <br><br>
                    Đáp án: <span class="qm-keyword">When are you going back to London?</span>
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

                clue: `
                    Trước chỗ trống có <span class="qm-keyword">our family</span>
                    và sau đó là <span class="qm-keyword">to the food market</span>.
                `,

                why: `
                    Câu chuyện kể về chuyến đi đã hoàn thành nên cần dùng
                    Past Simple. Động từ phù hợp là
                    <span class="qm-keyword">go</span> và dạng quá khứ là
                    <span class="qm-keyword">went</span>.
                `,

                phrase: `
                    <span class="qm-keyword">went to the food market</span>
                    = đã đi đến chợ thực phẩm.
                `
            },

            {
                answer: "left",
                verb: "leave",

                clue: `
                    Có cụm <span class="qm-keyword">home at nine o’clock</span>.
                `,

                why: `
                    Ngữ cảnh cho biết gia đình rời khỏi nhà lúc 9 giờ để đi
                    đến chợ. Động từ phù hợp là
                    <span class="qm-keyword">leave</span>.
                    Past Simple của leave là
                    <span class="qm-keyword">left</span>.
                `,

                phrase: `
                    <span class="qm-keyword">left home</span>
                    = đã rời khỏi nhà.
                `
            },

            {
                answer: "began",
                verb: "begin",

                clue: `
                    Sau chỗ trống là <span class="qm-keyword">at ten o’clock</span>.
                    Chủ ngữ là <span class="qm-keyword">the food market</span>.
                `,

                why: `
                    Chợ bắt đầu hoạt động lúc 10 giờ. Vì vậy động từ phù hợp
                    là <span class="qm-keyword">begin</span>.
                    Đây là động từ bất quy tắc:
                    <span class="qm-keyword">begin → began</span>.
                `,

                phrase: `
                    <span class="qm-keyword">began at ten o’clock</span>
                    = bắt đầu lúc 10 giờ.
                `
            },

            {
                answer: "looked",
                verb: "look",

                clue: `
                    Có cụm <span class="qm-keyword">around it with a guide</span>.
                `,

                why: `
                    Mum và Dad tham quan xung quanh cung điện cùng hướng dẫn viên.
                    Động từ phù hợp là <span class="qm-keyword">look</span>.
                    Vì sự việc đã xảy ra nên dùng Past Simple:
                    <span class="qm-keyword">look → looked</span>.
                `,

                phrase: `
                    <span class="qm-keyword">looked around</span>
                    = đã tham quan / nhìn xung quanh.
                `
            },

            {
                answer: "gave",
                verb: "give",

                clue: `
                    Cấu trúc là <span class="qm-keyword">give someone some money</span>.
                    Sau chỗ trống có <span class="qm-keyword">Ben and Sophie some money</span>.
                `,

                why: `
                    Anna đưa tiền cho Ben và Sophie để mua burger.
                    Động từ phù hợp là <span class="qm-keyword">give</span>.
                    Đây là động từ bất quy tắc:
                    <span class="qm-keyword">give → gave</span>.
                `,

                phrase: `
                    <span class="qm-keyword">gave Ben and Sophie some money</span>
                    = đã đưa Ben và Sophie một ít tiền.
                `
            },

            {
                answer: "spoke",
                verb: "speak",

                clue: `
                    Sau chỗ trống là <span class="qm-keyword">to a woman</span>.
                `,

                why: `
                    Cấu trúc <span class="qm-keyword">speak to someone</span>
                    có nghĩa là nói chuyện với ai đó.
                    Vì câu chuyện ở quá khứ nên
                    <span class="qm-keyword">speak → spoke</span>.
                `,

                phrase: `
                    <span class="qm-keyword">spoke to a woman</span>
                    = đã nói chuyện với một người phụ nữ.
                `
            },

            {
                answer: "met",
                verb: "meet",

                clue: `
                    Có cụm <span class="qm-keyword">us in the drinks tent</span>.
                    Chủ ngữ là <span class="qm-keyword">Mum and Dad</span>.
                `,

                why: `
                    Sau chuyến tham quan, Mum và Dad gặp những người còn lại
                    trong lều nước uống. Động từ phù hợp là
                    <span class="qm-keyword">meet</span>.
                    Past Simple:
                    <span class="qm-keyword">meet → met</span>.
                `,

                phrase: `
                    <span class="qm-keyword">met us</span>
                    = đã gặp chúng tôi.
                `
            },

            {
                answer: "bought",
                verb: "buy",

                clue: `
                    Câu có <span class="qm-keyword">some ice cold drinks for us</span>.
                `,

                why: `
                    Mum mua đồ uống lạnh cho mọi người vì họ rất khát.
                    Động từ phù hợp là <span class="qm-keyword">buy</span>.
                    Đây là động từ bất quy tắc:
                    <span class="qm-keyword">buy → bought</span>.
                `,

                phrase: `
                    <span class="qm-keyword">bought some ice cold drinks</span>
                    = đã mua một vài đồ uống lạnh.
                `
            },

            {
                answer: "drank",
                verb: "drink",

                clue: `
                    Có từ <span class="qm-keyword">mine</span> và từ
                    <span class="qm-keyword">really fast</span>.
                    “Mine” ở đây chỉ đồ uống của Anna.
                `,

                why: `
                    Anna nói cô ấy uống đồ uống của mình rất nhanh.
                    Động từ phù hợp là <span class="qm-keyword">drink</span>.
                    Past Simple của drink là
                    <span class="qm-keyword">drank</span>.
                `,

                phrase: `
                    <span class="qm-keyword">drank mine really fast</span>
                    = đã uống phần của mình rất nhanh.
                `
            },

            {
                answer: "took",
                verb: "take",

                clue: `
                    Sau chỗ trống là <span class="qm-keyword">some photos</span>.
                `,

                why: `
                    Khi nói chụp ảnh, ta dùng cụm
                    <span class="qm-keyword">take photos</span>.
                    Vì đây là một sự việc đã xảy ra nên dùng Past Simple:
                    <span class="qm-keyword">take → took</span>.
                `,

                phrase: `
                    <span class="qm-keyword">took some photos</span>
                    = đã chụp một vài bức ảnh.
                `
            }

        ];


        /* =================================================
           TASK 6 DATA
        ================================================= */

        const task6 = [

            {
                starter: "Sometimes, my family...",

                hint:
                    "What does your family sometimes do together? Think about places you visit or activities you enjoy.",

                sample:
                    "Sometimes, my family goes to the park and has a picnic together.",

                explanation:
                    "Em có thể nói về một hoạt động gia đình thỉnh thoảng cùng làm, chẳng hạn như đi công viên, đi ăn hoặc đi chơi."
            },

            {
                starter: "The best place...",

                hint:
                    "What is the best place for your family to go? Why do you like it?",

                sample:
                    "The best place for my family is the beach because we love swimming.",

                explanation:
                    "Nêu một địa điểm mà em cho là tốt nhất và giải thích ngắn gọn lý do em thích nơi đó."
            },

            {
                starter: "On sunny days,...",

                hint:
                    "What do you and your family like doing when the weather is sunny?",

                sample:
                    "On sunny days, my family likes going outside and playing games.",

                explanation:
                    "Nói về hoạt động gia đình thường làm khi thời tiết đẹp và có nắng."
            },

            {
                starter: "Last month,...",

                hint:
                    "What did your family do last month? Remember to use the past tense.",

                sample:
                    "Last month, my family visited a beautiful palace and had lunch there.",

                explanation:
                    "Đây là sự việc đã xảy ra trong quá khứ. Em nên chú ý dùng Past Simple khi kể về tháng trước."
            },

            {
                starter: "On our next day out,...",

                hint:
                    "What are you going to do on your next family day out?",

                sample:
                    "On our next day out, we are going to visit a new museum together.",

                explanation:
                    "Nói về kế hoạch cho lần đi chơi tiếp theo. Em có thể dùng “be going to” để nói về dự định."
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
                        Task 3 — Talking to Luca
                    </h2>

                    <p class="qm-task-description">
                        At the food market Luca is selling food.
                        Anna asks him some questions.
                        Write the questions in the spaces.
                        The first one is an example.
                    </p>

                    <div class="qm-example">

                        <strong>Example</strong>

                        <p>
                            <strong>Anna:</strong>
                            Can I ask you some questions?
                        </p>

                        <p>
                            <strong>Luca:</strong>
                            Yes, of course you can ask me some questions.
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
                        id="t8-task3-${index}"
                        class="qm-input"
                        type="text"
                        placeholder="Write Anna's question here..."
                    >

                    <div class="qm-answer">

                        <strong>Luca:</strong>
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
                        id="t8-task3-feedback-${index}"
                    ></div>

                </div>

            `;

        });


        html += `

                    <div
                        id="t8-task3-total"
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
                        Task 5 — A Great Day at Beckton Palace
                    </h2>

                    <p class="qm-task-description">
                        Anna writes in her diary about the day at Beckton Palace.
                        Fill in the missing words. Use the verbs in the box below
                        but don’t forget to change them to PAST TENSE because
                        the visit to Beckton Palace is finished.
                        The first one is an example.
                    </p>

                    <div class="qm-word-bank">

                        <strong>Word bank:</strong><br>

                        begin &nbsp;&nbsp;
                        buy &nbsp;&nbsp;
                        drink &nbsp;&nbsp;
                        give &nbsp;&nbsp;
                        go &nbsp;&nbsp;
                        leave &nbsp;&nbsp;
                        look &nbsp;&nbsp;
                        meet &nbsp;&nbsp;
                        speak &nbsp;&nbsp;
                        take &nbsp;&nbsp;
                        tell

                    </div>


                    <div class="qm-question">

                        <div class="qm-letter">

                            <p>
                                <strong>Hi Gran,</strong>
                            </p>

                            <p>
                                Yesterday our family
                                <strong>(example) went</strong>
                                to the food market at Beckton Palace.
                            </p>

                            <p>
                                We
                                <input
                                    id="t8-task5-0"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(1)"
                                >
                                home at nine o’clock because the food market
                                <input
                                    id="t8-task5-1"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(2)"
                                >
                                at ten o’clock.
                                It was Mum and Dad’s first trip to the palace so in
                                the morning they
                                <input
                                    id="t8-task5-2"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(3)"
                                >
                                around it with a guide.
                            </p>

                            <p>
                                Outside the palace there were lots of tents with
                                food and drink. I
                                <input
                                    id="t8-task5-3"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(4)"
                                >
                                Ben and Sophie some money for burgers.
                                Then I
                                <input
                                    id="t8-task5-4"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(5)"
                                >
                                to a woman in the fruit market.
                                She
                                <input
                                    id="t8-task5-5"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(6)"
                                >
                                me all about her farm and its fruit and vegetables.
                            </p>

                            <p>
                                After their tour Mum and Dad
                                <input
                                    id="t8-task5-6"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(7)"
                                >
                                us in the drinks tent.
                                We were very thirsty so Mum
                                <input
                                    id="t8-task5-7"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(8)"
                                >
                                some ice cold drinks for us.
                            </p>

                            <p>
                                I
                                <input
                                    id="t8-task5-8"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(9)"
                                >
                                mine really fast!
                                In the afternoon I
                                <input
                                    id="t8-task5-9"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(10)"
                                >
                                some photos of all the family at the palace.
                            </p>

                            <p>
                                What a great day!
                            </p>

                        </div>

                    </div>


                    <button
                        type="button"
                        id="t8-check-task5"
                        class="qm-button"
                    >
                        Check Task 5
                    </button>


                    <div
                        id="t8-task5-total"
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
                        Task 6 — Family Days Out
                    </h2>

                    <p class="qm-task-description">
                        Now write about days out with your family.
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
                        id="t8-task6-${index}"
                        class="qm-input qm-textarea"
                        placeholder="Write your answer here..."
                    ></textarea>

                    <div
                        id="t8-task6-sample-${index}"
                        style="display:none;"
                    ></div>

                </div>

            `;

        });


        html += `

                    <button
                        type="button"
                        id="t8-check-task6"
                        class="qm-button"
                    >
                        Check Task 6
                    </button>

                    <div
                        id="t8-task6-feedback"
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
                                `#t8-task3-${index}`
                            );

                        const feedback =
                            container.querySelector(
                                `#t8-task3-feedback-${index}`
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
                    "#t8-task3-total"
                );

            total.textContent =
                `Task 3 Score: ${score}/15 marks`;

        }


        /* =================================================
           TASK 5 CHECK
        ================================================= */

        container
            .querySelector("#t8-check-task5")
            .addEventListener(
                "click",
                function() {

                    let score = 0;


                    task5.forEach(
                        function(item, index) {

                            const input =
                                container.querySelector(
                                    `#t8-task5-${index}`
                                );


                            const old =
                                container.querySelector(
                                    `#t8-task5-feedback-${index}`
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
                                `t8-task5-feedback-${index}`;


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
                            "#t8-task5-total"
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
            .querySelector("#t8-check-task6")
            .addEventListener(
                "click",
                function() {

                    let completed = 0;


                    task6.forEach(
                        function(item, index) {

                            const input =
                                container.querySelector(
                                    `#t8-task6-${index}`
                                );

                            const sample =
                                container.querySelector(
                                    `#t8-task6-sample-${index}`
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
                            "#t8-task6-feedback"
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
