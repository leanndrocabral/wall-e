<h1 align= "center">Wall-e API</h1>

<br/>

<p>Esta é a API ao qual o Bee Bot usa para puxar os gifs para os comandos de roleplay. Esta é a url base:</p>

```
 https://bee-gifs.vercel.app/gifs/
```

<p>Quase todos os endpoints são idênticos, tanto em requesição, quanto em resposta.</p>

<br/>

<h2 align="center">Exemplos de requisições POST</h2>

<br/>

<p>Endpoints existentes no método POST</p>

```
 smile | cry | dance | slap | hug | pat | punch | blush | kiss
```

<br/>

<p>Exemplos:</p>


<p>URL: <a href="https://bee-gifs.vercel.app/gifs/smile" target="_blank">https://bee-gifs.vercel.app/gifs/smile</a></p>

```json
# Requisição no endpoint smile

{
 "gifs": [
  { 
    "gif_url": "https://media1.tenor.com/images/1bd437b00c6df2e69a8e7b602cd99750/tenor.gif?itemid=12989388" 
  },
  { 
    "gif_url": "https://th.bing.com/th/id/R.20d78ebeeb5c059eaba70dc979ab8fa9?rik=bfL8vEme03EWXw&pid=ImgRaw&r=0" 
  }
 ]
}
```

<p>Como resposta irá retornar:</p>

```json
# StatusCode = 201 Created

{
  "count": 2
}
```

<br/>

<p>URL: <a href="https://bee-gifs.vercel.app/gifs/dance" target="_blank">https://bee-gifs.vercel.app/gifs/dance</a></p>

```json
# Requisição no endpoint dance

{
 "gifs": [
  { 
    "gif_url": "https://th.bing.com/th/id/OIP.Q8JG0VX9Zy4GifU2HjkNuwAAAA?pid=ImgDet&rs=1",
    "single": true
  },
  { 
    "gif_url": "https://media1.tenor.com/images/f7d61dc7d7d86949667aa380eed87789/tenor.gif?itemid=11696796",
    "single": false 
  }
 ]
}
```
<p>Como resposta irá retornar:</p>

```json
# StatusCode = 201 Created

{
  "count": 2
}
```

<p>Observação: Como se pode ver, no endpoint <span style="color:#0099ff">/dance</span> possui uma chave com o valor de "single", ela indica se o gif enviado possui mais de uma pessoa dançando, caso sim, o valor de "single" deve ser passado como false e vice-versa.</><p>

<br/>

<h2 align="center">Exemplos de requisições GET</h2>

<br/>

<p>Endpoints existentes no método GET</p>

```
 smile | cry | dance | slap | hug | pat | punch | blush | kiss
```

<p><span style="color:#FEE75C">Aviso</span>: Todos os endpoints possuem o parâmetro /:id, mas apenas o endpoint possue um segundo parâmetro chamado <span style="color:#0099ff">/:single</span>!</p>

<br/>

<p>Exemplos:</p>

<p>URL: <a href="https://bee-gifs.vercel.app/gifs/smile/1" target="_blank">https://bee-gifs.vercel.app/gifs/smile/1</a></p>

```json
# Requisição no endpoint smile
{
  "id": 1,
  "gif_url": "https://media1.tenor.com/images/1bd437b00c6df2e69a8e7b602cd99750/tenor.gif?itemid=12989388"  
}
```

<br/>

<p>URL: <a href="https://bee-gifs.vercel.app/gifs/dance/1/true" target="_blank">https://bee-gifs.vercel.app/gifs/dance/1/true</a></p>

```json
# Requisição no endpoint dance

{
  "id": 1,
  "gif_url": "https://th.bing.com/th/id/OIP.Q8JG0VX9Zy4GifU2HjkNuwAAAA?pid=ImgDet&rs=1",
  "single": true
}
```

<p>Caso não ache nada, irá retornar a seguinte resposta</p>

```json
# StatusCode = 404 Not found

{
  "message": "Not found."
}
```
