```javascript
const TEST_DATA = {

    title: "Writing Test 03",

    /* =====================================================
       TASK 3
    ===================================================== */

    task3: [

        {
            answer: "I like football best.",
            acceptedQuestions: [
                "What sport do you like best?",
                "Which sport do you like best?",
                "What is your favourite sport?",
                "What's your favourite sport?"
            ],
            explanation: "Dùng câu hỏi “What/Which sport do you like best?” để hỏi môn thể thao Ben thích nhất."
        },

        {
            answer: "I started playing four years ago.",
            acceptedQuestions: [
                "When did you start playing football?",
                "When did you start playing?",
                "How long have you played football?"
            ],
            explanation: "“four years ago” chỉ thời điểm trong quá khứ, nên có thể hỏi “When did you start playing football?”"
        },

        {
            answer: "For Farnham Football Club. We play every Saturday.",
            acceptedQuestions: [
                "Who do you play for?",
                "Which football club do you play for?",
                "What football club do you play for?"
            ],
            explanation: "“For Farnham Football Club” cho biết câu lạc bộ mà Ben chơi cho, nên dùng “Who/Which football club do you play for?”"
        },

        {
            answer: "Red shirts and white shorts.",
            acceptedQuestions: [
                "What do you wear?",
                "What colour are your shirts and shorts?",
                "What colours do you wear?"
            ],
            explanation: "“Red shirts and white shorts” nói về màu sắc trang phục thi đấu, nên dùng câu hỏi “What colours do you wear?”"
        },

        {
            answer: "Our next match? Next Saturday.",
            acceptedQuestions: [
                "When is your next match?",
                "When is your next football match?",
                "When do you have your next match?"
            ],
            explanation: "“Next Saturday” là thời gian của trận đấu tiếp theo, nên hỏi “When is your next match?”"
        }

    ],


    /* =====================================================
       TASK 5
    ===================================================== */

    task5: [

        {
            number: 1,
            verb: "go",
            answer: "went",
            sentence:
                "Sally, Ben and I <input class='inline-writing-input' data-answer='went'> into town for the day.",
            explanation:
                "“went” là dạng quá khứ đơn của “go”, nghĩa là “đã đi”."
        },

        {
            number: 2,
            verb: "take",
            answer: "took",
            sentence:
                "We <input class='inline-writing-input' data-answer='took'> the bus into the town centre.",
            explanation:
                "“took” là dạng quá khứ đơn của “take”, nghĩa là “đã đi/bắt xe”."
        },

        {
            number: 3,
            verb: "decide",
            answer: "decided",
            sentence:
                "Then we <input class='inline-writing-input' data-answer='decided'> to go shopping.",
            explanation:
                "“decided” là quá khứ đơn của “decide”, nghĩa là “đã quyết định”."
        },

        {
            number: 4,
            verb: "buy",
            answer: "bought",
            sentence:
                "Sally and I <input class='inline-writing-input' data-answer='bought'> some T-shirts from C & A.",
            explanation:
                "“bought” là dạng quá khứ đơn của “buy”, nghĩa là “đã mua”."
        },

        {
            number: 5,
            verb: "eat",
            answer: "ate",
            sentence:
                "After that we <input class='inline-writing-input' data-answer='ate'> a picnic in the park.",
            explanation:
                "“ate” là dạng quá khứ đơn của “eat”, nghĩa là “đã ăn”."
        },

        {
            number: 6,
            verb: "sit",
            answer: "sat",
            sentence:
                "A big brown fox <input class='inline-writing-input' data-answer='sat'> right next to us.",
            explanation:
                "“sat” là dạng quá khứ đơn của “sit”, nghĩa là “đã ngồi”."
        },

        {
            number: 7,
            verb: "give",
            answer: "gave",
            sentence:
                "So we <input class='inline-writing-input' data-answer='gave'> it a chicken sandwich.",
            explanation:
                "“gave” là dạng quá khứ đơn của “give”, nghĩa là “đã cho”."
        },

        {
            number: 8,
            verb: "watch",
            answer: "watched",
            sentence:
                "In the afternoon we <input class='inline-writing-input' data-answer='watched'> a very funny show at the theatre.",
            explanation:
                "“watched” là quá khứ đơn của “watch”, nghĩa là “đã xem”."
        },

        {
            number: 9,
            verb: "laugh",
            answer: "laughed",
            sentence:
                "We all <input class='inline-writing-input' data-answer='laughed'> so much!",
            explanation:
                "“laughed” là quá khứ đơn của “laugh”, nghĩa là “đã cười”."
        },

        {
            number: 10,
            verb: "meet",
            answer: "met",
            sentence:
                "After the show we <input class='inline-writing-input' data-answer='met'> some friends from school.",
            explanation:
                "“met” là dạng quá khứ đơn của “meet”, nghĩa là “đã gặp”."
        }

    ],


    /* =====================================================
       TASK 6
    ===================================================== */

    task6: [

        {
            starter: "I like holidays because",
            hint: "Gợi ý: holidays are fun / I can relax / I have more free time.",
            sample:
                "I like holidays because I can relax and spend time with my family.",
            explanation:
                "Sau “because” em đưa ra lý do vì sao em thích kỳ nghỉ."
        },

        {
            starter: "During the holidays, I........",
            hint: "Gợi ý: play with friends / read books / travel / watch TV.",
            sample:
                "During the holidays, I usually play with my friends and read books.",
            explanation:
                "Dùng thì hiện tại đơn để nói về những việc em thường làm trong kỳ nghỉ."
        },

        {
            starter: "During the holiday, my best friend",
            hint: "Gợi ý: visits me / plays with me / goes swimming / travels.",
            sample:
                "During the holiday, my best friend often visits me and we play together.",
            explanation:
                "Nói về hoạt động thường xuyên của bạn thân trong kỳ nghỉ, có thể dùng hiện tại đơn."
        },

        {
            starter: "In my last holiday,...",
            hint: "Gợi ý: went to the beach / visited my grandparents / had a picnic.",
            sample:
                "In my last holiday, I visited my grandparents and had a wonderful time.",
            explanation:
                "“Last holiday” nói về quá khứ nên dùng động từ ở quá khứ đơn, ví dụ “visited” và “had”."
        },

        {
            starter: "In my next holiday,....",
            hint: "Gợi ý: will travel / will visit my grandparents / will learn something new.",
            sample:
                "In my next holiday, I will travel with my family and visit a new place.",
            explanation:
                "“Next holiday” nói về tương lai, nên có thể dùng “will + động từ nguyên mẫu”."
        }

    ]

};
```
