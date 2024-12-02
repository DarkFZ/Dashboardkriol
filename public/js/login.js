
  document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Bem-vindo, ${data.user.email}`);
        console.log('Token de autenticação:', data.token);
        // Redirecionar ou armazenar o token
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error('Erro no login:', err);
    }
  });

