<h1 align= "center">Wall-e</h1>

<h2 align= "center">Inicializando a aplicação</h2>

<br/>

<p>Primeiro clone o repositório utilizando o comando:</p>

```bash
$ git clone https://github.com/leanndrocabral/wall-e.git
```

<p>Abra o repositório e no terminal instale as depedências utilizando:</p>

```bash
$ npm install
```

<p>ou</p>

```bash
$ yarn add
```

<br/>

<p> Após tudo instalado, é hora de criar e configurar as variáveis de ambiente. Primeiro entre no site do 
<a href="https://discord.com/developers/applications" target="_blank">Discord Developers</a> e crie sua aplicação, instale a extensão <a href="https://chrome.google.com/webstore/detail/open-cookiestxt/gdocmgbfkjnnpapoeobnolbbkoibbcif" target="_blank">Get Cookies.txt</a> no seu navegador. Em seguida na raiz do repositório, crie um arquivo chamado <span style="color:#0099ff">.dotenv</span>, nele irá conter as seguintes variáveis:</p>

```
.env

# Acesse a aba OAuth2 no site Discord Developers
CLIENT_ID= 

# Acesse a aba Bot no site Discord Developers
DISCORD_TOKEN=

# Abra a extensão no site Youtube, selecione a opção "HTTP Header (experimental)" e copie o valor
YT_COOKIE=
```

<br/>

<p>Feito todas a configurações, é só abrir o terminal e iniciar com o comando:</p>

```bash
$ npm run dev
```

ou

```bash
$ yarn dev
```

<p>Agora é ser feliz e ouvir suas musiquinhas no Discord 😁😊.</p>

<br/>

<h2 align= "center">Outras funcionalidades</h2>

<br/>

<p> Caso queira utilizar algumas funções como os comandos de <span style="color:#0099ff">gpt</span>, <span style="color:#0099ff">temperature</span> ou <span style="color:#0099ff">translate</span> insira as seguintes variáveis de ambiente: 
</p>

```
.env

# Crie uma conta no site https://www.weatherapi.com/ e após logar copie o valor de API Key
TEMPERATURE_KEY=

# Crie uma conta no site https://platform.openai.com/, clique no seu usuário no canto superior direito e vá na opção View API Keys
OPENIA_KEY= 

# Crie uma conta no site https://nlpcloud.com/ e após logar copie o valor de Here is your API key
NLP_KEY=
```