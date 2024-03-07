if (localStorage.getItem('hasData') != null) {
    loadTrueFalse();
    load1in4();
    loadMultiple();
    loadTL();
    disableInput();
    localStorage.removeItem('hasData');
}

function loadTrueFalse() {
    if (localStorage.getItem('selectedAnswers') != null) {
        // Lấy dữ liệu từ localStorage và chuyển về dạng đối tượng JSON
        var selectedAnswers = JSON.parse(localStorage.getItem('selectedAnswers'));

        // Lặp qua từng câu hỏi để thiết lập đáp án đã chọn
        for (var i = 1; i <= 10; i++) {
            var questionName = "question" + i;
            var answerValue = selectedAnswers[questionName];

            // Nếu có đáp án đã chọn, tích vào input tương ứng
            if (answerValue) {
                document.querySelector('input[name="' + questionName + '"][value="' + answerValue + '"]').checked = true;
            }
        }
    }
}

function load1in4() {
    // Kiểm tra xem đã có dữ liệu trong localStorage hay chưa
    if (localStorage.getItem('selectedAnswers1in4') != null) {
        // Lấy dữ liệu từ localStorage và chuyển về dạng đối tượng JSON
        var selectedAnswers1In4 = JSON.parse(localStorage.getItem('selectedAnswers1in4'));

        // Lặp qua từng câu hỏi để thiết lập đáp án đã chọn
        for (var i = 11; i <= 20; i++) {
            var questionName = "question" + i;
            var answerValue = selectedAnswers1In4[questionName];

            // Nếu có đáp án đã chọn, tích vào input tương ứng
            if (answerValue) {
                document.querySelector('input[name="' + questionName + '"][value="' + answerValue + '"]').checked = true;
            }
        }
    }
}

function loadMultiple() {
    console.log("begin multiple")
        // Kiểm tra xem đã có dữ liệu trong localStorage hay chưa
    if (localStorage.getItem('answersMultiple') != null) {
        // Lấy dữ liệu từ localStorage và chuyển về dạng đối tượng JSON
        var answersMultiple = JSON.parse(localStorage.getItem('answersMultiple'));

        // Lặp qua từng câu hỏi để thiết lập các đáp án đã chọn
        for (var questionName in answersMultiple) {
            var answerValues = answersMultiple[questionName];

            // Nếu có đáp án đã chọn, tích vào checkbox tương ứng
            if (answerValues && answerValues.length > 0) {
                answerValues.forEach(function(value) {
                    document.querySelector('input[name="' + questionName + '"][value="' + value + '"]').checked = true;
                });
            }
        }
    }
}

function loadTL() {
    // Kiểm tra xem đã có dữ liệu trong localStorage hay chưa
    if (localStorage.getItem('answersTextarea') != null) {
        // Lấy dữ liệu từ localStorage và chuyển về dạng đối tượng JSON
        var answersTextarea = JSON.parse(localStorage.getItem('answersTextarea'));

        // Lặp qua từng câu hỏi để hiển thị nội dung đã lưu
        for (var questionName in answersTextarea) {
            var answer = answersTextarea[questionName];

            // Tìm phần tử textarea tương ứng và điền nội dung đã lưu vào đó
            var textarea = document.querySelector('textarea[name="' + questionName + '"]');
            if (textarea) {
                textarea.value = answer;
            }
        }
    }
}

function disableInput() {
    // Vô hiệu hóa input kiểu checkbox trong class multipleChoice
    document.querySelectorAll('input[type="checkbox"]').forEach(function(input) {
        input.disabled = true;
    });

    // Vô hiệu hóa input kiểu radio trong class 1in4
    document.querySelectorAll('input[type="radio"]').forEach(function(input) {
        input.disabled = true;
    });

    // Vô hiệu hóa input kiểu radio trong class TrueFalse
    // document.querySelectorAll('.TrueFalse input[type="radio"]').forEach(function(input) {
    //     input.disabled = true;
    // });

    // Vô hiệu hóa textarea trong class Tuluan
    document.querySelectorAll('.Tuluan textarea').forEach(function(textarea) {
        textarea.disabled = true;
    });
}