document.addEventListener('DOMContentLoaded', () => {
  const toggleSenha = document.getElementById('toggleSenha');
  const senhaInput = document.getElementById('senha');

  function togglePasswordVisibility() {
    if (senhaInput.type === 'password') {
      senhaInput.type = 'text';
      toggleSenha.setAttribute('aria-label', 'Ocultar senha');
    } else {
      senhaInput.type = 'password';
      toggleSenha.setAttribute('aria-label', 'Mostrar senha');
    }
  }

  toggleSenha.addEventListener('click', togglePasswordVisibility);

  toggleSenha.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      togglePasswordVisibility();
    }
  });
});
