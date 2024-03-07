function submit() {
    if (confirm("Bạn có chắc chắn muốn nộp bài không?")) {
        document.querySelector('button[type="submit"]').style.display = "none";
        document.getElementById('pageTitle').textContent = 'KẾT QUẢ KHẢO SÁT';
        var inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"], textarea');
        inputs.forEach(function(input) {
            input.disabled = true;
            localStorage.setItem(input.name, input.value);
        });
        window.location.reload();
    }
}

// Hàm để khôi phục dữ liệu khi trang tải lại
function restoreData() {
    var questions = document.querySelectorAll('[id^="TrueFalse"], [class^="multipleChoice"], [class^="Tuluan"]');

    questions.forEach(function(question) {
        var inputs = question.querySelectorAll('input[type="radio"], input[type="checkbox"], textarea');

        inputs.forEach(function(input) {
            var savedValue = localStorage.getItem(input.name);
            if (savedValue !== null && input.value === savedValue) {
                input.checked = true; // Đánh dấu lựa chọn
                if (input.tagName === 'TEXTAREA') {
                    input.value = savedValue; // Cập nhật giá trị cho textarea
                }
            }
        });
    });
}


// Gọi hàm khôi phục dữ liệu khi trang được tải lại
window.onload = restoreData;
if (document.getElementById('surveyForm')!=null){
    document.getElementById('surveyForm').addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href="trangthi.html";
      
        // Lấy thông tin từ form
        var fullName = document.getElementById('fullName').value;
        var dob = document.getElementById('dob').value;
        var cccd = document.getElementById('cccd').value;
        var address = document.getElementById('address').value;
      });
}

  