function submit() {
    if (confirm("Bạn có chắc chắn muốn nộp bài không?")) {
        saveTrueFalse();
        save1in4();
        saveMultipleChoice();
        saveTL();
        localStorage.setItem('hasData', true);
        window.location.href = "ketqua.html";
    }
}

function saveTrueFalse() {
    var selectedAnswers = {};
    for (var i = 1; i <= 10; i++) {
        var questionName = "question" + i;
        var answer = document.querySelector('input[name="' + questionName + '"]:checked');

        // Nếu có đáp án đã chọn, thêm vào đối tượng JSON
        if (answer) {
            selectedAnswers[questionName] = answer.value;
        }
    }
    localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
}

function save1in4() {
    var selectedAnswers1In4 = {};
    for (var i = 11; i <= 20; i++) {
        var questionName = "question" + i;
        var answer = document.querySelector('input[name="' + questionName + '"]:checked');

        // Nếu có đáp án đã chọn, thêm vào đối tượng JSON
        if (answer) {
            selectedAnswers1In4[questionName] = answer.value;
        }
    }
    localStorage.setItem("selectedAnswers1in4", JSON.stringify(selectedAnswers1In4));
}

function saveMultipleChoice() {
    var answersMultiple = {};

    // Lấy tất cả các phần tử input trong phần tử có lớp là "multipleChoice"
    var checkboxes = document.querySelectorAll('.multipleChoice input[type="checkbox"]');

    // Lặp qua từng phần tử input
    checkboxes.forEach(function(checkbox) {
        // Lấy tên của câu hỏi mà checkbox này thuộc về
        var questionName = checkbox.getAttribute('name');

        // Kiểm tra xem câu hỏi này đã được thêm vào đối tượng answers chưa
        if (!answersMultiple[questionName]) {
            // Nếu chưa, khởi tạo một mảng để lưu trữ các đáp án của câu hỏi này
            answersMultiple[questionName] = [];
        }

        // Kiểm tra xem checkbox này có được chọn không
        if (checkbox.checked) {
            // Nếu được chọn, thêm giá trị của nó vào mảng đáp án của câu hỏi tương ứng
            answersMultiple[questionName].push(checkbox.value);
        }
    });
    // Lưu đối tượng answers vào localStorage
    localStorage.setItem('answersMultiple', JSON.stringify(answersMultiple));
}

function saveTL() {
    // Khởi tạo một đối tượng để lưu trữ các câu trả lời của mỗi câu hỏi kiểu textarea
    var answersTextarea = {};

    // Lấy tất cả các phần tử textarea trong phần tử có lớp là "Tuluan"
    var textareas = document.querySelectorAll('.Tuluan textarea');

    // Lặp qua từng phần tử textarea
    textareas.forEach(function(textarea, index) {
        // Tạo tên của câu hỏi dựa trên index
        var questionName = 'answerTL' + (index + 1);
        // console.log(index + 1);
        // Lấy nội dung của textarea
        var answer = textarea.value;

        // Lưu nội dung vào đối tượng answersTextarea
        answersTextarea[questionName] = answer;
    });
    console.log(answersTextarea);
    // Lưu đối tượng answersTextarea vào localStorage
    localStorage.setItem('answersTextarea', JSON.stringify(answersTextarea));

}
if (document.getElementById('surveyForm') != null) {
    document.getElementById('surveyForm').addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = "trangthi.html";

        // Lấy thông tin từ form
        var fullName = document.getElementById('fullName').value;
        var dob = document.getElementById('dob').value;
        var cccd = document.getElementById('cccd').value;
        var address = document.getElementById('address').value;
    });
}