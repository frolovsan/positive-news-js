const { regForm } = document.forms;

regForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const data = new FormData(regForm);

    const response = await fetch('/auth/reg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });

    const result = await response.json();
    const msg = document.createElement('h3');
    if (result.msg) {
      msg.innerText = `${result.msg}`;
      regForm.appendChild(msg);
      document.querySelectorAll('input').forEach((el) => (el.value = ''));
      if (result.msg === 'Пользователь зарегистрирован') {
        setTimeout(() => {
          window.location = '/feed';
        }, 1500);
      }
    }
  } catch (error) {
    console.log(error);
  }
});
