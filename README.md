<h1 align= "center">Wall-e</h1>

<h2 align= "center">Inicializando a aplicação</h2>

<br/>

<p>Primeiro clone o repositório utilizando o comando:</p>

```bash
$ git clone https://github.com/leanndrocabral/wall-e-discordjs
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
# Acessando a aba OAuth2 no site Discord Developers
CLIENT_ID= 

# Acessando a aba Bot no site Discord Developers
DISCORD_TOKEN=

# Abra a extensão no site Youtube, copie a chave e o valor de "__Secure-3PSID"
YT_COOKIE=
```

<br/>

<p>Por fim, você terá algo parecido com isto: </p>

```
CLIENT_ID="1094097123118698577"

DISCORD_TOKEN="MTA5NDA5NzEyMzExODY5ODU3Nw.GAllZ5.755jRj9kYT4aqTMO8f7UhUalVEQwi63lbt1CFg"

YT_COOKIE="__Secure-3PSID=__Secure-3PSID=WAip0R3AmycJ_kv-VJN8DwoNrFiPo20O6dTXAMhabCMoqJ93_Rizs42mCN3mZnWNSiT3Dw."
```

<p><small>Obs: Estas variáves possuem valores fictícios, apenas para fins de demonstração.</small></p>

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

