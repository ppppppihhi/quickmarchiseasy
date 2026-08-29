/* =====================================================
   QUICKMARCH PRACTICE
   WRITING TEST 04
   Pearson VS Gia su Minh Tri Thu Duc
===================================================== */

window.QUICKMARCH_TEST = {

    title: "Writing Test 04",

    render: function(container) {

        /* =================================================
           STYLE
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
                margin-top: 12px;
                padding: 12px 14px;
                background: #f4f8ff;
                border-left: 4px solid rgb(0, 0, 238);
                border-radius: 8px;
                color: #53655b;
            }

            .qm-explanation-title {
                font-weight: 400;
                margin-bottom: 6px;
            }

            .qm-clue {
                margin-top: 9px;
                padding: 9px 11px;
                background: #eef5f0;
                border-radius: 7px;
            }

            .qm-important {
                font-weight: 700;
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

            .qm-writing-text {
                margin: 7px 0;
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
                    "Which clubs are you going to?",

                accepted: [
                    "Which clubs are you going to?",
                    "Which clubs are you going to"
                ],

                explanation: `
                    Ben nói: “I’m going to football club and computer club.”
                    → Ben đang nói về những câu lạc bộ bạn ấy sẽ tham gia.
                    <br><br>
                    Hỏi về câu lạc bộ → dùng <strong>Which clubs...?</strong>
                    <br>
                    → <strong>Which clubs are you going to?</strong>
                `
            },


            {
                answer:
                    "Which club do you like best?",

                accepted: [
                    "Which club do you like best?",
                    "Which club do you like best"
                ],

                explanation: `
                    Ben nói: “I like computers but football is better.”
                    → Ben đang nói về câu lạc bộ mà bạn ấy thích hơn.
                    <br><br>
                    Hỏi lựa chọn hoặc sở thích → dùng <strong>Which club...?</strong>
                    <br>
                    → <strong>Which club do you like best?</strong>
                `
            },


            {
                answer:
                    "Was there a computer club last year?",

                accepted: [
                    "Was there a computer club last year?",
                    "Was there a computer club last year"
                ],

                explanation: `
                    Ben nói: “There wasn’t a computer club last year.”
                    → Câu trả lời cho biết có hay không có một câu lạc bộ trong quá khứ.
                    <br><br>
                    Khi hỏi “có ... không?” với một sự vật hoặc hoạt động,
                    ta có thể dùng cấu trúc <strong>Was there...?</strong>
                    <br>
                    → <strong>Was there a computer club last year?</strong>
                `
            },


            {
                answer:
                    "How many children are going to football club?",

                accepted: [
                    "How many children are going to football club?",
                    "How many children are going to football club",
                    "How many children are going to the football club?",
                    "How many children are going to the football club"
                ],

                explanation: `
                    Ben nói: “About twenty children are going this year.”
                    → Câu trả lời đưa ra một con số: <strong>about twenty children</strong>.
                    <br><br>
                    Khi hỏi về số lượng người hoặc vật → dùng <strong>How many...?</strong>
                    <br>
                    → <strong>How many children are going to football club?</strong>
                `
            },


            {
                answer:
                    "Can I go to football club?",

                accepted: [
                    "Can I go to football club?",
                    "Can I go to football club",
                    "Can I go to the football club?",
                    "Can I go to the football club"
                ],

                explanation: `
                    Ben trả lời: “Yes, you can.”
                    → Câu trả lời có <strong>Yes, you can</strong>, vì vậy câu hỏi phải
                    dùng trợ động từ <strong>Can</strong>.
                    <br><br>
                    Người hỏi đang hỏi xem mình có thể đến câu lạc bộ hay không.
                    <br>
                    → <strong>Can I go to football club?</strong>
                `
            }

        ];


        /* =================================================
           TASK 5 DATA
        ================================================= */

        const task5 = [

            {
                answer: "talked",
                verb: "talk",
                clue: `
                    Sau chỗ trống là “to us about different computer programmes”.
                    Cụm từ này giúp nhận ra động từ <strong>talk</strong>.
                `,
                why: `
                    Mr Lee là người nói chuyện với học sinh về các chương trình
                    máy tính. Câu chuyện nói về tuần đầu tiên đã kết thúc,
                    vì vậy cần dùng <strong>Past Simple</strong>.
                    <br>
                    <strong>talk → talked</strong>
                `,
                phrase: `
                    <strong>talk to someone about something</strong>
                    = nói chuyện với ai về điều gì.
                `
            },


            {
                answer: "chose",
                verb: "choose",
                clue: `
                    Sau chỗ trống là “partners”, cho biết các bạn đã chọn bạn
                    cùng nhóm.
                `,
                why: `
                    Sau khi Mr Lee nói chuyện, các bạn tạo thành nhóm bằng cách
                    chọn người cùng cặp. Động từ phù hợp là <strong>choose</strong>.
                    <br>
                    Đây là động từ bất quy tắc:
                    <strong>choose → chose</strong>.
                `,
                phrase: `
                    <strong>choose partners</strong>
                    = chọn bạn cùng cặp/nhóm.
                `
            },


            {
                answer: "looked",
                verb: "look",
                clue: `
                    Sau chỗ trống là “at some great websites”.
                    Đây là dấu hiệu của cụm <strong>look at</strong>.
                `,
                why: `
                    Các bạn đã xem một số trang web hay trong giờ học.
                    Vì hành động đã xảy ra trong tuần trước nên dùng
                    <strong>Past Simple</strong>.
                    <br>
                    <strong>look → looked</strong>
                `,
                phrase: `
                    <strong>look at a website</strong>
                    = xem một trang web.
                `
            },


            {
                answer: "let",
                verb: "let",
                clue: `
                    Sau chỗ trống là “us play computer games”.
                    Cấu trúc <strong>let someone do something</strong>
                    phù hợp với câu này.
                `,
                why: `
                    Mr Lee cho phép học sinh chơi trò chơi máy tính trong
                    năm phút. Động từ là <strong>let</strong>.
                    <br>
                    <strong>let</strong> là động từ đặc biệt: dạng quá khứ
                    vẫn là <strong>let</strong>.
                `,
                phrase: `
                    <strong>let us play</strong>
                    = cho phép chúng tôi chơi.
                `
            },


            {
                answer: "enjoyed",
                verb: "enjoy",
                clue: `
                    Câu “We all really ___ football club” nói về cảm nhận
                    của mọi người đối với câu lạc bộ.
                `,
                why: `
                    Các bạn đều rất thích câu lạc bộ bóng đá.
                    Động từ phù hợp là <strong>enjoy</strong>.
                    <br>
                    Vì câu chuyện xảy ra trong quá khứ:
                    <strong>enjoy → enjoyed</strong>.
                `,
                phrase: `
                    <strong>enjoy football club</strong>
                    = thích câu lạc bộ bóng đá.
                `
            },


            {
                answer: "jumped",
                verb: "jump",
                clue: `
                    Câu tiếp theo nói “up and down”, đây là dấu hiệu cho
                    một hoạt động vận động lên xuống.
                `,
                why: `
                    Trước trận đấu, các bạn khởi động bằng cách nhảy lên xuống
                    và làm nóng cơ thể. Động từ phù hợp là <strong>jump</strong>.
                    <br>
                    <strong>jump → jumped</strong>.
                `,
                phrase: `
                    <strong>jump up and down</strong>
                    = nhảy lên nhảy xuống.
                `
            },


            {
                answer: "did",
                verb: "do",
                clue: `
                    Câu nói “Everybody ___ really well” cho biết mọi người
                    đã chơi/thực hiện hoạt động rất tốt.
                `,
                why: `
                    Động từ trong word bank là <strong>do</strong>.
                    Vì câu chuyện kể về một trận đấu đã kết thúc,
                    ta cần dạng quá khứ.
                    <br>
                    <strong>do → did</strong>.
                `,
                phrase: `
                    <strong>do well</strong>
                    = làm tốt / thể hiện tốt.
                `
            },


            {
                answer: "won",
                verb: "win",
                clue: `
                    Sau chỗ trống là “the match 3-1”.
                    Tỉ số 3-1 cho biết đội của Ben đã thắng trận đấu.
                `,
                why: `
                    Khi một đội thắng một trận đấu, ta dùng động từ
                    <strong>win</strong>.
                    <br>
                    Đây là động từ bất quy tắc:
                    <strong>win → won</strong>.
                `,
                phrase: `
                    <strong>win the match</strong>
                    = thắng trận đấu.
                `
            },


            {
                answer: "was",
                verb: "be",
                clue: `
                    Chủ ngữ là “It” và phía sau là “really cool”.
                    Ta cần động từ <strong>be</strong>.
                `,
                why: `
                    “It” nói về trận đấu vừa diễn ra và người viết nhận xét
                    trận đấu rất tuyệt. Vì câu chuyện ở quá khứ nên dùng
                    <strong>was</strong>.
                    <br>
                    <strong>be → was</strong>.
                `,
                phrase: `
                    <strong>It was really cool</strong>
                    = Nó thực sự rất tuyệt.
                `
            },


            {
                answer: "bought",
                verb: "buy",
                clue: `
                    Câu nói “my favourite ice-cream” cho biết Dad đã mua
                    kem yêu thích cho Ben.
                `,
                why: `
                    Khi nói về việc mua một thứ gì đó, dùng động từ
                    <strong>buy</strong>. Hành động đã xảy ra nên dùng
                    Past Simple.
                    <br>
                    Đây là động từ bất quy tắc:
                    <strong>buy → bought</strong>.
                `,
                phrase: `
                    <strong>buy someone something</strong>
                    = mua cho ai đó một thứ gì.
                `
            }

        ];


        /* =================================================
           TASK 6 DATA
        ================================================= */

        const task6 = [

            {
                starter: "A good club is...",

                hint:
                    "Think about a club you like. What is it like? What activities does it have?",

                sample:
                    "A good club is fun and friendly. It has interesting activities for everyone.",

                explanation:
                    "Em có thể mô tả một câu lạc bộ tốt bằng các tính từ như fun, friendly, interesting và nói thêm về hoạt động của câu lạc bộ."
            },


            {
                starter: "People like it because...",

                hint:
                    "Why do people enjoy going to this club?",

                sample:
                    "People like it because they can learn new things and meet their friends.",

                explanation:
                    "Sau “because” hãy đưa ra lý do tại sao mọi người thích câu lạc bộ."
            },


            {
                starter: "In my school there are...",

                hint:
                    "What clubs are available at your school?",

                sample:
                    "In my school there are football, computer and music clubs.",

                explanation:
                    "Hãy kể tên những câu lạc bộ có trong trường của em."
            },


            {
                starter: "Last year...",

                hint:
                    "Talk about a club you joined or an activity you did last year. Use the past tense.",

                sample:
                    "Last year I joined the football club and played matches every Saturday.",

                explanation:
                    "“Last year” là dấu hiệu của quá khứ. Vì vậy em nên sử dụng Past Simple để nói về những việc đã xảy ra."
            },


            {
                starter: "In the future...",

                hint:
                    "What club would you like to join or what would you like to do?",

                sample:
                    "In the future I would like to join the computer club and learn how to make games.",

                explanation:
                    "Hãy nói về mong muốn hoặc dự định của em trong tương lai."
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
                        Task 3 — Tell me About the Clubs
                    </h2>

                    <p class="qm-task-description qm-problem">
                        Mr Brown asks Ben some questions about the school clubs.
                        Write the questions in the spaces.
                        The first one is an example.
                    </p>

                    <div class="qm-example qm-problem">

                        <p>
                            <strong>Mr Brown:</strong>
                            (Example)
                            When do the school clubs start, Ben?
                        </p>

                        <p>
                            <strong>Ben:</strong>
                            The school clubs? They start next week.
                        </p>

                    </div>

        `;


        task3.forEach(function(item, index) {

            html += `

                <div class="qm-question">

                    <div class="qm-number">
                        Question ${index + 1} — 3 marks
                    </div>

                    <p class="qm-problem">

                        <strong>Mr Brown:</strong>

                    </p>

                    <input
                        id="t4-task3-${index}"
                        class="qm-input"
                        type="text"
                        placeholder="Write the question here..."
                    >

                    <div class="qm-answer qm-problem">

                        <strong>Ben:</strong>
                        ${
                            [
                                "I’m going to football club and computer club.",
                                "Well, I like computers but football is better.",
                                "No I didn’t. There wasn’t a computer club last year.",
                                "To football club? About twenty children are going this year.",
                                "Yes, you can. Last year lots of dads came to watch us."
                            ][index]
                        }

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
                        id="t4-task3-feedback-${index}"
                    ></div>

                </div>

            `;

        });


        html += `

                    <div
                        id="t4-task3-total"
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
                        Task 5 — Ben Writes for the School Magazine
                    </h2>

                    <p class="qm-task-description qm-problem">
                        Ben writes a report for the school magazine about
                        the first week of the school clubs. Fill in the
                        missing words. Use the verbs in the box below but
                        don’t forget to change them to the PAST TENSE
                        because the first week is finished.
                        The first one is an example.
                    </p>


                    <div class="qm-word-bank qm-problem">

                        <strong>Word bank:</strong><br>

                        look &nbsp;&nbsp;
                        enjoy &nbsp;&nbsp;
                        start &nbsp;&nbsp;
                        choose &nbsp;&nbsp;
                        win &nbsp;&nbsp;
                        talk &nbsp;&nbsp;
                        buy &nbsp;&nbsp;
                        do &nbsp;&nbsp;
                        let &nbsp;&nbsp;
                        jump &nbsp;&nbsp;
                        be

                    </div>


                    <div class="qm-example">

                        <p>
                            Hãy quan sát từ ngay trước và sau chỗ trống,
                            đọc toàn bộ câu để hiểu ngữ cảnh và tìm
                            cụm động từ phù hợp.
                        </p>

                        <p>
                            Vì “the first week is finished”, các động từ
                            cần được đổi sang <strong>Past Simple</strong>.
                        </p>

                    </div>


                    <div class="qm-question">

                        <div class="qm-problem">

                            <p>
                                <strong>Last week</strong>
                                the school clubs
                                (example)
                                <strong>started</strong>.
                                I went to computer club and football club.
                            </p>

                            <p>
                                Computer club was great.
                                Mr Lee
                                <input
                                    id="t4-task5-0"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(1)"
                                >
                                to us about different computer programmes.
                            </p>

                            <p>
                                Then we
                                <input
                                    id="t4-task5-1"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(2)"
                                >
                                partners and
                                <input
                                    id="t4-task5-2"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(3)"
                                >
                                at some great websites.
                            </p>

                            <p>
                                After that Mr Lee
                                <input
                                    id="t4-task5-3"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(4)"
                                >
                                us play computer games for five minutes!
                            </p>

                            <p>
                                We all really
                                <input
                                    id="t4-task5-4"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(5)"
                                >
                                football club.
                            </p>

                            <p>
                                First we
                                <input
                                    id="t4-task5-5"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(6)"
                                >
                                up and down and warmed up,
                                then we started the match.
                            </p>

                            <p>
                                Everybody
                                <input
                                    id="t4-task5-6"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(7)"
                                >
                                really well and my team
                                <input
                                    id="t4-task5-7"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(8)"
                                >
                                the match 3-1!
                            </p>

                            <p>
                                It
                                <input
                                    id="t4-task5-8"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(9)"
                                >
                                really cool!
                            </p>

                            <p>
                                After the match, my Dad took me to the cafe
                                and
                                <input
                                    id="t4-task5-9"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(10)"
                                >
                                me my favourite ice-cream!
                            </p>

                        </div>

                    </div>


                    <button
                        type="button"
                        id="t4-check-task5"
                        class="qm-button"
                    >
                        Check Task 5
                    </button>


                    <div
                        id="t4-task5-total"
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
                        Task 6 — Clubs and Me
                    </h2>

                    <p class="qm-task-description qm-problem">
                        Now write about clubs.
                        Write about 50 words — about 10 words
                        in each space.
                    </p>

        `;


        task6.forEach(function(item, index) {

            html += `

                <div class="qm-question">

                    <div class="qm-number">
                        ${index + 1}. ${item.starter}
                    </div>

                    <div class="qm-example">

                        <span>
                            💡 Gợi ý:
                        </span>

                        <br>

                        ${item.hint}

                    </div>

                    <textarea
                        id="t4-task6-${index}"
                        class="qm-input qm-textarea"
                        placeholder="Write your answer here..."
                    ></textarea>

                    <div
                        id="t4-task6-sample-${index}"
                        style="display:none;"
                    ></div>

                </div>

            `;

        });


        html += `

                    <button
                        type="button"
                        id="t4-check-task6"
                        class="qm-button"
                    >
                        Check Task 6
                    </button>

                    <div
                        id="t4-task6-feedback"
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
            .querySelectorAll('[data-action="check-task3"]')
            .forEach(function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        const index =
                            Number(button.dataset.index);

                        const input =
                            container.querySelector(
                                `#t4-task3-${index}`
                            );

                        const feedback =
                            container.querySelector(
                                `#t4-task3-feedback-${index}`
                            );

                        const user =
                            normalize(input.value);

                        const accepted =
                            task3[index]
                                .accepted
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

                                        <div class="qm-explanation-title">
                                            💡 Giải thích:
                                        </div>

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
                                        Đáp án:
                                        ${escapeHTML(task3[index].answer)}
                                    </span>

                                    <div class="qm-explanation">

                                        <div class="qm-explanation-title">
                                            💡 Giải thích:
                                        </div>

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
                    "#t4-task3-total"
                );

            total.textContent =
                `Task 3 Score: ${score}/15 marks`;

        }


        /* =================================================
           TASK 5 CHECK
        ================================================= */

        container
            .querySelector("#t4-check-task5")
            .addEventListener(
                "click",
                function() {

                    let score = 0;


                    task5.forEach(
                        function(item, index) {

                            const input =
                                container.querySelector(
                                    `#t4-task5-${index}`
                                );


                            const old =
                                container.querySelector(
                                    `#t4-task5-feedback-${index}`
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
                                `t4-task5-feedback-${index}`;


                            if (user === correct) {

                                score += 1.5;

                                feedback.className =
                                    "qm-feedback qm-correct";

                                feedback.innerHTML = `

                                    ✓ Correct!
                                    <span>1.5/1.5 marks</span>

                                    <div class="qm-explanation">

                                        <div>
                                            Đáp án → ${escapeHTML(item.answer)}
                                        </div>

                                        <div class="qm-clue">

                                            Gợi ý → ${item.clue}

                                        </div>

                                        <div style="margin-top:9px;">

                                            Giải thích → ${item.why}

                                        </div>

                                        <div style="margin-top:9px;">

                                            Cụm từ quan trọng →
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
                                            Đáp án → ${escapeHTML(item.answer)}
                                        </div>

                                        <div class="qm-clue">

                                            Gợi ý → ${item.clue}

                                        </div>

                                        <div style="margin-top:9px;">

                                            Giải thích → ${item.why}

                                        </div>

                                        <div style="margin-top:9px;">

                                            Cụm từ quan trọng →
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
                            "#t4-task5-total"
                        );


                    total.innerHTML = `

                        Task 5 Score:
                        ${score}/15 marks

                    `;

                }

            );


        /* =================================================
           TASK 6 CHECK
        ================================================= */

        container
            .querySelector("#t4-check-task6")
            .addEventListener(
                "click",
                function() {

                    let completed = 0;


                    task6.forEach(
                        function(item, index) {

                            const input =
                                container.querySelector(
                                    `#t4-task6-${index}`
                                );

                            const sample =
                                container.querySelector(
                                    `#t4-task6-sample-${index}`
                                );


                            if (
                                input.value.trim() !== ""
                            ) {

                                completed++;

                            }


                            sample.innerHTML = `

                                <div class="qm-sample">

                                    <div>
                                        💡 Sample answer:
                                    </div>

                                    <p>
                                        ${item.sample}
                                    </p>

                                    <p class="qm-small-note">

                                        Giải thích:
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
                            "#t4-task6-feedback"
                        );


                    if (
                        completed === task6.length
                    ) {

                        feedback.innerHTML = `

                            <div class="qm-feedback qm-correct">

                                ✓ Writing submitted!

                                <br><br>

                                Task 6 Score: 10/10 marks

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
