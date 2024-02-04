# Desafio Técnico - Challenge Promotions

- [Desafio Técnico - Challenge Promotions](#desafio-técnico---challenge-promotions)
  - [Como instalar](#como-instalar)
  - [Decisões e escolhas](#decisões-e-escolhas)
    - [Stack](#stack)
    - [Techs](#techs)
    - [Estrutura do projeto](#estrutura-do-projeto)
    - [Gerenciamento de estados](#gerenciamento-de-estados)
    - [Padrões de projeto e estilo de código](#padrões-de-projeto-e-estilo-de-código)
      - [Padrões de projeto](#padrões-de-projeto)
      - [Estilo de código](#estilo-de-código)
  - [Scripts](#scripts)
  - [Testes](#testes)
    - [Tipos de testes](#tipos-de-testes)
  - [Deploy](#deploy)
  - [Sobre](#sobre)

## Como instalar

```sh
yarn && yarn dev
```

Ou com docker

```sh
docker build ./ -t meli-promotion-challenge:latest

docker run -p 3000:3000 meli-promotion-challenge
```

## Decisões e escolhas

### Stack

Como se trata de um projeto público no qual os mecanismos de busca podem realizar indexação, optei pelo framework Next.js como a escolha mais vantajosa. Além disso, priorizei a eficiência nos requisitos estabelecidos, decidindo assim utilizar o Tailwind CSS para simplificar e agilizar o processo de estilização dos componentes.

### Techs

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/v3/)

### Estrutura do projeto

```sh
src
├── __tests__      # Arquivos de testes, também nos subdiretórios
├── assets         # Arquivos estáticos globais
├── components     # Componentes globais
├── configs        # Configurações compartilhadas por todos o projeto ou modulos
├── entities       # Tipos que representam respostas de uma API
├── libs           # Configurações específicas de alguma lib
├── modules        # Modularização da aplicação separada por regras de negócio
├── pages          # Cada página é associada a sua rota específica
├── providers      # Providers compartilhados por todo o projeto ou mais de um módulo
├── services       # Integração com backend
├── ui             # Componentes de design system
└── utils          # Funções utilitarias e usadas globalmente
tests
├── __snapshots__  # Snapshots gerados automaticamente dos componentes de ui
├── mocks          # Mocks globais utilizados para o setup do jest ou compartilhado
└── utils          # Wrapper do render do jest para compartilhar os providers do projeto
```

### Gerenciamento de estados

- Local: Utilizei para atualizar estados locais de um componente. Ex: trocar imagem do carousel da home, ou alterar a imagem visível de um produto;
- Compartilhado: Acho o **Context API** a melhor solução quando o compartilhamento precisa estar alinhado com a árvore de componentes. Ex: renderizações visuais como o produto visível na screen **ItemDetail** e seus sub-componentes;
- Rede: Pensei em usar um compartilhador de dados de servidor, porque carregar as categorias na **SideBar** e os produtos em promoção na Home (já que cada pessoa visualiza itens diferentes) podem ser ou são importados em múltiplos componentes. Para mim fez mais sentido usar o **react-query**, já que ele possibilita o cache dados entre os componentes;

Apenas para esclarecer sobre o compartilhamento global, a **Context API** não é uma bala de prata nem a melhor alternativa para todos os casos. Sua eficácia depende de cada situação e problema, especialmente porque, a cada renderização, ela gera re-renders em todos os componentes filhos.
Minha experiência inclui a utilização de muitas outras soluções como o **redux** e **redux-saga** por exemplo. Nos últimos anos tenho utilizado muito do combo **zustand** com **selectors** + **immer** (quando o objeto é mais complexo). O **zustand** é performatico comparável ao Redux(já que utiliza ele por baixo dos panos), mas muito mais simples de implementar e com **selectors** posso garantir um re-render aconteçam somente no escopo alterado. **Para esse projeto não vi a necessidade de algo mais complexo.**

### Padrões de projeto e estilo de código

#### Padrões de projeto

Iniciei o projeto com o framework Next.js para fazer uso do **Server Components** e utilizei do seu plugin **next/recommended** no eslint, isso me garantiu não precisar instalar os seguintes plugins para eslint: **react/recommended**, **typescript-eslint/recommended**, **import/recommended** ele tem mais alguns, porém em todos os projetos gosto de usar esses 3 citados.

Usei também do **prettier** para formatar o código e criar um padrão de estilo.

Acho importante explicar as seguintes regras:

- [[typescript-eslint/no-shadow]](https://eslint.org/docs/latest/rules/no-shadow) - Evita o erro de variáveis serem redeclaradas, assim podendo ter seu valor alterado por engano;
- [[camelcase]](https://eslint.org/docs/latest/rules/camelcase) - Desliguei o uso dessa regra por motivos de integrações com bibliotecas externas, o `camelcase` é um padrão de filename desse projeto, mas pode ocacionar incompatibilidades com libs externas;
- [no-console] - Sempre desativo para evitar subir consoles por engano para produção;

Acredito que as demais são todas regras básicas e estão em quase todos os projetos typescript.

#### Estilo de código

- Strings com **backtick**, facilita a visualização e padroniza o uso de strings no projeto;
- Nomes em **camelCase** para objetos, funcões, utilitários e qualquer outro arquivo que não seja um componente;
- Nomes sempre descritivos, ajuda muito o entendimento do código para outras pessoas;

  ```ts
  function q() {
    // ...
  }
  ```

  para

  ```ts
  function query() {
    // ...
  }
  ```

- **Interfaces** e **types** em `PascalCase` para seu nome e `camelCase` para seus atributos;

## Scripts

Use o comando em seu terminal, ex:

```ts
yarn dev
```

| Comand  | Descrição                                     |
| ------- | --------------------------------------------- |
| `dev`   | Inicia o projeto em modo de desenvolvimento.  |
| `build` | Compila o projeto para produção.              |
| `lint`  | Testa as regras **eslint** em todo o projeto. |
| `test`  | Executa os testes em todo o projeto.          |

## Testes

Como estava nos requisitos desse teste técnico, escrevi ao menos 1 teste por camada. Dado o tempo tentei fazer a melhor cobertura de teste possível.

Um atendo a pasta `src/pages` é uma pasta reservada para o **Next.js** então seus respectivos testes estão em `src/__tests__`.

### Tipos de testes

- **Snapshot** - Escritos para os componentes de **ui**, onde considero importante a fidelidade visual e a identidade visual. Então quero confirmação caso mude algo.
- **Unidade** - Testes funcionais nos utilizatários, funções, configurações e componentes.

## Deploy

Atualize o arquivo `.env` com os respectivos valores desejados e utilize o **Dockerfile** presente na raiz do projeto para servidores próprios como **aws**/**gcp**

```ts
NEXT_PUBLIC_MELI_API_BASE_URL=SEU_VALOR
# see more - https://api.mercadolibre.com/sites
NEXT_PUBLIC_MELI_COUNTRY_CODE=SEU_VALOR
```

## Sobre

Me apoiei muito na documentação da [MELI](https://developers.mercadolivre.com.br/) e a [API](https://api.mercadolibre.com/sites) pública do projeto facilitou demais a execução. Já tinha trabalhado com integrações do **Mercado Pago**, mas do **Mercado Livre** foi a primeira vez.

Obrigado pela oportunidade e qualquer dúvida estou a disposição!
