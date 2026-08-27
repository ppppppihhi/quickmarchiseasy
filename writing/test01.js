/* =====================================================
   QUICKMARCH PRACTICE
   WRITING TEST 01
   Pearson VS Gia su Minh Tri Thu Duc
===================================================== */

const TEST_DATA = {

    title: "Writing Test 01",

    /* =================================================
       TASK 3 — ANNA TALKS TO CINDY BARR
       15 marks
    ================================================= */

    task3: [

        {
            answer: "When did you win the competition?",
            acceptedQuestions: [
                "when did you win the competition",
                "when did you win the singing competition"
            ]
        },

        {
            answer: "What was the song called?",
            acceptedQuestions: [
                "what was the song called",
                "what was the name of the song"
            ]
        },

        {
            answer: "How old were you when you got your first singing job?",
            acceptedQuestions: [
                "how old were you when you got your first singing job",
                "how old were you when you had your first singing job",
                "how old were you when you got your first job singing"
            ]
        },

        {
            answer: "Where are you travelling to next?",
            acceptedQuestions: [
                "where are you travelling to next",
                "where are you travelling next",
                "where are you going to travel to next",
                "where are you going next"
            ]
        },

        {
            answer: "How long are you going to be there?",
            acceptedQuestions: [
                "how long are you going to be there",
                "how long will you be there",
                "how long are you staying there"
            ]
        }

    ],


    /* =================================================
       TASK 5 — ANNA SENDS AN EMAIL
       15 marks
    ================================================= */

    task5: [

        {
            sentence:
                "Lots of people __________ to it and it was really good fun.",
            verb: "come",
            answer: "came"
        },

        {
            sentence:
                'I __________ the song "Night Jungle".',
            verb: "sing",
            answer: "sang"
        },

        {
            sentence:
                "When it was my turn to sing I suddenly __________ very nervous.",
            verb: "feel",
            answer: "felt"
        },

        {
            sentence:
                "My mouth was so dry and I nearly __________ over on the floor!",
            verb: "fall",
            answer: "fell"
        },

        {
            sentence:
                '"I can’t do it", I __________.',
            verb: "think",
            answer: "thought"
        },

        {
            sentence:
                "I drank a glass of water and __________ down for a little bit.",
            verb: "sit",
            answer: "sat"
        },

        {
            sentence:
                "When I finished, everyone __________ really loudly.",
            verb: "clap",
            answer: "clapped"
        },

        {
            sentence:
                "I __________ the competition!",
            verb: "win",
            answer: "won"
        },

        {
            sentence:
                "After the competition, my family __________ me out for a meal.",
            verb: "take",
            answer: "took"
        },

        {
            sentence:
                "I got into bed at midnight and __________ for ten hours!",
            verb: "sleep",
            answer: "slept"
        }

    ],


    /* =================================================
       TASK 6 — MUSIC AND ME
       10 marks
    ================================================= */

    task6: [

        "My favourite music is...",

        "I like it because...",

        "Our music teacher...",

        "In my last music lesson...",

        "In the future..."

    ]

};


/* =====================================================
   WRITING TEST 01 — CUSTOM FUNCTIONS
===================================================== */


/* =====================================================
   TEXT NORMALIZATION
===================================================== */

function normalizeWritingText(text) {

    return text
        .toLowerCase()
        .trim()
        .replace(/[’‘]/g, "'")
        .replace(/[.,!?;:"]/g, "")
        .replace(/\s+/g, " ");

}


/* =====================================================
   TASK 3 — CHECK QUESTION
   5 questions × 3 marks = 15 marks
===================================================== */

window.submitWriting3 = function(index) {

    const input =
        document.getElementById(
            `writing3-${index}`
        );

    const feedback =
        document.getElementById(
            `writing3-feedback-${index}`
        );

    if (!input || !feedback) {
        return;
    }

    const userAnswer =
        normalizeWritingText(input.value);

    if (userAnswer === "") {

        feedback.textContent =
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


    if (accepted.includes(userAnswer)) {

        feedback.textContent =
            "✓ Correct! 3/3 marks";

        feedback.className =
            "feedback correct";

        input.style.borderColor =
            "#16803c";

    } else {

        feedback.innerHTML =
            `✗ Not quite.<br>
             <strong>Suggested answer:</strong>
             ${question.answer}`;

        feedback.className =
            "feedback wrong";

        input.style.borderColor =
            "#c62828";

    }

};


/* =====================================================
   TASK 5 — CHECK PAST TENSE
   10 questions × 1.5 marks = 15 marks
===================================================== */

window.checkWriting5 = function(
    index,
    correctAnswer
) {

    const input =
        document.getElementById(
            `writing5-${index}`
        );

    const feedback =
        document.getElementById(
            `writing5-feedback-${index}`
        );

    if (!input || !feedback) {
        return;
    }

    const user =
        normalizeWritingText(
            input.value
        );

    const correct =
        normalizeWritingText(
            correctAnswer
        );


    if (user === "") {

        feedback.textContent =
            "Please write an answer.";

        feedback.className =
            "feedback wrong";

        return;
    }


    if (user === correct) {

        feedback.textContent =
            "✓ Correct! 1.5/1.5 marks";

        feedback.className =
            "feedback correct";

        input.style.borderColor =
            "#16803c";

    } else {

        feedback.innerHTML =
            `✗ Try again.<br>
             <strong>Correct answer:</strong>
             ${correctAnswer}`;

        feedback.className =
            "feedback wrong";

        input.style.borderColor =
            "#c62828";

    }

};


/* =====================================================
   TASK 6 — MUSIC AND ME
   5 sections = 10 marks
===================================================== */

window.submitStory = function() {

    const inputs =
        document.querySelectorAll(
            ".story-input"
        );

    const feedback =
        document.getElementById(
            "story-feedback"
        );


    if (!feedback) {
        return;
    }


    let completed = 0;

    inputs.forEach(input => {

        if (
            input.value.trim() !== ""
        ) {
            completed++;
        }

    });


    if (completed < 5) {

        feedback.textContent =
            `Please complete all 5 sections. (${completed}/5 completed)`;

        feedback.className =
            "feedback wrong";

        return;

    }


    /*
       Task 6 is personal writing.
       We do not mark the student's
       personal ideas as right or wrong.

       The score is based on:
       - Completing all 5 sections
       - Writing complete/relevant answers
    */


    let score = 0;


    inputs.forEach(input => {

        const text =
            input.value.trim();

        const words =
            text
                .split(/\s+/)
                .filter(word => word !== "")
                .length;


        if (words >= 5) {

            score += 2;

        } else if (words >= 2) {

            score += 1;

        }

    });


    /*
       Maximum = 10 marks
    */

    score =
        Math.min(score, 10);


    feedback.innerHTML =
        `✓ Writing submitted!<br>
         <strong>Task 6 score: ${score}/10 marks</strong>
         <br><br>
         Your ideas are personal, so there is no single correct answer.`;

    feedback.className =
        "feedback correct";

};


/* =====================================================
   EXTRA — TASK 6 INSTRUCTIONS
===================================================== */

window.WRITING_TASK6_RUBRIC = {

    totalMarks: 10,

    criteria: [

        {
            item: 1,
            description:
                "Writes about favourite music and when they listen to it.",
            marks: 2
        },

        {
            item: 2,
            description:
                "Explains why they like the music.",
            marks: 2
        },

        {
            item: 3,
            description:
                "Writes about their music teacher and singing.",
            marks: 2
        },

        {
            item: 4,
            description:
                "Writes about their last music lesson.",
            marks: 2
        },

        {
            item: 5,
            description:
                "Writes about their future plans and music.",
            marks: 2
        }

    ]

};


/* =====================================================
   TEST INFORMATION
===================================================== */

window.WRITING_TEST_INFO = {

    testNumber: 1,

    title: "Writing Test 01",

    totalMarks: 40,

    tasks: {

        task3: {
            title:
                "Task 3 — Anna Talks to Cindy Barr",
            marks: 15
        },

        task5: {
            title:
                "Task 5 — Anna Sends an Email",
            marks: 15
        },

        task6: {
            title:
                "Task 6 — Music and Me",
            marks: 10
        }

    }

};
