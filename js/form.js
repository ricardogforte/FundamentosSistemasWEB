/* =========================================================================
 * PetClean — Fase 2
 * script do formulário de cadastro e agendamento (form.js)
 * Funcionalidades:
 *   1. Define a data mínima do agendamento como o dia de hoje
 *   2. Mostra/oculta o campo de endereço conforme o método escolhido
 *      (tele-busca precisa de endereço; entrega no local não precisa)
 *   3. Valida o formulário com o padrão do Bootstrap antes de enviar
 *   4. Monta um resumo dinâmico do agendamento na tela, sem recarregar
 *      a página (o formulário é simulado, pois não há back-end na Fase 2)
 * ========================================================================= */

document.addEventListener('DOMContentLoaded', function () {
  var formulario = document.getElementById('form-cadastro');
  if (!formulario) {
    return; // esta página não é a de cadastro
  }

  definirDataMinima();
  controlarCampoEndereco();
  controlarEnvioFormulario(formulario);
});

/**
 * 1) Impede que o cliente agende banho/tosa em uma data passada,
 * definindo o atributo "min" do campo de data como a data atual.
 */
function definirDataMinima() {
  var campoData = document.getElementById('data-agendamento');
  if (!campoData) {
    return;
  }
  var hoje = new Date().toISOString().split('T')[0];
  campoData.setAttribute('min', hoje);
}

/**
 * 2) O campo "Endereço para tele-busca" só é obrigatório e visível
 * quando o cliente escolhe a opção de rádio "Tele-busca". Ao escolher
 * "Entrega no local", o campo é ocultado e deixa de ser obrigatório.
 */
function controlarCampoEndereco() {
  var radiosMetodo = document.querySelectorAll('input[name="metodo"]');
  var blocoEndereco = document.getElementById('bloco-endereco-telebusca');
  var campoEndereco = document.getElementById('endereco-telebusca');

  if (!radiosMetodo.length || !blocoEndereco || !campoEndereco) {
    return;
  }

  function atualizarVisibilidade() {
    var metodoSelecionado = document.querySelector('input[name="metodo"]:checked');
    var isTelebusca = metodoSelecionado && metodoSelecionado.value === 'telebusca';

    blocoEndereco.classList.toggle('d-none', !isTelebusca);
    campoEndereco.required = isTelebusca;
    campoEndereco.setAttribute('aria-required', String(isTelebusca));

    if (!isTelebusca) {
      campoEndereco.value = '';
      campoEndereco.classList.remove('is-invalid');
    }
  }

  radiosMetodo.forEach(function (radio) {
    radio.addEventListener('change', atualizarVisibilidade);
  });

  atualizarVisibilidade();
}

/**
 * 3) e 4) Validação Bootstrap + resumo dinâmico do agendamento.
 * Ao enviar o formulário: se algum campo obrigatório estiver inválido,
 * o Bootstrap exibe os alertas de erro. Se tudo estiver correto, o envio
 * padrão é cancelado (preventDefault) e um resumo amigável é montado
 * na tela, informando ao usuário os dados do agendamento realizado.
 */
function controlarEnvioFormulario(formulario) {
  var resumo = document.getElementById('resumo-agendamento');

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    evento.stopPropagation();

    if (!formulario.checkValidity()) {
      formulario.classList.add('was-validated');
      return;
    }

    formulario.classList.add('was-validated');
    exibirResumo(formulario, resumo);
  });
}

function exibirResumo(formulario, resumo) {
  if (!resumo) {
    return;
  }

  var dados = new FormData(formulario);
  var nomeCliente = dados.get('nome-cliente');
  var nomePet = dados.get('nome-pet');
  var raca = dados.get('raca-pet');
  var idade = dados.get('idade-pet');
  var servico = dados.get('servico');
  var metodo = dados.get('metodo');
  var data = dados.get('data-agendamento');
  var hora = dados.get('hora-agendamento');
  var endereco = dados.get('endereco-telebusca');

  var servicoTexto = servico === 'banho' ? 'Banho' : 'Banho e Tosa';
  var metodoTexto = metodo === 'telebusca'
    ? 'Tele-busca (buscamos e devolvemos o pet em: ' + endereco + ')'
    : 'Entrega do pet no local pelo tutor';

  var dataFormatada = '';
  if (data) {
    var partes = data.split('-');
    dataFormatada = partes[2] + '/' + partes[1] + '/' + partes[0];
  }

  resumo.innerHTML =
    '<h3 class="h5">Agendamento confirmado! ✅</h3>' +
    '<p><strong>Cliente:</strong> ' + escaparHtml(nomeCliente) + '</p>' +
    '<p><strong>Pet:</strong> ' + escaparHtml(nomePet) + ' (' + escaparHtml(raca) + ', ' + escaparHtml(idade) + ' anos)</p>' +
    '<p><strong>Serviço escolhido:</strong> ' + servicoTexto + '</p>' +
    '<p><strong>Forma de atendimento:</strong> ' + metodoTexto + '</p>' +
    '<p><strong>Data e hora:</strong> ' + dataFormatada + ' às ' + hora + '</p>' +
    '<p class="text-muted mb-0">Guarde estas informações. Em breve nossa equipe entrará em contato para confirmar.</p>';

  resumo.classList.remove('d-none');
  resumo.setAttribute('tabindex', '-1');
  resumo.focus();
  resumo.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/** Evita problemas de HTML injection ao exibir dados digitados pelo usuário. */
function escaparHtml(texto) {
  if (!texto) {
    return '';
  }
  var div = document.createElement('div');
  div.textContent = texto;
  return div.innerHTML;
}
