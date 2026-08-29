window.QUICKMARCH_TEST = {
    render: function(container) {

        container.innerHTML = `
<style>
/* =====================================================
   QUICKMARCH WRITING TEST 09
===================================================== */

.writing-test {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.65;
    color: #333;
}

.writing-test * {
    box-sizing: border-box;
}

.writing-test h2 {
    color: rgb(0, 0, 238);
    margin-top: 0;
}

.writing-test h3 {
    color: rgb(0, 0, 238);
    margin-top: 30px;
}

.task-intro {
    color: rgb(0, 0, 238);
    margin-bottom: 20px;
}

.task-instruction {
    color: rgb(0, 0, 238);
    margin-bottom: 18px;
}

.example-box {
    background: #f7f7f7;
    border-left: 4px solid #999;
    padding: 12px 16px;
    margin: 15px 0;
}

.dialogue {
    margin: 18px 0;
    color: rgb(0, 0, 238);
}

.dialogue-line {
    margin: 12px 0;
}

.question-input {
    width: 100%;
    max-width: 850px;
    padding: 10px 12px;
    border: 1px solid #bbb;
    border-radius: 6px;
    font-size: 16px;
    margin: 7px 0;
}

.question-input:focus,
.answer-input:focus {
    outline: none;
    border-color: #777;
}

.check-btn {
    background: #555;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 8px 17px;
    cursor: pointer;
    font-size: 14px;
    margin-top: 6px;
}

.check-btn:hover {
    background: #333;
}

.score-box {
    margin: 20px 0;
    padding: 12px 16px;
    background: #f5f5f5;
    border-radius: 6px;
    font-weight: normal;
}

.feedback {
    margin-top: 12px;
    padding: 14px 16px;
    border-radius: 7px;
    background: #f7f7f7;
    border-left: 4px solid #999;
}

.feedback-title {
    margin-bottom: 7px;
}

.feedback-keyword {
    color: #990000;
    font-weight: bold;
}

.task5-email {
    color: rgb(0, 0, 238);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.8;
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #fafafa;
}

.task5-email input {
    width: 180px;
    border: none;
    border-bottom: 2px solid rgb(0, 0, 238);
    background: transparent;
    color: rgb(0, 0, 238);
    font-size: 16px;
    padding: 2px 5px;
    text-align: center;
}

.task5-email input:focus {
    outline: none;
    background: #fff;
}

.word-bank {
    color: rgb(0, 0, 238);
    border: 1px solid #ddd;
    padding: 14px 18px;
    border-radius: 7px;
    margin: 15px 0;
    background: #fafafa;
}

.word-bank-title {
    font-weight: bold;
    margin-bottom: 5px;
}

.task5-feedback {
    margin-top: 12px;
    padding: 15px 17px;
    background: #f7f7f7;
    border-left: 4px solid #999;
    border-radius: 7px;
}

.task5-feedback .section-title {
    margin-top: 12px;
    margin-bottom: 4px;
    font-weight: normal;
    color: #333;
}

.task5-feedback .important {
    color: #990000;
    font-weight: bold;
}

.task6-item {
    margin: 25px 0;
}

.task6-prompt {
    color: rgb(0, 0, 238);
    margin-bottom: 8px;
}

.task6-input {
    width: 100%;
    min-height: 90px;
    resize: vertical;
    padding: 10px 12px;
    border: 1px solid #bbb;
    border-radius: 6px;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
}

.task6-feedback {
    margin-top: 12px;
    padding: 15px 17px;
    background: #f7f7f7;
    border-left: 4px solid #999;
    border-radius: 7px;
}

.sample-answer {
    margin-top: 8px;
    color: #333;
}

.explanation {
    margin-top: 8px;
    color: #333;
}

.important {
    color: #990000;
    font-weight: bold;
}

.section-divider {
    margin: 35px 0;
    border: none;
    border-top: 1px solid #ddd;
}

.total-result {
    margin-top: 30px;
    padding: 16px;
    background: #f5f5f5;
    border-radius: 7px;
}

@media (max-width: 700px) {

    .question-input {
        max-width: 100%;
    }

    .task5-email input {
        width: 145px;
    }
}
</style>

<div class="writing-test">

    <!-- =================================================
         TASK THREE
    ================================================== -->

    <h2>Task Three: Sophie Talks to Andy (15 marks)</h2>

    <div class="task-intro">
        At Ben’s football match Sophie talks to Andy. Sophie asks him some questions.
        Write the questions in the spaces. The first one is an example.
    </div>

    <div class="dialogue">

        <div class="dialogue-line">
            <strong>Sophie:</strong> Example:
            <strong>Do you like playing football Andy?</strong>
        </div>

        <div class="dialogue-line">
            <strong>Andy:</strong>
            Football? Yes I do but I like playing tennis more.
        </div>

        <div class="dialogue-line">
            <strong>Sophie:</strong>
            <input class="question-input" id="task3q1"
                placeholder="Write your question here">
            ?
        </div>

        <div class="dialogue-line">
            <strong>Andy:</strong>
            At school? No, I play tennis at a club.
        </div>

        <div class="dialogue-line">
            <strong>Sophie:</strong>
            <input class="question-input" id="task3q2"
                placeholder="Write your question here">
            ?
        </div>

        <div class="dialogue-line">
            <strong>Andy:</strong>
            I chose tennis because it looked fun to play.
        </div>

        <div class="dialogue-line">
            <strong>Sophie:</strong>
            <input class="question-input" id="task3q3"
                placeholder="Write your question here">
            ?
        </div>

        <div class="dialogue-line">
            <strong>Andy:</strong>
            Tennis competitions? I play in them twice a year.
        </div>

        <div class="dialogue-line">
            <strong>Sophie:</strong>
            <input class="question-input" id="task3q4"
                placeholder="Write your question here">
            ?
        </div>

        <div class="dialogue-line">
            <strong>Andy:</strong>
            My last competition? No, I lost but I played quite well.
        </div>

        <div class="dialogue-line">
            <strong>Sophie:</strong>
            <input class="question-input" id="task3q5"
                placeholder="Write your question here">
            ?
        </div>

        <div class="dialogue-line">
            <strong>Andy:</strong>
            Next weekend. I’m playing against my friend Jack.
        </div>

    </div>

    <button class="check-btn" id="checkTask3">
        Check Task 3
    </button>

    <div id="task3Score" class="score-box" style="display:none;"></div>

    <div id="task3Feedback"></div>


    <hr class="section-divider">


    <!-- =================================================
         TASK FIVE
    ================================================== -->

    <h2>Task Five: A Great Weekend with my Cousin (15 marks)</h2>

    <div class="task-intro">
        Ben writes an email to his friend Gary about his weekend with Andy.
        Fill in the missing words. Use the verbs in the box below but don’t forget
        to change them to PAST TENSE because the weekend is finished.
        The first one is an example.
    </div>

    <div class="word-bank">
        <div class="word-bank-title">Word Bank</div>
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

    <div class="task5-email">

        <div>On Friday evening my cousin Andy (example)
            <strong>came</strong>
            to our house for the weekend.
        </div>

        <div>
            Anna was on a school trip so Andy
            (1)
            <input id="task5q1" type="text">
            in her bedroom.
        </div>

        <div>
            In the morning we all
            (2)
            <input id="task5q2" type="text">
            up early because of Ben’s football match.
        </div>

        <div>
            We
            (3)
            <input id="task5q3" type="text">
            cereals for breakfast
            and then Mum
            (4)
            <input id="task5q4" type="text">
            us to the park for the football match.
        </div>

        <div>
            Ben’s team were really good and the match was fantastic.
            They
            (5)
            <input id="task5q5" type="text">
            3 – 0.
        </div>

        <div>
            After the football we
            (6)
            <input id="task5q6" type="text">
            Grandma and Grandad.
            They were very happy to see us all.
        </div>

        <div>
            As usual Grandma
            (7)
            <input id="task5q7" type="text">
            us
            all some of her special ice cream.
        </div>

        <div>
            On Sunday afternoon it
            (8)
            <input id="task5q8" type="text">
            a lot.
        </div>

        <div>
            There were some good films on TV so we just
            (9)
            <input id="task5q9" type="text">
            on the sofa and
            (10)
            <input id="task5q10" type="text">
            them –
            we were really lazy!
        </div>

        <div style="margin-top:20px;">
            What a great weekend!
        </div>

    </div>

    <button class="check-btn" id="checkTask5">
        Check Task 5
    </button>

    <div id="task5Score" class="score-box" style="display:none;"></div>

    <div id="task5Feedback"></div>


    <hr class="section-divider">


    <!-- =================================================
         TASK SIX
    ================================================== -->

    <h2>Task Six: Weekends (10 marks)</h2>

    <div class="task-intro">
        Now write about your weekends.
        Write about ten words in each space.
    </div>

    <div id="task6Container"></div>

    <button class="check-btn" id="checkTask6">
        Check Task 6
    </button>

    <div id="task6Feedback"></div>

    <div id="finalResult" class="total-result" style="display:none;"></div>

</div>
`;


        /* =====================================================
           DATA
        ===================================================== */

        const task3Answers = [
            "Where do you play tennis?",
            "Why did you choose tennis?",
            "How often do you play in tennis competitions?",
            "Did you win your last competition?",
            "When are you playing your next match?"
        ];

        const task3Feedback = [
            {
                answer: "Where do you play tennis?",
                guide: "Andy nói: “No, I play tennis at a club.”",
                explanation:
                    "Câu trả lời cho biết nơi Andy chơi tennis. Khi hỏi về địa điểm, dùng Where + do + subject + verb.",
                keyword: "Where do you play tennis?"
            },
            {
                answer: "Why did you choose tennis?",
                guide: "Andy nói: “I chose tennis because it looked fun to play.”",
                explanation:
                    "Câu trả lời đưa ra lý do chọn tennis. Khi hỏi lý do trong quá khứ, dùng Why did + subject + verb nguyên mẫu.",
                keyword: "Why did you choose tennis?"
            },
            {
                answer: "How often do you play in tennis competitions?",
                guide: "Andy nói: “I play in them twice a year.”",
                explanation:
                    "Câu trả lời cho biết tần suất tham gia cuộc thi. Khi hỏi tần suất, dùng How often.",
                keyword: "How often do you play in tennis competitions?"
            },
            {
                answer: "Did you win your last competition?",
                guide: "Andy nói: “No, I lost but I played quite well.”",
                explanation:
                    "Andy nói mình thua cuộc thi gần nhất, vì vậy câu hỏi cần hỏi liệu Andy có thắng hay không. Đây là câu hỏi Yes/No ở quá khứ với Did.",
                keyword: "Did you win your last competition?"
            },
            {
                answer: "When are you playing your next match?",
                guide: "Andy nói: “Next weekend. I’m playing against my friend Jack.”",
                explanation:
                    "Câu trả lời cho biết thời gian của trận đấu tiếp theo. Khi hỏi thời gian của một kế hoạch đã sắp xếp, dùng When are you + V-ing.",
                keyword: "When are you playing your next match?"
            }
        ];


        const task5Answers = [
            "slept",
            "woke",
            "ate",
            "took",
            "won",
            "visited",
            "gave",
            "rained",
            "sat",
            "watched"
        ];

        const task5Feedback = [
            {
                answer: "slept",
                guide: "Andy ngủ trong phòng của Anna.",
                explanation:
                    "Sau chủ ngữ Andy cần một động từ diễn tả việc ngủ trong quá khứ. sleep chuyển sang Past Simple là slept.",
                phrase: "slept in her bedroom"
            },
            {
                answer: "woke",
                guide: "Cụm từ “wake up” diễn tả thức dậy.",
                explanation:
                    "Đây là hành động đã xảy ra vào buổi sáng hôm đó. wake → Past Simple: woke.",
                phrase: "woke up early"
            },
            {
                answer: "ate",
                guide: "Họ ăn ngũ cốc vào bữa sáng.",
                explanation:
                    "Hành động ăn đã hoàn thành trong quá khứ. eat → Past Simple: ate.",
                phrase: "ate cereals for breakfast"
            },
            {
                answer: "took",
                guide: "Mum đưa họ đến công viên.",
                explanation:
                    "Câu nói về việc Mum đưa họ đến công viên trong quá khứ. take → Past Simple: took.",
                phrase: "took us to the park"
            },
            {
                answer: "won",
                guide: "Đội của Ben thắng với tỉ số 3–0.",
                explanation:
                    "Kết quả trận đấu đã xảy ra và đã kết thúc. win → Past Simple: won.",
                phrase: "won 3–0"
            },
            {
                answer: "visited",
                guide: "Sau trận bóng, họ đến thăm Grandma và Grandad.",
                explanation:
                    "Đây là một hành động đã hoàn thành trong quá khứ. visit → Past Simple: visited.",
                phrase: "visited Grandma and Grandad"
            },
            {
                answer: "gave",
                guide: "Grandma cho mọi người kem.",
                explanation:
                    "Grandma đã đưa kem cho họ. give → Past Simple: gave.",
                phrase: "gave us some ice cream"
            },
            {
                answer: "rained",
                guide: "Chiều Chủ nhật trời mưa rất nhiều.",
                explanation:
                    "Đây là sự việc thời tiết đã xảy ra trong quá khứ. rain → Past Simple: rained.",
                phrase: "rained a lot"
            },
            {
                answer: "sat",
                guide: "Họ ngồi trên ghế sofa.",
                explanation:
                    "Hành động ngồi đã xảy ra trong quá khứ. sit → Past Simple: sat.",
                phrase: "sat on the sofa"
            },
            {
                answer: "watched",
                guide: "Họ xem những bộ phim hay trên TV.",
                explanation:
                    "Họ đã xem phim trong quá khứ. watch → Past Simple: watched.",
                phrase: "watched them"
            }
        ];


        const task6Prompts = [
            "1. At the weekend I usually",
            "2. Sometimes,",
            "3. The best thing about the weekend",
            "4. Last weekend,",
            "5. Next weekend,"
        ];

        const task6Samples = [
            "At the weekend I usually play football with my friends.",
            "Sometimes, I visit my grandparents and have lunch with them.",
            "The best thing about the weekend is having lots of free time.",
            "Last weekend, I watched a film and played games with my brother.",
            "Next weekend, I am going to visit my cousins and play tennis."
        ];

        const task6Explanations = [
            "Dùng hiện tại đơn để nói về hoạt động thường xuyên. Cụm **at the weekend** có thể dùng để nói về thói quen cuối tuần.",
            "Câu này có thể bắt đầu bằng **Sometimes** để nói về một hoạt động thỉnh thoảng xảy ra.",
            "Có thể dùng **The best thing about...** để nói điều mình thích nhất về cuối tuần.",
            "Vì có **Last weekend**, nên có thể dùng Past Simple để kể về hoạt động đã xảy ra.",
            "Vì có **Next weekend**, có thể dùng **be going to** hoặc một cấu trúc tương lai phù hợp để nói về kế hoạch."
        ];


        /* =====================================================
           TASK 6 HTML
        ===================================================== */

        const task6Container = document.getElementById("task6Container");

        task6Prompts.forEach(function(prompt, index) {

            const item = document.createElement("div");
            item.className = "task6-item";

            item.innerHTML = `
                <div class="task6-prompt">
                    ${prompt}
                </div>

                <textarea
                    class="task6-input"
                    id="task6q${index + 1}"
                    placeholder="Write about ten words..."
                ></textarea>
            `;

            task6Container.appendChild(item);
        });


        /* =====================================================
           TEXT NORMALIZER
        ===================================================== */

        function normalizeText(text) {
            return text
                .toLowerCase()
                .replace(/[?.!,]/g, "")
                .replace(/\s+/g, " ")
                .trim();
        }


        /* =====================================================
           TASK 3 CHECK
        ===================================================== */

        let task3Score = 0;
        let task5Score = 0;

        document.getElementById("checkTask3").addEventListener("click", function() {

            task3Score = 0;

            const feedbackContainer =
                document.getElementById("task3Feedback");

            feedbackContainer.innerHTML = "";

            task3Answers.forEach(function(answer, index) {

                const input =
                    document.getElementById("task3q" + (index + 1));

                const studentAnswer =
                    normalizeText(input.value);

                const correctAnswer =
                    normalizeText(answer);

                const correct =
                    studentAnswer === correctAnswer;

                if (correct) {
                    task3Score += 3;
                }

                const info = task3Feedback[index];

                const feedback = document.createElement("div");
                feedback.className = "feedback";

                feedback.innerHTML = `
                    <div class="feedback-title">
                        Câu ${index + 1}
                        ${correct ? "✓ Đúng" : "✗ Chưa đúng"}
                    </div>

                    <div>
                        Gợi ý:
                        ${info.guide}
                    </div>

                    <div>
                        Hướng dẫn:
                        ${info.explanation}
                    </div>

                    <div>
                        Đáp án:
                        <span class="feedback-keyword">
                            ${info.keyword}
                        </span>
                    </div>
                `;

                feedbackContainer.appendChild(feedback);
            });


            const scoreBox =
                document.getElementById("task3Score");

            scoreBox.style.display = "block";

            scoreBox.textContent =
                "Task 3: " + task3Score + " / 15 marks";
        });


        /* =====================================================
           TASK 5 CHECK
        ===================================================== */

        document.getElementById("checkTask5").addEventListener("click", function() {

            task5Score = 0;

            const feedbackContainer =
                document.getElementById("task5Feedback");

            feedbackContainer.innerHTML = "";

            task5Answers.forEach(function(answer, index) {

                const input =
                    document.getElementById("task5q" + (index + 1));

                const studentAnswer =
                    normalizeText(input.value);

                const correctAnswer =
                    normalizeText(answer);

                const correct =
                    studentAnswer === correctAnswer;

                if (correct) {
                    task5Score += 1.5;
                }

                const info = task5Feedback[index];

                const feedback = document.createElement("div");
                feedback.className = "task5-feedback";

                feedback.innerHTML = `
                    <div>
                        Câu ${index + 1}
                        ${correct ? "✓ Đúng" : "✗ Chưa đúng"}
                    </div>

                    <div class="section-title">
                        Đáp án
                    </div>

                    <div>
                        ${info.answer}
                    </div>

                    <div class="section-title">
                        Gợi ý
                    </div>

                    <div>
                        ${info.guide}
                    </div>

                    <div class="section-title">
                        Giải thích
                    </div>

                    <div>
                        ${info.explanation}
                    </div>

                    <div class="section-title">
                        Cụm từ quan trọng
                    </div>

                    <div>
                        <span class="important">
                            ${info.phrase}
                        </span>
                    </div>
                `;

                feedbackContainer.appendChild(feedback);
            });


            const scoreBox =
                document.getElementById("task5Score");

            scoreBox.style.display = "block";

            scoreBox.textContent =
                "Task 5: " + task5Score + " / 15 marks";
        });


        /* =====================================================
           TASK 6 CHECK
        ===================================================== */

        document.getElementById("checkTask6").addEventListener("click", function() {

            const feedbackContainer =
                document.getElementById("task6Feedback");

            feedbackContainer.innerHTML = "";

            task6Prompts.forEach(function(prompt, index) {

                const feedback = document.createElement("div");
                feedback.className = "task6-feedback";

                feedback.innerHTML = `
                    <div>
                        Câu ${index + 1}
                    </div>

                    <div class="section-title">
                        Gợi ý
                    </div>

                    <div>
                        Hãy viết khoảng 10 từ và hoàn thành ý tưởng
                        theo trải nghiệm của em.
                    </div>

                    <div class="section-title">
                        Sample answer
                    </div>

                    <div class="sample-answer">
                        ${task6Samples[index]}
                    </div>

                    <div class="section-title">
                        Giải thích
                    </div>

                    <div class="explanation">
                        ${task6Explanations[index]}
                    </div>
                `;

                feedbackContainer.appendChild(feedback);
            });


            const finalResult =
                document.getElementById("finalResult");

            finalResult.style.display = "block";

            finalResult.innerHTML = `
                <div>
                    Task 3: ${task3Score} / 15 marks
                </div>

                <div>
                    Task 5: ${task5Score} / 15 marks
                </div>

                <div>
                    Task 6: Personal writing – not graded
                </div>

                <div style="margin-top:8px;">
                    Total graded score:
                    <strong>${task3Score + task5Score} / 30 marks</strong>
                </div>
            `;
        });

    }
};
