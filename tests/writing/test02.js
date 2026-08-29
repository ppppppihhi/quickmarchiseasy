
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

            .qm-writing-02 {
                color: #37443d;
                font-family: "Segoe UI", Arial, sans-serif;
                line-height: 1.6;
            }

            .qm-writing-02 * {
                box-sizing: border-box;
            }

            /* =============================================
               ĐỀ BÀI - XANH DƯƠNG + IN ĐẬM
            ============================================= */

            .qm-writing-02 .qm-problem-text {
                color: rgb(0, 0, 238);
                font-weight: 700;
                line-height: 1.8;
            }

            .qm-writing-02 .qm-problem-text strong {
                color: rgb(0, 0, 238);
                font-weight: 700;
            }

            .qm-writing-02 .qm-task {
                background: #ffffff;
                border: 1px solid #dce7df;
                border-radius: 12px;
                padding: 20px;
                margin-bottom: 18px;
            }

            .qm-writing-02 .qm-task-title {
                color: #315b45;
                font-size: 22px;
                margin-bottom: 8px;
            }

            .qm-writing-02 .qm-task-description {
                color: rgb(0, 0, 238);
                font-weight: 700;
                font-size: 15px;
                margin-bottom: 16px;
                line-height: 1.7;
            }

            .qm-writing-02 .qm-example {
                background: #f1f7f3;
                border-left: 4px solid #8db59b;
                border-radius: 8px;
                padding: 12px 15px;
                margin: 12px 0 16px;
            }

            .qm-writing-02 .qm-question {
                border: 1px solid #dce7df;
                border-radius: 10px;
                padding: 15px;
                margin-top: 12px;
                background: #fbfdfc;
            }

            .qm-writing-02 .qm-number {
                color: #315b45;
                font-weight: 700;
                margin-bottom: 8px;
            }

            .qm-writing-02 .qm-answer {
                background: #f5f8f6;
                border-radius: 8px;
                padding: 10px 12px;
                margin: 10px 0;
            }

            .qm-writing-02 .qm-input {
                width: 100%;
                border: 1px solid #cbdad0;
                border-radius: 7px;
                padding: 10px 12px;
                font-family: inherit;
                font-size: 15px;
                outline: none;
                background: #ffffff;
            }

            .qm-writing-02 .qm-input:focus {
                border-color: #82a992;
                box-shadow: 0 0 0 2px rgba(130,169,146,.15);
            }

            .qm-writing-02 .qm-inline-input {
                width: 170px;
                display: inline-block;
                margin: 0 5px;
                vertical-align: middle;
            }

            .qm-writing-02 .qm-textarea {
                min-height: 110px;
                resize: vertical;
            }

            .qm-writing-02 .qm-button {
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

            .qm-writing-02 .qm-button:hover {
                background: #729b82;
            }

            .qm-writing-02 .qm-feedback {
                margin-top: 12px;
                padding: 12px 14px;
                border-radius: 8px;
                line-height: 1.65;
            }

            .qm-writing-02 .qm-correct {
                background: #eef8f0;
                border: 1px solid #c8e1ce;
                color: #315b45;
            }

            .qm-writing-02 .qm-wrong {
                background: #fff5f2;
                border: 1px solid #ecd3cc;
                color: #754d45;
            }

            .qm-writing-02 .qm-explanation {
                margin-top: 10px;
                padding: 12px;
                background: #f7faf8;
                border-radius: 8px;
                color: #53655b;
            }

            .qm-writing-02 .qm-clue {
                margin-top: 8px;
                padding: 8px 10px;
                background: #eef5f0;
                border-radius: 7px;
            }

            .qm-writing-02 .qm-word-bank {
                background: #f1f7f3;
                border: 1px solid #d8e6dc;
                border-radius: 9px;
                padding: 13px 15px;
                margin: 12px 0 16px;
                line-height: 2;
            }

            .qm-writing-02 .qm-total {
                margin-top: 15px;
                padding: 13px 15px;
                border-radius: 9px;
                background: #eaf4ed;
                color: #315b45;
                font-weight: 700;
            }

            .qm-writing-02 .qm-sample {
                margin-top: 12px;
                padding: 13px 15px;
                background: #f0f7ff;
                border-left: 4px solid #8aa9c7;
                border-radius: 8px;
            }

            .qm-writing-02 .qm-small-note {
                color: #748179;
                font-size: 14px;
            }

            @media (max-width: 600px) {

                .qm-writing-02 .qm-task {
                    padding: 15px;
                }

                .qm-writing-02 .qm-task-title {
                    font-size: 19px;
                }

                .qm-writing-02 .qm-inline-input {
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
                    "What do you think is better, living in the country or living in the city?",
                    "Which do you think is better, living in the country or living in the city?",
                    "Do you think living in the country is better than living in the city?"
                ],

                explanation: `
                    Mike nói:
                    <strong>"living in the country is better than living in the city."</strong>
                    <br><br>
                    Câu trả lời thể hiện <strong>ý kiến / quan điểm</strong>
                    của Mike về hai nơi sống.
                    Vì vậy, ta có thể dùng cấu trúc
                    <strong>What do you think...?</strong>
                    hoặc hỏi trực tiếp bằng <strong>Do you think...?</strong>
                    <br><br>
                    Ví dụ:
                    <strong>Do you think living in the country is better than living in the city?</strong>
                    <br>
                    = Bạn có nghĩ sống ở nông thôn tốt hơn sống ở thành phố không?
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
                    Câu trả lời cho biết <strong>điều Mike thích nhất</strong>
                    khi sống ở đây.
                    Vì vậy, dùng <strong>What</strong> để hỏi về điều đó.
                    <br><br>
                    Ví dụ:
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
                    "How many times a week do you go fishing?"
                ],

                explanation: `
                    Câu trả lời có cụm:
                    <strong>"two or three times a week"</strong>.
                    <br><br>
                    Đây là thông tin về <strong>tần suất</strong>,
                    tức là hoạt động xảy ra bao nhiêu lần.
                    Khi thấy các cụm như
                    <strong>every week, twice a week, three times a week</strong>,
                    hãy nghĩ đến <strong>How often</strong>.
                    <br><br>
                    Ví dụ:
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
                    "When will you go fishing?"
                ],

                explanation: `
                    Mike nói:
                    <strong>"on Saturday"</strong>.
                    <br><br>
                    <strong>On Saturday</strong> cho biết
                    <strong>thời điểm</strong> của hành động trong tương lai.
                    Khi câu trả lời cho biết ngày hoặc thời gian,
                    hãy nghĩ đến từ để hỏi <strong>When</strong>.
                    <br><br>
                    Ví dụ:
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
                    "Could you teach me how to fish?"
                ],

                explanation: `
                    Mike trả lời:
                    <strong>"Of course I can. I’d love to teach you to fish!"</strong>
                    <br><br>
                    Câu trả lời <strong>"Of course I can"</strong>
                    cho thấy Sophie đang hỏi Mike
                    <strong>có thể làm một việc gì đó hay không</strong>.
                    Vì vậy, câu hỏi phù hợp dùng <strong>Can</strong>
                    hoặc lịch sự hơn là <strong>Could</strong>.
                    <br><br>
                    Ví dụ:
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
                    "Ngay sau chỗ trống có từ “up” → cụm động từ “wake up”.",
                why:
                    "Cụm “wake up” có nghĩa là thức dậy. Từ “this morning” cho biết hành động đã xảy ra vào buổi sáng trong một ngày đã qua, vì vậy dùng Past Simple.",
                phrase:
                    "woke up = đã thức dậy."
            },

            {
                answer: "ate",
                verb: "eat",
                clue:
                    "Từ “them” đứng sau chỗ trống. “Them” chỉ “sausage and eggs”.",
                why:
                    "Mẹ đã nấu sausage and eggs cho bữa sáng, vì vậy hành động tiếp theo hợp lý là mọi người ăn chúng. Vì câu chuyện kể về một ngày đã kết thúc nên dùng Past Simple.",
                phrase:
                    "ate them = đã ăn chúng."
            },

            {
                answer: "took",
                verb: "take",
                clue:
                    "Sau chỗ trống là “our swimming things and a picnic into our bags”.",
                why:
                    "Ngữ cảnh cho biết mọi người chuẩn bị đồ để đi đến hồ. Động từ “take” phù hợp với ý mang đồ vào túi. Vì hành động đã xảy ra nên take → took.",
                phrase:
                    "took ... into our bags = đã mang ... vào túi."
            },

            {
                answer: "wore",
                verb: "wear",
                clue:
                    "Sau chỗ trống là “a hat all the time”.",
                why:
                    "Ta nhận ra cụm “wear a hat” = đội/mang mũ. Vì câu chuyện kể về một ngày đã qua nên wear phải đổi sang Past Simple.",
                phrase:
                    "wore a hat = đã đội mũ."
            },

            {
                answer: "knocked",
                verb: "knock",
                clue:
                    "Sau chỗ trống là “on Mike’s door”.",
                why:
                    "Cụm “knock on the door” có nghĩa là gõ cửa. Đây là hành động đã xảy ra trước khi mọi người đi đến hồ, nên dùng Past Simple: knock → knocked.",
                phrase:
                    "knocked on Mike’s door = đã gõ cửa nhà Mike."
            },

            {
                answer: "swam",
                verb: "swim",
                clue:
                    "Câu “Dad ___ to the middle of the lake” cho biết Dad di chuyển bằng cách bơi.",
                why:
                    "Ngữ cảnh nói Dad bơi đến giữa hồ. Động từ phù hợp là “swim”. Đây là động từ bất quy tắc nên Past Simple là swim → swam.",
                phrase:
                    "swam to the middle of the lake = đã bơi đến giữa hồ."
            },

            {
                answer: "took",
                verb: "take",
                clue:
                    "Sau chỗ trống là “a sailing boat onto the lake”.",
                why:
                    "Anna và người kể chuyện đưa một chiếc thuyền buồm ra hồ cùng với giáo viên. Động từ “take” phù hợp với ngữ cảnh. Vì hành động đã xảy ra: take → took.",
                phrase:
                    "took a sailing boat onto the lake = đã đưa một chiếc thuyền buồm ra hồ."
            },

            {
                answer: "gave",
                verb: "give",
                clue:
                    "Sau chỗ trống là “us a lesson for an hour”.",
                why:
                    "Cụm “give someone a lesson” có nghĩa là dạy/cho ai một buổi học. Sarah là giáo viên nên cô ấy “gave us a lesson”.",
                phrase:
                    "gave us a lesson = đã dạy chúng tôi một buổi học."
            },

            {
                answer: "showed",
                verb: "show",
                clue:
                    "Sau chỗ trống là “us how to turn the boat around”.",
                why:
                    "Cấu trúc “show someone how to do something” có nghĩa là chỉ cho ai cách làm một việc gì đó. Sarah chỉ cho họ cách quay thuyền. Vì ở quá khứ: show → showed.",
                phrase:
                    "showed us how to turn the boat around = đã chỉ cho chúng tôi cách quay thuyền."
            },

            {
                answer: "caught",
                verb: "catch",
                clue:
                    "Sau chỗ trống là “some fish”.",
                why:
                    "Ngữ cảnh nói về hoạt động câu cá ở hồ. Cụm “catch fish” = bắt cá. Đây là động từ bất quy tắc: catch → caught.",
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
                    "Em thích làm gì vào cuối tuần? Em đi đâu? Em đi với ai?",

                sample:
                    "At the weekend I like playing football with my friends. We usually play in the park near my house.",

                explanation:
                    "Nêu một hoạt động em thích làm vào cuối tuần. Có thể thêm địa điểm hoặc người cùng tham gia."
            },

            {
                starter:
                    "Sometimes my friends and I...",

                hint:
                    "Em và bạn bè thỉnh thoảng làm gì cùng nhau?",

                sample:
                    "Sometimes my friends and I go cycling around the town. We have a lot of fun together.",

                explanation:
                    "Nêu một hoạt động mà em và bạn bè thỉnh thoảng làm cùng nhau."
            },

            {
                starter:
                    "Every weekend my family...",

                hint:
                    "Gia đình em thường làm gì cùng nhau vào mỗi cuối tuần?",

                sample:
                    "Every weekend my family has breakfast together and then we visit my grandparents.",

                explanation:
                    "Nêu một hoạt động mà gia đình em thường làm vào mỗi cuối tuần."
            },

            {
                starter:
                    "Last weekend...",

                hint:
                    "Em đã làm gì cuối tuần trước? Hãy chú ý dùng Past Simple.",

                sample:
                    "Last weekend I went to the park with my family. We had a picnic and played games.",

                explanation:
                    "Last weekend nói về một thời điểm đã qua nên cần chú ý sử dụng Past Simple."
            },

            {
                starter:
                    "Next Saturday...",

                hint:
                    "Em dự định làm gì vào thứ Bảy tới?",

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

            <div class="qm-writing-02">

                <!-- =====================================
                     TASK 3
                ====================================== -->

                <section class="qm-task">

                    <h2 class="qm-task-title">
                        Task 3 — Sophie Asks Mike Some Questions
                    </h2>

                    <div class="qm-problem-text">

                        <p>
                            The Brown family are staying in Danny’s house.
                            Sophie talks to the neighbour, Mike.
                            She asks him some questions.
                            Write her questions in the spaces.
                            The first one is an example.
                        </p>

                    </div>


                    <div class="qm-example">

                        <div class="qm-problem-text">

                            <strong>Example</strong>

                            <p>
                                Sophie:
                                When did you move into your house, Mike?
                            </p>

                            <p>
                                Mike:
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

                    <div class="qm-problem-text">

                        <p>
                            Sophie:
                        </p>

                    </div>

                    <input
                        id="t02-task3-${index}"
                        class="qm-input"
                        type="text"
                        placeholder="Write Sophie's question here..."
                    >

                    <div class="qm-answer">

                        <div class="qm-problem-text">

                            <strong>Mike:</strong>
                            ${item.answer}

                        </div>

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
                        id="t02-task3-feedback-${index}"
                    ></div>

                </div>

            `;

        });


        html += `

                    <div
                        id="t02-task3-total"
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

                    <div class="qm-problem-text">

                        <p>
                            Ben writes a card to Grandpa about the family’s
                            day by the lake. Fill in the missing words.
                            Use the verbs in the box below but don’t forget
                            to change them to the PAST TENSE because the day
                            is finished. The first one is an example.
                        </p>

                    </div>


                    <div class="qm-example">

                        <div class="qm-problem-text">

                            <strong>💡 How to do Task 5</strong>

                            <p>
                                Hãy quan sát từ ngay bên cạnh chỗ trống,
                                đọc ngữ cảnh của cả câu và chú ý các cụm
                                động từ. Sau đó xác định động từ phù hợp
                                và đổi sang Past Simple.
                            </p>

                            <p>
                                Đặc biệt chú ý các cụm như
                                wake up,
                                knock on the door,
                                give someone a lesson...
                            </p>

                        </div>

                    </div>


                    <div class="qm-word-bank">

                        <div class="qm-problem-text">

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

                    </div>


                    <!-- =================================
                         DEAR GRANDPA
                    ================================== -->

                    <div class="qm-question">

                        <div class="qm-problem-text">

                            <p>
                                Dear Grandpa
                            </p>

                            <p>
                                We (example)
                                <strong>slept</strong>
                                in Danny’s house last night.
                                It was lovely and sunny when we all

                                <input
                                    id="t02-task5-0"
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
                                    id="t02-task5-1"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(2)"
                                >

                                them at the table in the garden.
                            </p>


                            <p>
                                Then we

                                <input
                                    id="t02-task5-2"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(3)"
                                >

                                our swimming things and a picnic into our bags.
                            </p>


                            <p>
                                Jack

                                <input
                                    id="t02-task5-3"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(4)"
                                >

                                a hat all the time because the sun was quite hot.
                            </p>


                            <p>
                                We

                                <input
                                    id="t02-task5-4"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(5)"
                                >

                                on Mike’s door, and then we all walked to the lake.
                            </p>


                            <p>
                                Dad

                                <input
                                    id="t02-task5-5"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(6)"
                                >

                                to the middle of the lake.
                            </p>


                            <p>
                                Anna and I

                                <input
                                    id="t02-task5-6"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(7)"
                                >

                                a sailing boat onto the lake with a sailing teacher, Sarah.
                            </p>


                            <p>
                                She

                                <input
                                    id="t02-task5-7"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(8)"
                                >

                                us a lesson for an hour.
                            </p>


                            <p>
                                She

                                <input
                                    id="t02-task5-8"
                                    class="qm-input qm-inline-input"
                                    type="text"
                                    placeholder="(9)"
                                >

                                us how to turn the boat around.
                            </p>


                            <p>
                                Sophie and Mike

                                <input
                                    id="t02-task5-9"
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

                    </div>


                    <button
                        type="button"
                        id="t02-check-task5"
                        class="qm-button"
                    >
                        Check Task 5
                    </button>


                    <div
                        id="t02-task5-total"
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

                    <div class="qm-problem-text">

                        <p>
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
                        <span class="qm-problem-text">
                            ${item.starter}
                        </span>
                    </div>


                    <div class="qm-example">

                        <div class="qm-problem-text">

                            <strong>💡 Gợi ý:</strong>

                            <br>

                            ${item.hint}

                        </div>

                    </div>


                    <textarea
                        id="t02-task6-${index}"
                        class="qm-input qm-textarea"
                        placeholder="Write your answer here..."
                    ></textarea>


                    <div
                        id="t02-task6-sample-${index}"
                        style="display:none;"
                    ></div>

                </div>

            `;

        });


        html += `

                    <button
                        type="button"
                        id="t02-check-task6"
                        class="qm-button"
                    >
                        Check Task 6
                    </button>

                    <div
                        id="t02-task6-feedback"
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
            .querySelectorAll(
                '[data-action="check-task3"]'
            )
            .forEach(function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        const index =
                            Number(button.dataset.index);

                        const input =
                            container.querySelector(
                                `#t02-task3-${index}`
                            );

                        const feedback =
                            container.querySelector(
                                `#t02-task3-feedback-${index}`
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

                                        <p>
                                            ${task3[index].explanation}
                                        </p>

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

                                        <p>
                                            ${task3[index].explanation}
                                        </p>

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
                    "#t02-task3-total"
                );

            total.textContent =
                `Task 3 Score: ${score}/15 marks`;

        }


        /* =================================================
           TASK 5 CHECK
        ================================================= */

        container
            .querySelector("#t02-check-task5")
            .addEventListener(
                "click",
                function() {

                    let score = 0;


                    task5.forEach(
                        function(item, index) {

                            const input =
                                container.querySelector(
                                    `#t02-task5-${index}`
                                );


                            const old =
                                container.querySelector(
                                    `#t02-task5-feedback-${index}`
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
                                `t02-task5-feedback-${index}`;


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
                                                🔎 Dấu hiệu:
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
                                                Cụm từ quan trọng:
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
                                                🔎 Dấu hiệu:
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
                                                Cụm từ quan trọng:
                                            </strong>

                                            ${item.phrase}

                                        </p>

                                    </div>

                                `;

                            }


                            input
                                .parentNode
                                .appendChild(feedback);

                        }
                    );


                    const total =
                        container.querySelector(
                            "#t02-task5-total"
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
            .querySelector("#t02-check-task6")
            .addEventListener(
                "click",
                function() {

                    let completed = 0;


                    task6.forEach(
                        function(item, index) {

                            const input =
                                container.querySelector(
                                    `#t02-task6-${index}`
                                );


                            const sample =
                                container.querySelector(
                                    `#t02-task6-sample-${index}`
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
                            "#t02-task6-feedback"
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
