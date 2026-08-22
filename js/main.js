/* =========================================================================
 * PetClean — Fase 2
 * script principal (main.js)
 * Funções compartilhadas por TODAS as páginas do site:
 *   1. Marca o link ativo do menu conforme a página atual
 *   2. Exibe saudação dinâmica + relógio (data/hora) na home
 *   3. Controla a barra de acessibilidade (contraste e tamanho da fonte)
 *   4. Atualiza o ano do rodapé automaticamente
 * ========================================================================= */

document.addEventListener('DOMContentLoaded', function () {
  marcarLinkAtivo();
  iniciarRelogio();
  iniciarAcessibilidade();
  atualizarAnoRodape();
});

/**
 * 1) Marca com a classe "active" o item do menu que corresponde à página
 * atualmente aberta, comparando o nome do arquivo da URL com o href de
 * cada link. Também define aria-current="page" para leitores de tela.
 */
function marcarLinkAtivo() {
  var paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('.navbar-nav .nav-link');

  links.forEach(function (link) {
    var destino = link.getAttribute('href');
    if (destino === paginaAtual) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/**
 * 2) Relógio e saudação dinâmica.
 * Só executa se a página tiver o elemento #saudacao-dinamica (home).
 * Atualiza a cada segundo mostrando data/hora atuais e uma saudação
 * ("Bom dia" / "Boa tarde" / "Boa noite") conforme o horário do visitante.
 */
function iniciarRelogio() {
  var elemento = document.getElementById('saudacao-dinamica');
  if (!elemento) {
    return;
  }

  function atualizar() {
    var agora = new Date();
    var hora = agora.getHours();
    var saudacao;

    if (hora < 12) {
      saudacao = 'Bom dia';
    } else if (hora < 18) {
      saudacao = 'Boa tarde';
    } else {
      saudacao = 'Boa noite';
    }

    var dataFormatada = agora.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
    var horaFormatada = agora.toLocaleTimeString('pt-BR');

    elemento.textContent =
      saudacao + '! Hoje é ' + dataFormatada + ', ' + horaFormatada + '.';
  }

  atualizar();
  setInterval(atualizar, 1000);
}

/**
 * 3) Barra de acessibilidade: alto contraste e tamanho de fonte.
 * As preferências ficam salvas no localStorage para valerem em todas as
 * páginas durante a navegação do usuário.
 */
function iniciarAcessibilidade() {
  var btnContraste = document.getElementById('btn-alto-contraste');
  var btnFonteMais = document.getElementById('btn-fonte-mais');
  var btnFonteMenos = document.getElementById('btn-fonte-menos');
  var body = document.body;

  var niveisFonte = ['fonte-normal', 'fonte-media', 'fonte-grande'];

  function aplicarPreferencias() {
    var contrasteAtivo = localStorage.getItem('petclean-contraste') === 'on';
    var nivelFonte = localStorage.getItem('petclean-fonte') || 'fonte-normal';

    body.classList.toggle('alto-contraste', contrasteAtivo);
    if (btnContraste) {
      btnContraste.setAttribute('aria-pressed', String(contrasteAtivo));
    }

    niveisFonte.forEach(function (classe) {
      body.classList.remove(classe);
    });
    if (nivelFonte !== 'fonte-normal') {
      body.classList.add(nivelFonte);
    }
  }

  aplicarPreferencias();

  if (btnContraste) {
    btnContraste.addEventListener('click', function () {
      var ativo = body.classList.toggle('alto-contraste');
      localStorage.setItem('petclean-contraste', ativo ? 'on' : 'off');
      btnContraste.setAttribute('aria-pressed', String(ativo));
    });
  }

  if (btnFonteMais) {
    btnFonteMais.addEventListener('click', function () {
      var atual = localStorage.getItem('petclean-fonte') || 'fonte-normal';
      var indice = niveisFonte.indexOf(atual);
      var proximo = niveisFonte[Math.min(indice + 1, niveisFonte.length - 1)];
      localStorage.setItem('petclean-fonte', proximo);
      aplicarPreferencias();
    });
  }

  if (btnFonteMenos) {
    btnFonteMenos.addEventListener('click', function () {
      var atual = localStorage.getItem('petclean-fonte') || 'fonte-normal';
      var indice = niveisFonte.indexOf(atual);
      var anterior = niveisFonte[Math.max(indice - 1, 0)];
      localStorage.setItem('petclean-fonte', anterior);
      aplicarPreferencias();
    });
  }
}

/**
 * 4) Atualiza automaticamente o ano exibido no rodapé (elemento #ano-atual),
 * evitando a necessidade de editar manualmente o HTML todo ano.
 */
function atualizarAnoRodape() {
  var elemento = document.getElementById('ano-atual');
  if (elemento) {
    elemento.textContent = new Date().getFullYear();
  }
}
