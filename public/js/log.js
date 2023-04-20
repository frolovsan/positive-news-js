const { logForm } = document.forms;

logForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = new FormData(logForm);
  try {
    const response = await fetch('/auth/in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });

    const result = await response.json();
    const msg = document.createElement('h3');

    if (result.msg === 'Успешно вошли в систему!') {
      msg.innerText = `${result.msg}`;
      logForm.appendChild(msg);
      setTimeout(() => {
        window.location = '/feed';
      }, 1500);
    } else if (result.msg === 'Неверный пароль!') {
      msg.innerText = `${result.msg}`;
      logForm.appendChild(msg);
      document.querySelectorAll('input').forEach((el) => (el.value = ''));
    } else if (result.msg === 'Такой юзер не найден, зарегистрируйтесь') {
      msg.innerText = `${result.msg}`;
      logForm.appendChild(msg);
      setTimeout(() => {
        window.location = '/auth/reg';
      }, 1500);
    }
  } catch (error) {
    console.log(error);
  }
});
