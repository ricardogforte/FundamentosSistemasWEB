# PetClean Fase 1 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar 5 páginas HTML estáticas para o petshop PetClean (home, 3 categorias de produtos, serviços), com header e footer padronizados e navegação entre páginas.

**Architecture:** Multi-página clássica com HTML5 semântico puro. Cada arquivo `.html` é independente e compartilha a mesma estrutura de header/nav/footer. Navegação via links relativos entre arquivos na raiz do projeto.

**Tech Stack:** HTML5 semântico puro. Sem CSS, Bootstrap ou JavaScript.

## Global Constraints

- HTML5 somente — sem CSS externo/inline, sem Bootstrap, sem JavaScript
- Todas as páginas na raiz do projeto (`Fase 1/`)
- Links de navegação relativos (ex: `href="index.html"`)
- Imagens via `<img src="URL_EXTERNA" alt="...">` — sem arquivos de imagem locais
- Idioma: Português (`lang="pt-BR"`)
- Petshop focado em cachorros, nome: **PetClean**
- Todo texto em português

---

### Task 1: Estrutura base do header e footer (index.html)

**Files:**
- Create: `index.html`

**Interfaces:**
- Produz: estrutura HTML reutilizável de header, nav e footer que todas as demais tarefas copiam

- [ ] **Step 1: Criar `index.html` com estrutura completa**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PetClean - Home</title>
</head>
<body>

  <header>
    <h1>PetClean 🐾</h1>
    <p>Tudo para o bem-estar do seu cão</p>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="acessorios.html">Acessórios</a></li>
        <li><a href="racoes.html">Rações</a></li>
        <li><a href="higiene.html">Higiene &amp; Limpeza</a></li>
        <li><a href="servicos.html">Serviços</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h2>Bem-vindo à PetClean!</h2>
    <p>
      A PetClean é a sua loja especializada em produtos e serviços para cães.
      Encontre aqui acessórios, rações de qualidade, produtos de higiene e
      serviços de banho e tosa com ou sem tele-busca.
    </p>
    <p>Navegue pelo menu acima e conheça tudo o que temos para o seu pet!</p>

    <section>
      <h3>Nossas Categorias</h3>
      <ul>
        <li><a href="acessorios.html">Acessórios — roupas, brinquedos, camas e mais</a></li>
        <li><a href="racoes.html">Rações — nutrição de qualidade para cães</a></li>
        <li><a href="higiene.html">Higiene &amp; Limpeza — tapetes, shampoos e muito mais</a></li>
      </ul>
    </section>

    <section>
      <h3>Nossos Serviços</h3>
      <p>Oferecemos banho simples, banho e tosa, com opção de tele-busca.</p>
      <a href="servicos.html">Ver todos os serviços</a>
    </section>
  </main>

  <footer>
    <hr>
    <h3>PetClean</h3>
    <address>
      Rua dos Animais, 123 — Bairro Jardim Verde — São Paulo, SP<br>
      Telefone: (11) 99999-0000<br>
      E-mail: contato@petclean.com.br
    </address>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="acessorios.html">Acessórios</a></li>
        <li><a href="racoes.html">Rações</a></li>
        <li><a href="higiene.html">Higiene &amp; Limpeza</a></li>
        <li><a href="servicos.html">Serviços</a></li>
      </ul>
    </nav>
    <p>
      &copy; 2026 PetClean. Todos os direitos reservados.<br>
      Projeto acadêmico — Fundamentos de Sistemas Web — PUC Minas.
    </p>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Abrir `index.html` no navegador e verificar**
  - Header com nome PetClean e nav com 5 links visíveis
  - Seções de Categorias e Serviços no corpo
  - Footer com endereço, telefone, e-mail, links e copyright

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: adiciona home page PetClean com header, body e footer"
```

---

### Task 2: Página de Acessórios

**Files:**
- Create: `acessorios.html`

**Interfaces:**
- Consome: estrutura de header/footer da Task 1 (copiar exatamente)
- Produz: `acessorios.html` com 2 produtos da categoria Acessórios

- [ ] **Step 1: Criar `acessorios.html`**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PetClean - Acessórios</title>
</head>
<body>

  <header>
    <h1>PetClean 🐾</h1>
    <p>Tudo para o bem-estar do seu cão</p>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="acessorios.html">Acessórios</a></li>
        <li><a href="racoes.html">Rações</a></li>
        <li><a href="higiene.html">Higiene &amp; Limpeza</a></li>
        <li><a href="servicos.html">Serviços</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h2>Acessórios para Cães</h2>
    <p>Conforto, diversão e estilo para o seu melhor amigo!</p>

    <article>
      <h3>Cama para Cão — Tamanho M</h3>
      <img
        src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400"
        alt="Cama confortável para cão tamanho médio"
        width="400"
      >
      <p>
        Cama ortopédica para cães de médio porte, com enchimento de espuma de
        alta densidade. Proporciona conforto e suporte para as articulações.
        Capa removível e lavável. Dimensões: 70cm x 50cm.
      </p>
      <p><strong>Preço: R$ 89,90</strong></p>
    </article>

    <hr>

    <article>
      <h3>Brinquedo de Corda Colorido</h3>
      <img
        src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=400"
        alt="Brinquedo de corda colorido para cães"
        width="400"
      >
      <p>
        Brinquedo de corda trançada em algodão natural, ideal para brincadeiras
        de cabo de guerra e estimulação mental. Auxilia na higiene dentária e
        fortalece o vínculo entre tutor e pet. Disponível nas cores azul, verde
        e vermelho. Comprimento: 40cm.
      </p>
      <p><strong>Preço: R$ 24,90</strong></p>
    </article>
  </main>

  <footer>
    <hr>
    <h3>PetClean</h3>
    <address>
      Rua dos Animais, 123 — Bairro Jardim Verde — São Paulo, SP<br>
      Telefone: (11) 99999-0000<br>
      E-mail: contato@petclean.com.br
    </address>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="acessorios.html">Acessórios</a></li>
        <li><a href="racoes.html">Rações</a></li>
        <li><a href="higiene.html">Higiene &amp; Limpeza</a></li>
        <li><a href="servicos.html">Serviços</a></li>
      </ul>
    </nav>
    <p>
      &copy; 2026 PetClean. Todos os direitos reservados.<br>
      Projeto acadêmico — Fundamentos de Sistemas Web — PUC Minas.
    </p>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Verificar no navegador**
  - Navegação leva à página de acessórios
  - 2 produtos com imagem, descrição e preço visíveis

- [ ] **Step 3: Commit**

```bash
git add acessorios.html
git commit -m "feat: adiciona pagina de acessorios com 2 produtos"
```

---

### Task 3: Página de Rações

**Files:**
- Create: `racoes.html`

**Interfaces:**
- Consome: estrutura de header/footer da Task 1 (copiar exatamente)
- Produz: `racoes.html` com 2 produtos da categoria Rações

- [ ] **Step 1: Criar `racoes.html`**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PetClean - Rações</title>
</head>
<body>

  <header>
    <h1>PetClean 🐾</h1>
    <p>Tudo para o bem-estar do seu cão</p>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="acessorios.html">Acessórios</a></li>
        <li><a href="racoes.html">Rações</a></li>
        <li><a href="higiene.html">Higiene &amp; Limpeza</a></li>
        <li><a href="servicos.html">Serviços</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h2>Rações Não Perecíveis para Cães</h2>
    <p>Nutrição de qualidade para manter seu cão saudável e ativo!</p>

    <article>
      <h3>Ração Seca Premium Adulto — 10kg</h3>
      <img
        src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400"
        alt="Saco de ração seca premium para cães adultos 10kg"
        width="400"
      >
      <p>
        Ração completa e balanceada para cães adultos de todas as raças.
        Formulada com frango, arroz integral e vegetais. Rica em ômega-3 e
        ômega-6 para pelagem brilhante e pele saudável. Sem corantes
        artificiais. Contém 10kg.
      </p>
      <p><strong>Preço: R$ 159,90</strong></p>
    </article>

    <hr>

    <article>
      <h3>Petisco Ossinho Crocante — 500g</h3>
      <img
        src="https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400"
        alt="Pacote de petisco ossinho crocante para cães 500g"
        width="400"
      >
      <p>
        Petisco dental em formato de ossinho, ideal para recompensar e auxiliar
        na higiene bucal do seu cão. Feito com ingredientes naturais, sem
        conservantes artificiais. Indicado para cães adultos de pequeno e
        médio porte. Embalagem com 500g.
      </p>
      <p><strong>Preço: R$ 18,90</strong></p>
    </article>
  </main>

  <footer>
    <hr>
    <h3>PetClean</h3>
    <address>
      Rua dos Animais, 123 — Bairro Jardim Verde — São Paulo, SP<br>
      Telefone: (11) 99999-0000<br>
      E-mail: contato@petclean.com.br
    </address>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="acessorios.html">Acessórios</a></li>
        <li><a href="racoes.html">Rações</a></li>
        <li><a href="higiene.html">Higiene &amp; Limpeza</a></li>
        <li><a href="servicos.html">Serviços</a></li>
      </ul>
    </nav>
    <p>
      &copy; 2026 PetClean. Todos os direitos reservados.<br>
      Projeto acadêmico — Fundamentos de Sistemas Web — PUC Minas.
    </p>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Verificar no navegador**
  - 2 produtos de ração com imagem, descrição e preço

- [ ] **Step 3: Commit**

```bash
git add racoes.html
git commit -m "feat: adiciona pagina de racoes com 2 produtos"
```

---

### Task 4: Página de Higiene e Limpeza

**Files:**
- Create: `higiene.html`

**Interfaces:**
- Consome: estrutura de header/footer da Task 1 (copiar exatamente)
- Produz: `higiene.html` com 2 produtos da categoria Higiene

- [ ] **Step 1: Criar `higiene.html`**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PetClean - Higiene e Limpeza</title>
</head>
<body>

  <header>
    <h1>PetClean 🐾</h1>
    <p>Tudo para o bem-estar do seu cão</p>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="acessorios.html">Acessórios</a></li>
        <li><a href="racoes.html">Rações</a></li>
        <li><a href="higiene.html">Higiene &amp; Limpeza</a></li>
        <li><a href="servicos.html">Serviços</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h2>Higiene e Limpeza para Cães</h2>
    <p>Mantenha seu cão sempre limpo, cheiroso e saudável!</p>

    <article>
      <h3>Tapete Higiênico — 30 unidades</h3>
      <img
        src="https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?w=400"
        alt="Pacote de tapetes higiênicos para cães com 30 unidades"
        width="400"
      >
      <p>
        Tapete higiênico descartável com 5 camadas de absorção, superfície
        antiderrapante e bordas reforçadas. Ideal para adestramento e uso em
        apartamentos. Dimensões: 60cm x 60cm. Pacote com 30 unidades.
      </p>
      <p><strong>Preço: R$ 39,90</strong></p>
    </article>

    <hr>

    <article>
      <h3>Shampoo para Cães — 500ml</h3>
      <img
        src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400"
        alt="Frasco de shampoo para cães 500ml"
        width="400"
      >
      <p>
        Shampoo neutro formulado especialmente para a pele e pelo dos cães.
        Enriquecido com aloe vera e vitamina E. Proporciona limpeza profunda,
        brilho e maciez sem agredir a pele. Livre de parabenos e sulfatos.
        Frasco com 500ml.
      </p>
      <p><strong>Preço: R$ 29,90</strong></p>
    </article>
  </main>

  <footer>
    <hr>
    <h3>PetClean</h3>
    <address>
      Rua dos Animais, 123 — Bairro Jardim Verde — São Paulo, SP<br>
      Telefone: (11) 99999-0000<br>
      E-mail: contato@petclean.com.br
    </address>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="acessorios.html">Acessórios</a></li>
        <li><a href="racoes.html">Rações</a></li>
        <li><a href="higiene.html">Higiene &amp; Limpeza</a></li>
        <li><a href="servicos.html">Serviços</a></li>
      </ul>
    </nav>
    <p>
      &copy; 2026 PetClean. Todos os direitos reservados.<br>
      Projeto acadêmico — Fundamentos de Sistemas Web — PUC Minas.
    </p>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Verificar no navegador**
  - 2 produtos de higiene com imagem, descrição e preço

- [ ] **Step 3: Commit**

```bash
git add higiene.html
git commit -m "feat: adiciona pagina de higiene e limpeza com 2 produtos"
```

---

### Task 5: Página de Serviços

**Files:**
- Create: `servicos.html`

**Interfaces:**
- Consome: estrutura de header/footer da Task 1 (copiar exatamente)
- Produz: `servicos.html` com 4 serviços (com/sem tele-busca)

- [ ] **Step 1: Criar `servicos.html`**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PetClean - Serviços</title>
</head>
<body>

  <header>
    <h1>PetClean 🐾</h1>
    <p>Tudo para o bem-estar do seu cão</p>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="acessorios.html">Acessórios</a></li>
        <li><a href="racoes.html">Rações</a></li>
        <li><a href="higiene.html">Higiene &amp; Limpeza</a></li>
        <li><a href="servicos.html">Serviços</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h2>Serviços PetClean</h2>
    <p>Cuidamos do seu cão com carinho, profissionalismo e conveniência!</p>

    <article>
      <h3>Banho Simples</h3>
      <p>
        Banho completo com shampoo e condicionador específicos para o tipo de
        pelagem do seu cão. Inclui secagem, limpeza de ouvidos e corte de
        unhas. Atendimento com hora marcada.
      </p>
      <p><strong>Preço: R$ 50,00</strong></p>
      <p>Tele-busca: <strong>Não incluso</strong></p>
    </article>

    <hr>

    <article>
      <h3>Banho e Tosa</h3>
      <p>
        Banho completo acrescido de tosa higiênica ou modelada conforme a raça.
        Inclui shampoo, condicionador, secagem, limpeza de ouvidos, corte de
        unhas e perfume. Atendimento com hora marcada.
      </p>
      <p><strong>Preço: R$ 80,00</strong></p>
      <p>Tele-busca: <strong>Não incluso</strong></p>
    </article>

    <hr>

    <article>
      <h3>Banho Simples com Tele-Busca</h3>
      <p>
        Banho completo com shampoo e condicionador específicos para o tipo de
        pelagem do seu cão. Inclui secagem, limpeza de ouvidos e corte de
        unhas. Nosso veículo vai até sua residência buscar e devolver o seu pet.
      </p>
      <p><strong>Preço: R$ 90,00</strong></p>
      <p>Tele-busca: <strong>Incluso — buscamos e entregamos em casa</strong></p>
    </article>

    <hr>

    <article>
      <h3>Banho e Tosa com Tele-Busca</h3>
      <p>
        Banho completo acrescido de tosa higiênica ou modelada conforme a raça.
        Inclui shampoo, condicionador, secagem, limpeza de ouvidos, corte de
        unhas e perfume. Nosso veículo vai até sua residência buscar e devolver
        o seu pet com comodidade total.
      </p>
      <p><strong>Preço: R$ 120,00</strong></p>
      <p>Tele-busca: <strong>Incluso — buscamos e entregamos em casa</strong></p>
    </article>
  </main>

  <footer>
    <hr>
    <h3>PetClean</h3>
    <address>
      Rua dos Animais, 123 — Bairro Jardim Verde — São Paulo, SP<br>
      Telefone: (11) 99999-0000<br>
      E-mail: contato@petclean.com.br
    </address>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="acessorios.html">Acessórios</a></li>
        <li><a href="racoes.html">Rações</a></li>
        <li><a href="higiene.html">Higiene &amp; Limpeza</a></li>
        <li><a href="servicos.html">Serviços</a></li>
      </ul>
    </nav>
    <p>
      &copy; 2026 PetClean. Todos os direitos reservados.<br>
      Projeto acadêmico — Fundamentos de Sistemas Web — PUC Minas.
    </p>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Verificar no navegador**
  - 4 serviços com descrição, preço e indicação de tele-busca (sim/não)

- [ ] **Step 3: Commit**

```bash
git add servicos.html
git commit -m "feat: adiciona pagina de servicos com 4 opcoes de banho e tosa"
```

---

## Self-Review Checklist

- [x] **Spec coverage:** Home ✅ | Acessórios (2 produtos) ✅ | Rações (2 produtos) ✅ | Higiene (2 produtos) ✅ | Serviços (com/sem tele-busca) ✅ | Header em todas as páginas ✅ | Footer em todas as páginas ✅ | Nav em todas as páginas ✅
- [x] **Placeholders:** Nenhum TBD ou TODO encontrado — todos os passos têm código completo
- [x] **Consistência:** Estrutura de header/footer idêntica em todas as 5 tarefas
- [x] **Restrições globais:** Sem CSS, sem JS, sem Bootstrap — confirmado em todos os arquivos
