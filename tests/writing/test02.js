/* =====================================================
   QUICKMARCH PRACTICE
   WRITING TEST 02
   Pearson VS Gia su Minh Tri Thu Duc
===================================================== */

window.QUICKMARCH_TEST = {

    title: "Writing Test 02",

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

            /* =============================================
               TASK 5 FEEDBACK
            ============================================= */

            .qm-task5-feedback {
                margin-top: 10px;
                padding: 13px 15px;
                background: #f7f8fa;
                border: 1px solid #e0e4e8;
                border-radius: 8px;
                color: #53605a;
                line-height: 1.7;
            }

            .qm-task5-feedback.correct {
                background: #f3f8f4;
                border-color: #d4e4d8;
            }

            .qm-task5-feedback.wrong {
                background: #faf6f4;
                border-color: #e8ddd8;
            }

            .qm-task5-label {
                margin-top: 7px;
            }

            .qm-task5-answer {
                color: #315b45;
            }

            .qm-task5-hint {
                color: #5f7067;
            }

            .qm-task5-explanation {
                color: #53605a;
            }

            .qm-task5-phrase {
                color: #53605a;
            }

            .qm-task5-result {
                margin-bottom: 8px;
                color: #315b45;
            }

            .qm-task5-result.wrong {
                color: #805047;
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
                    "I think living in the country is better than living in the city.",

                acceptedQuestions: [

                    "What do you think about living in the country, Mike?",

                    "What do you think about living in the country?",

                    "What do you think of living in the country, Mike?",

                    "What do you think of living in the country?"

                ]
            },

            {
                answer:
                    "For me, the best thing about living here is fishing in the lake.",

                acceptedQuestions: [

                    "What is the best thing about living here, Mike?",

                    "What is the best thing about living here?",

                    "What is the best thing about living here for you, Mike?",

                    "What is the best thing about living here for you?"

                ]
            },

            {
                answer:
                    "I usually go fishing two or three times a week.",

                acceptedQuestions: [

                    "How often do you go fishing, Mike?",

                    "How often do you go fishing?"

                ]
            },

            {
                answer:
                    "This weekend? Yes, I’m going to go fishing on Saturday.",

                acceptedQuestions: [

                    "When are you going to go fishing, Mike?",

                    "When are you going to go fishing?",

                    "When will you go fishing, Mike?",

                    "When will you go fishing?"

                ]
            },

            {
                answer:
                    "Of course I can, Sophie. I’d love to teach you to fish!",

                acceptedQuestions: [

                    "Can you teach me to fish, Mike?",

                    "Can you teach me to fish?",

                    "Could you teach me to fish, Mike?",

                    "Could you teach me to fish?"

                ]
            }

        ];


        /* =================================================
           TASK 3 EXPLANATIONS
        ================================================= */

        const task3Explanations = [

            `
            Câu trả lời có ý kiến của Mike về việc sống ở
            nông thôn và thành phố. Vì vậy có thể dùng
            “What do you think about...?” để hỏi ý kiến.
            `,

            `
            Câu trả lời có cụm “the best thing”.
            Khi hỏi về điều gì là tốt nhất hoặc hoạt động
            nào là tốt nhất, ta có thể bắt đầu bằng “What”.
            `,

            `
            Câu trả lời có “two or three times a week”.
            Đây là thông tin về tần suất. Khi hỏi tần suất,
            ta dùng “How often”.
            `,

            `
            Câu trả lời có “on Saturday”, cho biết thời điểm
            Mike sẽ đi câu cá. Khi hỏi thời gian, ta dùng
            “When”.
            `,

            `
            Mike nói “I’d love to teach you to fish”.
            Sophie đang muốn Mike dạy mình câu cá, vì vậy
            câu hỏi phù hợp là “Can you teach me to fish?”
            `

        ];


        /* =================================================
           TASK 5 DATA
        ================================================= */

        const task5 = [

            {
                answer: "woke",

                verb: "wake",

                clue:
                    "Ngay sau chỗ trống có từ “up”.",

                why:
                    "Ta nhận ra cụm động từ “wake up” = thức dậy. Cụm “this morning” cho biết hành động đã xảy ra vào buổi sáng đã qua. Vì toàn bộ câu chuyện kể về một ngày đã kết thúc nên dùng Past Simple: wake → woke.",

                phrase:
                    "woke up = đã thức dậy."
            },

            {
                answer: "ate",

                verb: "eat",

                clue:
                    "Ngay sau chỗ trống có từ “them”. “Them” thay cho “sausage and eggs”.",

                why:
                    "Mẹ đã nấu sausage and eggs cho bữa sáng. Hành động hợp lý tiếp theo là mọi người ăn chúng. Động từ “eat” phải chuyển sang Past Simple: eat → ate.",

                phrase:
                    "ate them = đã ăn chúng."
            },

            {
                answer: "took",

                verb: "take",

                clue:
                    "Sau chỗ trống là “our swimming things and a picnic into our bags”.",

                why:
                    "Ngữ cảnh cho biết mọi người chuẩn bị đồ để đi đến hồ. Cấu trúc “take ... into our bags” cho biết họ mang đồ vào túi. Vì hành động đã xảy ra nên take → took.",

                phrase:
                    "took ... into our bags = đã mang ... vào túi."
            },

            {
                answer: "wore",

                verb: "wear",

                clue:
                    "Sau chỗ trống là “a hat all the time”.",

                why:
                    "Ta nhận ra cụm “wear a hat” = đội mũ. Vì câu chuyện kể về một ngày đã qua nên “wear” phải đổi sang Past Simple: wear → wore.",

                phrase:
                    "wore a hat = đã đội mũ."
            },

            {
                answer: "knocked",

                verb: "knock",

                clue:
                    "Ngay sau chỗ trống là “on Mike’s door”.",

                why:
                    "Đây là cụm động từ “knock on the door” = gõ cửa. Sau đó mọi người đi đến hồ nên hành động gõ cửa đã xảy ra trong quá khứ. Vì vậy: knock → knocked.",

                phrase:
                    "knocked on Mike’s door = đã gõ cửa nhà Mike."
            },

            {
                answer: "swam",

                verb: "swim",

                clue:
                    "Câu có cấu trúc “Dad ___ to the middle of the lake”.",

                why:
                    "Ngữ cảnh nói Dad di chuyển đến giữa hồ bằng cách bơi. Vì vậy động từ phù hợp là “swim”. Đây là động từ bất quy tắc nên Past Simple là swim → swam.",

                phrase:
                    "swam to the middle of the lake = đã bơi đến giữa hồ."
            },

            {
                answer: "took",

                verb: "take",

                clue:
                    "Sau chỗ trống là “a sailing boat onto the lake”.",

                why:
                    "Anna và người kể chuyện đưa một chiếc thuyền buồm ra hồ cùng với giáo viên Sarah. Động từ phù hợp là “take”. Vì hành động đã xảy ra nên take → took.",

                phrase:
                    "took a sailing boat onto the lake = đã đưa một chiếc thuyền buồm ra hồ."
            },

            {
                answer: "gave",

                verb: "give",

                clue:
                    "Sau chỗ trống là “us a lesson for an hour”.",

                why:
                    "Ta nhận ra cấu trúc “give someone a lesson” = dạy cho ai một buổi học. Sarah là giáo viên nên cô ấy đã dạy họ một buổi học. Vì vậy: give → gave.",

                phrase:
                    "gave us a lesson = đã dạy chúng tôi một buổi học."
            },

            {
                answer: "showed",

                verb: "show",

                clue:
                    "Sau chỗ trống là “us how to turn the boat around”.",

                why:
                    "Ta có cấu trúc “show someone how to do something” = chỉ cho ai cách làm một việc gì. Sarah đã chỉ cho họ cách quay thuyền. Vì vậy: show → showed.",

                phrase:
                    "showed us how to turn the boat around = đã chỉ cho chúng tôi cách quay thuyền."
            },

            {
                answer: "caught",

                verb: "catch",

                clue:
                    "Sau chỗ trống là “some fish”.",

                why:
                    "Ngữ cảnh đang nói về hoạt động câu cá ở hồ. Cụm “catch fish” = bắt cá. Vì câu chuyện kể về hành động đã xảy ra nên dùng Past Simple. Đây là động từ bất quy tắc: catch → caught.",

                phrase:
                    "caught some fish = đã bắt được một ít cá."
            }

        ];


        /* =================================================
           TASK 6 DATA
        ================================================= */

        const task6 = [

            {
                starter:
                    "At the weekend I like...",

                hint:
                    "What do you like doing at the weekend? Where do you go? Who do you go with?",

                sample:
                    "At the weekend I like playing football with my friends. We usually play in the park near my house.",

                explanation:
                    "Nêu hoạt động em thích làm vào cuối tuần và có thể nói thêm địa điểm hoặc người cùng tham gia."
            },

            {
                starter:
                    "Sometimes my friends and I...",

                hint:
                    "What do you sometimes do together?",

                sample:
                    "Sometimes my friends and I go cycling around the town. We have a lot of fun together.",

                explanation:
                    "Nêu một hoạt động em thỉnh thoảng làm cùng bạn bè."
            },

            {
                starter:
                    "Every weekend my family...",

                hint:
                    "What does your family usually do together?",

                sample:
                    "Every weekend my family has breakfast together and then we visit my grandparents.",

                explanation:
                    "Nêu một hoạt động mà gia đình em thường làm vào mỗi cuối tuần."
            },

            {
                starter:
                    "Last weekend...",

                hint:
                    "What did you do last weekend? Remember to use the past tense.",

                sample:
                    "Last weekend I went to the park with my family. We had a picnic and played games.",

                explanation:
                    "Nói về cuối tuần trước. Vì sự việc đã xảy ra nên chú ý sử dụng Past Simple."
            },

            {
                starter:
                    "Next Saturday...",

                hint:
                    "What are you going to do next Saturday?",

                sample:
                    "Next Saturday I am going to visit my grandparents. I am also going to play badminton with my cousin.",

                explanation:
                    "Nói về kế hoạch cho thứ Bảy tới. Có thể dùng “be going to” để nói về dự định."
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
                        Task 3 — Sophie Asks Mike Some Questions
                    </h2>

                    <p class="qm-task-description">
                        The Brown family are staying in Danny’s house.
                        Sophie talks to the neighbour, Mike.
                        She asks him some questions.
                        Write her questions in the spaces.
                        The first one is an example.
                    </p>

                    <div class="qm-example">

                        <strong>Example</strong>

                        <p>
                            <strong>Sophie:</strong>
                            When did you move into your house, Mike?
                        </p>

                        <p>
                            <strong>Mike:</strong>
                            Into this house? I moved here last year.
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
                        id="t2-task3-${index}"
                        class="qm-input"
                        type="text"
                        placeholder="Write Sophie's question here..."
                    >

                    <div class="qm-answer">

                        <strong>Mike:</strong>
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
                        id="t2-task3-feedback-${index}"
                    ></div>

                </div>

            `;

        });


        html += `

                    <div
                        id="t2-task3-total"
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
                        Task 5 — Ben Writes to Grandpa
                    </h2>

                    <p class="qm-task-description">
                        Ben writes a card to Grandpa about the family’s
                        day by the lake. Fill in the missing words.
                        Use the verbs in the box below but don’t forget
                        to change them to the PAST TENSE because the day
                        is finished. The first one is an example.
                    </p>

                    <div class="qm-example">

                        <strong>How to do Task 5</strong>

                        <p>
                            Hãy quan sát từ ngay bên cạnh chỗ trống,
                            đọc ngữ cảnh của cả câu và chú ý các cụm
                            động từ. Sau đó xác định động từ phù hợp
                            và đổi sang Past Simple.
                        </p>

                        <p>
                            Ví dụ:
                            <span>wake up</span>,
                            <span>knock on the door</span>,
                            <span>give someone a lesson</span>.
                        </p>

                    </div>

                    <div class="qm-word-bank">

                        <strong>Word bank:</strong><br>

                        put &nbsp;&nbsp;
                        swim &nbsp;&nbsp;
                        wake &nbsp;&nbsp;
                        give &nbsp;&nbsp;
                        catch &nbsp;&nbsp;
                        sleep &nbsp;&nbsp;
                        eat &nbsp;&nbsp;
                        take &nbsp;&nbsp;
                        knock &nbsp;&nbsp;
                        show &nbsp;&nbsp;
                        wear

                    </div>


                    <div class="qm-question">

                        <p>
                            <strong>Dear Grandpa</strong>
                        </p>

                        <p>
                            We (example)
                            <strong>slept</strong>
                            in Danny’s house last night.
                            It was lovely and sunny when we all

                            <input
                                id="t2-task5-0"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(1)"
                            >

                            up this morning.
                        </p>


                        <p>
                            Mum cooked sausage and eggs for breakfast
                            and we

                            <input
                                id="t2-task5-1"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(2)"
                            >

                            them at the table in the garden.
                        </p>


                        <p>
                            Then we

                            <input
                                id="t2-task5-2"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(3)"
                            >

                            our swimming things and a picnic into our bags.
                        </p>


                        <p>
                            Jack

                            <input
                                id="t2-task5-3"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(4)"
                            >

                            a hat all the time because the sun was quite hot.
                        </p>


                        <p>
                            We

                            <input
                                id="t2-task5-4"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(5)"
                            >

                            on Mike’s door, and then we all walked to the lake.
                        </p>


                        <p>
                            Dad

                            <input
                                id="t2-task5-5"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(6)"
                            >

                            to the middle of the lake.
                        </p>


                        <p>
                            Anna and I

                            <input
                                id="t2-task5-6"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(7)"
                            >

                            a sailing boat onto the lake with a sailing teacher, Sarah.
                        </p>


                        <p>
                            She

                            <input
                                id="t2-task5-7"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(8)"
                            >

                            us a lesson for an hour.
                        </p>


                        <p>
                            She

                            <input
                                id="t2-task5-8"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(9)"
                            >

                            us how to turn the boat around.
                        </p>


                        <p>
                            Sophie and Mike

                            <input
                                id="t2-task5-9"
                                class="qm-input qm-inline-input"
                                type="text"
                                placeholder="(10)"
                            >

                            some fish and we are going to cook them for dinner.
                        </p>


                        <p>
                            <strong>Love<br>Ben</strong>
                        </p>

                    </div>


                    <button
                        type="button"
                        id="t2-check-task5"
                        class="qm-button"
                    >
                        Check Task 5
                    </button>


                    <div
                        id="t2-task5-total"
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
                        Task 6 — My Weekends
                    </h2>

                    <p class="qm-task-description">
                        Now write about your weekends.
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

                        <strong>Gợi ý:</strong>

                        <br>

                        ${item.hint}

                    </div>

                    <textarea
                        id="t2-task6-${index}"
                        class="qm-input qm-textarea"
                        placeholder="Write your answer here..."
                    ></textarea>

                    <div
                        id="t2-task6-sample-${index}"
                        style="display:none;"
                    ></div>

                </div>

            `;

        });


        html += `

                    <button
                        type="button"
                        id="t2-check-task6"
                        class="qm-button"
                    >
                        Check Task 6
                    </button>

                    <div
                        id="t2-task6-feedback"
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
                                `#t2-task3-${index}`
                            );

                        const feedback =
                            container.querySelector(
                                `#t2-task3-feedback-${index}`
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

                                        <strong>Giải thích:</strong><br>

                                        ${task3Explanations[index]}

                                    </div>

                                </div>

                            `;

                        } else {

                            task3Scores[index] = false;

                            feedback.innerHTML = `

                                <div class="qm-feedback qm-wrong">

                                    ✗ Try again.

                                    <br><br>

                                    <strong>
                                        Suggested answer:
                                    </strong>

                                    ${task3[index]
                                        .acceptedQuestions[0]}

                                    <div class="qm-explanation">

                                        <strong>Giải thích:</strong><br>

                                        ${task3Explanations[index]}

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
                    "#t2-task3-total"
                );

            total.textContent =
                `Task 3 Score: ${score}/15 marks`;

        }


        /* =================================================
           TASK 5 CHECK
        ================================================= */

        container
            .querySelector("#t2-check-task5")
            .addEventListener(
                "click",
                function() {

                    let score = 0;


                    task5.forEach(
                        function(item, index) {

                            const input =
                                container.querySelector(
                                    `#t2-task5-${index}`
                                );


                            const old =
                                container.querySelector(
                                    `#t2-task5-feedback-${index}`
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
                                `t2-task5-feedback-${index}`;


                            if (user === correct) {

                                score += 1.5;

                                feedback.className =
                                    "qm-task5-feedback correct";

                                feedback.innerHTML = `

                                    <div class="qm-task5-result">
                                        ✓ Correct! 1.5/1.5 marks
                                    </div>

                                    <div class="qm-task5-label">
                                        Đáp án: 
                                        <span class="qm-task5-answer">
                                            ${item.answer}
                                        </span>
                                    </div>

                                    <div class="qm-task5-label">
                                        Gợi ý:
                                        <span class="qm-task5-hint">
                                            ${item.clue}
                                        </span>
                                    </div>

                                    <div class="qm-task5-label">
                                        Giải thích:
                                        <span class="qm-task5-explanation">
                                            ${item.why}
                                        </span>
                                    </div>

                                    <div class="qm-task5-label">
                                        Cụm từ quan trọng:
                                        <span class="qm-task5-phrase">
                                            ${item.phrase}
                                        </span>
                                    </div>

                                `;

                            } else {

                                feedback.className =
                                    "qm-task5-feedback wrong";

                                feedback.innerHTML = `

                                    <div class="qm-task5-result wrong">
                                        ✗ Try again.
                                    </div>

                                    <div class="qm-task5-label">
                                        Đáp án:
                                        <span class="qm-task5-answer">
                                            ${item.answer}
                                        </span>
                                    </div>

                                    <div class="qm-task5-label">
                                        Gợi ý:
                                        <span class="qm-task5-hint">
                                            ${item.clue}
                                        </span>
                                    </div>

                                    <div class="qm-task5-label">
                                        Giải thích:
                                        <span class="qm-task5-explanation">
                                            ${item.why}
                                        </span>
                                    </div>

                                    <div class="qm-task5-label">
                                        Cụm từ quan trọng:
                                        <span class="qm-task5-phrase">
                                            ${item.phrase}
                                        </span>
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
                            "#t2-task5-total"
                        );


                    total.innerHTML =
                        `Task 5 Score: ${score}/15 marks`;

                }

            );


        /* =================================================
           TASK 6 CHECK
        ================================================= */

        container
            .querySelector("#t2-check-task6")
            .addEventListener(
                "click",
                function() {

                    let completed = 0;


                    task6.forEach(
                        function(item, index) {

                            const input =
                                container.querySelector(
                                    `#t2-task6-${index}`
                                );

                            const sample =
                                container.querySelector(
                                    `#t2-task6-sample-${index}`
                                );


                            if (
                                input.value.trim() !== ""
                            ) {

                                completed++;

                            }


                            sample.innerHTML = `

                                <div class="qm-sample">

                                    <strong>
                                        Sample answer:
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
                            "#t2-task6-feedback"
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

                                Sample answers have been shown
                                to help you.

                            </div>

                        `;

                    }

                }

            );

    }

};
