  document.getElementById('gerarNumero').addEventListener('click', function() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1; 
    document.getElementById('numeroAleatorio').innerText = numeroAleatorio;
  });