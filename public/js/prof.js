// удаление

const prof = document.querySelector('.profile-container');

prof.addEventListener('click', async (e) => {
  // const { id } = e.target;

  if (e.target.classList.contains('delete')) {
    const response = await fetch(`/profile/${e.target.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      e.target.parentElement.remove();
    }
  }
});
