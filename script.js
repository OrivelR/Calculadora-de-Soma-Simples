const nomeInput = document.getElementById('nome');
const alturaInput = document.getElementById('altura');
const btnConfirmar = document.getElementById('btnConfirmar');
const popup = document.getElementById('dialog');
const nomePopup = document.getElementById('nome-dialog');
const alturaPopup = document.getElementById('altura-dialog');
const btnFechar = document.getElementById('btnFechar');

btnConfirmar.addEventListener('click', (e) => {
    e.preventDefault(); // Previne o comportamento padrão do botão de confirmar
    const nome = nomeInput.value;
    const altura = alturaInput.value;

    // Verifica se todos os campos estão preenchidos
    if (nome && altura) {
      // Se tiver tudo preenchido, mostra o pop-up com as informações
      dialog.showModal();
      nomePopup.textContent = `Esse número ja está em uso`;
    } else { // Se não, mostra um alerta
      alert('Preencha todos os campos!');
    }
  });

  btnFechar.addEventListener('click', () => {
    window.location.href = 'obrigado.html';
  });