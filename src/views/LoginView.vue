<template>
  <div class="login-view">

    <div class="top-page">
      <div class="shadow">

        <header>
          <div class="header-item-logo">
              <span><img src="../../public/netflix_official_logo_icon_168085.png" alt="logo-netflix"></span>
          </div>
        </header>
        <div class="centralizer-top-text">
          <div class="shadow2">
            <div class="top-text">
              <div class="login-title">
                <h1>Entrar</h1>
              </div>
              <div class="login-email">
                <input type="email" id="email" v-model="email" placeholder="e-mail">
              </div>
              <div class="login-senha">
                <input type="password" id="senha" v-model="senha" placeholder="senha">
              </div>
              <div class="enter-lg">
                <button  @click="entrarBrowse">Entrar</button>
              </div>
              <div>
                <p>Novo por aqui? <a href="/register"><strong>Assine Agora.</strong></a></p>
              </div>
              <div class="small-text">
                <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. Saiba mais.</p>
              </div>
            </div>
          </div>
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
          <div class="github"><a href="https://github.com/rafaelmanzutti/" target="_blank"><img src="../../public/github-invert.png" alt="github"/></a></div>
          <div class="github-io"><a href="https://rafaelmanzutti.github.io/" target="_blank"><img src="../../public/portfolio2.png" alt="protifólio online"></a></div>
          <div class="linkedin"><a href="//www.linkedin.com/in/rafaelmanzutti" target="_blank"><img src="../../public/LI-Logo.png" alt="linkedin"></a></div>
          <div class="email"><img src="../../public/Gmail.png" alt="email">manzutti@gmail.com</div>
        </div>
        <div class="signature">
          <p>Clone Netflix - Rafael Manzutti</p>
          <p>"This product uses the TMDB API but is not endorsed or certified by TMDB."</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>

export default {
  name: 'LoginView',
  data() {
    return {
      senha: '',
      email: '',
      users: {},
    }
  },
  
  methods: {

    entrarBrowse() {
      if (this.email === "netflixclone@gmail.com" && this.senha === "123456") {
        this.email= ''
        this.senha= ''
        this.$router.push('browse')
        localStorage.setItem('logLocal', "true")
      } else {
        this.email= ''
        this.senha= ''
        alert("email e senha não conferem");
      }
    }

  },
 
}
</script>

<style scoped>

.login-view {
  background-color: rgb(22, 22, 22);
  color:White;
}
input {
  color: white;
}
h1 {
  font-size: 2rem;
}
p {
  font-size: 1rem;
}
.top-page {
  background: url('../../public/netflixOpening.jpg');
  background-size: 100%;
}

.shadow {
  background-color: rgba(22, 22, 22, 0.6);
  box-sizing: border-box;
  padding: 0px 460px 100px 460px;
}
header {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 25px 0px 25px 0px;
}
.centralizer-top-text {
  width: 100%;
  display: flex;
  justify-content: center;
 
}
.shadow2 {
  background-color: rgba(22, 22, 22, 0.6);
  display: flex;
  box-sizing: border-box;
  max-width: 450px;
  padding: 40px 60px 140px 60px;
}
.top-text {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.login-title h1 {
  text-align: left;
}
.top-text p {
  text-align: left;
}
.top-text a {
  text-decoration: none;
  color: white;
}
.login-email {
  padding: 10px 0px;
  border: solid 1px white;
  border-radius: 5px;
  margin: 25px 0px 10px 0px;
}
.login-senha {
  padding: 10px 0px;
  border: solid 1px white;
  border-radius: 5px;
  margin-bottom: 10px;
}
.enter-lg button {
  width: 100%;
  background-color: red;
  border: none;
  border-radius: 5px;
  padding: 10px 0px;
  margin-bottom: 20px;
  color: white;
  font-weight: 600;
  font-size: 1rem;

}
.enter-lg button:hover {
  background-color: rgb(196, 0, 0);
  cursor: pointer;
}

.small-text p {
  font-size: 0.8rem;
  text-align: left;
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
  height: 100px;
  margin-bottom: 20px;
}

.github {
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.github img {
  width: auto;
  height: 120%;
}
.github-io {
  width: 200px;
  display: flex;
  justify-content: center;
}
.github-io img {
  width: auto;
  height: 100%;
}
.linkedin {
  width: 200px;
  display: flex;
  align-items: center;
}
.linkedin img {
  width: 100%;
  height: auto;
}
.email {
  width: 200px;
}
.email img {
  width: auto;
  height: 100%;
}

.signature p {
text-align: left;
font-size: 0.9rem;
margin: 0;
}

@media (max-width: 1920px){
  .shadow, footer {
    padding-left: 200px;
    padding-right: 200px;
  }
}
@media (max-width: 1280px){
  .shadow, footer {
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
  
}

@media (max-width: 600px) {
  .top-page {
    background: rgb(22, 22, 22);
  }
  h1 {
    margin: 0px;
  }
  .shadow2 {
    padding: 0px;
    max-width: 100%;
  }
  footer {
    border-top: solid 1px white;
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

</style>