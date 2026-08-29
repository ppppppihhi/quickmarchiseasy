/* =====================================================
   QUICKMARCH PRACTICE
   WRITING TEST 03
   Pearson VS Gia su Minh Tri Thu Duc
===================================================== */

window.QUICKMARCH_TEST = {

    title: "Writing Test 03",

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

            .qm-blue {
                color: rgb(0, 0, 238);
                font-weight: 700;
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
                    "Yes I do. I love playing sport.",

                acceptedQuestions: [

                    "What sport do you like best?",
                    "What sport do you like best, Ben?"

                ],

                explanation: `
                    <div>
                        💡 Gợi ý:<br>
                        Ben nói: “I like football best.”
                        → Ben đang nói về môn thể thao yêu thích.
                    </div>

                    <div style="margin-top:10px;">
                        👉 Hướng dẫn:<br>
                        Hỏi về môn thể thao → What sport...?
                    </div>

                    <div style="margin-top:10px;">
                        “Bạn thích môn thể thao nào nhất?”
                        → What sport do you like best?
                    </div>
                `

            },

            {
                answer:
                    "I like football best.",

                acceptedQuestions: [

                    "When did you start playing?",
                    "When did you start playing, Ben?"

                ],

                explanation: `
                    <div>
                        💡 Gợi ý:<br>
                        Ben nói: “I started playing four years ago.”
                        → Ben đang nói 4 năm trước.
                    </div>

                    <div style="margin-top:10px;">
                        👉 Hướng dẫn:<br>
                        Hỏi về thời gian → When...?
                    </div>

                    <div style="margin-top:10px;">
                        “Bạn bắt đầu chơi khi nào?”
                        → When did you start playing?
                    </div>
                `

            },

            {
                answer:
                    "I started playing four years ago.",

                acceptedQuestions: [

                    "Which club do you play for?",
                    "Which club do you play for, Ben?"

                ],

                explanation: `
                    <div>
                        💡 Gợi ý:<br>
                        Ben nói: “For Farnham Football Club.”
                        → Ben đang nói tên câu lạc bộ.
                    </div>

                    <div style="margin-top:10px;">
                        👉 Hướng dẫn:<br>
                        Hỏi tên câu lạc bộ → Which club...?
                    </div>

                    <div style="margin-top:10px;">
                        “Bạn chơi cho câu lạc bộ nào?”
                        → Which club do you play for?
                    </div>
                `

            },

            {
                answer:
                    "For Farnham Football club. We play every Saturday.",

                acceptedQuestions: [

                    "What colour are your shirts and shorts?",
                    "What colour are your shirts and shorts, Ben?"

                ],

                explanation: `
                    <div>
                        💡 Gợi ý:<br>
                        Ben nói: “Red shirts and white shorts.”
                        → Ben đang nói về màu sắc quần áo.
                    </div>

                    <div style="margin-top:10px;">
                        👉 Hướng dẫn:<br>
                        Hỏi về màu → What colour...?
                    </div>

                    <div style="margin-top:10px;">
                        “Áo và quần màu gì?”
                        → What colour are your shirts and shorts?
                    </div>
                `

            },

            {
                answer:
                    "Red shirts and white shorts.",

                acceptedQuestions: [

                    "When is your next match?",
                    "When is your next match, Ben?"

                ],

                explanation: `
                    <div>
                        💡 Gợi ý:<br>
                        Ben nói: “Next Saturday.”
                        → Ben đang nói khi nào có trận đấu tiếp theo.
                    </div>

                    <div style="margin-top:10px;">
                        👉 Hướng dẫn:<br>
                        Hỏi về thời gian → When...?
                    </div>

                    <div style="margin-top:10px;">
                        “Trận đấu tiếp theo khi nào?”
                        → When is your next match?
                    </div>
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
                    "Sau chủ ngữ “Sally, Ben and I” là cụm “into town”.",
                why:
                    "Cả nhóm đã đi vào thành phố trong ngày. Câu chuyện kể về một chuyến đi đã kết thúc nên dùng Past Simple. go là động từ bất quy tắc: go → went.",
                phrase:
                    "went into town = đã đi vào thành phố."
            },

            {
                answer: "took",
                verb: "take",
                clue:
                    "Sau chỗ trống là “the bus into the town centre”.",
                why:
                    "Ngữ cảnh cho biết cả nhóm sử dụng xe buýt để đi vào trung tâm thành phố. Cụm “take the bus” có nghĩa là đi bằng xe buýt. Vì chuyến đi đã xảy ra nên dùng Past Simple: take → took.",
                phrase:
                    "took the bus = đã đi xe buýt."
            },

            {
                answer: "decided",
                verb: "decide",
                clue:
                    "Sau chỗ trống là “to go shopping”.",
                why:
                    "Cấu trúc “decide to + verb” có nghĩa là quyết định làm gì. Vì nhóm đã quyết định đi mua sắm trong ngày hôm đó nên dùng Past Simple: decide → decided.",
                phrase:
                    "decided to go shopping = đã quyết định đi mua sắm."
            },

            {
                answer: "bought",
                verb: "buy",
                clue:
                    "Sau chỗ trống là “some T shirts from C & A”.",
                why:
                    "Ngữ cảnh nói Sally và Anna mua áo phông. Động từ phù hợp là buy. Vì việc mua đã xảy ra nên dùng Past Simple bất quy tắc: buy → bought.",
                phrase:
                    "bought some T shirts = đã mua một vài chiếc áo phông."
            },

            {
                answer: "ate",
                verb: "eat",
                clue:
                    "Sau chỗ trống là “a picnic in the park”.",
                why:
                    "Cụm “eat a picnic” được dùng để nói về việc ăn bữa picnic. Vì đây là một hành động đã xảy ra trong ngày hôm đó nên dùng Past Simple: eat → ate.",
                phrase:
                    "ate a picnic = đã ăn một bữa picnic."
            },

            {
                answer: "sat",
                verb: "sit",
                clue:
                    "Sau chỗ trống là “right next to us”.",
                why:
                    "Câu nói “A big brown fox sat right next to us” cho biết con cáo ngồi ngay cạnh họ. Vì sự việc xảy ra trong quá khứ nên dùng Past Simple. sit là động từ bất quy tắc: sit → sat.",
                phrase:
                    "sat right next to us = đã ngồi ngay cạnh chúng tôi."
            },

            {
                answer: "gave",
                verb: "give",
                clue:
                    "Sau chỗ trống là “it a chicken sandwich”.",
                why:
                    "Ngữ cảnh nói họ nhìn thấy con cáo đói nên đưa cho nó một chiếc bánh sandwich. Cấu trúc “give someone something” có nghĩa là đưa/cho ai cái gì. give → gave.",
                phrase:
                    "gave it a chicken sandwich = đã cho nó một chiếc sandwich gà."
            },

            {
                answer: "watched",
                verb: "watch",
                clue:
                    "Sau chỗ trống là “a very funny show at the theatre”.",
                why:
                    "Cả nhóm đến nhà hát và xem một chương trình hài hước. Động từ phù hợp là watch. Vì sự việc đã xảy ra nên dùng Past Simple: watch → watched.",
                phrase:
                    "watched a show = đã xem một chương trình."
            },

            {
                answer: "laughed",
                verb: "laugh",
                clue:
                    "Sau chỗ trống là “so much”.",
                why:
                    "Một chương trình rất hài hước nên mọi người cười rất nhiều. Cụm “laugh so much” phù hợp với ngữ cảnh. Vì hành động đã xảy ra nên laugh → laughed.",
                phrase:
                    "laughed so much = đã cười rất nhiều."
            },

            {
                answer: "met",
                verb: "meet",
                clue:
                    "Sau chỗ trống là “some friends from school”.",
                why:
                    "Sau chương trình, Anna và mọi người gặp một số người bạn ở trường. Động từ phù hợp là meet. Vì sự việc đã xảy ra nên dùng Past Simple bất quy tắc: meet → met.",
                phrase:
                    "met some friends = đã gặp một vài người bạn."
            }

        ];


        /* =================================================
           TASK 6 DATA
        ================================================= */

        const task6 = [

            {
                starter:
                    "I like holidays because...",

                hint:
                    "Why do you like holidays? Think about free time, family, friends or activities.",

                sample:
                    "I like holidays because I have more free time to play with my friends and relax.",

                explanation:
                    "Nêu lý do em thích kỳ nghỉ. Có thể nói về thời gian rảnh, gia đình, bạn bè hoặc các hoạt động yêu thích."
            },

            {
                starter:
                    "During the holidays I...",

                hint:
                    "What do you usually do during the holidays?",

                sample:
                    "During the holidays I usually ride my bike, read books and play games with my brother.",

                explanation:
                    "Nói về những hoạt động em thường làm trong kỳ nghỉ."
            },

            {
                starter:
                    "During the holiday my best friend...",

                hint:
                    "What does your best friend do during the holiday?",

                sample:
                    "During the holiday my best friend visits me and we often play football together.",

                explanation:
                    "Nói về hoạt động của bạn thân trong kỳ nghỉ và có thể nói thêm hoạt động hai bạn cùng làm."
            },

            {
                starter:
                    "In my last holiday...",

                hint:
                    "What did you do in your last holiday? Remember to use the past tense.",

                sample:
                    "In my last holiday I visited my grandparents and went swimming with my cousins.",

                explanation:
                    "Nói về kỳ nghỉ trước. Vì sự việc đã xảy ra nên chú ý sử dụng Past Simple."
            },

            {
                starter:
                    "In my next holiday...",

                hint:
                    "What are you going to do in your next holiday?",

                sample:
                    "In my next holiday I am going to visit the beach with my family and take lots of photos.",

                explanation:
                    "Nói về kế hoạch trong kỳ nghỉ tới. Có thể dùng “be going to” để nói về dự định."
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
                        Task 3 — Sally Talks to Ben
                    </h2>

                    <p class="qm-task-description qm-blue">
                        When Sally gets back home, Anna and Ben visit her.
                        Sally asks Ben about his hobbies.
                        Write the questions in the spaces.
                        The first one is an example.
                    </p>

                    <div class="qm-example">

                        <strong>Example</strong>

                        <p>
                            <strong>Sally:</strong>
                            Do you enjoy playing sport, Ben?
                        </p>

                        <p>
                            <strong>Ben:</strong>
                            Yes I do. I love playing sport.
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
                        <strong>Sally:</strong>
                    </p>

                    <input
                        id="t3-task3-${index}"
                        class="qm-input"
                        type="text"
                        placeholder="Write Sally's question here..."
                    >

                    <div class="qm-answer">

                        <strong>Ben:</strong>
                        ${escapeHTML(item.answer)}

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
                        id="t3-task3-feedback-${index}"
                    ></div>

                </div>

            `;

        });


        html += `

                    <div
                        id="t3-task3-total"
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
                        Task 5 — Anna Writes to Granny
                    </h2>

                    <p class="qm-task-description qm-blue">
                        Anna writes to Granny about her day in town.
                        Fill in the missing words.
                        Use the verbs in the box below but don’t forget
                        to change them to the PAST TENSE because the visit
                        to town is finished. The first one is an example.
                    </p>

                    <div class="qm-example">

                        <strong>💡 How to do Task 5</strong>

                        <p>
                            Hãy quan sát từ ngay bên cạnh chỗ trống,
                            đọc ngữ cảnh của cả câu và chú ý các cụm
                            động từ. Sau đó xác định động từ phù hợp
                            và đổi sang Past Simple.
                        </p>

                    </div>

                    <div class="qm-word-bank qm-blue">

                        buy &nbsp;&nbsp;
                        be &nbsp;&nbsp;
                        give &nbsp;&nbsp;
                        watch &nbsp;&nbsp;
                        sit &nbsp;&nbsp;
                        take &nbsp;&nbsp;
                        decide &nbsp;&nbsp;
                        laugh &nbsp;&nbsp;
                        meet &nbsp;&nbsp;
                        go &nbsp;&nbsp;
                        eat

                    </div>


                    <div class="qm-question">

                        <p class="qm-blue">
                            Dear Granny
                        </p>

                        <p class="qm-blue">

                            Yesterday (example)
                            <strong>was</strong>
                            the fourth day of the holidays.

                            Mum made us a picnic for lunch and then
                            Sally, Ben and I

                            <input
                                id="t3-task5-0"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(1)"
                            >

                            into town for the day.

                        </p>


                        <p class="qm-blue">

                            We

                            <input
                                id="t3-task5-1"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(2)"
                            >

                            the bus into the town centre and then we

                            <input
                                id="t3-task5-2"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(3)"
                            >

                            to go shopping.

                        </p>


                        <p class="qm-blue">

                            Sally and I

                            <input
                                id="t3-task5-3"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(4)"
                            >

                            some T shirts from C & A.

                        </p>


                        <p class="qm-blue">

                            After that we

                            <input
                                id="t3-task5-4"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(5)"
                            >

                            a picnic in the park.

                        </p>


                        <p class="qm-blue">

                            A big brown fox

                            <input
                                id="t3-task5-5"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(6)"
                            >

                            right next to us.

                        </p>


                        <p class="qm-blue">

                            It looked hungry so we

                            <input
                                id="t3-task5-6"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(7)"
                            >

                            it a chicken sandwich!

                        </p>


                        <p class="qm-blue">

                            He loved it! In the afternoon we

                            <input
                                id="t3-task5-7"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(8)"
                            >

                            a very funny show at the theatre.

                        </p>


                        <p class="qm-blue">

                            We all

                            <input
                                id="t3-task5-8"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(9)"
                            >

                            so much!

                        </p>


                        <p class="qm-blue">

                            After the show we

                            <input
                                id="t3-task5-9"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(10)"
                            >

                            some friends from school.

                            A brilliant day!

                        </p>


                        <p class="qm-blue">
                            Love Anna xxx
                        </p>

                    </div>


                    <button
                        type="button"
                        id="t3-check-task5"
                        class="qm-button"
                    >
                        Check Task 5
                    </button>


                    <div
                        id="t3-task5-total"
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
                        Task 6 — School Holidays
                    </h2>

                    <p class="qm-task-description qm-blue">
                        Now write about your school holidays.
                        Write about 50 words — about 10 words
                        in each space.
                    </p>

        `;


        task6.forEach(function(item, index) {

            html += `

                <div class="qm-question">

                    <div class="qm-number">
                        ${index + 1}. ${escapeHTML(item.starter)}
                    </div>

                    <div class="qm-example">

                        <span>💡 Gợi ý:</span>

                        <br>

                        ${escapeHTML(item.hint)}

                    </div>

                    <textarea
                        id="t3-task6-${index}"
                        class="qm-input qm-textarea"
                        placeholder="Write your answer here..."
                    ></textarea>

                    <div
                        id="t3-task6-sample-${index}"
                        style="display:none;"
                    ></div>

                </div>

            `;

        });


        html += `

                    <button
                        type="button"
                        id="t3-check-task6"
                        class="qm-button"
                    >
                        Check Task 6
                    </button>

                    <div
                        id="t3-task6-feedback"
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
                                `#t3-task3-${index}`
                            );

                        const feedback =
                            container.querySelector(
                                `#t3-task3-feedback-${index}`
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
                    "#t3-task3-total"
                );

            total.textContent =
                `Task 3 Score: ${score}/15 marks`;

        }


        /* =================================================
           TASK 5 CHECK
        ================================================= */

        container
            .querySelector("#t3-check-task5")
            .addEventListener(
                "click",
                function() {

                    let score = 0;


                    task5.forEach(function(item, index) {

                        const input =
                            container.querySelector(
                                `#t3-task5-${index}`
                            );


                        const old =
                            container.querySelector(
                                `#t3-task5-feedback-${index}`
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
                            `t3-task5-feedback-${index}`;


                        if (user === correct) {

                            score += 1.5;

                            feedback.className =
                                "qm-feedback qm-correct";

                            feedback.innerHTML = `

                                ✓ Correct!
                                <span>
                                    1.5/1.5 marks
                                </span>

                                <div class="qm-explanation">

                                    Đáp án: ${escapeHTML(item.answer)}

                                    <div class="qm-clue">

                                        Gợi ý: ${escapeHTML(item.clue)}

                                    </div>

                                    <p>
                                        Giải thích:
                                        ${escapeHTML(item.why)}
                                    </p>

                                    <p>
                                        Cụm từ quan trọng:
                                        ${escapeHTML(item.phrase)}
                                    </p>

                                </div>

                            `;

                        } else {

                            feedback.className =
                                "qm-feedback qm-wrong";

                            feedback.innerHTML = `

                                ✗ Try again.

                                <div class="qm-explanation">

                                    Đáp án: ${escapeHTML(item.answer)}

                                    <div class="qm-clue">

                                        Gợi ý: ${escapeHTML(item.clue)}

                                    </div>

                                    <p>
                                        Giải thích:
                                        ${escapeHTML(item.why)}
                                    </p>

                                    <p>
                                        Cụm từ quan trọng:
                                        ${escapeHTML(item.phrase)}
                                    </p>

                                </div>

                            `;

                        }


                        input
                            .parentNode
                            .appendChild(feedback);

                    });


                    const total =
                        container.querySelector(
                            "#t3-task5-total"
                        );


                    total.innerHTML =
                        `Task 5 Score: ${score}/15 marks`;

                }
            );


        /* =================================================
           TASK 6 CHECK
        ================================================= */

        container
            .querySelector("#t3-check-task6")
            .addEventListener(
                "click",
                function() {

                    let completed = 0;


                    task6.forEach(function(item, index) {

                        const input =
                            container.querySelector(
                                `#t3-task6-${index}`
                            );

                        const sample =
                            container.querySelector(
                                `#t3-task6-sample-${index}`
                            );


                        if (
                            input.value.trim() !== ""
                        ) {

                            completed++;

                        }


                        sample.innerHTML = `

                            <div class="qm-sample">

                                <span>
                                    💡 Sample answer:
                                </span>

                                <p>
                                    ${escapeHTML(item.sample)}
                                </p>

                                <p class="qm-small-note">

                                    Giải thích:
                                    ${escapeHTML(item.explanation)}

                                </p>

                            </div>

                        `;

                        sample.style.display =
                            "block";

                    });


                    const feedback =
                        container.querySelector(
                            "#t3-task6-feedback"
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

                                Sample answers have been shown
                                to help you.

                            </div>

                        `;

                    }

                }
            );

    }

};
