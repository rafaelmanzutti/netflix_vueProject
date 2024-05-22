<template>
  <div class="">

    <div class="top-page">
      <header>
        <div class="container-wrap">
          <div class="container-header">
            <div class="container-item-logo">
              <span><img src="../../public/netflix_official_logo_icon_168085.png" alt="logo-netflix"></span>
            </div>
            <div class="container-item-login">
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
    
    <div class="body-content-box">
      <div class="body-content">
        <div class="content1">
          <h1>Aproveite na TV</h1>
          <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Bluray e outros dispositivos.</p>
        </div>
        <div class="content2">
          imagem
        </div>
      </div>
      <div class="body-content">
        <div class="content1">
          <h1>Assista onde quiser</h1>
          <p>Assista a quantos filmes e séries que quiser no celular, tablet, laptop e TV.</p>
        </div>
        <div class="content2">
          imagem
        </div>
      </div>
      <div class="body-content">
        <div class="content1">
          <h1>Crie perfis para crianças</h1>
          <p>Deixe as criaças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar nada a mais por isso.</p>
        </div>
        <div class="content2">
          imagem
        </div>
      </div>
      <div class="body-content">
        <div class="content1">
          <h1>Baixe séries para assistir offline</h1>
          <p>Assista em um avião, trem ou submarino...</p>
        </div>
        <div class="content2">
          imagem
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
}

body {
  margin: 0;
}

header {
 width: 100%;
 background-color: transparent;
 padding: 25px 0px;
}

.top-page {
  background-color: transparent;
}

.container-wrap {
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
}

.container-header {
  width: 95%;
  background-color:transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container-item-logo {
  font-size: 1.7rem;
  font-weight: 600;
  color: red;
  padding-left: 5px;
}

.container-item-login {
  display: flex;
  align-items: center;
}

.language-select {
  padding-left: 5px;
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

.container-item-login .enter {
  padding-left: 25px;
  padding-right: 5px;
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
  color: white;
  font-size: 1.1rem;
}

.top-text1 {
  padding: 70px 20px 1px 20px;
}

.enter-lg {
  padding-top: 10px;
  padding-bottom: 100px;
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
  color: white;
}

.body-content {
  display: flex;
  align-items: center;
  padding: 100px 20px 150px 20px;
  border-bottom: solid 8px rgb(56, 56, 56);
}

.content1 {
  width: 50%;
}
.content2 {
  width: 50%;
}

</style>
