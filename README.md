# Desafio Técnico - Challenge Promotions

- [Desafio Técnico - Challenge Promotions](#desafio-técnico---challenge-promotions)
  - [Como instalar](#como-instalar)
  - [Decisões e escolhas](#decisões-e-escolhas)
    - [Stack](#stack)
    - [Techs](#techs)
    - [Estrutura do projeto](#estrutura-do-projeto)
    - [Stores](#stores)

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
├── assets       # Arquivos estáticos globais
├── components   # Componentes globais
├── entities     # Tipos que representam respostas de uma API
├── libs         # Providers e configurações específicas de alguma lib
├── modules      # Modularização da aplicação separada por regras de negócio
├── pages        # Cada página é associada a sua rota específica
├── services     # Integração com backend
├── ui           # Componentes
└── utils        # Funções utilitarias e usadas globalmente
```

### Stores

Nesse projeto utilizei dos 3 modos de gerenciamentos de estados local, global e de rede,
