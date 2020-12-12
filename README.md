<h1 align="center">
    <img src="https://user-images.githubusercontent.com/47895394/94995053-ff717100-0571-11eb-87d6-3be5205ed70b.png" width="20%" ></img>
</h1>
    <br>

<h2 align="center"> PROJETO LIVRE - CONCLUSÃO DO CURSO
</h2>

<h2 align="center">
    <img src="https://user-images.githubusercontent.com/47895394/100524732-48702b00-3199-11eb-9e1e-fc5d446b9952.png" width="20%" ></img>
</h2>

<h3 align="center">Atender a população negra no âmbito profissional, contribuindo para o aumento do número de negros no mercado de trabalho, principalmente em cargos estratégicos e de liderança.</h3>

<br>
<br>
<hr>

<p align="center">
  <a href="#beginner-resumo">Resumo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-banco-de-dados">Banco de dados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pushpin-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-contribuindo-com-o-projeto">Contribuindo com o projeto</a>
</p>

<br>
<br>
<br>

## :beginner: Resumo

Segundo o IBGE, pretos e pardos correspondem a 64% dos desempregados e 66% dos subutilizados, mostra o estudo “Desigualdades Sociais por Cor ou Raça”.
Essa população recebe menos que as pessoas brancas independente do nível de instrução.
O Engajafro, projeto social voltado para atender a população negra no âmbito profissional, entre os obstáculos encontrados, estava como iria englobar todo conteúdo de qualificação em um único lugar, pois o mesmo só possuía comunicação por redes sociais.
Vi como solução a criação do site e, com isso, poder conectar o máximo de pessoas para ajudar na inserção, recolocação e crescimento de profissionais negros no mercado de trabalho.

    CONTEXTUALIZAÇÃO

Os cargos de mais alto escalão pertencem, majoritariamente, aos brancos. A conclusão é de um relatório publicado pelo portal VAGAS.com.
Os negros são maioria apenas em posições operacionais e técnicas do mercado de trabalho. A partir do nível júnior, os índices despencam até o cargo de diretor.
Estudo aponta que, tanto nas ocupações formais quanto nas informais, a população preta do país recebe menos que os brancos e é maioria nos setores da economia com baixa remuneração. Entre os principais obstáculos para a inserção estão o preconceito e dificuldades de acesso à educação.
Com isso surgiu o Engajafro, uma comunidade que junto com as empresas querem transformar o mercado de trabalho por meio de práticas e políticas de diversidade/inclusão racial para que os negros não se encontrem mais em situação de minorias principalmente em cargos estratégicos e de liderança dentro das empresas.

Como projeto final do bootcamp da Reprograma - On7 Backend - 2020, essa API tem como proposta ser a base de dados do projeto social Engajafro, cujo frontend já está em produção, pode conferir no [site](https://www.engajafro.com.br/), depois da API pronta a interface vai ter ajustes.

<br>

FONTES:

[Veja](https://veja.abril.com.br/economia/mercado-de-trabalho-negros-sao-minoria-em-cargos-de-medio-e-alto-escalao/)

[Brasil de fato](https://www.brasildefato.com.br/2019/11/13/ibge-64-dos-desempregados-sao-negros-e-informalidade-alcanca-47)

[Correio braziliense](https://www.correiobraziliense.com.br/app/noticia/eu-estudante/trabalho-e-formacao/2019/11/17/interna-trabalhoeformacao-2019,807077/negros-ocupam-cargos-com-menor-remuneracao-no-mercado-de-trabalho.shtml)

<br>

## :books: Banco de dados

Através do cadastro, o Candidato ( denominado “candidate” ) cadastra seu currículo, que ficará disponível para as Empresas ( denominado “companie” ) cadastradas, que querem contratar os candidatos. As empresas cadastram as vagas disponíveis, assim ficará visível para todos os candidatos que busquem por vagas.

<br>

---

### Candidatos

| Verbo  | Recurso                | Descrição                                               |
| ------ | ---------------------- | ------------------------------------------------------- |
| GET    | `/candidates`          | Retornar todos os candidatos                            |
| GET    | `/candidates/jobs`     | Retornar os candidatos por cargo de trabalho específico |
| GET    | `/candidates/language` | Retornar os candidatos que falam outros idiomas         |
| GET    | `/candidates/:id`      | Retornar apenas um candidato específico                 |
| POST   | `/candidates`          | Cadastrar um novo candidato                             |
| PUT    | `/candidates/:id`      | Atualizar um candidato específico                       |
| DELETE | `/candidates/:id`      | Deletar um candidato específico                         |

---

---

<br>

---

### Empresas

| Verbo  | Recurso                   | Descrição                                |
| ------ | ------------------------- | ---------------------------------------- |
| GET    | `/companies`              | Retornar todas as empresas               |
| GET    | `/companies/jobs`         | Retornar todas as vagas de empregos      |
| GET    | `/companies/:id/jobs`     | Retornar uma vaga de emprego específica  |
| GET    | `/companies/:id`          | Retornar apenas uma empresa específica   |
| POST   | `/companies`              | Cadastrar uma nova empresa               |
| POST   | `/companies/:id/jobs`     | Cadastrar uma nova vaga de emprego       |
| PUT    | `/companies/:id`          | Atualizar uma empresa específica         |
| PATCH  | `/companies/:id/jobs/:id` | Atualizar uma vaga de emprego específica |
| DELETE | `/companies/:id`          | Deletar uma empresa específica           |
| DELETE | `/companies/:id/jobs/:id` | Deletar uma vaga de emprego específica   |

---

---

<br>

---

### Login

| Verbo | Recurso             | Descrição                   |
| ----- | ------------------- | --------------------------- |
| POST  | `/candidates/login` | Cadastrar um novo candidato |
| POST  | `/companies/login`  | Cadastrar uma nova empresa  |

---

---

<br><br>

Requisitos obrigatórios:

- [x] Implementação da criação das entidades
- [x] Implementação da leitura das entidades
- [x] Implementação da atualização das entidades
- [x] Implementação de deletar as entidades
- [x] Integrar com o banco de dados MongoDB
- [x] Deploy no Heroku

Requisitos desejáveis:

- [x] Adicionar variável de ambiente com Dotenv
- [ ] Autenticação das entidades com JWT
- [ ] Criptografar senha das entidades com Bcrypt
- [ ] Criar rota de login
- [x] Relacionamento entre as entidades

<br>

## :rocket: Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Nodemon](http://nodemon.io)
- [Body-parser](https://github.com/expressjs/body-parser#readme)
- [Dotenv-safe](https://github.com/rolodato/dotenv-safe#readme)
- [MongoDB](https://github.com/rolodato/dotenv-safe#readme)
- [Mongoose](https://www.mongodb.com/)
- [Heroku](https://www.heroku.com/)

<br>
<br>

## :pushpin: Como usar

### :eyes: **Acessar rotas**

Servidor local executando: `http://localhost:3000`

Para todas as rotas serem acessadas localmente, use http://localhost:3000/ antes do caminho da rota.

ou

Servidor em produção `https://projeto-engajafro.herokuapp.com/`

Para testar a aplicação é preciso configurar a variável de ambiente que é a URL do MongoDB.

Para clonar e executar a aplicação, precisa ter o [Git](https://git-scm.com), [Node.js v12.18.3](https://nodejs.org/en/) e [MongoDB](https://www.mongodb.com/) instalados.

<br>

### **Clonar o repositório**

```bash
# Clonar o repositório
$ git clone https://github.com/diaslilian/projeto-livre

# Entrar na pasta do repositório
$ cd projeto-livre

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start

```

<br><br>

## :memo: Contribuindo com o projeto

1. Faça o fork do projeto

`https://github.com/diaslilian/projeto-livre/fork`

2. Faça o checkout na branch main

`git checkout main`

3. Crie uma branch para realizar suas modificações

`git checkout -b feature/nome-da-sua-branch`

4. Após realizar as modificações, use o comando

`git add .`

5. Faça o commit

`git commit -m 'mensagem aqui'`

6. Faça o push

`git push --set-upstream origin feature/nome-da-sua-branch`

7. Crie um novo Pull Request para a branch

`feature/staging`

<br><br>

<hr>

Created by Lilian Dias :wave: [Hi-5!](https://www.linkedin.com/in/dias-lilian/)
