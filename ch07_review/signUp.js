const usernameInput = document.getElementById('reg-username');
const passwordInput = document.getElementById('reg-password');
const registerBtn = document.getElementById('register-btn');

let users = JSON.parse(localStorage.getItem('users')) || [];

function saveUsers() {
  localStorage.setItem('users', JSON.stringify(users));
}

function registerUser () {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if(!username || !password) {
    alert('모든 항목을 입력하세요');
    return;
  }

  users.push({
    username : username,
    password : password,
  })

  localStorage.setItem('users', JSON.stringify(users));
  alert('회원가입 성공! 로그인 페이지로 이동합니다.')
  window.location.href = 'signIn.html';
}

registerBtn.addEventListener('click', registerUser);

[usernameInput, passwordInput].forEach(input => {
  input.addEventListener('keydown', (event) =>{
    if(event.key === "Enter") {
      registerUser();
    }
  });
});