const TEST_DATA = {

    title: "Writing Test 02",


    /*
    =====================================================
    TASK 3
    Sophie Asks Mike Some Questions
    15 marks
    =====================================================
    */

    task3: [

        {
            mike:
                "Into this house? I moved here last year.",

            acceptedQuestions: [
                "When did you move into your house, Mike?",
                "When did you move into your house?",
                "When did you move here, Mike?",
                "When did you move here?"
            ],

            explanation:
                "Mike says: “I moved here last year.”\n\n" +
                "Cụm “last year” là thời gian trong quá khứ.\n" +
                "Vì vậy, ta dùng từ để hỏi “When” để hỏi về thời gian.\n\n" +
                "Cấu trúc: When + did + subject + V1 ...?\n" +
                "move → V1: move vì sau “did” dùng động từ nguyên mẫu."
        },


        {
            mike:
                "I think living in the country is better than living in the city.",

            acceptedQuestions: [
                "Do you think living in the country is better than living in the city?",
                "Do you think living in the country is better than living in the city, Mike?",
                "Which do you think is better, living in the country or living in the city?"
            ],

            explanation:
                "Mike gives his opinion about living in the country and living in the city.\n\n" +
                "Vì câu trả lời thể hiện một ý kiến, ta có thể dùng “Do you think ...?” để hỏi ý kiến.\n\n" +
                "Do you think ...? = Bạn có nghĩ rằng ... không?"
        },


        {
            mike:
                "For me, the best thing about living here is fishing in the lake.",

            acceptedQuestions: [
                "What is the best thing about living here?",
                "What is the best thing about living here, Mike?",
                "What's the best thing about living here?"
            ],

            explanation:
                "Mike says: “the best thing about living here is fishing in the lake.”\n\n" +
                "Câu trả lời nói về một điều cụ thể, vì vậy ta dùng “What” để hỏi điều gì.\n\n" +
                "What is the best thing about living here?\n" +
                "What ...? = Điều gì / cái gì?"
        },


        {
            mike:
                "I usually go fishing two or three times a week.",

            acceptedQuestions: [
                "How often do you go fishing?",
                "How often do you usually go fishing?"
            ],

            explanation:
                "Mike says: “two or three times a week.”\n\n" +
                "Cụm “two or three times a week” cho biết tần suất.\n" +
                "Vì vậy, ta dùng “How often” để hỏi mức độ thường xuyên.\n\n" +
                "How often ...? = Bao lâu một lần / Thường xuyên như thế nào?"
        },


        {
            mike:
                "This weekend? Yes, I’m going to go fishing on Saturday.",

            acceptedQuestions: [
                "Are you going to go fishing this weekend?",
                "Are you going fishing this weekend?",
                "Are you going to go fishing on Saturday?"
            ],

            explanation:
                "Mike says: “I’m going to go fishing on Saturday.”\n\n" +
                "“going to” diễn tả một kế hoạch trong tương lai.\n" +
                "Vì vậy, có thể hỏi: “Are you going to ...?”\n\n" +
                "Are you going to ...? = Bạn có định ... không?"
        },


        {
            mike:
                "Of course I can, Sophie. I’d love to teach you to fish!",

            acceptedQuestions: [
                "Can you teach me to fish?",
                "Can you teach me how to fish?",
                "Could you teach me to fish?"
            ],

            explanation:
                "Mike agrees to teach Sophie how to fish.\n\n" +
                "Vì Sophie muốn biết Mike có thể dạy mình câu cá hay không, ta dùng “Can you ...?” để hỏi khả năng hoặc lời đề nghị.\n\n" +
                "Can you teach me to fish? = Bạn có thể dạy tôi câu cá không?"
        }

    ],


    /*
    =====================================================
    TASK 5
    Ben Writes to Grandpa
    15 marks
    =====================================================
    */

    task5WordBank: [
        "put",
        "swim",
        "wake",
        "give",
        "catch",
        "sleep",
        "eat",
        "take",
        "knock",
        "show",
        "wear"
    ],


    task5Passage:
        `
        <p>
            Dear Grandpa
        </p>

        <p>
            We
            <strong>(example)</strong>
            <span class="example-answer">slept</span>
            in Danny’s house last night.
            It was lovely and sunny when we all
            <input
                class="inline-writing-input"
                data-answer="woke"
                data-explanation="wake → V2/ed: woke (đã thức dậy).<br><br>“woke up this morning” = đã thức dậy vào sáng nay.<br>Vì câu nói chỉ thời điểm sáng nay và hành động đã xảy ra, ta dùng thì quá khứ đơn."
                placeholder="1"
            >
            up this morning.
        </p>

        <p>
            Mum cooked sausage and eggs for breakfast and we
            <input
                class="inline-writing-input"
                data-answer="ate"
                data-explanation="eat → V2/ed: ate (đã ăn).<br><br>“ate them at the table” = đã ăn chúng tại bàn.<br>Vì hành động ăn đã hoàn thành trong bữa sáng, dùng quá khứ đơn."
                placeholder="2"
            >
            them at the table in the garden.
        </p>

        <p>
            Then we
            <input
                class="inline-writing-input"
                data-answer="took"
                data-explanation="take → V2/ed: took (đã lấy / mang theo).<br><br>“took our swimming things and a picnic into our bags” = đã lấy đồ bơi và đồ ăn picnic cho vào túi.<br>Vì có hành động lấy/mang đồ vào túi, chọn take."
                placeholder="3"
            >
            our swimming things and a picnic into our bags.
        </p>

        <p>
            Jack
            <input
                class="inline-writing-input"
                data-answer="wore"
                data-explanation="wear → V2/ed: wore (đã đội / mặc).<br><br>“wore a hat” = đã đội một chiếc mũ.<br>Vì thấy quần áo hoặc phụ kiện được mặc/đội trên người, chọn wear."
                placeholder="4"
            >
            a hat all the time because the sun was quite hot.
        </p>

        <p>
            We
            <input
                class="inline-writing-input"
                data-answer="knocked"
                data-explanation="knock → V2/ed: knocked (đã gõ).<br><br>“knocked on Mike’s door” = đã gõ cửa nhà Mike.<br>Vì có “on the door”, hành động phù hợp là knock."
                placeholder="5"
            >
            on Mike’s door, and then we all walked to the lake.
        </p>

        <p>
            Dad
            <input
                class="inline-writing-input"
                data-answer="swam"
                data-explanation="swim → V2/ed: swam (đã bơi).<br><br>“swam to the middle of the lake” = đã bơi đến giữa hồ.<br>Vì có hoạt động di chuyển bằng cách bơi, chọn swim."
                placeholder="6"
            >
            to the middle of the lake.
        </p>

        <p>
            Anna and I
            <input
                class="inline-writing-input"
                data-answer="took"
                data-explanation="take → V2/ed: took (đã lấy / đi bằng / mang theo).<br><br>“took a sailing boat onto the lake” = đã đưa/đi thuyền buồm ra hồ.<br>Trong ngữ cảnh này, hành động đưa thuyền ra hồ dùng take."
                placeholder="7"
            >
            a sailing boat onto the lake with a sailing teacher, Sarah.
        </p>

        <p>
            She
            <input
                class="inline-writing-input"
                data-answer="gave"
                data-explanation="give → V2/ed: gave (đã cho / đã dạy).<br><br>“gave us a lesson” = đã dạy cho chúng tôi một bài học.<br>Cụm “give someone a lesson” = dạy cho ai một bài học."
                placeholder="8"
            >
            us a lesson for an hour.
        </p>

        <p>
            She
            <input
                class="inline-writing-input"
                data-answer="showed"
                data-explanation="show → V2/ed: showed (đã chỉ / hướng dẫn).<br><br>“showed us how to turn the boat around” = đã chỉ cho chúng tôi cách quay thuyền lại.<br>Vì có cấu trúc “show someone how to ...”, chọn show."
                placeholder="9"
            >
            us how to turn the boat around.
        </p>

        <p>
            Sophie and Mike
            <input
                class="inline-writing-input"
                data-answer="caught"
                data-explanation="catch → V2/ed: caught (đã bắt được).<br><br>“caught some fish” = đã bắt được một số con cá.<br>Vì thấy đối tượng là “fish”, hành động phù hợp là catch."
                placeholder="10"
            >
            some fish and we are going to cook them for dinner.
        </p>

        <p>
            Love<br>
            Ben
        </p>
        `,


    /*
    =====================================================
    TASK 6
    My Weekends
    10 marks
    =====================================================
    */

    task6Title:
        "My Weekends",

    task6Description:
        "Now write about your weekends. Write about 50 words – about 10 words in each space.",


    task6: [

        {
            starter:
                "1. At the weekend I like ...",

            question:
                "What do you like to do at the weekend?",

            hint:
                "Write about activities you enjoy doing at the weekend.",

            sample:
                "At the weekend I like riding my bike and playing football with my friends.",

            explanation:
                "“At the weekend” = vào cuối tuần.\n" +
                "Sau “like”, ta thường dùng V-ing để nói về hoạt động mình thích.\n" +
                "like + V-ing = thích làm gì."
        },


        {
            starter:
                "2. Sometimes my friends and I ...",

            question:
                "What do you sometimes do with your friends?",

            hint:
                "Write about an activity that you sometimes do with your friends.",

            sample:
                "Sometimes my friends and I play football and go swimming together.",

            explanation:
                "“Sometimes” = thỉnh thoảng.\n" +
                "Câu hỏi “What do you sometimes do with your friends?” giúp em nghĩ đến một hoạt động em làm cùng bạn bè."
        },


        {
            starter:
                "3. Every weekend my family ...",

            question:
                "What does your family do every weekend?",

            hint:
                "Write about something your family usually does every weekend.",

            sample:
                "Every weekend my family has lunch together and watches a film.",

            explanation:
                "“Every weekend” = mỗi cuối tuần.\n" +
                "Vì “my family” được xem là chủ ngữ số ít trong câu này, động từ ở hiện tại đơn có thể thêm -s/-es."
        },


        {
            starter:
                "4. Last weekend ...",

            question:
                "What did you do last weekend?",

            hint:
                "Write about something you did last weekend. Remember to use the past tense.",

            sample:
                "Last weekend I visited my grandparents and helped them in the garden.",

            explanation:
                "“Last weekend” = cuối tuần trước.\n" +
                "Đây là thời điểm trong quá khứ nên các hành động đã hoàn thành dùng thì quá khứ đơn.\n" +
                "visit → V2/ed: visited; help → V2/ed: helped."
        },


        {
            starter:
                "5. Next Saturday ...",

            question:
                "What are you going to do next Saturday?",

            hint:
                "Write about something you plan to do next Saturday.",

            sample:
                "Next Saturday I am going to visit my grandparents and play football.",

            explanation:
                "“Next Saturday” = thứ Bảy tới.\n" +
                "Vì nói về một kế hoạch trong tương lai, có thể dùng cấu trúc “be going to + V1”.\n" +
                "am going to visit = sẽ / dự định đi thăm."
        }

    ]

};
