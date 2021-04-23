# Next Level Week 05 - Podcastr

Projeto construído durante a Next Level Week 05 fornecido pela equipe Rocketseat. Podcastr é uma aplicação web onde é possível ouvir podcasts e possui todas as funcionalidades de um player como: tocar, pausar, tocar próximo ou anterior, embaralhar e repetir.

A aplicação foi desenvolvida utilizando SSR (Server-side Rendering) e SSG (Static Generation).

## Bibliotecas e ferramentas utilizadas

* [Node.js](https://nodejs.org/en/)
* [React.js](https://reactjs.org/)
* [Next.js](https://nextjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [date-fns](https://date-fns.org/)
* [Vercel](https://vercel.com/)
* [axios](https://github.com/axios/axios)
* [json-server](https://github.com/typicode/json-server)
* [rc-slider](https://www.npmjs.com/package/rc-slider)
* [Sass](https://sass-lang.com/)

## Dependências

Para instalar as dependências é necessário ter:

- Pelo menos a versão do Node v12.20.1.
- O gerenciador de pacotes `yarn`.

Clone este repositório e na pasta raiz execute o seguinte comando:

```
yarn install
```

## Variáveis de ambiente

Antes de executar o projeto, é necessário configurar as variáveis de ambiente. Para isso, criei um arquivo na raiz do projeto chamado `.env.local`. Utilize o arquivo `.env.template` como template.

A variável `API_URI` é a URI do json-server utilizado para criar uma API fake.

## Executar

Para rodar o projeto é necessário executar dois serviços:

- Para executar o projeto next:
    ```
    yarn dev
    ```

- Para executar uma API fake utilizando a biblioteca json-server:
    ```
    yarn server
    ```

## Deploy

O deploy do projeto foi feito de duas maneiras.

1. Utilizando o Vercel para fazer o deploy do projeto next, onde você pode acessar por meio deste link: https://podcastr-thalissonfelipe.vercel.app/.

2. Utilizando o heroku para fazer o deploy da API fake criada com o json-server, no qual é possível acessar por meio deste link: https://podcastr-fakeapi.herokuapp.com/. Criei uma branch chamada json-server para subir esse serviço separado do next.js.

## TODO

- [x] Adicionar responsividade
- [ ] Adicionar versão PWA (next-pwa)
- [ ] Adicionar Tema Dark
- [x] Deploy (next e API fake)
