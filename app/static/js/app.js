document.addEventListener('click', (event) => {
  const backdrop = event.target.closest('[data-close-modal]');
  if (backdrop) {
    window.location.href = '/#matrix';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.querySelector('.modal-backdrop')) {
    window.location.href = '/#matrix';
  }
});
