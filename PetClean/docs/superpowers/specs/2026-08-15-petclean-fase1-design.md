# PetClean — Sistema Web Petshop — Fase 1: Design Spec

**Data:** 2026-08-15  
**Disciplina:** Fundamentos de Sistemas Web — PUC  
**Fase:** 1 (HTML puro, sem CSS/Bootstrap/JavaScript)

---

## Objetivo

Construir um sistema web de front-end para o petshop **PetClean**, focado em cachorros, com visualização de produtos nas três categorias exigidas e serviços disponíveis, usando somente HTML semântico.

---

## Metas / Escopo

- Estrutura HTML válida com `<header>`, `<main>` e `<footer>` em todas as páginas
- Navegação entre páginas via `<nav>` com links relativos
- Visualização de no mínimo 2 produtos por categoria (foto, descrição, valor)
- Listagem de serviços com indicação de tele-busca disponível ou não
- Sem CSS customizado, sem Bootstrap, sem JavaScript

---

## Estrutura de Arquivos

```
Fase 1/
├── index.html          ← Home: apresentação do petshop PetClean
├── acessorios.html     ← Categoria: Acessórios
├── racoes.html         ← Categoria: Rações Não Perecíveis
├── higiene.html        ← Categoria: Higiene e Limpeza
└── servicos.html       ← Serviços do petshop
```

---

## Header (padrão em todas as páginas)

```html
<header>
  <h1>PetClean 🐾</h1>
  <p>Tudo para o bem-estar do seu cão</p>
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="acessorios.html">Acessórios</a></li>
      <li><a href="racoes.html">Rações</a></li>
      <li><a href="higiene.html">Higiene & Limpeza</a></li>
      <li><a href="servicos.html">Serviços</a></li>
    </ul>
  </nav>
</header>
```

---

## Footer (padrão em todas as páginas)

- Informações de autoria (nome do aluno, disciplina, PUC, ano)
- Endereço e contato fictício do petshop
- Links de navegação repetidos
- Copyright © 2026 PetClean

---

## Páginas de Produtos

Cada página de categoria contém:
- `<h1>` com o nome da categoria
- Para cada produto: `<h2>` nome, `<img src="..." alt="...">`, `<p>` descrição, `<p>` preço

### acessorios.html

| Produto | Preço |
|---------|-------|
| Cama para Cão Tamanho M | R$ 89,90 |
| Brinquedo de Corda Colorido | R$ 24,90 |

### racoes.html

| Produto | Preço |
|---------|-------|
| Ração Seca Premium Adulto 10kg | R$ 159,90 |
| Petisco Ossinho Crocante 500g | R$ 18,90 |

### higiene.html

| Produto | Preço |
|---------|-------|
| Tapete Higiênico — 30 unidades | R$ 39,90 |
| Shampoo para Cães 500ml | R$ 29,90 |

Imagens: URLs externas de fontes livres (ex: Unsplash, Wikimedia Commons).

---

## servicos.html

Quatro serviços listados, cada um com `<h2>`, `<p>` descrição, `<p>` valor e `<p>` tele-busca (sim/não):

| Serviço | Valor | Tele-busca |
|---------|-------|-----------|
| Banho Simples | R$ 50,00 | Não |
| Banho e Tosa | R$ 80,00 | Não |
| Banho Simples com Tele-Busca | R$ 90,00 | Sim |
| Banho e Tosa com Tele-Busca | R$ 120,00 | Sim |

---

## Restrições Técnicas

- Apenas HTML5 semântico
- Sem folhas de estilo externas ou inline CSS
- Sem JavaScript
- Sem Bootstrap ou frameworks
- Links entre páginas com caminhos relativos
- Imagens via `<img src="URL_EXTERNA" alt="...">` — sem download local
