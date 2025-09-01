document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); 
  const form = document.getElementById("form");
  const email = document.getElementById("email").value;
  const password = document.getElementById('pwd').value;
  const password2 = document.getElementById('pwd2').value;
  if (password !== password2) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  } 
  const user = { email, password };
  localStorage.setItem("user", JSON.stringify(user));
  alert("회원가입이 완료되었습니다.");
  form.reset(); 
});