
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

            /* =============================================
               ORIGINAL TEST CONTENT
               BLUE = rgb(0,0,238)
            ============================================= */

            .qm-original {
                color: rgb(0, 0, 238);
            }

            .qm-original strong {
                color: rgb(0, 0, 238);
            }

            /* =============================================
               TASK
            ============================================= */

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
                vertical-align: middle;
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

            .qm-letter {
                margin-top: 10px;
                padding: 16px;
                background: #ffffff;
                border: 1px solid #dce7df;
                border-radius: 9px;
            }

            .qm-letter p {
                margin: 0 0 13px;
            }

            .qm-letter p:last-child {
                margin-bottom: 0;
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
                    "What do you think about living in the country?",
                    "What do you think of living in the country?",
                    "Which do you think is better, living in the country or living in the city?",
                    "Do you think living in the country is better than living in the city?"
                ],

                explanation: `
                    Mike đang đưa ra <strong>ý kiến</strong>:
                    "living in the country is better than living in the city."
                    <br><br>
                    Khi câu trả lời thể hiện ý kiến của một người,
                    ta có thể dùng:
                    <strong>What do you think...?</strong>
                    <br><br>
                    <strong>What do you think about living in the country?</strong>
                    <br>
                    = Bạn nghĩ gì về việc sống ở nông thôn?
                `
            },

            {
                answer:
                    "For me, the best thing about living here is fishing in the lake.",

                acceptedQuestions: [
                    "What is the best thing about living here?",
                    "What is the best thing about living here, Mike?",
                    "What do you like best about living here?",
                    "What do you like most about living here?"
                ],

                explanation: `
                    Mike nói:
                    <strong>"the best thing about living here is fishing in the lake."</strong>
                    <br><br>
                    Câu trả lời cho biết <strong>điều tốt nhất</strong>
                    khi sống ở đây.
                    Vì vậy, ta dùng <strong>What</strong> để hỏi
                    "điều gì".
                    <br><br>
                    <strong>What is the best thing about living here?</strong>
                    <br>
                    = Điều tuyệt vời nhất khi sống ở đây là gì?
                `
            },

            {
                answer:
                    "I usually go fishing two or three times a week.",

                acceptedQuestions: [
                    "How often do you go fishing?",
                    "How often do you usually go fishing?",
                    "How often do you go fishing, Mike?"
                ],

                explanation: `
                    Hãy chú ý cụm:
                    <strong>"two or three times a week"</strong>.
                    <br><br>
                    Cụm này cho biết <strong>tần suất</strong>
                    của hoạt động.
                    Khi câu trả lời cho biết một việc xảy ra
                    bao nhiêu lần, ta dùng:
                    <strong>How often</strong>.
                    <br><br>
                    <strong>How often do you go fishing?</strong>
                    <br>
                    = Bạn đi câu cá bao lâu một lần?
                `
            },

            {
                answer:
                    "This weekend? Yes, I’m going to go fishing on Saturday.",

                acceptedQuestions: [
                    "When are you going to go fishing?",
                    "When are you going fishing?",
                    "When are you going to go fishing, Mike?",
                    "When will you go fishing?"
                ],

                explanation: `
                    Mike trả lời:
                    <strong>"on Saturday"</strong>.
                    <br><br>
                    "On Saturday" là thông tin về <strong>thời gian</strong>.
                    Khi muốn hỏi một hành động sẽ xảy ra
                    vào thời điểm nào, ta dùng:
                    <strong>When</strong>.
                    <br><br>
                    <strong>When are you going to go fishing?</strong>
                    <br>
                    = Bạn sẽ đi câu cá khi nào?
                `
            },

            {
                answer:
                    "Of course I can, Sophie. I’d love to teach you to fish!",

                acceptedQuestions: [
                    "Can you teach me to fish?",
                    "Can you teach me how to fish?",
                    "Could you teach me to fish?",
                    "Can you teach me to fish, Mike?"
                ],

                explanation: `
                    Mike trả lời:
                    <strong>"Of course I can."</strong>
                    <br><br>
                    Câu trả lời bắt đầu bằng <strong>can</strong>
                    và sau đó Mike nói:
                    <strong>"I'd love to teach you to fish."</strong>
                    <br><br>
                    Vì vậy Sophie đang hỏi về <strong>khả năng</strong>
                    Mike có thể dạy cô ấy câu cá hay không.
                    Ta dùng:
                    <strong>Can + subject + verb...?</strong>
                    <br><br>
                    <strong>Can you teach me to fish?</strong>
                    <br>
                    = Bạn có thể dạy tôi câu cá không?
                `
            }

        ];


        /* =================================================
           TASK 5 DATA
        ================================================= */

        const task5 = [

            {
                answer: "woke",
                verb: "wake",
                clue:
                    "Ngay sau chỗ trống là từ “up” → nhận ra cụm động từ “wake up”.",
                why:
                    "Câu có “this morning” và toàn bộ ngày trong lá thư đã xảy ra. Vì vậy cần Past Simple. wake là động từ bất quy tắc: wake → woke.",
                phrase:
                    "woke up = đã thức dậy."
            },

            {
                answer: "ate",
                verb: "eat",
                clue:
                    "Ngay sau chỗ trống là “them”. “Them” thay cho “sausage and eggs”.",
                why:
                    "Mẹ đã nấu sausage and eggs, vì vậy hành động tiếp theo hợp lý là mọi người ăn chúng. eat cần đổi sang Past Simple: eat → ate.",
                phrase:
                    "ate them = đã ăn chúng."
            },

            {
                answer: "took",
                verb: "take",
                clue:
                    "Sau chỗ trống là “our swimming things and a picnic into our bags”.",
                why:
                    "Ngữ cảnh cho biết mọi người chuẩn bị đồ để đi đến hồ. Cấu trúc “take ... into our bags” phù hợp với nghĩa mang đồ vào túi. take là động từ bất quy tắc: take → took.",
                phrase:
                    "took ... into our bags = đã mang ... vào túi."
            },

            {
                answer: "wore",
                verb: "wear",
                clue:
                    "Sau chỗ trống là “a hat all the time”.",
                why:
                    "Ta nhận ra cụm “wear a hat” = đội/mang mũ. Vì sự việc đã xảy ra trong ngày hôm đó nên dùng Past Simple: wear → wore.",
                phrase:
                    "wore a hat = đã đội mũ."
            },

            {
                answer: "knocked",
                verb: "knock",
                clue:
                    "Sau chỗ trống là “on Mike’s door”.",
                why:
                    "Cụm “knock on the door” = gõ cửa. Đây là một hành động đã xảy ra trước khi mọi người đi đến hồ. knock là động từ có quy tắc: knock → knocked.",
                phrase:
                    "knocked on Mike’s door = đã gõ cửa nhà Mike."
            },

            {
                answer: "swam",
                verb: "swim",
                clue:
                    "Sau chỗ trống là “to the middle of the lake”.",
                why:
                    "Ngữ cảnh cho biết Dad di chuyển đến giữa hồ bằng cách bơi. Động từ phù hợp là swim. Đây là động từ bất quy tắc: swim → swam.",
                phrase:
                    "swam to the middle of the lake = đã bơi đến giữa hồ."
            },

            {
                answer: "took",
                verb: "take",
                clue:
                    "Sau chỗ trống là “a sailing boat onto the lake”.",
                why:
                    "Anna và người kể chuyện đưa một chiếc thuyền buồm ra hồ cùng với giáo viên. Động từ phù hợp là take. Vì sự việc đã xảy ra: take → took.",
                phrase:
                    "took a sailing boat onto the lake = đã đưa một chiếc thuyền buồm ra hồ."
            },

            {
                answer: "gave",
                verb: "give",
                clue:
                    "Sau chỗ trống là “us a lesson for an hour”.",
                why:
                    "Cấu trúc “give someone a lesson” rất quan trọng. Sarah là giáo viên nên cô ấy dạy cho họ một buổi học. give là động từ bất quy tắc: give → gave.",
                phrase:
                    "gave us a lesson = đã dạy chúng tôi một buổi học."
            },

            {
                answer: "showed",
                verb: "show",
                clue:
                    "Sau chỗ trống là “us how to turn the boat around”.",
                why:
                    "Cấu trúc “show someone how to do something” = chỉ cho ai cách làm một việc gì. Sarah chỉ cho họ cách quay thuyền. show là động từ có quy tắc: show → showed.",
                phrase:
                    "showed us how to turn the boat around = đã chỉ cho chúng tôi cách quay thuyền."
            },

            {
                answer: "caught",
                verb: "catch",
                clue:
                    "Sau chỗ trống là “some fish”.",
                why:
                    "Ngữ cảnh đang nói về hoạt động câu cá. Cụm “catch fish” = bắt cá. catch là động từ bất quy tắc: catch → caught.",
                phrase:
                    "caught some fish = đã bắt được một ít cá."
            }

        ];


        /* =================================================
           TASK 6 DATA
        ================================================= */

        const task6 = [

            {
                starter: "At the weekend I like...",

                hint:
                    "What do you like doing at the weekend? Where do you go? Who do you go with?",

                sample:
                    "At the weekend I like playing football with my friends. We usually play in the park near my house.",

                explanation:
                    "Nêu hoạt động em thích làm vào cuối tuần. Em có thể nói thêm địa điểm hoặc người cùng tham gia."
            },

            {
                starter: "Sometimes my friends and I...",

                hint:
                    "What do you sometimes do together?",

                sample:
                    "Sometimes my friends and I go cycling around the town. We have a lot of fun together.",

                explanation:
                    "Nêu một hoạt động mà em và bạn bè thỉnh thoảng làm cùng nhau."
            },

            {
                starter: "Every weekend my family...",

                hint:
                    "What does your family usually do together?",

                sample:
                    "Every weekend my family has breakfast together and then we visit my grandparents.",

                explanation:
                    "Nêu một hoạt động gia đình thường làm vào mỗi cuối tuần."
            },

            {
                starter: "Last weekend...",

                hint:
                    "What did you do last weekend? Remember to use the past tense.",

                sample:
                    "Last weekend I went to the park with my family. We had a picnic and played games.",

                explanation:
                    "“Last weekend” cho biết thời gian trong quá khứ, vì vậy cần chú ý sử dụng Past Simple."
            },

            {
                starter: "Next Saturday...",

                hint:
                    "What are you going to do next Saturday?",

                sample:
                    "Next Saturday I am going to visit my grandparents. I am also going to play badminton with my cousin.",

                explanation:
                    "Nói về kế hoạch trong tương lai. Có thể dùng “be going to” để nói về dự định."
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

                    <div class="qm-original">

                        <p class="qm-task-description" style="color:rgb(0,0,238);">

                            The Brown family are staying in Danny’s house.
                            Sophie talks to the neighbour, Mike.
                            She asks him some questions.
                            Write her questions in the spaces.
                            The first one is an example.

                        </p>

                    </div>


                    <div class="qm-example">

                        <div class="qm-original">

                            <p>
                                <strong>Example</strong>
                            </p>

                            <p>
                                <strong>Sophie:</strong>
                                When did you move into your house, Mike?
                            </p>

                            <p>
                                <strong>Mike:</strong>
                                Into this house? I moved here last year.
                            </p>

                        </div>

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

                    <div class="qm-original qm-answer">

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

                    <div class="qm-original">

                        <p class="qm-task-description" style="color:rgb(0,0,238);">

                            Ben writes a card to Grandpa about the family’s
                            day by the lake. Fill in the missing words.
                            Use the verbs in the box below but don’t forget
                            to change them to the PAST TENSE because the day
                            is finished. The first one is an example.

                        </p>

                    </div>


                    <div class="qm-example">

                        <strong>💡 Cách làm Task 5</strong>

                        <p>
                            Hãy quan sát từ ngay bên cạnh chỗ trống,
                            đọc ngữ cảnh của cả câu và chú ý các cụm
                            động từ. Sau đó xác định động từ phù hợp
                            và đổi động từ đó sang Past Simple.
                        </p>

                        <p>
                            Đặc biệt chú ý những cụm như
                            <strong>wake up</strong>,
                            <strong>knock on the door</strong>,
                            <strong>give someone a lesson</strong>
                            và
                            <strong>show someone how to...</strong>
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


                    <!-- =================================
                         ORIGINAL LETTER
                    ================================== -->

                    <div class="qm-letter qm-original">

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

                    <div class="qm-original">

                        <p class="qm-task-description" style="color:rgb(0,0,238);">

                            Now write about your weekends.
                            Write about 50 words — about 10 words
                            in each space.

                        </p>

                    </div>

        `;


        task6.forEach(function(item, index) {

            html += `

                <div class="qm-question">

                    <div class="qm-number">
                        ${index + 1}.
                    </div>

                    <div class="qm-original">

                        <strong>
                            ${item.starter}
                        </strong>

                    </div>

                    <div class="qm-example">

                        <strong>💡 Gợi ý:</strong>

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

                                        <strong>
                                            💡 Giải thích:
                                        </strong>

                                        <br><br>

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

                                    <strong>
                                        Suggested answer:
                                    </strong>

                                    <br>

                                    ${escapeHTML(
                                        task3[index]
                                            .acceptedQuestions[0]
                                    )}

                                    <div class="qm-explanation">

                                        <strong>
                                            💡 Giải thích:
                                        </strong>

                                        <br><br>

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
                                document.createElement(
                                    "div"
                                );


                            feedback.id =
                                `t2-task5-feedback-${index}`;


                            if (user === correct) {

                                score += 1.5;

                                feedback.className =
                                    "qm-feedback qm-correct";

                                feedback.innerHTML = `

                                    ✓ Correct!
                                    <strong>
                                        1.5/1.5 marks
                                    </strong>

                                    <div class="qm-explanation">

                                        <strong>
                                            💡 Giải thích:
                                        </strong>

                                        <p>
                                            ${item.verb}
                                            → V2/ed:
                                            <strong>
                                                ${item.answer}
                                            </strong>.
                                        </p>

                                        <div class="qm-clue">

                                            <strong>
                                                🔎 Quan sát từ bên cạnh:
                                            </strong>

                                            ${item.clue}

                                        </div>

                                        <p>

                                            <strong>
                                                Vì sao chọn từ này?
                                            </strong>

                                            ${item.why}

                                        </p>

                                        <p>

                                            <strong>
                                                Cụm động từ quan trọng:
                                            </strong>

                                            ${item.phrase}

                                        </p>

                                    </div>

                                `;

                            } else {

                                feedback.className =
                                    "qm-feedback qm-wrong";

                                feedback.innerHTML = `

                                    ✗ Try again.

                                    <br><br>

                                    <strong>
                                        Đáp án:
                                    </strong>

                                    ${item.answer}

                                    <div class="qm-explanation">

                                        <strong>
                                            💡 Cách tìm đáp án:
                                        </strong>

                                        <p>
                                            ${item.verb}
                                            → V2/ed:
                                            <strong>
                                                ${item.answer}
                                            </strong>.
                                        </p>

                                        <div class="qm-clue">

                                            <strong>
                                                🔎 Quan sát từ bên cạnh:
                                            </strong>

                                            ${item.clue}

                                        </div>

                                        <p>

                                            <strong>
                                                Vì sao chọn từ này?
                                            </strong>

                                            ${item.why}

                                        </p>

                                        <p>

                                            <strong>
                                                Cụm động từ quan trọng:
                                            </strong>

                                            ${item.phrase}

                                        </p>

                                    </div>

                                `;

                            }


                            input
                                .parentNode
                                .appendChild(
                                    feedback
                                );

                        }
                    );


                    const total =
                        container.querySelector(
                            "#t2-task5-total"
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
                            "#t2-task6-feedback"
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
