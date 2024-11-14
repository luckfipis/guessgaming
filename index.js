const targetNumber = Math.floor(Math.random() * 100) + 1;
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const resultDiv = document.getElementById('result');

    guessButton.addEventListener('click', () => {
      const guess = parseInt(guessInput.value);
      if (isNaN(guess) || guess < 1 || guess > 100) {
        resultDiv.textContent = 'Por favor, insira um número válido entre 1 e 100.';
      } else if (guess === targetNumber) {
        resultDiv.textContent = `Parabéns! Você acertou o número ${targetNumber}.`;
      } else if (guess < targetNumber) {
        resultDiv.textContent = 'Seu palpite está mais baixo que o número. Tente novamente.';
      } else {
        resultDiv.textContent = 'Seu palpite está mais alto que o número. Tente novamente.';
      }
      guessInput.value = '';
    });