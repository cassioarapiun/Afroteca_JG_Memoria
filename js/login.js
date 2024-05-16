const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
  if (target.value.length > 3) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  event.preventDefault();

  const playerName = input.value.trim(); // Remova espaços em branco do início e do fim
  if (playerName.length > 3) {
    localStorage.setItem('player', playerName);
    window.location = 'pages/game.html';
  } else {
    alert('Por favor, insira um nome com mais de 3 caracteres.');
  }
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
