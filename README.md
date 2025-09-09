# Apresentação do Projeto Docker

## Introdução: Quem sou eu?

Olá a todos\! Meu nome é **Roger David**, e sou estudante de **Análise e Desenvolvimento de Sistemas**. Este repositório contém um projeto focado no aprendizado e na demonstração do **Docker** e **Docker Compose**, utilizando diversas tecnologias.

-----

## O Desafio: Qual problema estamos resolvendo?

O objetivo principal deste projeto é demonstrar como orquestrar múltiplas aplicações e bancos de dados em um ambiente isolado e consistente, utilizando **Docker**. Ele mostra a integração de diferentes tecnologias, como Node.js e Python, com bancos de dados MySQL e MongoDB, tudo gerenciado por um único arquivo `docker-compose.yml`. O projeto serve como um "laboratório de programação" para entender como diferentes serviços se comunicam em contêineres.

-----

## Tecnologias Utilizadas

Para este projeto, utilizei as seguintes tecnologias:

### Back-end e Aplicações

  * **Node.js**: Um ambiente de execução JavaScript que gerencia uma API leve e eficiente.
  * **Express.js**: Um framework web minimalista para a API Node.js.
  * **Flask**: Um microframework web em Python que serve uma API para listar usuários.

### Bancos de Dados e Ferramentas

  * **MySQL**: Banco de dados relacional para armazenar dados de usuários, clientes e vendas.
  * **MongoDB**: Banco de dados NoSQL.
  * **phpMyAdmin**: Uma ferramenta de administração para gerenciar o banco de dados MySQL via interface web.
  * **Mongo Express**: Uma interface de administração web para o MongoDB.

### Front-end e Orquestração

  * **Next.js**: Um framework React para o front-end, que mostra uma página de boas-vindas e as portas dos serviços.
  * **Docker e Docker Compose**: Usados para criar e gerenciar os contêineres de todos os serviços de forma declarativa e simples.

-----

## Como o Projeto Funciona?

O projeto é uma demonstração de microsserviços rodando em Docker. Cada serviço é um contêiner separado que se comunica com outros contêineres, conforme definido no arquivo `docker-compose.yml`.

  * **Aplicação Next.js (Front-end)**: Servida na porta **3000**.
  * **Aplicação Node.js (API)**: Servida na porta **3001**. Esta API se conecta ao contêiner MySQL e expõe um endpoint `/users` para buscar dados.
  * **Aplicação Flask (API)**: Servida na porta **5000**. Esta API também se conecta ao contêiner MySQL para gerenciar a tabela de usuários.
  * **Banco de Dados MySQL**: Contêiner do MySQL servido na porta **3306**. Ele é inicializado com um script SQL (`backup.sql`) que cria as tabelas `clientes` e `vendas` e insere dados de exemplo.
  * **Banco de Dados MongoDB**: Contêiner do MongoDB servido na porta **27017**.
  * **phpMyAdmin**: Contêiner de administração do MySQL, disponível na porta **8080**.
  * **Mongo Express**: Contêiner de administração do MongoDB, disponível na porta **8081**.

-----

## Instalação e Execução

Para rodar este projeto localmente, siga os passos abaixo:

1.  Clone este repositório:

    ```bash
    git clone https://github.com/roge-rdv/aula-docker
    ```

2.  Acesse a pasta do projeto:

    ```bash
    cd aula-docker
    ```

3.  Inicie todos os serviços com o Docker Compose:

    ```bash
    docker-compose up -d --build
    ```

      * O comando `-d` executa os contêineres em segundo plano.
      * O comando `--build` garante que as imagens das aplicações Node.js e Flask sejam construídas a partir do código local.

4.  Acesse as aplicações e ferramentas no seu navegador:

      * **Next.js:** `http://localhost:3000`
      * **Node.js API:** `http://localhost:3001`
      * **Flask API:** `http://localhost:5000`
      * **phpMyAdmin:** `http://localhost:8080`
      * **Mongo Express:** `http://localhost:8081`

-----

## Contato

Estou à disposição para responder a perguntas e discutir sobre o projeto. Você pode entrar em contato comigo através do email:

  * **rogerdavid@edu.com**
