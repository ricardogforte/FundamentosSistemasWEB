# Arquivo de Ajuda — PetClean 🐾 (Fase 2)

**Sistema Web para Petshop — Fase 2**
Disciplina: Fundamentos de Sistemas Web — PUC RS
Ano: 2026
Trimestre: 3

---

## Sobre esta fase

A Fase 2 evolui o site estático da Fase 1 (HTML puro) adicionando **CSS/Bootstrap**,
**JavaScript**, um **formulário de cadastro de cliente e pet** com **agendamento de
serviços** (tele-busca ou entrega no local) e melhorias de **acessibilidade**.

---

## Estrutura de Arquivos

```
Fase 2/
├── index.html          ← Home: carrossel, saudação dinâmica e categorias
├── acessorios.html      ← Categoria: Acessórios (cards Bootstrap)
├── racoes.html          ← Categoria: Rações (cards Bootstrap)
├── higiene.html          ← Categoria: Higiene e Limpeza (cards Bootstrap)
├── servicos.html        ← Serviços (Banho / Banho e Tosa) e formas de atendimento
├── cadastro.html         ← Formulário de cadastro do cliente/pet + agendamento
├── css/
│   └── styles.css       ← Estilos customizados (usados com o Bootstrap)
└── js/
    ├── main.js          ← Funções gerais (menu ativo, relógio, acessibilidade)
    └── form.js          ← Lógica do formulário de cadastro/agendamento
```

---

## Ajustes realizados em relação à Fase 1

1. **Adoção do Bootstrap 5** (via CDN) em todas as páginas: navbar responsiva com
   menu recolhível (hambúrguer) em telas pequenas, grid de cards para produtos e
   serviços, botões, badges e validação visual de formulário.
2. **Carrossel de destaques na Home** (`index.html`), com imagens, legendas e
   controles de navegação — atende ao requisito de site "mais atrativo e dinâmico".
3. **JavaScript (`js/main.js`)** adicionado a todas as páginas:
   - Marca automaticamente o item do menu correspondente à página atual
     (`aria-current="page"`), útil também para acessibilidade.
   - Exibe uma **saudação e relógio dinâmicos** na Home (Bom dia/Boa tarde/Boa
     noite + data/hora atual), atualizados a cada segundo.
   - Controla a **barra de acessibilidade** (alto contraste e tamanho da fonte),
     com preferências salvas em `localStorage`.
   - Atualiza automaticamente o ano exibido no rodapé.
4. **Formulário de cadastro (`cadastro.html`)** criado com dados do cliente
   (nome, CPF, endereço, telefone, e-mail, data de nascimento, sexo via *radio
   button*, aceite de termos via *checkbox*) e dados do pet (nome, raça com
   sugestões via `<datalist>`, idade via `input number`, sexo, castração,
   observações). Usa `placeholder`, `required`, `pattern`, `min`/`max` e
   mensagens de erro (`invalid-feedback`) do Bootstrap.
5. **Agendamento de serviço** no mesmo formulário: escolha do serviço (Banho ou
   Banho e Tosa) e da forma de atendimento (Tele-busca ou Entrega no local) via
   *radio buttons*, com **calendário** (`input type="date"`, data mínima = hoje,
   controlada por JS) e **horário** (`input type="time"`, limitado ao horário de
   funcionamento). O campo "Endereço para tele-busca" só aparece e só é
   obrigatório quando essa opção é selecionada (`js/form.js`).
6. **Resumo dinâmico do agendamento**: ao confirmar um cadastro válido, o
   JavaScript monta um resumo na própria página (sem recarregar), evitando erros
   de digitação, já que a Fase 2 não possui back-end.
7. **Acessibilidade para deficientes visuais**:
   - Manutenção e revisão dos atributos `alt` descritivos em todas as imagens.
   - Link "Pular para o conteúdo" (`skip link`), visível ao navegar por teclado.
   - Botões de **aumentar/diminuir fonte** e de **alto contraste**, com
     `aria-pressed`/`aria-label`, disponíveis em todas as páginas.
   - Uso de `aria-live="polite"` na saudação dinâmica e no resumo do
     agendamento, para que leitores de tela anunciem as atualizações.
   - `<fieldset>`/`<legend>` e `<label for>` corretamente associados a cada
     campo do formulário, incluindo grupos de *radio buttons*.
8. **Ajustes de estrutura/qualidade**: CSS e JavaScript separados em arquivos
   próprios (`css/styles.css`, `js/main.js`, `js/form.js`), reaproveitados por
   todas as páginas para evitar duplicação e facilitar manutenção; código
   comentado explicando o propósito de cada função antes da publicação.

---

## Como visualizar

Basta abrir `index.html` em um navegador moderno, ou servir a pasta com um
servidor estático simples (ex.: `python3 -m http.server`), já que os recursos do
Bootstrap são carregados via CDN.

---

## Contato do Petshop (fictício)

**PetClean**
Rua dos Animais, 123 — Bairro Jardim Verde — Porto Alegre, RS
Telefone: (51) 99999-0000
E-mail: contato@petclean.com.br
