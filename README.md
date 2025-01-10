# Pokedex - TypeScript, Vue 2, Vue Test Utils, Jest, PokeAPI

## Sobre o Projeto

Este é um projeto de Pokedex desenvolvido utilizando TypeScript, Vue 2, Vue Test Utils e Jest, com integração com a API pública da PokeAPI. O objetivo é fornecer uma interface amigável para visualizar informações sobre diferentes Pokémon e demonstrar boas práticas no desenvolvimento frontend.

---

## Funcionalidades

- Pesquisar Pokémon pelo nome ou ID.
- Exibir detalhes do Pokémon, incluindo:
  - Tipo(s) do Pokémon.
  - Estatísticas base.
  - Habilidades.
  - Sprite.
- Navegar por uma lista paginada de Pokémon.
- Testes automatizados para componentes principais.

---

## Tecnologias Utilizadas

- **[Vue 2](https://vuejs.org/)**: Framework JavaScript progressivo para construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/)**: Superconjunto do JavaScript que adiciona tipagem estática opcional.
- **[Vue Test Utils](https://test-utils.vuejs.org/)**: Biblioteca oficial de teste para Vue.
- **[Jest](https://jestjs.io/)**: Framework de teste em JavaScript com foco em simplicidade.
- **[PokeAPI](https://pokeapi.co/)**: API RESTful pública para dados de Pokémon.

---

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/samuelbaldasso/Pokedex-TypeScript-Vue2-Vue_Test_Utils-Jest-PokeAPI.git
```

### 2. Acesse o diretório do projeto

```bash
cd Pokedex-TypeScript-Vue2-Vue_Test_Utils-Jest-PokeAPI
```

### 3. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 4. Execute o servidor de desenvolvimento

```bash
npm run serve
# ou
yarn serve
```

O projeto estará disponível em `http://localhost:8080`.

---

## Scripts Disponíveis

- **`npm run serve`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Compila o projeto para produção.
- **`npm run lint`**: Analisa o código em busca de problemas de formatação e sintaxe.
- **`npm run test:unit`**: Executa os testes unitários utilizando Jest.

---

## Testes

### Executar os testes unitários

```bash
npm run test:unit
# ou
yarn test:unit
```

### Verificar cobertura de testes

```bash
npm run test:coverage
# ou
yarn test:coverage
```

---

## Próximos Passos

- Adicionar mais testes unitários para aumentar a cobertura.
- Implementar testes de integração e e2e.
- Melhorar o design e a responsividade da interface.
- Adicionar suporte para outros idiomas.

---

## Contribuindo

Contribuições são sempre bem-vindas! Siga os passos abaixo para colaborar:

1. Faça um fork do projeto.
2. Crie uma branch para a sua feature (`git checkout -b minha-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona minha feature'`).
4. Envie para o repositório remoto (`git push origin minha-feature`).
5. Abra um Pull Request.

---

## Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).

---

Desenvolvido com ❤️ por Samuel Baldasso
