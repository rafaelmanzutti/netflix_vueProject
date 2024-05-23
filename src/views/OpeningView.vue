<template>
  <div class="opening-view">

    <div class="top-page">
      <div class="shadow">
        <header>
          <div class="box-header">
            <div class="header-item-logo">
              <span><img src="../../public/netflix_official_logo_icon_168085.png" alt="logo-netflix"></span>
            </div>
            <div class="header-item-login">
              <div class="language-select">
                <select name="language-select" id="">
                  <option value="pt-br">Português</option>
                  <option value="en">English</option>
                </select>
              </div>
              <div class="enter">
                <button  @click="$router.push('login')">Entrar</button>
              </div>
            </div>
          </div>
        </header>
        <div class="top-text">
          <div class="top-text1">
            <h1>Filmes, séries e muito mais, sem limites</h1>
            <p>Assista onde quiser, Cancele quando quiser.</p>
          </div>
          <div class="top-text2">
            <p>Tudo pronto para assistir? Faça o login ou cadastre-se.</p>
          </div>
          <div class="enter-lg">
            <button  @click="$router.push('login')">Vamos lá > </button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="body-content">
      <div class="body-content-box">
        <div class="content-text">
          <h1>Aproveite na TV</h1>
          <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Bluray e outros dispositivos.</p>
        </div>
        <div class="content-image">
          imagem
        </div>
      </div>
      <div class="body-content-box">
        <div class="content-text">
          <h1>Assista onde quiser</h1>
          <p>Assista a quantos filmes e séries que quiser no celular, tablet, laptop e TV.</p>
        </div>
        <div class="content-image">
          imagem
        </div>
      </div>
      <div class="body-content-box">
        <div class="content-text">
          <h1>Crie perfis para crianças</h1>
          <p>Deixe as criaças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar nada a mais por isso.</p>
        </div>
        <div class="content-image">
          imagem
        </div>
      </div>
      <div class="body-content-box">
        <div class="content-text">
          <h1>Baixe séries para assistir offline</h1>
          <p>Assista em um avião, trem ou submarino...</p>
        </div>
        <div class="content-image">
          imagem
        </div>
      </div>
    </div>
    
    <div class="questions">
      <div class="title-questions">
        <h1>Perguntas frequentes</h1>
      </div>
      <div class="box-questions">
        <div class="question">
          <div class="question-text">
            <p>O que é a Netflix?</p>
          </div>
          <div class="question-symbol">
            +
          </div>
        </div>
        <div class="question">
          <div class="question-text">
            <p>Quanto custa a Netflix?</p>
          </div>
          <div class="question-symbol">
            +
          </div>
        </div>
        <div class="question">
          <div class="question-text">
            <p>Onde posso assistir?</p>
          </div>
          <div class="question-symbol">
            +
          </div>
        </div>
        <div class="question">
          <div class="question-text">
            <p>Como faço para cancelar?</p>
          </div>
          <div class="question-symbol">
            +
          </div>
        </div>
        <div class="question">
          <div class="question-text">
            <p>O que eu posso assistir na Netflix?</p>
          </div>
          <div class="question-symbol">
            +
          </div>
        </div>
      </div>
      <div class="questions-login">
        <div class="question-text2">
          <p>Tudo pronto para assistir? Faça o login ou cadastre-se.</p>
        </div>
        <div class="enter-lg">
          <button  @click="$router.push('login')">Vamos lá > </button>
        </div>
      </div>  
    </div>


  </div>
</template>

<script>

export default {
  name: 'OpeningView',
  components: {
   
  }
}
</script>

<style>
body, html {
  background: #000;
  max-width: 100%;
  margin: 0;
}

.opening-view {
  color:White;
}
h1 {
  font-size: 3rem;
}
p {
  font-size: 1.5rem;
}

.top-page {
  background: url('../../public/netflixOpening.jpg');
  background-size: 100%;
}
.shadow {
  background-color: rgba(0, 0, 0, 0.6);
}

header {
 background-color: transparent;
 padding: 25px 0px 25px 0px;
}
.box-header {
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.header-item-logo {
  font-size: 1.7rem;
  font-weight: 600;
  color: red;
}
.header-item-login {
  display: flex;
  align-items: center;
}
.language-select select {
  padding: 10px;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  background-color: transparent;
  border: solid 1px white;
  border-radius: 2px;
}
.language-select option {
  color: black;
}
.header-item-login .enter {
  padding-left: 25px;
}
.enter button {
  background-color: red;
  border: none;
  border-radius: 5px;
  padding: 11px 18px;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}
.enter button:hover {
  background-color: rgb(196, 0, 0);
}

.top-text {
  box-sizing: border-box;
  padding: 160px 20px 160px 20px;
  background-color: transparent;
}
.top-text2 p {
  font-size: 1.3rem;
}
.enter-lg {
  padding-top: 0px;
}
.enter-lg button {
  background-color: red;
  border: none;
  border-radius: 5px;
  padding: 15px 60px;
  color: white;
  font-weight: 600;
  font-size: 1.3rem;
}
.enter-lg button:hover {
  background-color: rgb(196, 0, 0);
}

.body-content-box {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 100px 0px 120px 0px;
  background-color: lightsalmon;
  border-bottom: solid 8px rgb(56, 56, 56);
}
.content-text {
  box-sizing: border-box;
  text-align: left;
  background-color: lightpink;
  width: 33%;
  padding: 0px 0px 0px 50px;
}
.content-image {
  box-sizing: border-box;
  background-color: lightseagreen;
  width: 33%;
  padding: 0px 0px 0px 20px;
}

.questions {
  padding: 50px 460px 80px 470px;
  box-sizing: border-box;
  border-bottom: solid 8px rgb(56, 56, 56);
}

.question {
  background-color: rgb(49, 49, 49);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0px 20px 0px 20px;
  box-sizing: border-box;
}

.question-text2 {
  padding: 20px 0px 0px 0px;
  box-sizing: border-box;
}

.question-text2 p {
  font-size: 1.3rem;
}

</style>
