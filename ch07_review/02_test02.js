document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPwd').value;
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.email === email && user.password === password) {
    alert("로그인 성공");
    return;
  } else {
    alert("이메일 또는 비밀번호가 올바르지 않습니다.");
  }
});