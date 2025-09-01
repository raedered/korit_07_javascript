const usernameInput = document.getElementById('log-username');
const passwordInput = document.getElementById('log-password');
const loginBtn = document.getElementById('login-btn');

let users = JSON.parse(localStorage.getItem('users')) || [];

function loginUser () {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if(!username || !password) {
    alert('아이디와 비밀번호를 입력해주세요');
    return;
  }

  const user = users.find(user => user.username === username && user.password === password)

  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    alert('로그인 성공!');
    return;
  }else {
    alert('아이디 또는 비밀번호가 다릅니다.');
    return;
  }
}

loginBtn.addEventListener('click', loginUser);

[usernameInput, passwordInput].forEach(input => {
  input.addEventListener('keydown', event => {
    if(event.key === 'Enter') {
      loginUser();
    }
  })
})