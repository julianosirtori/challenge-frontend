# Books Store

## Descrição

Este projeto foi desenvolvido para o desafio técnico da Árvore. [Aqui está o link](https://github.com/arvoreeducacao/challenge-frontend) para saber mais.

Dei continuidade à arquitetura e organização de pastas que continha o projeto. Segui este padrão para novos componentes e funções.

A única diferença é que adicionei uma pasta de `partials` para alguns components. Nela, podemos adicionar partes dos components que são usadas apenas por eles. Desta forma, os components ficam mais enxutos, facilitando assim a manutenção.

```
├── (nome do component/função)
    ├── index.tsx
    ├── types.ts
    ├── styles.ts
    ├── hooks.ts
    ├── constants.ts
    └── partials
        └── (nome do component interno)
            ├── ...
```

Neste README, irei detalhar o que foi desenvolvido e compartilhar alguns links de referência.

## Features e melhorias

Foram desenvolvidas três principais features:

* **Search com auto complete**
* **Integração com o Google Api Books na tela de home e search**
* **Filtro de pesquisa**
* **Infinite Scroll na página de search**

Também foram feitas algumas melhorias.

* Adicionado linter, code formatter e .editorconfig
* Adição de git hooks
* Adicionado roteamento
* Adicionado testes e2e
* Melhorias no layout
* Corrigido tipagens
* Adicionado .nvmrc
* Adicionado path alias
* Melhorias na semântica
* Corrigido warnings do styled-components
* Criado CI/CD

Abaixo irei descrever alguns dos items citados acima:

### Search com auto complete

O component pode ser encontrado nesse endereço: `src/components/search/*`.

O comportamento dele, além dos requisitos mínimos proposto pelo desafio, implementei alguns comportamentos semelhante da barra de busca do google, podendo navegar entre as sugestões através dos botões direcionais do teclado. Para implementar esse comportamento  criei um handler para o evento `onKeyUpCapture` do input.

Para compartilhar o termo da pesquisa entre telas optei por usar `search params` desta forma o state da aplicação pode ser compartilhado através do link. Neste link (que encontrei rapidamente no google) tem mais detalhes sobre essa técnica: [Using React Router SearchParams to Manage Filter State for a List](https://cgarethc.medium.com/using-react-router-searchparams-to-manage-filter-state-for-a-list-e515e8e50166)  

### Integração com o Google Api Books na tela de home e search

#### Integração

Para realizar a integração, acabei criando uma pasta de `services` onde se encontra o fetch para as chamadas da api.

Optei por adicionar o `react-query`, desta forma a aplicação possui uma camada de cache tornando a aplicação muito mais rápida e fluida para o usuário.

Os hooks que utilizam o react-query podem ser encontrados nesse endereço `src/hooks` e eles devem possuir essa nomenclatura `use(Query|InfiniteQuery)[service]`.

Separando os services dos hooks com react-queries permitimos que o desenvolvedor possa chamar diretamente o service caso necessário, não utilizando a camada de cache.

#### Google API Books

Olhando a documentação do google api books optei por enviando alguns search params como default:

* `printType: "books"`: Quero que ele retorne apenas livros
* `langRestrict: "pt"`: Por enquanto nossa aplicação não é localizada, por conta disso optei por ele retornar apenas `pt`


### Filtro de pesquisa

O Google API Books não fornece a opção de filtrar por formato, disponibilidade e preço (não consegui encontrar nada na documentação), porem esses são campos retornados pela API, desta forma os filtros são aplicados apenas localmente.

Os filtros funcionam de uma maneira semelhante ao componente do `Search` compartilhando o estado pelo `search params`. Esse comportamento você pode encontrar no partial `ContentFilter` do component `Search`;

Ele também possui um **comportamento diferente para mobile**, quando o width for menor que 768 ele renderizará um botão para abrir os filtros, eles irão abrir em tela cheia, e ao selecionar um filtro ele fechará a tela de filtros. 

#### Logica de filtragem

Para a implementação dos filtros foi utilizado um pattern chamado `Chain of Responsibility Design` que consiste de uma cadeia de handlers. Isso permitiu desacoplar os filtros e deixa-los independentes.

Você pode ver a implementação desse pattern aqui: `/src/components/filters/handlers.ts`.

Uma vez que o component `Filter` adicionou os `search params`, o component `BooksList` irá buscar esses `search params` e será passado para a função `filterBooks` juntamente com os dados q recebemos da API.

Dentro da função `filterBooks` irá filtrar apenas os handlers q estão ativos no search params e realizar o filtro.

#### Como adicionar novos filtros

> **Atenção**
  >
  > Atualmente o filtro suporta apenas checkbox

Para adicionar um novo filtro você precisará editar dois arquivos:

* src/components/filters/constants.ts
* src/components/filters/handlers.ts

No arquivo constants você adicionará o novo filtro com os possíveis itens.

E no arquivo handlers deverá adicionar a regra desse filtro.

***Atenção: O valor handler do novo filtro deverá ser o mesmo nome da função que foi adicionada no campo handlers.***

### Infinite Scroll na pagina de search

Na pagina de search foi adicionado adicionado um infinite scroll. Para essa implementação acabei adicionado um botão no fim da listagem de livros, quando o usuário visualizar o botão é feito um novo fetch.

Para implementar isso foi utilizado o `useInfiniteQuery` do `react-query` que fornece alguns métodos como o `fetchNextPage` e propriedades como o `hasNextPage` que aceleram o desenvolvimento.

Você pode conferir nesse endereço a implementação: `src/view/Search/index.tsx`.

### Criado CI/CD

Foi criado dois workflows no github:

* unit-tets.yml: executa testes unitários e de integração
* productions.yml: caso o workflow de testes passou ele irá rodar esse workflow que irá realizar o release do projeto.


## Sugestões de melhorias

Abaixo algumas sugestões de melhorias que por conta do tempo não consegui chegar a atuar.

* Adicionar um theme ao projeto, centralizando em um lugar todas as cores e configurações de fonte.
* Melhorar coverage de testes unitários no projeto.