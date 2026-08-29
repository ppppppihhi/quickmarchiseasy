/* =====================================================
   QUICKMARCH PRACTICE
   WRITING TEST 02
   Pearson VS Gia su Minh Tri Thu Duc
===================================================== */

window.QUICKMARCH_TEST = {

    title: "Writing Test 02",/* =====================================================
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

            .qm-explanation {
                margin-top: 10px;
                padding: 12px;
                background: #f7faf8;
                border-radius: 8px;
                color: #53655b;
                font-weight: 400;
            }

            /*
               Task 5:
               Các phần sau Check đều không in đậm.
            */

            .qm-explanation > div {
                margin-bottom: 10px;
                font-weight: 400;
            }

            .qm-explanation > div:last-child {
                margin-bottom: 0;
            }

            .qm-clue {
                margin-top: 8px;
                padding: 9px 11px;
                background: #eef5f0;
                border-radius: 7px;
                font-weight: 400;
            }

            .qm-word-bank {
                background: #f1f7f3;
                border: 1px solid #d8e6dc;
                border-radius: 9px;
                padding: 13px 15px;
                margin: 12px 0 16px;
                line-height: 2;
            }

            .qm-letter {
                background: #ffffff;
                border: 1px solid #dce7df;
                border-radius: 9px;
                padding: 18px;
                line-height: 2;
            }

            .qm-letter p {
                margin-bottom: 12px;
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

                .qm-letter {
                    padding: 13px;
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
                    "What do you think about living in the country, Mike?",
                    "What do you think of living in the country?",
                    "What do you think of living in the country, Mike?"
                ],

                explanation: `
                    Mike nói:
                    <strong>"living in the country is better than living in the city."</strong>
                    <br><br>
                    Câu trả lời đang thể hiện <strong>ý kiến</strong> của Mike.
                    Khi muốn hỏi ý kiến của một người, ta có thể dùng:
                    <strong>What do you think about...?</strong>
                    <br><br>
                    What do you think about living in the country?
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
                    "What is the best thing about living here for you?",
                    "What do you like best about living here?"
                ],

                explanation: `
                    Mike nói:
                    <strong>"the best thing about living here is fishing in the lake."</strong>
                    <br><br>
                    Câu trả lời cho biết <strong>điều Mike thích nhất</strong>
                    khi sống ở đây.
                    Vì vậy, ta có thể dùng:
                    <strong>What is the best thing...?</strong>
                    để hỏi điều tốt nhất hoặc điều thích nhất.
                    <br><br>
                    What is the best thing about living here?
                    <br>
                    = Điều tuyệt vời nhất khi sống ở đây là gì?
                `
            },


            {
                answer:
                    "I usually go fishing two or three times a week.",

                acceptedQuestions: [
                    "How often do you go fishing?",
                    "How often do you go fishing, Mike?"
                ],

                explanation: `
                    Hãy chú ý cụm:
                    <strong>"two or three times a week"</strong>.
                    <br><br>
                    Cụm này cho biết <strong>tần suất</strong> một hoạt động xảy ra.
                    Khi câu trả lời cho biết một việc xảy ra bao nhiêu lần,
                    ta dùng:
                    <strong>How often</strong>.
                    <br><br>
                    How often do you go fishing?
                    <br>
                    = Bạn đi câu cá bao lâu một lần?
                `
            },


            {
                answer:
                    "This weekend? Yes, I’m going to go fishing on Saturday.",

                acceptedQuestions: [
                    "When are you going to go fishing?",
                    "When are you going to go fishing, Mike?",
                    "When are you going fishing?",
                    "When are you going fishing, Mike?"
                ],

                explanation: `
                    Câu trả lời có:
                    <strong>"on Saturday"</strong>.
                    <br><br>
                    Đây là thông tin về <strong>thời gian</strong>.
                    Khi muốn hỏi một người sẽ làm việc gì vào thời gian nào,
                    ta dùng <strong>When</strong>.
                    <br><br>
                    When are you going to go fishing?
                    <br>
                    = Bạn sẽ đi câu cá khi nào?
                `
            },


            {
                answer:
                    "Of course I can, Sophie. I’d love to teach you to fish!",

                acceptedQuestions: [
                    "Can you teach me to fish?",
                    "Can you teach me to fish, Mike?",
                    "Could you teach me to fish?",
                    "Could you teach me to fish, Mike?"
                ],

                explanation: `
                    Mike trả lời:
                    <strong>"Of course I can. I'd love to teach you to fish!"</strong>
                    <br><br>
                    Cụm <strong>"Of course I can"</strong> cho thấy Mike đồng ý
                    với một lời đề nghị hoặc yêu cầu.
                    Vì vậy câu hỏi phù hợp là câu hỏi với
                    <strong>Can you...?</strong> hoặc <strong>Could you...?</strong>
                    <br><br>
                    Can you teach me to fish?
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
                    "Ngay sau chỗ trống có từ “up” → cụm động từ “wake up”.",
                why:
                    "Câu có “this morning” và toàn bộ câu chuyện kể về một ngày đã kết thúc. Vì vậy cần dùng Past Simple. wake → woke.",
                phrase:
                    "woke up = đã thức dậy."
            },


            {
                answer: "ate",
                verb: "eat",
                clue:
                    "Sau chỗ trống là “them”. “Them” ở đây chỉ “sausage and eggs”.",
                why:
                    "Mẹ đã nấu sausage and eggs cho bữa sáng. Hành động hợp lý tiếp theo là mọi người ăn chúng. eat là động từ phù hợp và Past Simple của eat là ate.",
                phrase:
                    "ate them = đã ăn chúng."
            },


            {
                answer: "took",
                verb: "take",
                clue:
                    "Sau chỗ trống là “our swimming things and a picnic into our bags”.",
                why:
                    "Ngữ cảnh cho biết mọi người chuẩn bị đồ để đi đến hồ. Cụm “take ... into our bags” phù hợp với ý mang đồ vào túi. Vì sự việc đã xảy ra nên take → took.",
                phrase:
                    "took ... into our bags = đã mang ... vào túi."
            },


            {
                answer: "wore",
                verb: "wear",
                clue:
                    "Sau chỗ trống là “a hat all the time”.",
                why:
                    "Ta chú ý đến cụm “a hat”. Động từ phù hợp là wear: wear a hat = đội mũ. Vì câu chuyện ở quá khứ nên wear → wore.",
                phrase:
                    "wore a hat = đã đội mũ."
            },


            {
                answer: "knocked",
                verb: "knock",
                clue:
                    "Sau chỗ trống là “on Mike’s door”.",
                why:
                    "Cụm “knock on the door” có nghĩa là gõ cửa. Đây là một hành động đã xảy ra trước khi mọi người đi đến hồ. Vì vậy knock → knocked.",
                phrase:
                    "knocked on Mike’s door = đã gõ cửa nhà Mike."
            },


            {
                answer: "swam",
                verb: "swim",
                clue:
                    "Câu có “to the middle of the lake”, cho biết Dad di chuyển đến giữa hồ bằng cách bơi.",
                why:
                    "Ngữ cảnh nói Dad bơi đến giữa hồ. Động từ phù hợp là swim. Vì hành động đã xảy ra nên dùng Past Simple: swim → swam.",
                phrase:
                    "swam to the middle of the lake = đã bơi đến giữa hồ."
            },


            {
                answer: "took",
                verb: "take",
                clue:
                    "Sau chỗ trống là “a sailing boat onto the lake”.",
                why:
                    "Anna và người kể chuyện đưa một chiếc thuyền buồm ra hồ cùng với giáo viên Sarah. Động từ phù hợp là take. Vì sự việc đã xảy ra nên take → took.",
                phrase:
                    "took a sailing boat onto the lake = đã đưa một chiếc thuyền buồm ra hồ."
            },


            {
                answer: "gave",
                verb: "give",
                clue:
                    "Sau chỗ trống là “us a lesson for an hour”.",
                why:
                    "Cụm “give someone a lesson” có nghĩa là dạy cho ai một buổi học. Sarah là giáo viên và cô ấy dạy họ trong một giờ. Vì vậy give → gave.",
                phrase:
                    "gave us a lesson = đã dạy chúng tôi một buổi học."
            },


            {
                answer: "showed",
                verb: "show",
                clue:
                    "Sau chỗ trống là “us how to turn the boat around”.",
                why:
                    "Cấu trúc “show someone how to do something” có nghĩa là chỉ cho ai cách làm một việc. Sarah chỉ cho họ cách quay thuyền. Vì câu chuyện ở quá khứ nên show → showed.",
                phrase:
                    "showed us how to turn the boat around = đã chỉ cho chúng tôi cách quay thuyền."
            },


            {
                answer: "caught",
                verb: "catch",
                clue:
                    "Sau chỗ trống là “some fish”. Ngữ cảnh nói về hoạt động câu cá.",
                why:
                    "Cụm “catch fish” có nghĩa là bắt cá. Sophie và Mike đã bắt được cá trong ngày hôm đó. Đây là động từ bất quy tắc: catch → caught.",
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
           BUILD HTML
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

                        <strong>💡 How to do Task 5</strong>

                        <p>
                            Hãy quan sát từ ngay bên cạnh chỗ trống,
                            đọc ngữ cảnh của cả câu và chú ý các cụm
                            động từ. Sau đó xác định động từ phù hợp
                            và đổi sang Past Simple.
                        </p>

                        <p>
                            Ví dụ:
                            <strong>wake + up → woke up</strong>.
                            Từ “up” đứng ngay sau chỗ trống giúp em
                            nhận ra cụm động từ “wake up”.
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


                    <div class="qm-letter">

                        <p>
                            Dear Grandpa
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
                            Love<br>
                            Ben
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

                                    <div
                                        class="qm-explanation"
                                        style="
                                            margin-top:10px;
                                            border-left:4px solid #0000EE;
                                        "
                                    >

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

                                    ${escapeHTML(
                                        task3[index]
                                            .acceptedQuestions[0]
                                    )}?

                                    <div
                                        class="qm-explanation"
                                        style="
                                            margin-top:10px;
                                            border-left:4px solid #0000EE;
                                        "
                                    >

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
                                document.createElement("div");


                            feedback.id =
                                `t2-task5-feedback-${index}`;


                            /*
                               Correct answer
                            */

                            if (user === correct) {

                                score += 1.5;

                                feedback.className =
                                    "qm-feedback qm-correct";

                                feedback.innerHTML = `

                                    ✓ Correct! 1.5/1.5 marks

                                    <div class="qm-explanation">

                                        <div>
                                            Đáp án:
                                            ${item.verb}
                                            → ${item.answer}
                                        </div>

                                        <div class="qm-clue">

                                            Gợi ý:
                                            ${item.clue}

                                        </div>

                                        <div>
                                            Giải thích:
                                            ${item.why}
                                        </div>

                                        <div>
                                            Cụm từ quan trọng:
                                            ${item.phrase}
                                        </div>

                                    </div>

                                `;

                            }


                            /*
                               Wrong answer
                            */

                            else {

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

                                        <div>
                                            Giải thích:
                                            ${item.why}
                                        </div>

                                        <div>
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


            /* =============================================
               BLUE EXAM CONTENT
            ============================================= */

            .qm-problem-text {
                color: rgb(0, 0, 238);
                font-weight: 700;
            }


            .qm-example {
                background: #f1f7f3;
                border-left: 4px solid #8db59b;
                border-radius: 8px;
                padding: 12px 15px;
                margin: 12px 0 16px;
            }


            /* =============================================
               QUESTIONS
            ============================================= */

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


            /* =============================================
               INPUT
            ============================================= */

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
                box-shadow:
                    0 0 0 2px rgba(130,169,146,.15);
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


            /* =============================================
               BUTTON
            ============================================= */

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


            /* =============================================
               GENERAL FEEDBACK
            ============================================= */

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
               TASK 3 EXPLANATION
            ============================================= */

            .qm-task3-explanation {
                margin-top: 12px;
                padding: 12px 14px;
                background: #f5f7f8;
                border-radius: 8px;
                border-left: 3px solid #9baeb8;
                color: #53655b;
            }


            /* =============================================
               TASK 5
               NEW FEEDBACK DESIGN
            ============================================= */
            /* =================================================
   TASK 5 FEEDBACK
================================================= */

if (user === correct) {

    score += 1.5;

    feedback.className =
        "qm-feedback qm-correct";

    feedback.innerHTML = `

        ✓ Correct! 1.5/1.5 marks

        <div class="qm-explanation">

            <div>
                Đáp án:
                ${item.verb} → ${item.answer}
            </div>

            <div class="qm-clue">

                Gợi ý:
                ${item.clue}

            </div>

            <div>
                Giải thích:
                ${item.why}
            </div>

            <div>
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

            <div>
                Giải thích:
                ${item.why}
            </div>

            <div>
                Cụm từ quan trọng:
                ${item.phrase}
            </div>

        </div>

    `;

}


            /* =============================================
               WORD BANK
            ============================================= */

            .qm-word-bank {
                background: #f1f7f3;
                border: 1px solid #d8e6dc;
                border-radius: 9px;
                padding: 13px 15px;
                margin: 12px 0 16px;
                line-height: 2;
            }


            /* =============================================
               TOTAL
            ============================================= */

            .qm-total {
                margin-top: 15px;
                padding: 13px 15px;
                border-radius: 9px;
                background: #eaf4ed;
                color: #315b45;
                font-weight: 700;
            }


            /* =============================================
               TASK 6 SAMPLE
            ============================================= */

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


            /* =============================================
               MOBILE
            ============================================= */

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
                    "What do you think about living in the country, Mike?",
                    "What do you think of living in the country?",
                    "What do you think of living in the country, Mike?",
                    "Do you think living in the country is better than living in the city?",
                    "Do you think living in the country is better than living in the city, Mike?"
                ],

                explanation:
                    "Mike đang đưa ra ý kiến về việc sống ở nông thôn và thành phố. Khi muốn hỏi ý kiến của một người, ta có thể dùng cấu trúc “What do you think about...?” hoặc “What do you think of...?”"

            },


            {
                answer:
                    "For me, the best thing about living here is fishing in the lake.",

                acceptedQuestions: [
                    "What is the best thing about living here?",
                    "What is the best thing about living here, Mike?",
                    "What is the best thing about living in the country?",
                    "What is the best thing about living in the country, Mike?"
                ],

                explanation:
                    "Mike nói “the best thing about living here is fishing in the lake”. Vì câu trả lời cho biết điều tốt nhất mà Mike thích ở nơi này, ta dùng “What” để hỏi về sự việc hoặc hoạt động đó."

            },


            {
                answer:
                    "I usually go fishing two or three times a week.",

                acceptedQuestions: [
                    "How often do you go fishing?",
                    "How often do you go fishing, Mike?",
                    "How often do you usually go fishing?",
                    "How often do you usually go fishing, Mike?"
                ],

                explanation:
                    "Cụm “two or three times a week” cho biết tần suất. Khi câu trả lời cho biết một hoạt động xảy ra bao nhiêu lần, ta dùng “How often” để hỏi."

            },


            {
                answer:
                    "This weekend? Yes, I’m going to go fishing on Saturday.",

                acceptedQuestions: [
                    "When are you going to go fishing?",
                    "When are you going to go fishing, Mike?",
                    "When are you going fishing?",
                    "When are you going fishing, Mike?",
                    "When are you going to fish?"
                ],

                explanation:
                    "Mike nói “on Saturday”. Đây là thời gian cụ thể của một kế hoạch trong tương lai. Vì vậy, ta dùng “When” để hỏi thời gian."

            },


            {
                answer:
                    "Of course I can, Sophie. I’d love to teach you to fish!",

                acceptedQuestions: [
                    "Can you teach me to fish?",
                    "Can you teach me how to fish?",
                    "Can you teach me to fish, Mike?",
                    "Could you teach me to fish?",
                    "Could you teach me how to fish?"
                ],

                explanation:
                    "Mike trả lời “Of course I can” và nói rằng anh ấy rất vui được dạy Sophie câu cá. Vì vậy câu hỏi phù hợp là “Can you...?” hoặc “Could you...?” để hỏi khả năng hoặc lời đề nghị."

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
                    "Từ “up” đứng ngay sau chỗ trống → cụm động từ “wake up”.",

                why:
                    "Cụm “this morning” cho biết hành động xảy ra vào buổi sáng của một ngày đã qua. Toàn bộ câu chuyện đang kể về một ngày đã kết thúc nên động từ phải ở Past Simple. Vì vậy: wake → woke.",

                phrase:
                    "woke up = đã thức dậy."

            },


            {
                answer: "ate",
                verb: "eat",

                clue:
                    "Từ “them” đứng ngay sau chỗ trống. “Them” ở đây thay cho “sausage and eggs”.",

                why:
                    "Mum đã nấu sausage and eggs for breakfast. Sau khi thức ăn được nấu xong, hành động hợp lý tiếp theo là mọi người ăn chúng. Vì câu chuyện kể lại sự việc đã xảy ra nên dùng Past Simple: eat → ate.",

                phrase:
                    "ate them = đã ăn chúng."

            },


            {
                answer: "took",
                verb: "take",

                clue:
                    "Sau chỗ trống là “our swimming things and a picnic into our bags”.",

                why:
                    "Ngữ cảnh cho biết mọi người đang chuẩn bị đồ để đi đến hồ. Cấu trúc “take ... into our bags” diễn tả việc mang đồ vào túi. Vì hành động đã xảy ra nên “take” phải chuyển sang Past Simple.",

                phrase:
                    "took ... into our bags = đã mang ... vào túi."

            },


            {
                answer: "wore",
                verb: "wear",

                clue:
                    "Sau chỗ trống là “a hat all the time”.",

                why:
                    "Ta nhận ra cụm “wear a hat” = đội/mang mũ. Câu chuyện kể về một ngày đã qua nên cần dùng Past Simple. Động từ “wear” là bất quy tắc: wear → wore.",

                phrase:
                    "wore a hat = đã đội mũ."

            },


            {
                answer: "knocked",
                verb: "knock",

                clue:
                    "Sau chỗ trống là “on Mike’s door”.",

                why:
                    "Cụm “knock on the door” có nghĩa là gõ cửa. Đây là hành động đã xảy ra trước khi mọi người đi đến hồ. Vì vậy dùng Past Simple: knock → knocked.",

                phrase:
                    "knocked on Mike’s door = đã gõ cửa nhà Mike."

            },


            {
                answer: "swam",
                verb: "swim",

                clue:
                    "Câu “Dad ___ to the middle of the lake” cho biết Dad di chuyển đến giữa hồ bằng cách bơi.",

                why:
                    "Ngữ cảnh nói về hoạt động ở hồ và câu cho biết Dad đi đến giữa hồ bằng cách bơi. Vì vậy động từ phù hợp là “swim”. Đây là động từ bất quy tắc: swim → swam.",

                phrase:
                    "swam to the middle of the lake = đã bơi đến giữa hồ."

            },


            {
                answer: "took",
                verb: "take",

                clue:
                    "Sau chỗ trống là “a sailing boat onto the lake”.",

                why:
                    "Anna và người kể chuyện đưa một chiếc thuyền buồm ra hồ cùng với giáo viên Sarah. Cấu trúc “take a sailing boat onto the lake” phù hợp với ngữ cảnh. Vì sự việc đã xảy ra nên take → took.",

                phrase:
                    "took a sailing boat onto the lake = đã đưa một chiếc thuyền buồm ra hồ."

            },


            {
                answer: "gave",
                verb: "give",

                clue:
                    "Sau chỗ trống là “us a lesson for an hour”.",

                why:
                    "Cấu trúc “give someone a lesson” có nghĩa là dạy cho ai một buổi học. Sarah là giáo viên nên cô ấy “gave us a lesson”. Vì hành động đã xảy ra nên give → gave.",

                phrase:
                    "gave us a lesson = đã dạy chúng tôi một buổi học."

            },


            {
                answer: "showed",
                verb: "show",

                clue:
                    "Sau chỗ trống là “us how to turn the boat around”.",

                why:
                    "Cấu trúc “show someone how to do something” có nghĩa là chỉ cho ai cách làm một việc gì. Sarah chỉ cho họ cách quay thuyền. Vì sự việc đã xảy ra trong quá khứ nên show → showed.",

                phrase:
                    "showed us how to turn the boat around = đã chỉ cho chúng tôi cách quay thuyền."

            },


            {
                answer: "caught",
                verb: "catch",

                clue:
                    "Câu nói “some fish” cho biết Sophie và Mike đã bắt được cá.",

                why:
                    "Ngữ cảnh nói về hoạt động câu cá ở hồ. Cụm “catch fish” có nghĩa là bắt cá. Đây là hành động đã xảy ra nên dùng Past Simple. “Catch” là động từ bất quy tắc: catch → caught.",

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
                    "Nêu một hoạt động em thường thỉnh thoảng làm cùng bạn bè."

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
           BUILD HTML
        ================================================= */

        let html = `

            <div class="qm-writing">


                <!-- =========================================
                     TASK 3
                ========================================== -->

                <section class="qm-task">

                    <h2 class="qm-task-title">
                        Task 3 — Sophie Asks Mike Some Questions
                    </h2>


                    <p class="qm-task-description qm-problem-text">
                        The Brown family are staying in Danny’s house.
                        Sophie talks to the neighbour, Mike.
                        She asks him some questions.
                        Write her questions in the spaces.
                        The first one is an example.
                    </p>


                    <div class="qm-example qm-problem-text">

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


                <!-- =========================================
                     TASK 5
                ========================================== -->

                <section class="qm-task">

                    <h2 class="qm-task-title">
                        Task 5 — Ben Writes to Grandpa
                    </h2>


                    <p class="qm-task-description qm-problem-text">

                        Ben writes a card to Grandpa about the family’s
                        day by the lake. Fill in the missing words.
                        Use the verbs in the box below but don’t forget
                        to change them to the PAST TENSE because the day
                        is finished. The first one is an example.

                    </p>


                    <div class="qm-example">

                        <strong>💡 Cách làm Task 5</strong>

                        <p>
                            Hãy quan sát từ ngay bên cạnh chỗ trống,
                            đọc ngữ cảnh của cả câu và chú ý các cụm
                            động từ.
                        </p>

                        <p>
                            Sau đó xác định động từ phù hợp và đổi
                            động từ đó sang Past Simple.
                        </p>

                    </div>


                    <div class="qm-word-bank qm-problem-text">

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


                    <!-- =====================================
                         ORIGINAL LETTER
                    ====================================== -->

                    <div class="qm-question qm-problem-text">

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


                <!-- =========================================
                     TASK 6
                ========================================== -->

                <section class="qm-task">

                    <h2 class="qm-task-title">
                        Task 6 — My Weekends
                    </h2>


                    <p class="qm-task-description qm-problem-text">

                        Now write about your weekends.
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

                        <strong>💡 Gợi ý:</strong>

                        <br>

                        ${escapeHTML(item.hint)}

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
            .querySelectorAll(
                '[data-action="check-task3"]'
            )
            .forEach(function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        const index =
                            Number(
                                button.dataset.index
                            );


                        const input =
                            container.querySelector(
                                `#t2-task3-${index}`
                            );


                        const feedback =
                            container.querySelector(
                                `#t2-task3-feedback-${index}`
                            );


                        const user =
                            normalize(
                                input.value
                            );


                        const accepted =
                            task3[index]
                                .acceptedQuestions
                                .map(normalize);


                        if (!user) {

                            task3Scores[index] =
                                false;


                            feedback.innerHTML = `

                                <div class="qm-feedback qm-wrong">

                                    Please write a question.

                                </div>

                            `;


                            updateTask3Total();

                            return;

                        }


                        if (
                            accepted.includes(user)
                        ) {

                            task3Scores[index] =
                                true;


                            feedback.innerHTML = `

                                <div class="qm-feedback qm-correct">

                                    ✓ Correct!
                                    <strong>3/3 marks</strong>

                                </div>


                                <div class="qm-task3-explanation">

                                    <strong>
                                        💡 Giải thích:
                                    </strong>

                                    <br><br>

                                    ${task3[index].explanation}

                                </div>

                            `;

                        } else {

                            task3Scores[index] =
                                false;


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

                                </div>


                                <div class="qm-task3-explanation">

                                    <strong>
                                        💡 Giải thích:
                                    </strong>

                                    <br><br>

                                    ${task3[index].explanation}

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
           NEW FEEDBACK
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
                                normalize(
                                    input.value
                                );


                            const correct =
                                normalize(
                                    item.answer
                                );


                            const feedback =
                                document.createElement(
                                    "div"
                                );


                            feedback.id =
                                `t2-task5-feedback-${index}`;


                            feedback.className =
                                "qm-task5-feedback";


                            /* =================================
                               CORRECT
                            ================================= */

                            if (
                                user === correct
                            ) {

                                score += 1.5;


                                feedback.innerHTML = `

                                    <div class="qm-task5-result correct">

                                        ✓ Correct!
                                        <span style="font-weight:400;">
                                            — 1.5/1.5 marks
                                        </span>

                                    </div>


                                    <div class="qm-task5-answer">

                                        <strong>
                                            Đáp án:
                                        </strong>

                                        <br>

                                        <span class="qm-task5-verb">
                                            ${escapeHTML(item.answer)}
                                        </span>

                                    </div>


                                    <div class="qm-task5-hint">

                                        <strong>
                                            🔎 Gợi ý:
                                        </strong>

                                        <br>

                                        ${escapeHTML(item.clue)}

                                    </div>


                                    <div class="qm-task5-explanation">

                                        <strong>
                                            💡 Giải thích:
                                        </strong>

                                        <br><br>

                                        ${escapeHTML(item.why)}

                                        <br><br>

                                        <span class="qm-task5-verb">

                                            ${escapeHTML(item.verb)}
                                            → V2/ed:
                                            ${escapeHTML(item.answer)}

                                        </span>

                                    </div>


                                    <div class="qm-task5-phrase">

                                        <strong>
                                            Cụm từ quan trọng:
                                        </strong>

                                        <br>

                                        ${escapeHTML(item.phrase)}

                                    </div>

                                `;

                            }


                            /* =================================
                               WRONG
                            ================================= */

                            else {

                                feedback.innerHTML = `

                                    <div class="qm-task5-result wrong">

                                        ✗ Try again.

                                    </div>


                                    <div class="qm-task5-answer">

                                        <strong>
                                            Đáp án:
                                        </strong>

                                        <br>

                                        <span class="qm-task5-verb">
                                            ${escapeHTML(item.answer)}
                                        </span>

                                    </div>


                                    <div class="qm-task5-hint">

                                        <strong>
                                            🔎 Gợi ý:
                                        </strong>

                                        <br>

                                        ${escapeHTML(item.clue)}

                                    </div>


                                    <div class="qm-task5-explanation">

                                        <strong>
                                            💡 Vì sao?
                                        </strong>

                                        <br><br>

                                        ${escapeHTML(item.why)}

                                        <br><br>

                                        <span class="qm-task5-verb">

                                            ${escapeHTML(item.verb)}
                                            → V2/ed:
                                            ${escapeHTML(item.answer)}

                                        </span>

                                    </div>


                                    <div class="qm-task5-phrase">

                                        <strong>
                                            Cụm từ quan trọng:
                                        </strong>

                                        <br>

                                        ${escapeHTML(item.phrase)}

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
                                        ${escapeHTML(item.sample)}
                                    </p>


                                    <p class="qm-small-note">

                                        <strong>
                                            Giải thích:
                                        </strong>

                                        ${escapeHTML(
                                            item.explanation
                                        )}

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
