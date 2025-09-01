const usernameInput = document.getElementById('reg-username');
const passwordInput = document.getElementById('reg-password');
const password2Input = document.getElementById('reg-password2');
const registerBtn = document.getElementById('register-btn')


let users = JSON.parse(localStorage.getItem('users')) || [];

function saveUsers() {
  localStorage.setItem('users', JSON.stringify(users));
}

saveUsers();

function registerUser() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const password2 = password2Input.value.trim();

  if(!username || !password || !password2) {
    alert('모든 항목을 입력하세요');
    return;
  } else if (password !== password2) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }

  const existUser = users.findIndex(user => user.username === username);

  if(existUser !== -1) {
    alert('중복된 아이디가 있습니다.');
    return;
  }

  users.push({
    username: username,
    password: password,
  })

  localStorage.setItem('users', JSON.stringify(users));
  alert('회원가입 성공');
  alert('로그인 화면으로 이동합니다.')
  window.location.href = '02_test02.html';

  usernameInput.value = "";
  passwordInput.value = "";
  password2Input.value = ""; 
}

registerBtn.addEventListener('click', registerUser);

[usernameInput, passwordInput, password2Input].forEach(input => {
  input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
      registerUser();
    }
  });
});