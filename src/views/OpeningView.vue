<template>
  <div class="opening-view">

    <div class="top-page">
      <div class="shadow">
        <header>
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

    <footer>
      <div class="contact">
        <p>Dúvidas? https://github.com/rafaelmanzutti/</p>
      </div>
      <div class="links-container-ship">
        <div class="links-container">
          <div class="links-box">
            <p>Perguntas frequentes</p>
            <p>Formas de assistir</p>
            <p>Informações corporativas</p>
            <p>Só na Netflix</p>
          </div>
          <div class="links-box">
            <p>Central de Ajuda</p>
            <p>Carreiras</p>
            <p>Termos de uso</p>
            <p>Entre em contato</p>
          </div>
        </div>
        <div class="links-container">
          <div class="links-box">
            <p>Conta</p>
            <p>Resgatar cartão pré-pago</p>
            <p>Privacidade</p>
            <p>Teste de velocidade</p>
          </div>
          <div class="links-box">
            <p>Media Center</p>
            <p>Comprar cartão pré-pago</p>
            <p>Preferências de cookies</p>
            <p>Avisos legais</p>
          </div>
        </div>
      </div>
      <div class="network">
        <div class="social-media">
          <div class="github"><img src="" alt="github"></div>
          <div class="github-io"><img src="" alt="protifólio online"></div>
          <div class="linkedin"><img src="" alt="linkedin"></div>
          <div class="email"><img src="" alt="email"></div>
        </div>
        <div class="signature">
          <p>Clone Netflix - Rafael Manzutti</p>
        </div>
      </div>
    </footer>


  </div>
</template>

<script>

export default {
  name: 'OpeningView',
  
}
</script>

<style scoped>
.opening-view {
  background: #000;
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
  box-sizing: border-box;
  padding: 0px 460px 100px 460px;
}

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 25px 0px 25px 0px;
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
  box-sizing: border-box;
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
  box-sizing: border-box;
  padding-left: 25px;
}
.enter button {
  background-color: red;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
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
  padding: 160px 0px 100px 0px;
}
.top-text2 p {
  font-size: 1.3rem;
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 120px 450px 120px 460px;
  border-bottom: solid 8px rgb(56, 56, 56);
}
.content-text {
  text-align: left;
  width: 50%;
}
.content-image {
  box-sizing: border-box;
  width: 50%;
  padding: 0px 0px 0px 20px;
}

.questions {
  box-sizing: border-box;
  padding: 50px 460px 80px 470px;
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

footer {
  box-sizing: border-box;
  padding: 60px 460px 80px 460px;
}
.contact p {
  box-sizing: border-box;
  padding: 10px 0px 20px 0px;
  margin: 0px;
  font-size: 1.1rem;
  text-align: left;
}
.links-container-ship {
  display: flex;
}
.links-container {
  width: 100%;
  display: flex;
}
.links-box {
  width: 100%;
}
.links-box p {
  font-size: 0.9rem;
  text-align: left;
  margin: 5px 5px 20px 0px;
}
.network {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 0px 20px 0px;
}
.social-media {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 10px 0px 20px 0px;
}
.signature p {
text-align: left;
font-size: 0.9rem;
}

@media (max-width: 1920px){
  .shadow, .body-content-box, .questions, footer {
    padding-left: 200px;
    padding-right: 200px;
  }
}
@media (max-width: 1280px){
  .shadow, .body-content-box, .questions, footer {
    padding-left: 35px;
    padding-right: 35px;
  }
}
@media (max-width: 960px){
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.1rem;
  }
  .top-text {
    padding: 100px 0px 0px 0px;
  }
  .top-text2 p {
    font-size: 1.1rem;
  }
  .body-content-box {
    display: block;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .content-text {
    width: 100%;
    text-align: center;
  }
  .content-image {
    width: 100%;
  }
  .question-text2 p {
    font-size: 1.2rem;
  }
  footer {
    padding-top: 20px;
    padding-bottom: 10px;
  }
  .contact p {
    font-size: 1rem;
  }
  .links-container {
    display: block;
  }
  .links-box p, .signature p {
    font-size: 0.8rem;
  }

  @media (max-width: 600px) {
    .top-text {
      padding: 20px 0px 10px 0px;
    }
    .header-item-login .enter {
      padding-left: 7px;
    }
    .contact p {
      font-size: 0.8rem;
    }
    .social-media {
      display: block;
    }
    .github, .github-io, .linkedin, .email {
     padding: 10px;
    }
  }

  @media (max-width: 480px) {
    header {
      display: block;
      padding: 20px 0px 5px 0px;
    }
    .header-item-logo {
      text-align: left;
    }
    .language-select select {
      padding: 5px;
      font-size: 0.9rem;
    }
    .enter button {
      padding: 8px 15px;
      font-size: 0.9rem;
    }
    .enter-lg button {
      padding: 15px 30px;
      font-size: 1.1rem;
    }

  }
  
}

</style>
