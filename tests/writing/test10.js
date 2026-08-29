window.QUICKMARCH_TEST = {
    render: function(container) {

        /* =====================================================
           QUICKMARCH PRACTICE
           WRITING TEST 10
           ===================================================== */

        const BLUE = "rgb(0, 0, 238)";
        const EARTH = "#990000";
        const EARTH_ORANGE = "#993333";

        container.innerHTML = "";

        /* =====================================================
           COMMON STYLES
        ===================================================== */

        const style = document.createElement("style");

        style.textContent = `
            .writing-test {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 1000px;
                margin: 0 auto;
                padding: 20px;
            }

            .writing-test h2 {
                margin-top: 30px;
                margin-bottom: 12px;
                color: #333;
            }

            .writing-test h3 {
                margin-top: 25px;
                color: #333;
            }

            .task-intro {
                margin-bottom: 20px;
            }

            .question-box {
                margin: 18px 0;
                padding: 16px;
                border: 1px solid #ddd;
                border-radius: 10px;
                background: #fff;
            }

            .question-line {
                margin: 8px 0;
            }

            .speaker {
                font-weight: bold;
            }

            .exam-text {
                color: ${BLUE};
            }

            .email-text {
                color: ${BLUE};
                font-size: 17px;
                line-height: 1.75;
            }

            .answer-input {
                width: 100%;
                max-width: 850px;
                padding: 10px 12px;
                margin: 8px 0;
                border: 1px solid #bbb;
                border-radius: 7px;
                font-size: 16px;
                box-sizing: border-box;
            }

            .check-btn {
                margin-top: 8px;
                padding: 9px 18px;
                border: none;
                border-radius: 7px;
                background: #555;
                color: white;
                cursor: pointer;
                font-size: 15px;
            }

            .check-btn:hover {
                background: #333;
            }

            .feedback {
                margin-top: 12px;
                padding: 13px 15px;
                border-radius: 8px;
                background: #f7f7f7;
                border-left: 4px solid #aaa;
            }

            .feedback-title {
                margin: 7px 0 3px;
            }

            .keyword {
                color: ${EARTH};
                font-weight: bold;
            }

            .keyword2 {
                color: ${EARTH_ORANGE};
                font-weight: bold;
            }

            .task5-wordbank {
                margin: 15px 0 20px;
                padding: 14px;
                background: #f8f8f8;
                border-radius: 8px;
                border: 1px solid #ddd;
            }

            .wordbank-word {
                display: inline-block;
                margin: 4px 8px 4px 0;
                padding: 4px 9px;
                background: white;
                border: 1px solid #ddd;
                border-radius: 5px;
            }

            .task5-sentence {
                margin: 14px 0;
            }

            .blank-input {
                width: 220px;
                max-width: 100%;
                padding: 8px 10px;
                border: 1px solid #aaa;
                border-radius: 6px;
                font-size: 16px;
            }

            .task6-box {
                margin: 18px 0;
                padding: 16px;
                border: 1px solid #ddd;
                border-radius: 10px;
                background: #fff;
            }

            .task6-prompt {
                margin-bottom: 8px;
                font-weight: bold;
            }

            .hint-box {
                margin: 8px 0;
                padding: 10px 12px;
                background: #fafafa;
                border-left: 3px solid #aaa;
                border-radius: 5px;
            }

            .sample-box {
                margin-top: 12px;
                padding: 12px 14px;
                background: #fafafa;
                border-radius: 7px;
            }

            .sample-title {
                margin-bottom: 5px;
            }

            .task6-textarea {
                width: 100%;
                min-height: 85px;
                padding: 10px;
                border: 1px solid #bbb;
                border-radius: 7px;
                font-size: 16px;
                resize: vertical;
                box-sizing: border-box;
            }

            .score-box {
                margin-top: 25px;
                padding: 15px;
                background: #f7f7f7;
                border-radius: 8px;
                font-size: 17px;
            }
        `;

        document.head.appendChild(style);

        /* =====================================================
           MAIN WRAPPER
        ===================================================== */

        const wrapper = document.createElement("div");
        wrapper.className = "writing-test";

        /* =====================================================
           TITLE
        ===================================================== */

        const title = document.createElement("h1");
        title.textContent = "Writing Test 10";
        wrapper.appendChild(title);

        /* =====================================================
           TASK 3
        ===================================================== */

        const task3Title = document.createElement("h2");
        task3Title.textContent = "Task Three: At the Park (15 marks)";
        wrapper.appendChild(task3Title);

        const task3Intro = document.createElement("div");
        task3Intro.className = "task-intro exam-text";
        task3Intro.innerHTML = `
            At the park, Mrs Brown sees her friend, Penny. Mrs Brown asks Penny some questions.
            What are Mrs Brown’s questions? Write them in the spaces. The first one is an example.
        `;
        wrapper.appendChild(task3Intro);

        const task3Questions = [
            {
                answer: "How often do you come to this park?",
                feedback: `
                    <div class="feedback-title">Gợi ý:</div>
                    Penny nói: “I come to this park a lot, almost every day.”
                    → Penny đang nói về số lần cô ấy đến công viên.

                    <div class="feedback-title">Hướng dẫn:</div>
                    Câu trả lời nói về tần suất.
                    → Dùng <span class="keyword">How often...?</span>

                    <div class="feedback-title">Đáp án:</div>
                    <span class="keyword">How often do you come to this park?</span>
                `
            },
            {
                answer: "When did you first come here?",
                feedback: `
                    <div class="feedback-title">Gợi ý:</div>
                    Penny nói: “I first came here six months ago.”
                    → Penny đang nói về lần đầu cô ấy đến đây.

                    <div class="feedback-title">Hướng dẫn:</div>
                    Câu trả lời nói về thời gian trong quá khứ.
                    → Dùng <span class="keyword">When did...?</span>

                    <div class="feedback-title">Đáp án:</div>
                    <span class="keyword">When did you first come here?</span>
                `
            },
            {
                answer: "Is the park far from your house?",
                feedback: `
                    <div class="feedback-title">Gợi ý:</div>
                    Penny nói: “This park is only two hundred metres from my house.”
                    → Penny đang nói về khoảng cách từ nhà đến công viên.

                    <div class="feedback-title">Hướng dẫn:</div>
                    Câu trả lời nói về việc công viên có xa nhà hay không.
                    → Dùng <span class="keyword">Is the park...?</span>

                    <div class="feedback-title">Đáp án:</div>
                    <span class="keyword">Is the park far from your house?</span>
                `
            },
            {
                answer: "Is there a café here?",
                feedback: `
                    <div class="feedback-title">Gợi ý:</div>
                    Penny nói: “Of course, there’s a lovely one over there.”
                    → Penny đang nói về một quán cà phê ở công viên.

                    <div class="feedback-title">Hướng dẫn:</div>
                    Câu trả lời nói về sự tồn tại của một địa điểm.
                    → Dùng <span class="keyword">Is there...?</span>

                    <div class="feedback-title">Đáp án:</div>
                    <span class="keyword">Is there a café here?</span>
                `
            },
            {
                answer: "Are you going to be here tomorrow?",
                feedback: `
                    <div class="feedback-title">Gợi ý:</div>
                    Penny nói: “Yes, I’m going to be here tomorrow.”
                    → Penny đang nói về kế hoạch vào ngày mai.

                    <div class="feedback-title">Hướng dẫn:</div>
                    Câu trả lời nói về kế hoạch trong tương lai.
                    → Dùng <span class="keyword">Are you going to...?</span>

                    <div class="feedback-title">Đáp án:</div>
                    <span class="keyword">Are you going to be here tomorrow?</span>
                `
            }
        ];

        const task3Conversation = document.createElement("div");
        task3Conversation.className = "exam-text";

        task3Conversation.innerHTML = `
            <div class="question-box">
                <div class="question-line">
                    <span class="speaker">Mrs Brown:</span>
                    Example: What are you doing here at the park?
                </div>
                <div class="question-line">
                    <span class="speaker">Penny:</span>
                    I’m meeting my husband here at 3.00.
                </div>
            </div>
        `;

        wrapper.appendChild(task3Conversation);

        task3Questions.forEach(function(item, index) {

            const box = document.createElement("div");
            box.className = "question-box";

            box.innerHTML = `
                <div class="question-line exam-text">
                    <span class="speaker">Mrs Brown:</span>
                    ............................................................ ?
                </div>

                <div class="question-line exam-text">
                    <span class="speaker">Penny:</span>
                    ${
                        index === 0
                        ? "I come to this park a lot, almost every day."
                        : index === 1
                        ? "I first came here six months ago."
                        : index === 2
                        ? "Not very. This park is only two hundred metres from my house."
                        : index === 3
                        ? "A café? Of course, there’s a lovely one over there."
                        : "Yes, I’m going to be here tomorrow – see you!"
                    }
                </div>

                <input
                    type="text"
                    class="answer-input"
                    placeholder="Write your question here..."
                >

                <button class="check-btn">Check</button>

                <div class="feedback" style="display:none;"></div>
            `;

            const input = box.querySelector(".answer-input");
            const button = box.querySelector(".check-btn");
            const feedback = box.querySelector(".feedback");

            button.addEventListener("click", function() {

                const userAnswer = input.value.trim();

                if (!userAnswer) {
                    feedback.style.display = "block";
                    feedback.innerHTML = "Please write your question first.";
                    return;
                }

                feedback.style.display = "block";
                feedback.innerHTML = item.feedback;

                const normalizedUser = userAnswer
                    .toLowerCase()
                    .replace(/[?.!,]/g, "")
                    .replace(/\s+/g, " ")
                    .trim();

                const normalizedCorrect = item.answer
                    .toLowerCase()
                    .replace(/[?.!,]/g, "")
                    .replace(/\s+/g, " ")
                    .trim();

                if (normalizedUser === normalizedCorrect) {
                    feedback.style.borderLeftColor = "#555";
                    feedback.innerHTML =
                        `<div class="feedback-title">✓ Correct</div>` +
                        item.feedback;
                } else {
                    feedback.style.borderLeftColor = "#aaa";
                    feedback.innerHTML =
                        `<div class="feedback-title">Đáp án tham khảo:</div>` +
                        `<span class="keyword">${item.answer}</span>` +
                        item.feedback;
                }
            });

            wrapper.appendChild(box);
        });

        /* =====================================================
           TASK 5
        ===================================================== */

        const task5Title = document.createElement("h2");
        task5Title.textContent = "Task Five: Sophie writes to her Grandma (15 marks)";
        wrapper.appendChild(task5Title);

        const task5Intro = document.createElement("div");
        task5Intro.className = "task-intro email-text";
        task5Intro.innerHTML = `
            The next day Sophie writes to her grandma. Fill in the missing words. Use the verbs in the
            box below but don’t forget to change them to the PAST TENSE because the park visit is
            finished.<br>
            The first answer is an example.
        `;
        wrapper.appendChild(task5Intro);

        const wordBank = document.createElement("div");
        wordBank.className = "task5-wordbank exam-text";
        wordBank.innerHTML = `
            <strong>Word Bank:</strong><br>
            <span class="wordbank-word">arrive</span>
            <span class="wordbank-word">buy</span>
            <span class="wordbank-word">climb</span>
            <span class="wordbank-word">eat</span>
            <span class="wordbank-word">find</span>
            <span class="wordbank-word">fly</span>
            <span class="wordbank-word">go</span>
            <span class="wordbank-word">lose</span>
            <span class="wordbank-word">take</span>
            <span class="wordbank-word">wake</span>
            <span class="wordbank-word">wear</span>
        `;
        wrapper.appendChild(wordBank);

        const task5Answers = [
            "woke",
            "wore",
            "took",
            "arrived",
            "found",
            "ate",
            "bought",
            "flew",
            "lost",
            "climbed"
        ];

        const task5Feedback = [
            {
                hint: "Sophie got up early to help Mum.",
                explanation: `
                    Câu nói về việc thức dậy sớm trong quá khứ.
                    → Động từ <span class="keyword">wake</span> chuyển sang Past Simple là <span class="keyword">woke</span>.
                `,
                phrase: "<span class=\"keyword\">wake up early</span> = thức dậy sớm."
            },
            {
                hint: "It was a hot day, so they put on T-shirts and shorts.",
                explanation: `
                    Câu nói về quần áo mà mọi người mặc trong ngày hôm đó.
                    → Động từ <span class="keyword">wear</span> chuyển sang Past Simple là <span class="keyword">wore</span>.
                `,
                phrase: "<span class=\"keyword\">wear T-shirts and shorts</span> = mặc áo phông và quần short."
            },
            {
                hint: "They brought a bat and ball with them.",
                explanation: `
                    Câu nói về việc mang theo một chiếc gậy và quả bóng.
                    → Động từ <span class="keyword">take</span> chuyển sang Past Simple là <span class="keyword">took</span>.
                `,
                phrase: "<span class=\"keyword\">take ... with us</span> = mang ... theo."
            },
            {
                hint: "They got to the park.",
                explanation: `
                    Câu nói về thời điểm gia đình đến công viên.
                    → Động từ <span class="keyword">arrive</span> chuyển sang Past Simple là <span class="keyword">arrived</span>.
                `,
                phrase: "<span class=\"keyword\">arrive at the park</span> = đến công viên."
            },
            {
                hint: "They discovered a fantastic place under the trees.",
                explanation: `
                    Câu nói về việc tìm được một nơi rất đẹp để picnic.
                    → Động từ <span class="keyword">find</span> chuyển sang Past Simple là <span class="keyword\">found</span>.
                `,
                phrase: "<span class=\"keyword\">find a place</span> = tìm thấy một nơi."
            },
            {
                hint: "After the game, everyone had sandwiches and cakes.",
                explanation: `
                    Câu nói về việc ăn sandwiches và cakes sau trò chơi.
                    → Động từ <span class="keyword">eat</span> chuyển sang Past Simple là <span class="keyword\">ate</span>.
                `,
                phrase: "<span class=\"keyword\">eat sandwiches and cakes</span> = ăn bánh mì và bánh ngọt."
            },
            {
                hint: "Mum got ice cream from the café.",
                explanation: `
                    Câu nói về việc Mum mua kem cho mọi người.
                    → Động từ <span class="keyword">buy</span> chuyển sang Past Simple là <span class="keyword\">bought</span>.
                `,
                phrase: "<span class=\"keyword\">buy some ice cream</span> = mua một ít kem."
            },
            {
                hint: "Ben used his new kite in the park.",
                explanation: `
                    Câu nói về việc Ben thả chiếc diều mới.
                    → Động từ <span class="keyword">fly</span> chuyển sang Past Simple là <span class="keyword\">flew</span>.
                `,
                phrase: "<span class=\"keyword\">fly a kite</span> = thả diều."
            },
            {
                hint: "The kite ended up in a tree.",
                explanation: `
                    Câu nói về việc Ben làm mất chiếc diều khi nó mắc trên cây.
                    → Động từ <span class="keyword">lose</span> chuyển sang Past Simple là <span class="keyword\">lost</span>.
                `,
                phrase: "<span class=\"keyword\">lose a kite</span> = làm mất chiếc diều."
            },
            {
                hint: "Anna went up the tree to get the kite.",
                explanation: `
                    Câu nói về việc Anna trèo lên cây.
                    → Động từ <span class="keyword">climb</span> chuyển sang Past Simple là <span class="keyword\">climbed</span>.
                `,
                phrase: "<span class=\"keyword\">climb the tree</span> = trèo lên cây."
            }
        ];

        const task5 = document.createElement("div");
        task5.className = "email-text";

        task5.innerHTML = `
            <div style="margin-bottom:15px;">
                Hi Grandma,
            </div>

            <div class="task5-sentence">
                Yesterday we all <strong>(example)</strong> went to the park.
            </div>

            <div class="task5-sentence">
                I (1)
                <input class="blank-input" data-index="0">
                up early to help Mum to make the picnic.
            </div>

            <div class="task5-sentence">
                It was a hot day so we (2)
                <input class="blank-input" data-index="1">
                our T-shirts and shorts.
            </div>

            <div class="task5-sentence">
                We (3)
                <input class="blank-input" data-index="2">
                a bat and ball with us for a baseball game.
            </div>

            <div class="task5-sentence">
                When we (4)
                <input class="blank-input" data-index="3">
                at the park, it was already full of people.
            </div>

            <div class="task5-sentence">
                We (5)
                <input class="blank-input" data-index="4">
                a fantastic place under the trees for our picnic.
            </div>

            <div class="task5-sentence">
                After our game of baseball we (6)
                <input class="blank-input" data-index="5">
                our sandwiches and cakes and everyone enjoyed them.
            </div>

            <div class="task5-sentence">
                After lunch Mum (7)
                <input class="blank-input" data-index="6">
                us some ice cream from the café.
            </div>

            <div class="task5-sentence">
                Ben (8)
                <input class="blank-input" data-index="7">
                his new kite, but Mum wasn’t happy because he (9)
                <input class="blank-input" data-index="8">
                it in a tree.
            </div>

            <div class="task5-sentence">
                Anna (10)
                <input class="blank-input" data-index="9">
                the tree to get it for him.
            </div>

            <div style="margin-top:15px;">
                It was a great day.
            </div>

            <div style="margin-top:10px;">
                Love,<br>
                Sophie
            </div>
        `;

        wrapper.appendChild(task5);

        const task5Check = document.createElement("button");
        task5Check.className = "check-btn";
        task5Check.textContent = "Check Task 5";

        const task5Result = document.createElement("div");
        task5Result.className = "feedback";
        task5Result.style.display = "none";

        task5Check.addEventListener("click", function() {

            let score = 0;

            const inputs = task5.querySelectorAll(".blank-input");

            inputs.forEach(function(input, index) {

                const userAnswer = input.value
                    .trim()
                    .toLowerCase();

                if (userAnswer === task5Answers[index]) {
                    score += 1.5;
                    input.style.borderColor = "#555";
                } else {
                    input.style.borderColor = "#aaa";
                }
            });

            let html = `
                <div style="font-size:18px; margin-bottom:15px;">
                    Task 5 Score: ${score} / 15
                </div>
            `;

            task5Feedback.forEach(function(item, index) {

                html += `
                    <div style="margin-top:20px; padding-top:12px; border-top:1px solid #ddd;">
                        <div>Câu ${index + 1}</div>

                        <div class="feedback-title">Đáp án</div>
                        <div>
                            <span class="keyword">${task5Answers[index]}</span>
                        </div>

                        <div class="feedback-title">Gợi ý</div>
                        <div>
                            ${item.hint}
                        </div>

                        <div class="feedback-title">Giải thích</div>
                        <div>
                            ${item.explanation}
                        </div>

                        <div class="feedback-title">Cụm từ quan trọng</div>
                        <div>
                            ${item.phrase}
                        </div>
                    </div>
                `;
            });

            task5Result.innerHTML = html;
            task5Result.style.display = "block";
        });

        wrapper.appendChild(task5Check);
        wrapper.appendChild(task5Result);

        /* =====================================================
           TASK 6
        ===================================================== */

        const task6Title = document.createElement("h2");
        task6Title.textContent = "Task Six: Parks (10 marks)";
        wrapper.appendChild(task6Title);

        const task6Intro = document.createElement("div");
        task6Intro.className = "task-intro exam-text";
        task6Intro.innerHTML = `
            Now write about parks in your town.<br>
            Write about 10 words in each space.
        `;
        wrapper.appendChild(task6Intro);

        const task6Data = [
            {
                prompt: "1. I like parks because",
                hint: "Gợi ý: nói về lý do bạn thích công viên. Bạn có thể nói về cây xanh, không khí hoặc các hoạt động.",
                sample: "I like parks because they are quiet, green and good for relaxing.",
                explanation: "Có thể viết về những lý do khiến bạn thích công viên. Đây là câu hỏi cá nhân nên không có một đáp án duy nhất."
            },
            {
                prompt: "2. The park in my town is",
                hint: "Gợi ý: mô tả công viên trong thị trấn của bạn: lớn, nhỏ, đẹp, đông người hoặc yên tĩnh.",
                sample: "The park in my town is large, clean and full of beautiful trees.",
                explanation: "Hãy dùng các tính từ để mô tả công viên và thêm một vài chi tiết cụ thể."
            },
            {
                prompt: "3. Last week in the park,",
                hint: "Gợi ý: kể một việc bạn hoặc gia đình đã làm ở công viên tuần trước.",
                sample: "Last week in the park, I played football with my friends.",
                explanation: "Vì có “Last week”, bạn có thể dùng Past Simple để kể về một hoạt động đã xảy ra."
            },
            {
                prompt: "4. My family usually",
                hint: "Gợi ý: nói về hoạt động gia đình thường làm khi đến công viên.",
                sample: "My family usually walks around the park and has a picnic there.",
                explanation: "Vì có “usually”, bạn có thể dùng Present Simple để nói về thói quen."
            },
            {
                prompt: "5. During the next holidays,",
                hint: "Gợi ý: nói về kế hoạch của bạn trong kỳ nghỉ sắp tới.",
                sample: "During the next holidays, I will visit the park with my family.",
                explanation: "Bạn có thể dùng “will” hoặc “be going to” để nói về kế hoạch trong tương lai."
            }
        ];

        task6Data.forEach(function(item, index) {

            const box = document.createElement("div");
            box.className = "task6-box";

            box.innerHTML = `
                <div class="task6-prompt exam-text">
                    ${item.prompt}
                </div>

                <textarea
                    class="task6-textarea"
                    placeholder="Write your answer here..."
                ></textarea>

                <div class="hint-box">
                    ${item.hint}
                </div>

                <button class="check-btn">Check</button>

                <div class="feedback" style="display:none;">
                    <div class="sample-box">
                        <div class="sample-title">Sample answer</div>
                        <div>${item.sample}</div>
                    </div>

                    <div class="sample-box">
                        <div class="sample-title">Giải thích</div>
                        <div>${item.explanation}</div>
                    </div>
                </div>
            `;

            const button = box.querySelector(".check-btn");
            const feedback = box.querySelector(".feedback");

            button.addEventListener("click", function() {
                feedback.style.display = "block";
            });

            wrapper.appendChild(box);
        });

        /* =====================================================
           FINAL SCORE INFORMATION
        ===================================================== */

        const scoreBox = document.createElement("div");
        scoreBox.className = "score-box";
        scoreBox.innerHTML = `
            <strong>Writing Test 10</strong><br>
            Task 3: 15 marks<br>
            Task 5: 15 marks<br>
            Task 6: 10 marks<br>
            Total: 40 marks
        `;

        wrapper.appendChild(scoreBox);

        /* =====================================================
           RENDER
        ===================================================== */

        container.appendChild(wrapper);
    }
};
