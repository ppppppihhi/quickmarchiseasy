
/* =====================================================
   QUICKMARCH PRACTICE
   WRITING TEST 02
   Pearson VS Gia su Minh Tri Thu Duc
===================================================== */

const TEST_DATA = {

    title: "Writing Test 02",

    /* =================================================
       TASK 3
       Sophie Asks Mike Some Questions
       15 marks
    ================================================= */

    task3: [

        {
            answer: "I think living in the country is better than living in the city.",

            acceptedQuestions: [
                "Do you think living in the country is better than living in the city?",
                "Do you think living in the country is better than living in a city?"
            ]
        },

        {
            answer: "For me, the best thing about living here is fishing in the lake.",

            acceptedQuestions: [
                "What is the best thing about living here?",
                "What's the best thing about living here?"
            ]
        },

        {
            answer: "I usually go fishing two or three times a week.",

            acceptedQuestions: [
                "How often do you go fishing?"
            ]
        },

        {
            answer: "This weekend? Yes, I'm going to go fishing on Saturday.",

            acceptedQuestions: [
                "Are you going to go fishing this weekend?",
                "Are you going fishing this weekend?",
                "Will you go fishing this weekend?"
            ]
        },

        {
            answer: "Of course I can, Sophie. I'd love to teach you to fish!",

            acceptedQuestions: [
                "Can you teach me to fish?",
                "Could you teach me to fish?"
            ]
        }

    ],


    /* =================================================
       TASK 5
       Ben Writes to Grandpa
       15 marks
    ================================================= */

    task5: [

        {
            answer: "woke",
            verb: "wake",

            explanation:
                "wake -> V2/ed: woke.<br>" +
                "woke up: đã thức dậy.<br>" +
                "Trong bài: woke up this morning nghĩa là đã thức dậy vào sáng nay."
        },

        {
            answer: "ate",
            verb: "eat",

            explanation:
                "eat -> V2/ed: ate.<br>" +
                "ate + food: đã ăn thức ăn gì đó.<br>" +
                "Trong bài: ate them at the table nghĩa là đã ăn chúng tại bàn."
        },

        {
            answer: "took",
            verb: "take",

            explanation:
                "take -> V2/ed: took.<br>" +
                "took + something: đã mang/lấy một thứ gì đó.<br>" +
                "Trong bài: took our swimming things nghĩa là đã mang đồ bơi của chúng tôi."
        },

        {
            answer: "wore",
            verb: "wear",

            explanation:
                "wear -> V2/ed: wore.<br>" +
                "wore + clothes: đã mặc/đeo một thứ gì đó.<br>" +
                "Trong bài: wore a hat nghĩa là đã đội mũ."
        },

        {
            answer: "knocked",
            verb: "knock",

            explanation:
                "knock -> V2/ed: knocked.<br>" +
                "knocked on + something: đã gõ vào thứ gì đó.<br>" +
                "Trong bài: knocked on Mike's door nghĩa là đã gõ cửa nhà Mike."
        },

        {
            answer: "swam",
            verb: "swim",

            explanation:
                "swim -> V2/ed: swam.<br>" +
                "swam to + place: đã bơi đến nơi nào đó.<br>" +
                "Trong bài: swam to the middle of the lake nghĩa là đã bơi ra giữa hồ."
        },

        {
            answer: "put",
            verb: "put",

            explanation:
                "put -> V2/ed: put.<br>" +
                "put + something + onto/in + place: đã đặt/đưa một thứ gì đó vào hoặc lên đâu đó.<br>" +
                "Trong bài: put a sailing boat onto the lake nghĩa là đã đưa một chiếc thuyền buồm xuống hồ."
        },

        {
            answer: "gave",
            verb: "give",

            explanation:
                "give -> V2/ed: gave.<br>" +
                "gave + someone + something: đã đưa/cho ai đó một thứ gì.<br>" +
                "Trong bài: gave us a lesson nghĩa là đã dạy chúng tôi một bài học."
        },

        {
            answer: "showed",
            verb: "show",

            explanation:
                "show -> V2/ed: showed.<br>" +
                "showed someone how to + verb: đã chỉ cho ai cách làm gì.<br>" +
                "Trong bài: showed us how to turn the boat around nghĩa là đã chỉ cho chúng tôi cách quay thuyền."
        },

        {
            answer: "caught",
            verb: "catch",

            explanation:
                "catch -> V2/ed: caught.<br>" +
                "caught + something: đã bắt được một thứ gì đó.<br>" +
                "Trong bài: caught some fish nghĩa là đã bắt được một số con cá."
        }

    ],


    /* =================================================
       TASK 6
       My Weekends
       10 marks
    ================================================= */

    task6: [

        {
            starter: "At the weekend, I like...",

            hint:
                "What do you like doing? Where do you go? Who do you go with?",

            sample:
                "At the weekend, I like playing football with my friends at the park."
        },

        {
            starter: "Sometimes my friends and I...",

            hint:
                "What do you do with your friends? Do you play games, go shopping or play sports?",

            sample:
                "Sometimes my friends and I go shopping and have lunch together."
        },

        {
            starter: "Every weekend, my family...",

            hint:
                "What does your family usually do together?",

            sample:
                "Every weekend, my family goes to the park and has a picnic together."
        },

        {
            starter: "Last weekend,...",

            hint:
                "What did you do? Where did you go? Who did you go with?",

            sample:
                "Last weekend, I visited my grandparents with my parents."
        },

        {
            starter: "Next Saturday,...",

            hint:
                "What are you going to do? Where are you going to go?",

            sample:
                "Next Saturday, I am going to play badminton with my classmates."
        }

    ]

};


/* =====================================================
   NORMALIZE TEXT
===================================================== */

function normalizeWritingText(text) {

    return String(text)
        .toLowerCase()
        .trim()
        .replace(/[’‘]/g, "'")
        .replace(/[.,!?;:"]/g, "")
        .replace(/\s+/g, " ");

}


/* =====================================================
   TASK 3 — RENDER
===================================================== */

function renderWritingTask3() {

    let html = "";

    html += '<div class="task-box">';

    html += '<h2 class="task-title">';
    html += 'Task 3 — Sophie Asks Mike Some Questions';
    html += '</h2>';

    html += '<p class="task-description">';
    html += 'The Brown family are staying in Danny\'s house. ';
    html += 'Sophie talks to the neighbour, Mike. ';
    html += 'She asks him some questions. ';
    html += 'Write her questions in the spaces. ';
    html += 'The first one is an example.';
    html += '</p>';

    html += '<div class="example-box">';

    html += '<strong>Example</strong>';

    html += '<p style="margin-top:8px;">';
    html += '<strong>Sophie:</strong> ';
    html += 'When did you move into your house, Mike?';
    html += '</p>';

    html += '<p>';
    html += '<strong>Mike:</strong> ';
    html += 'Into this house? I moved here last year.';
    html += '</p>';

    html += '</div>';


    TEST_DATA.task3.forEach(function(item, index) {

        html += '<div class="question-box">';

        html += '<div class="question-number">';
        html += 'Question ' + (index + 1);
        html += '</div>';

        html += '<p>';
        html += '<strong>Sophie:</strong>';
        html += '</p>';

        html += '<input ';
        html += 'id="writing3-' + index + '" ';
        html += 'class="question-input" ';
        html += 'type="text" ';
        html += 'placeholder="Write Sophie\'s question here..."';
        html += '>';

        html += '<div class="given-answer">';
        html += '<strong>Mike:</strong> ';
        html += item.answer;
        html += '</div>';

        html += '<button ';
        html += 'class="button" ';
        html += 'style="margin-top:15px;" ';
        html += 'onclick="submitWriting3(' + index + ')"';
        html += '>';
        html += 'Check';
        html += '</button>';

        html += '<div ';
        html += 'id="writing3-feedback-' + index + '" ';
        html += 'class="feedback"';
        html += '></div>';

        html += '</div>';

    });


    html += '</div>';

    return html;
}


/* =====================================================
   TASK 3 — CHECK
===================================================== */

window.submitWriting3 = function(index) {

    const input =
        document.getElementById("writing3-" + index);

    const feedback =
        document.getElementById("writing3-feedback-" + index);

    if (!input || !feedback) {
        return;
    }

    const userAnswer =
        normalizeWritingText(input.value);

    if (userAnswer === "") {

        feedback.innerHTML =
            "Please write a question.";

        feedback.className =
            "feedback wrong";

        return;
    }

    const question =
        TEST_DATA.task3[index];

    const accepted =
        question.acceptedQuestions.map(
            normalizeWritingText
        );

    if (accepted.indexOf(userAnswer) !== -1) {

        feedback.innerHTML =
            "✓ Correct! <strong>3/3 marks</strong>";

        feedback.className =
            "feedback correct";

        input.style.borderColor =
            "#16803c";

    } else {

        feedback.innerHTML =
            "✗ Try again." +
            "<br><br>" +
            "<strong>Suggested answer:</strong> " +
            question.acceptedQuestions[0];

        feedback.className =
            "feedback wrong";

        input.style.borderColor =
            "#c62828";
    }

};


/* =====================================================
   TASK 5 — RENDER
===================================================== */

function renderWritingTask5() {

    let html = "";

    html += '<div class="task-box">';

    html += '<h2 class="task-title">';
    html += 'Task 5 — Ben Writes to Grandpa';
    html += '</h2>';

    html += '<p class="task-description">';
    html += 'Ben writes a card to Grandpa about the family\'s day by the lake. ';
    html += 'Fill in the missing words. ';
    html += 'Use the verbs in the box below but don\'t forget to change ';
    html += 'them to the PAST TENSE because the day is finished. ';
    html += 'The first one is an example.';
    html += '</p>';

    html += '<div class="example-box">';
    html += '<strong>Remember</strong><br>';
    html += 'The day is finished, so change the verbs into the PAST TENSE.';
    html += '</div>';

    html += '<div class="question-box">';

    html += '<strong>Word bank:</strong>';

    html += '<p style="margin-top:10px;line-height:2.2;">';
    html += 'put &nbsp; swim &nbsp; wake &nbsp; give &nbsp; catch &nbsp; ';
    html += 'sleep &nbsp; eat &nbsp; take &nbsp; knock &nbsp; show &nbsp; wear';
    html += '</p>';

    html += '</div>';

    html += '<div class="question-box">';

    html += '<p><strong>Dear Grandpa</strong></p>';

    html += '<p style="margin-top:15px;">';
    html += 'We <strong>(example)</strong> <strong>slept</strong> ';
    html += 'in Danny\'s house last night. ';
    html += 'It was lovely and sunny when we all ';
    html += createWriting5Input(1);
    html += ' up this morning.';
    html += '</p>';

    html += '<p style="margin-top:15px;">';
    html += 'Mum cooked sausage and eggs for breakfast and we ';
    html += createWriting5Input(2);
    html += ' them at the table in the garden.';
    html += '</p>';

    html += '<p style="margin-top:15px;">';
    html += 'Then we ';
    html += createWriting5Input(3);
    html += ' our swimming things and a picnic into our bags.';
    html += '</p>';

    html += '<p style="margin-top:15px;">';
    html += 'Jack ';
    html += createWriting5Input(4);
    html += ' a hat all the time because the sun was quite hot.';
    html += '</p>';

    html += '<p style="margin-top:15px;">';
    html += 'We ';
    html += createWriting5Input(5);
    html += ' on Mike\'s door, and then we all walked to the lake.';
    html += '</p>';

    html += '<p style="margin-top:15px;">';
    html += 'Dad ';
    html += createWriting5Input(6);
    html += ' to the middle of the lake.';
    html += '</p>';

    html += '<p style="margin-top:15px;">';
    html += 'Anna and I ';
    html += createWriting5Input(7);
    html += ' a sailing boat onto the lake with a sailing teacher, Sarah.';
    html += '</p>';

    html += '<p style="margin-top:15px;">';
    html += 'She ';
    html += createWriting5Input(8);
    html += ' us a lesson for an hour.';
    html += '</p>';

    html += '<p style="margin-top:15px;">';
    html += 'She ';
    html += createWriting5Input(9);
    html += ' us how to turn the boat around.';
    html += '</p>';

    html += '<p style="margin-top:15px;">';
    html += 'Sophie and Mike ';
    html += createWriting5Input(10);
    html += ' some fish and we are going to cook them for dinner.';
    html += '</p>';

    html += '<p style="margin-top:20px;"><strong>Love</strong></p>';
    html += '<p><strong>Ben</strong></p>';

    html += '</div>';

    html += '<button class="button" onclick="checkWritingTask5()">';
    html += 'Check Task 5';
    html += '</button>';

    html += '<div ';
    html += 'id="writing5-total-feedback" ';
    html += 'class="feedback" ';
    html += 'style="margin-top:20px;"';
    html += '></div>';

    html += '</div>';

    return html;
}


/* =====================================================
   CREATE TASK 5 INPUT
===================================================== */

function createWriting5Input(number) {

    return (
        '<input ' +
        'id="writing5-' + number + '" ' +
        'class="answer-input" ' +
        'style="width:130px;" ' +
        'type="text" ' +
        'placeholder="(' + number + ')"' +
        '>'
    );

}


/* =====================================================
   TASK 5 — CHECK
===================================================== */

window.checkWritingTask5 = function() {

    let score = 0;

    TEST_DATA.task5.forEach(function(item, index) {

        const number = index + 1;

        const input =
            document.getElementById(
                "writing5-" + number
            );

        if (!input) {
            return;
        }

        let explanation =
            document.getElementById(
                "writing5-explanation-" + number
            );

        if (!explanation) {

            explanation =
                document.createElement("div");

            explanation.id =
                "writing5-explanation-" + number;

            explanation.style.marginTop =
                "10px";

            input.parentNode.appendChild(
                explanation
            );
        }

        const user =
            normalizeWritingText(
                input.value
            );

        const correct =
            normalizeWritingText(
                item.answer
            );

        if (user === "") {

            explanation.innerHTML =
                "Please write an answer.";

            explanation.className =
                "feedback wrong";

            input.style.borderColor =
                "#c62828";

            return;
        }

        if (user === correct) {

            score += 1.5;

            explanation.innerHTML =
                "✓ Correct! <strong>1.5/1.5 marks</strong>" +
                "<br><br>" +
                "<strong>Answer:</strong> " +
                item.answer +
                "<br><br>" +
                "<strong>Giải thích:</strong><br>" +
                item.explanation;

            explanation.className =
                "feedback correct";

            input.style.borderColor =
                "#16803c";

        } else {

            explanation.innerHTML =
                "✗ Try again." +
                "<br><br>" +
                "<strong>Answer:</strong> " +
                item.answer +
                "<br><br>" +
                "<strong>Giải thích:</strong><br>" +
                item.explanation;

            explanation.className =
                "feedback wrong";

            input.style.borderColor =
                "#c62828";
        }

    });


    const total =
        document.getElementById(
            "writing5-total-feedback"
        );

    if (total) {

        total.innerHTML =
            "<strong>Task 5 Score: " +
            score +
            "/15 marks</strong>";

        total.className =
            score === 15
                ? "feedback correct"
                : "feedback wrong";
    }

};


/* =====================================================
   TASK 6 — RENDER
===================================================== */

function renderWritingTask6() {

    let html = "";

    html += '<div class="task-box">';

    html += '<h2 class="task-title">';
    html += 'Task 6 — My Weekends';
    html += '</h2>';

    html += '<p class="task-description">';
    html += 'Now write about your weekends. ';
    html += 'Write about 50 words — about 10 words in each space.';
    html += '</p>';


    TEST_DATA.task6.forEach(function(item, index) {

        html += '<div class="question-box">';

        html += '<div class="question-number">';
        html += (index + 1) + '. ' + item.starter;
        html += '</div>';

        html += '<div class="example-box">';

        html += '<strong>Gợi ý:</strong><br>';
        html += item.hint;

        html += '</div>';

        html += '<textarea ';
        html += 'id="writing6-' + index + '" ';
        html += 'class="answer-input" ';
        html += 'rows="4" ';
        html += 'placeholder="Write your answer here..." ';
        html += 'style="resize:vertical;"';
        html += '></textarea>';

        html += '<div ';
        html += 'id="writing6-sample-' + index + '" ';
        html += 'style="display:none;margin-top:15px;"';
        html += '></div>';

        html += '</div>';

    });


    html += '<button ';
    html += 'class="button" ';
    html += 'onclick="checkWritingTask6()"';
    html += '>';
    html += 'Submit Task 6';
    html += '</button>';

    html += '<div ';
    html += 'id="writing6-feedback" ';
    html += 'class="feedback" ';
    html += 'style="margin-top:20px;"';
    html += '></div>';

    html += '</div>';

    return html;
}


/* =====================================================
   TASK 6 — CHECK
   SHOW SAMPLE ANSWERS
===================================================== */

window.checkWritingTask6 = function() {

    let completed = 0;

    TEST_DATA.task6.forEach(function(item, index) {

        const input =
            document.getElementById(
                "writing6-" + index
            );

        const sample =
            document.getElementById(
                "writing6-sample-" + index
            );


        if (
            input &&
            input.value.trim() !== ""
        ) {

            completed++;
        }


        if (sample) {

            sample.innerHTML =
                '<div style="' +
                'background:#f0f7ff;' +
                'border-left:5px solid #3949ab;' +
                'padding:15px;' +
                'border-radius:10px;' +
                '">' +

                '<strong>💡 Sample answer:</strong>' +

                '<p style="' +
                'margin-top:8px;' +
                'line-height:1.6;' +
                '">' +

                item.sample +

                '</p>' +

                '<p style="' +
                'margin-top:10px;' +
                'color:#555;' +
                '">' +

                '<strong>Gợi ý:</strong> ' +

                item.hint +

                '</p>' +

                '</div>';

            sample.style.display =
                "block";
        }

    });


    const feedback =
        document.getElementById(
            "writing6-feedback"
        );

    if (!feedback) {
        return;
    }


    if (completed === TEST_DATA.task6.length) {

        feedback.innerHTML =
            "✓ Writing submitted!" +
            "<br><br>" +
            "<strong>Task 6 Score: 10/10 marks</strong>" +
            "<br><br>" +
            "💡 Đây là bài viết cá nhân. " +
            "Sample answer chỉ là câu trả lời tham khảo.";

        feedback.className =
            "feedback correct";

    } else {

        feedback.innerHTML =
            "Please complete all " +
            TEST_DATA.task6.length +
            " sections." +
            "<br><br>" +
            "Completed: " +
            completed +
            "/" +
            TEST_DATA.task6.length +
            "<br><br>" +
            "💡 Sample answers have been shown to help you.";

        feedback.className =
            "feedback wrong";
    }

};


/* =====================================================
   MAIN WRITING RENDER
===================================================== */

window.renderWriting = function(data) {

    const content =
        document.getElementById(
            "writingContent"
        );

    if (!content) {
        return;
    }

    const testData =
        data || TEST_DATA;

    let html = "";

    html += '<h2 class="current-test-title">';
    html += testData.title || "Writing Test 02";
    html += '</h2>';

    html += renderWritingTask3();
    html += renderWritingTask5();
    html += renderWritingTask6();

    content.innerHTML =
        html;
};


/* =====================================================
   TEST INFORMATION
===================================================== */

window.WRITING_TEST_INFO = {

    testNumber: 2,

    title: "Writing Test 02",

    totalMarks: 40,

    tasks: {

        task3: {
            title:
                "Task 3 — Sophie Asks Mike Some Questions",
            marks: 15
        },

        task5: {
            title:
                "Task 5 — Ben Writes to Grandpa",
            marks: 15
        },

        task6: {
            title:
                "Task 6 — My Weekends",
            marks: 10
        }

    }

};
```
